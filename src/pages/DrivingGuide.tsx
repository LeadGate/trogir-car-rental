import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import { Car, DollarSign, HelpCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const DrivingGuide = () => {
  const breadcrumbSchema =
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://trogir-car-rental.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Driving Tips",
        "item": "https://trogir-car-rental.com/driving-in-trogir"
      }
    ]
  };

  const articleSchema =
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mastering the Roads: Driving and Parking in Trogir",
    "description": "Trogir is a compact UNESCO-listed town on the Dalmatian coast, and the fastest way to explore Central Dalmatia is with a rental car booked through Split",
    "url": "https://trogir-car-rental.com/driving-in-trogir",
    "datePublished": "2026-04-15",
    "dateModified": "2026-04-15",
    "publisher": {
      "@type": "Organization",
      "name": "Trogir Car Rental",
      "url": "https://trogir-car-rental.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trogir-car-rental.com/favicon-512x512.png"
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Trogir Car Rental",
      "url": "https://trogir-car-rental.com"
    },
    "mainEntityOfPage": "https://trogir-car-rental.com/driving-in-trogir",
    "inLanguage": "en"
  };

  return (
    <Layout>
      <SEOHead
        title="Driving and Parking in Trogir | Rules & Prices"
        description="Trogir is a compact UNESCO-listed town on the Dalmatian coast, and the fastest way to explore Central Dalmatia is with a rental car booked through Split"
        canonical="https://trogir-car-rental.com/driving-in-trogir"
        jsonLd={[breadcrumbSchema, articleSchema]}
      />

      <Breadcrumbs items={[{ label: "Driving Tips" }]} />

      <HeroSection
        title="Mastering the Roads: Driving and Parking in Trogir"
        subtitle={<><p>Trogir is a compact UNESCO-listed town on the Dalmatian coast, and the fastest way to explore Central Dalmatia is with a rental car booked through Split Airport (SPU). The historic core of Trogir Old Town is pedestrian-only, while official parking sits on the mainland, Čiovo Island, and the Kaštela Riviera, so planning parking before arrival saves time and fines.</p></>}
        image="/4.webp"
        imageAlt="Car rental in Trogir"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <Section
        icon={<DollarSign className="w-6 h-6" />}
        title="Where to Park in Trogir — 2026 Prices"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The best parking strategy in Trogir is to use one of the marked public lots outside the historic core, because the Old Town streets are too narrow for normal circulation and access is limited by pedestrian controls. According to the Trogir official 2025 parking decision effective from 1 January 2026, the cheapest long-stay option is usually Parking T4 at about €1/hour or €10/day, while closer lots such as Parking Fortin charge about €7–€10/hour depending on the season.</p>
          <DataTable headers={["Parking lot", "Price", "Best use", "Notes"]} rows={[["Parking Fortin", "\u20ac7\u2013\u20ac10/hour", "Short stay, luggage drop-off", "Closest to Trogir Old Town; tight maneuvering and limited free grace time of about 15\u201320 minutes."], ["City Center T1 (Travarica)", "\u20ac3/hour, \u20ac10/day for hotel guests", "Central daytime parking", "Daily rate depends on a pre-arranged magnetic card, so ask the hotel before arrival."], ["Gradski Parking", "\u20ac3/hour", "Budget parking", "Municipal lot near the bus station and a practical option for daytime visits."], ["Parking T4", "\u20ac1/hour, \u20ac10/day", "Full-day parking", "Best value for visitors walking to the center, the Riva, or [\u010ciovo Island beaches](/ciovo-island-beaches)."], ["Marina ACI", "about \u20ac11/day", "Marina guests", "Good backup when city lots are full, but usually oriented to nautical visitors."]]} />
          <WarningBox><p>The official rates were published in the Trogir Službeni glasnik in December 2025, and they apply from 1 January 2026. Payment is usually possible by Euro coins, card terminals, or Croatian parking apps such as PayDo and Bmove, and penalties for illegal parking typically range from €20 to €80. If you are heading to the coast, our <Link to="/trogir-beaches-by-car" className="text-primary underline hover:text-accent">Ciovo Island and beach parking guide</Link> lists free and paid lots near the sand. If a vehicle blocks traffic, the pauk tow truck can add about €150–€200 in recovery costs.</p></WarningBox>
          <InfoBox><p>💡 <strong>Tip:</strong> Arrive before 10:00 in July and August if you want the lowest-stress choice of spaces, because occupancy rises quickly from mid-morning near the Riva and the market.</p></InfoBox>
          <WarningBox><p>⚠️ <strong>Warning:</strong> If you leave luggage in the car, use a legal lot and avoid blocking access roads, because towing and fines can easily cost more than a full day of parking.</p></WarningBox>
      </Section>

      <div className="flex justify-center py-6">
        <a href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-md hover:opacity-90 transition">
          Compare Car Rental Deals
        </a>
      </div>

      <Section
        icon={<Shield className="w-6 h-6" />}
        title="Croatian Driving Rules for Tourists"
        alt
      >
          <InfoBox><p>Croatia’s road network is modern on the A1 motorway and generally safe on the Adriatic corridor, but rental drivers must still carry the required documents and equipment. Under the Croatian Road Traffic Safety Act, the standard limits are 50 km/h in towns, 90 km/h on open roads, 110 km/h on expressways, and 130 km/h on motorways, with drivers under 25 required to drive 10 km/h below posted limits outside built-up areas.</p></InfoBox>
          <p className="text-gray-700 italic mt-3 leading-relaxed">Alcohol rules are strict: the BAC limit is 0.05% for drivers aged 25 and over, while drivers under 24 and professional drivers are subject to 0.00%. Every rental car should contain a reflective vest, warning triangle, first aid kit, and spare bulbs, and dipped headlights are mandatory 24/7 from the last Sunday in October to the last Sunday in March. Winter tires are required on major inland routes from October to March.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Ask the rental desk to confirm the insurance package on pickup: standard cover usually includes CDW with an excess or deductible, while SCDW or full coverage can reduce the franchise to zero excess for a higher daily rate.</p></InfoBox>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Many rental companies place a preauthorisation hold on your credit card at pickup, so check the amount before signing and confirm whether windscreen, tires, undercarriage, and key loss are excluded from CDW.</p></WarningBox>
          <p className="text-gray-700 mb-4 leading-relaxed">A practical route for day trips from Trogir is to follow Klis Fortress and Sinj excursions inland or continue north toward Primosten and Sibenik on the coastal road. The advice above is based on the Croatian Road Traffic Safety Act and the official EU Your Europe guidance, both of which remain the main reference points for foreign drivers in 2026.</p>
      </Section>

      <ImageDivider image="/2.webp" alt="Trogir car rental" />

      <Section
        icon={<DollarSign className="w-6 h-6" />}
        title="Fuel Prices, Tolls, and Regional Road Planning"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The quickest long-distance route from Trogir is the A1 motorway, which connects Split with Zagreb and supports trips to Šibenik, Krka National Park, and the Pelješac Bridge corridor toward southern Dalmatia. The Croatian government has used a bi-weekly fuel-price cap at standard stations, and in April 2026 the indicative prices were about €1.68/litre for Eurosuper 95 and €1.88/litre for diesel.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Fuel is usually cheaper in Trogir’s Plano area than at motorway service stations, so many drivers fill up before entering the A1. If you are collecting a car at SPU, read our <Link to="/trogir-airport-car-rental" className="text-primary underline hover:text-accent">step-by-step Split Airport pickup guide</Link> first. Tolls are paid when you exit the motorway, with ticket-based billing at the booth and cash or major cards accepted.</p>
          <DataTable headers={["Route", "Distance", "Category I toll"]} rows={[["Split \u2192 Zagreb", "about 410 km", "\u20ac26.40"], ["Split \u2192 \u0160ibenik", "about 55 km", "\u20ac4.20"], ["Split \u2192 Plo\u010de", "about 100 km", "\u20ac6.60"]]} />
          <p className="text-gray-700 mb-4 leading-relaxed">Hrvatske autoceste (HAC) publishes the motorway tariff table, and HAK provides route and traffic updates for the Adriatic coast. If you are planning island connections, Jadrolinija operates ferries for Brac, Hvar, Solta, Drvenik Veli, Drvenik Mali, and other routes from the Split area, so check sailing times before leaving Trogir.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> A <strong>Nissan Qashqai</strong> or <strong>Opel Grandland</strong> gives more comfort on mixed motorway-and-coastal itineraries, while a compact model such as a <strong>VW Up</strong> is cheaper to park in Trogir’s narrow streets.</p></InfoBox>
      </Section>

      <div className="flex justify-center py-6">
        <a href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-md hover:opacity-90 transition">
          Compare Car Rental Deals
        </a>
      </div>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Emergency Numbers, Roadside Help, and Rental Disputes"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">For roadside help in Croatia, the Croatian Auto Club (HAK) can be reached at 1987 from a Croatian phone or +385 1 1987 from abroad, and the HAK app offers live traffic, cameras, and toll tools. Standard emergency numbers are 192 for police and 112 for general emergencies, and those numbers are valid nationwide in 2026.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">If a rental issue arises, submit a written complaint to the agency first and keep copies of the contract, photos, and fuel receipts, because the agency has 15 days to respond under Croatian consumer procedures. If the issue remains unresolved, you can escalate to the State Inspectorate (DIRH) or the European Consumer Centre Croatia for further review.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Keep the rental agreement, damage report, and fuel policy on hand at return, because disputes over scratches, late returns, or refuelling often turn on written evidence rather than verbal promises.</p></WarningBox>
          <p className="text-gray-700 mb-4 leading-relaxed">For related planning, see our <Link to="/day-trips-from-trogir" className="text-primary underline hover:text-accent">Krka, Sibenik, and Klis day-trip itineraries</Link> and our <Link to="/trogir-car-rental-faq" className="text-primary underline hover:text-accent">FAQ on insurance and border-crossing rules</Link>. Rental providers commonly used in Split and Trogir include Nova Rent a Car, Avax Rent a Car, Lutar Rent a Car, Zelrent, Luna Rent a Car, Sixt, Green Motion, Carwiz, and Maggiore, and each company can apply different rules for CDW, SCDW, FDW, excess, or zero excess cover.</p>
      </Section>

      <ImageDivider image="/3.webp" alt="Trogir car rental" />

      <Section
        icon={<HelpCircle className="w-6 h-6" />}
        title="FAQ"
      >
          <h3 className="text-xl font-bold mt-6 mb-3">Where can I park in Trogir Old Town?</h3>
          <InfoBox><p>You cannot park inside Trogir Old Town, and the practical answer is to use a public lot outside the pedestrian zone. Parking T4 is often the best value at about €1/hour or €10/day, while Parking Fortin is closest at about €7–€10/hour and is better for short stays. During July and August, the nearest spaces can fill quickly, so arriving before 10:00 is the safest exception to keep in mind.</p></InfoBox>
          <h3 className="text-xl font-bold mt-6 mb-3">What insurance should I choose for a rental car in Split Airport?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">CDW is the standard baseline, while SCDW or full coverage can reduce the excess or deductible to zero. At Split Airport, many agencies place a preauthorisation on the card, and the final price can rise if you add glass, tire, or underbody protection. The exception is that some premium cards already include collision cover, so you should verify the exact rental terms before paying.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Is it worth renting a small car for Trogir and the Dalmatian coast?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">A small car is usually the best fit because it is easier to park in Trogir, Okrug Gornji, Kastel Stafilic, and Kastel Luksic, and models like the Opel Corsa or VW Up can save money on daily rental and fuel. Larger vehicles such as the Mercedes E-Class, Mercedes C220d, Opel Zafira, or Piaggio Medley 125 are better only if you need extra luggage space or a premium transfer experience. The exception is that if your itinerary includes family travel to Brac, Hvar, or Krka National Park, a larger class can be more comfortable despite the higher cost.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Can I drive from Trogir to nearby beaches and islands?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Yes, Trogir is a good base for driving to Pantan Beach, Medena Beach, Uvala Duga, Okrug Gornji, and Ciovo Island, while ferries from Split connect to Brac, Hvar, Solta, Drvenik Veli, and Drvenik Mali. The drive to the Split Airport area and nearby Plano is short, usually under 15 minutes in normal traffic, and HAC maintains the main motorway links inland. The exception is that island day trips depend on Jadrolinija schedules, so you should check sailing times before committing to a late return.</p>
      </Section>

      <div className="flex justify-center pb-12">
        <a href="/#compare" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default DrivingGuide;
