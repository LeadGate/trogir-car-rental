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
  const title = (cfg && cfg.article && cfg.article.headline) || `${slugToTitle(slug)} | ${brand}`;
  // Description: only patch if cfg.article.description provided (else preserve existing static/homepage value)
  const description = cfg && cfg.article && cfg.article.description ? cfg.article.description : null;
  const patched = patchHead(indexHtml, { slug, canonical: loc, title, description, cfg });
  fs.writeFileSync(path.join(outDir, 'index.html'), patched);
  count += 1;
}

console.log(`[prerender] generated ${count} per-route index.html files`);
