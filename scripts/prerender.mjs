// @ts-nocheck
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const indexHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
const sitemapPath = path.join(DIST, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.log('[prerender] no sitemap.xml, skipping');
  process.exit(0);
}
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Optional per-route JSON-LD config (Article + FAQPage). Absent file = legacy head-patch only.
const ROUTES_CFG_PATH = path.join('scripts', 'prerender.routes.json');
let routesCfg = {};
let routesDefaults = {};
if (fs.existsSync(ROUTES_CFG_PATH)) {
  try {
    const raw = JSON.parse(fs.readFileSync(ROUTES_CFG_PATH, 'utf-8'));
    routesDefaults = raw._defaults || {};
    for (const k of Object.keys(raw)) {
      if (!k.startsWith('_')) routesCfg[k] = raw[k];
    }
  } catch (e) {
    console.warn('[prerender] routes config malformed, skipping JSON-LD enrichment:', e.message);
  }
}

const firstLoc = (sitemap.match(/<loc>(https?:\/\/[^/<"]+)/) || [])[1] || '';
const canonicalOrigin = (indexHtml.match(/<link rel="canonical" href="(https?:\/\/[^/"]+)/) || [])[1] || '';
const origin = firstLoc || canonicalOrigin;
if (!origin) {
  console.error('[prerender] FATAL: cannot determine origin (no sitemap <loc> and no canonical)');
  process.exit(1);
}
const fullTitle = (indexHtml.match(/<title>([^<]+)<\/title>/) || [])[1] || '';
// Brand = part before first em-dash / en-dash / pipe / hyphen separator
const brand = fullTitle.split(/\s+[—–|-]\s+/)[0].trim() || fullTitle;

// Extract <loc> URLs from sitemap
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const ACRONYMS = new Set(['faq', 'seo', 'geo', 'api', 'gps', 'atv', 'suv', 'id', 'ev']);

function slugToTitle(slug) {
  // '/taormina-airport-car-rental' -> 'Taormina Airport Car Rental'
  const clean = slug.replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return 'Home';
  return clean
    .split('/')
    .pop()
    .split('-')
    .map((w) => {
      if (ACRONYMS.has(w.toLowerCase())) return w.toUpperCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');
}

function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function replaceOrInsert(html, regex, insertValue, headInsert) {
  if (regex.test(html)) {
    return html.replace(regex, insertValue);
  }
  // Not found → insert just before </head>
  return html.replace(/<\/head>/, `${headInsert}\n  </head>`);
}

function lookupCfg(slug) {
  const cfgKey = slug.endsWith('/') ? slug : `${slug}/`;
  return routesCfg[cfgKey] || routesCfg[slug] || null;
}

function patchHead(html, { slug, canonical, title, description, cfg }) {
  const isHomeRoute = slug === '/' || slug === '';
  // The template index.html carries the HOMEPAGE FAQPage, and this function
  // copies that template into every route — so every route shipped an inherited
  // homepage FAQPage describing questions it does not have. Where the route also
  // had its own schema, the page ended up with two FAQPage blocks, one of them
  // false. Strip the inherited homepage FAQPage on non-home routes.
  if (!isHomeRoute) {
    html = html.replace(
      /\s*<script type="application\/ld\+json">\s*\{[^<]*?"@type":\s*"FAQPage"[\s\S]*?<\/script>/g,
      '');
  }
  // Canonical — replace or insert
  html = replaceOrInsert(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`,
    `    <link rel="canonical" href="${canonical}" />`,
  );
  // Title — replace or insert
  html = replaceOrInsert(
    html,
    /<title>[^<]*<\/title>/,
    `<title>${title}</title>`,
    `    <title>${title}</title>`,
  );
  // meta description — replace or insert (only if cfg supplies one; else legacy/static homepage value remains)
  if (description) {
    const descAttr = escAttr(description);
    html = replaceOrInsert(
      html,
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${descAttr}" />`,
      `    <meta name="description" content="${descAttr}" />`,
    );
    html = replaceOrInsert(
      html,
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${descAttr}" />`,
      `    <meta property="og:description" content="${descAttr}" />`,
    );
    // twitter:description — keep in sync with page description (avoid stale site-default)
    html = replaceOrInsert(
      html,
      /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${descAttr}" />`,
      `    <meta name="twitter:description" content="${descAttr}" />`,
    );
  }
  // og:url — replace or insert
  html = replaceOrInsert(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`,
    `    <meta property="og:url" content="${canonical}" />`,
  );
  // og:title — replace or insert
  html = replaceOrInsert(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${title}" />`,
    `    <meta property="og:title" content="${title}" />`,
  );
  // twitter:title — sync to page title unconditionally (not only when og:image present)
  html = replaceOrInsert(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escAttr(title)}" />`,
    `    <meta name="twitter:title" content="${escAttr(title)}" />`,
  );
  // og:type = article for content pages (single-source; per-route)
  if (cfg && cfg.article) {
    html = replaceOrInsert(html, /<meta property="og:type" content="[^"]*"\s*\/?>/,
      `<meta property="og:type" content="article" />`, `    <meta property="og:type" content="article" />`);
  }
  // og:image + Twitter Card — from per-route article image (GEO/social preview)
  if (cfg && cfg.article && cfg.article.image && !/\/og-image\.(png|jpe?g)$/i.test(cfg.article.image)) {
    const img = escAttr(cfg.article.image);
    const tTitle = escAttr(title);
    html = replaceOrInsert(html, /<meta property="og:image" content="[^"]*"\s*\/?>/,
      `<meta property="og:image" content="${img}" />`, `    <meta property="og:image" content="${img}" />`);
    html = replaceOrInsert(html, /<meta name="twitter:card" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:card" content="summary_large_image" />`, `    <meta name="twitter:card" content="summary_large_image" />`);
    html = replaceOrInsert(html, /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${tTitle}" />`, `    <meta name="twitter:title" content="${tTitle}" />`);
    html = replaceOrInsert(html, /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:image" content="${img}" />`, `    <meta name="twitter:image" content="${img}" />`);
  }
  // LCP hero preload — inject <link rel=preload as=image> for cfg.preloadImage (idempotent)
  if (cfg && cfg.preloadImage && !html.includes(`rel="preload" as="image" href="${cfg.preloadImage}"`)) {
    const preload = `    <link rel="preload" as="image" href="${escAttr(cfg.preloadImage)}" fetchpriority="high" />`;
    html = html.replace(/<\/head>/, `${preload}\n  </head>`);
  }

  // Inject BreadcrumbList JSON-LD before </head>
  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
      { '@type': 'ListItem', position: 2, name: slugToTitle(slug), item: canonical },
    ],
  };
  const crumbBlock = `    <script type="application/ld+json">\n${JSON.stringify(crumbs, null, 2)}\n    </script>\n  </head>`;
  html = html.replace(/<\/head>/, crumbBlock);

  // Optional Article + FAQPage JSON-LD from routes config
  if (cfg) {
    const blocks = [];
    if (cfg.article) {
      const article = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: cfg.article.headline,
        description: cfg.article.description,
        image: cfg.article.image,
        datePublished: cfg.article.datePublished || routesDefaults.datePublished,
        dateModified: cfg.article.dateModified || routesDefaults.dateModified,
        author: cfg.article.author || routesDefaults.author,
        publisher: cfg.article.publisher || routesDefaults.publisher,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      };
      if (cfg.article.wordCount) article.wordCount = cfg.article.wordCount;
      const _ab = cfg.article.articleBody || cfg.article.body;
      if (_ab) article.articleBody = _ab;
      if (cfg.article.speakable) article.speakable = cfg.article.speakable;
      blocks.push(`    <script type="application/ld+json">\n${JSON.stringify(article, null, 2)}\n    </script>`);
    }
    if (Array.isArray(cfg.faqs) && cfg.faqs.length > 0) {
      const faqPage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: cfg.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      };
      blocks.push(`    <script type="application/ld+json">\n${JSON.stringify(faqPage, null, 2)}\n    </script>`);
    }
    // Optional extra schemas (WebApplication / HowTo / ItemList / TouristAttraction …)
    if (Array.isArray(cfg.extraSchemas)) {
      for (const s of cfg.extraSchemas) {
        if (!s || typeof s !== 'object') continue;
        const obj = s['@context'] ? s : { '@context': 'https://schema.org', ...s };
        blocks.push(`    <script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n    </script>`);
      }
    }
    if (blocks.length) {
      html = html.replace(/<\/head>/, `${blocks.join('\n')}\n  </head>`);
    }
  }
  return html;
}

let count = 0;
for (const loc of locs) {
  let url;
  try {
    url = new URL(loc);
  } catch {
    continue;
  }
  const slug = url.pathname;
  if (slug === '/' || slug === '') continue; // Home stays as dist/index.html

  const outDir = path.join(DIST, slug.replace(/^\//, '').replace(/\/$/, ''));
  fs.mkdirSync(outDir, { recursive: true });

  const cfg = lookupCfg(slug);
  // Title: prefer cfg.article.headline if present, else auto-gen
  // Title priority: explicit cfg.title (pages with no Article schema) > cfg.article.headline
  // > auto-gen. Must stay byte-identical to the title the page sets client-side, otherwise
  // hydration flips it and crawler/Google see different strings.
  const title = (cfg && (cfg.title || (cfg.article && cfg.article.headline))) || `${slugToTitle(slug)} | ${brand}`;
  // Description: only patch if cfg.article.description provided (else preserve existing static/homepage value)
  const description = (cfg && (cfg.description || (cfg.article && cfg.article.description))) || null;
  const patched = patchHead(indexHtml, { slug, canonical: loc, title, description, cfg });
  fs.writeFileSync(path.join(outDir, 'index.html'), patched);
  count += 1;
}


// Homepage (dist/index.html) is not regenerated by the route loop above — it
// stays as whatever the source index.html shipped. On sites whose template
// never had a static <link rel="canonical"> baked in, that means the raw HTML
// has no canonical at all (SEOHead only sets it client-side via JS after
// hydration). Patch it in place here, reusing `origin` (already derived from
// the sitemap above) so no domain is hardcoded; read the freshly-written file
// from disk so this composes with any prior homepage-only patch block. No-op
// once a real static canonical is committed to source index.html.
if (!/<link rel="canonical"/.test(indexHtml)) {
  const homeCanonical = `${origin}/`;
  const homePath2 = path.join(DIST, 'index.html');
  const homeHtml2 = fs.readFileSync(homePath2, 'utf-8');
  const homePatched = replaceOrInsert(
    homeHtml2,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${homeCanonical}" />`,
    `    <link rel="canonical" href="${homeCanonical}" />`,
  );
  fs.writeFileSync(homePath2, homePatched);
  console.log(`[prerender] patched home canonical -> ${homeCanonical}`);
}

console.log(`[prerender] generated ${count} per-route index.html files`);
