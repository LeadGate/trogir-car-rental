import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import { Plane, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const AirportPage = () => {
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
        "name": "Airport",
        "item": "https://trogir-car-rental.com/trogir-airport-car-rental"
      }
    ]
  };

  const articleSchema =
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Navigating Split Airport Car Rental: The Insider's Guide for Trogir Visitors",
    "description": "Split Airport car rental is the fastest way to reach Trogir Old Town, and the airport-to-town drive is usually 5.2 to 6.0 km in 10 to 15 minutes in",
    "url": "https://trogir-car-rental.com/trogir-airport-car-rental",
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
    "mainEntityOfPage": "https://trogir-car-rental.com/trogir-airport-car-rental",
    "inLanguage": "en"
  };

  return (
    <Layout>
      <SEOHead
        title="Navigating Split Airport Car Rental: The Insider's Guide for Trogir Visitors | Trogir Car Rental"
        description="Split Airport car rental is the fastest way to reach Trogir Old Town, and the airport-to-town drive is usually 5.2 to 6.0 km in 10 to 15 minutes in normal"
        canonical="https://trogir-car-rental.com/trogir-airport-car-rental"
        jsonLd={[breadcrumbSchema, articleSchema]}
      />

      <Breadcrumbs items={[{ label: "Airport" }]} />

      <HeroSection
        title="Navigating Split Airport Car Rental: The Insider's Guide for Trogir Visitors"
        subtitle={<><p>Split Airport car rental is the fastest way to reach Trogir Old Town, and the airport-to-town drive is usually <strong>5.2 to 6.0 km in 10 to 15 minutes</strong> in normal traffic. In July and August, that same route can take <strong>30 minutes or more</strong> because SPU handled about <strong>3.8 million passengers in 2025</strong>, and the D8 coastal road carries more than <strong>54,000 vehicles per day</strong> in the Kastela corridor.</p></>}
        image="/3.webp"
        imageAlt="Car rental in Trogir"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="How Far Is Split Airport from Trogir?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Split Airport (SPU) to Trogir Old Town is <strong>5.2 to 6.0 km by road</strong>, while the driving time is usually <strong>10 to 15 minutes</strong> outside rush hour. The route uses the D8 through the Bay of Kastela and the Kastela Riviera, and Croatian road data has shown more than <strong>54,000 vehicles per day</strong> on this corridor. For visitors heading to Ciovo Island, Okrug Gornji, or Pantan Beach, the same airport road is the normal first leg. Our <Link to="/driving-in-trogir" className="text-primary underline hover:text-accent">Trogir driving and parking guide</Link> covers speed limits, tolls, and where to leave the car.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> If your hotel is near Medena Beach, Uvala Duga, Kastel Stafilic, or Kastel Luksic, confirm whether the rental desk offers a terminal handover or an off-site shuttle from the arrivals hall.</p></InfoBox>
          <WarningBox><p>⚠️ <strong>Warning:</strong> July and August traffic can push the Split Airport to Trogir drive to <strong>30 minutes or longer</strong>, especially when arrivals cluster around peak charter waves.</p></WarningBox>
      </Section>

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="Step-by-Step Airport Pickup Process"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The Split Airport car rental desks are in the terminal, and most agencies route customers from the baggage claim area to the rental counter signposted “Rent-a-Car.” After passport control and luggage collection, the usual process is identity check, contract signing, preauthorisation, key handover, and vehicle inspection in the parking area. For an SPU pickup, a valid passport or ID, a driving licence, and a credit card in the main driver’s name are the standard documents.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Photograph the car before you leave the parking bay, because timestamped photos help with disputes over scratches, scuffs, and wheel damage at return.</p></InfoBox>
      </Section>

      <ImageDivider image="/2.webp" alt="Trogir car rental" />

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="Which Rental Companies Operate at Split Airport?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Split Airport has a mix of local and international operators, and the most visible names include Nova Rent a Car, Avax Rent a Car, Lutar Rent a Car, Zelrent, Luna Rent a Car, Sixt, Green Motion, Carwiz, and Maggiore. Company choice matters because the daily rate, deposit, and insurance structure can differ by more than <strong>€20/day</strong> for the same compact car class.</p>
          <DataTable headers={["Company", "Starting Price per Day", "Typical Car Example", "Insurance / Deposit Note", "Review Signal"]} rows={[["Avax Rent a Car", "From **\u20ac19/day**", "Opel Corsa or VW Up", "Meet and greet; debit cards accepted on some bookings.", "**4.7/5** on Trustpilot"], ["Lutar Rent a Car", "From **\u20ac27.60/day**", "VW Up", "Local fleet focus and clear counter process.", "**4.9/5** on Google"], ["Nova Rent a Car", "From **\u20ac24/day**", "Skoda Octavia", "Multiple SPU pickup points and broader fleet choice.", "**4.5/5** on Google"], ["Sixt", "From **\u20ac42/day**", "Mercedes C220d or Mercedes E-Class", "Border crossing fees may apply, often around **\u20ac11.20/day**.", "**4.1/5** on Google"], ["Green Motion", "From **\u20ac23/day**", "Opel Astra", "Check the excess/deductible carefully before preauthorisation.", "Mixed traveler reports"], ["Carwiz", "From **\u20ac21/day**", "Nissan Qashqai", "SCDW or zero excess may be priced separately.", "Mixed traveler reports"]]} />
      </Section>

      <div className="flex justify-center py-6">
        <a href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-md hover:opacity-90 transition">
          Compare Car Rental Deals
        </a>
      </div>

      <Section
        icon={<Shield className="w-6 h-6" />}
        title="Insurance, Deposits, and Cross-Border Rules"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Split Airport insurance choices usually start with CDW, then move up to SCDW, FDW, or a full coverage package that reduces the excess/deductible to zero. A standard CDW policy often leaves a franchise on the card, while zero excess and full coverage usually cost more per day but reduce surprise charges after return. Travelers who plan to drive beyond Croatia should ask for a Green Card, because that document can be required for cross-border insurance proof in some countries.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> A cheaper daily rate can still cost more overall if the rental desk adds SCDW, young driver fees, one-way fees, or a border crossing supplement at handover.</p></WarningBox>
      </Section>

      <ImageDivider image="/3.webp" alt="Trogir car rental" />

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="Airport Transit Alternatives to Driving Straight Away"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Bus Line 37 is the main public transport link between Split Airport, Trogir, and Split, and it stops near the airport terminal road rather than inside the terminal itself. For travelers staying in Trogir Old Town, Plano, or Kastel Stafilic, this can be cheaper than collecting the car immediately and paying airport parking for the first night. If you are heading to the old center with luggage, taxi or transfer services may be easier than driving through narrow lanes on arrival day.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> If your first night is in Okrug Gornji, ask the hotel whether parking is included before you decide to delay car pickup until the next morning.</p></InfoBox>
      </Section>

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="The Kastela Corridor and Best Day Trips from Split Airport"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The airport road from Split Airport to Trogir follows the Kastela Corridor through the Bay of Kastela and the Kastela Riviera, with the Adriatic on one side and the Dinaric Alps visible inland on clearer days. The main D8 route connects easily to Central Dalmatia day trips, including Sibenik, Krka National Park, Klis Fortress, Sinj, Primosten, and the ferry ports for Brac and Hvar. In good traffic, the same car can also reach <Link to="/trogir-beaches-by-car" className="text-primary underline hover:text-accent">Ciovo Island beaches and Medena Beach</Link>, Uvala Duga, and the wider Dalmatian coast without long motorway detours.</p>
      </Section>

      <ImageDivider image="/4.webp" alt="Trogir car rental" />

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="Vehicle Choices for Split Airport Renters"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Small models such as the VW Up, Opel Corsa, and VW Golf are common for short city stays, while the Opel Astra and Skoda Octavia suit mixed coast-and-highway driving to Sibenik or Krka National Park. Families often book the Nissan Qashqai or Opel Grandland for more luggage space, and larger groups may prefer the Opel Zafira. Premium business travelers frequently choose the Mercedes E-Class or Mercedes C220d, especially when the trip includes multiple transfers or client meetings. See our <Link to="/trogir-car-rental-faq" className="text-primary underline hover:text-accent">Trogir car rental FAQ</Link> for insurance, deposit, and cross-border answers.</p>
          <DataTable headers={["Vehicle Model", "Typical Use Case", "Capacity / Fit", "Local Price Signal"]} rows={[["VW Up", "Airport-to-Trogir city run", "4 passengers, light luggage", "Economy-focused rate"], ["Opel Corsa", "Short coastal stays", "4 passengers, 1\u20132 bags", "Budget-friendly class"], ["VW Golf", "Mixed city and highway use", "5 passengers, 2 bags", "Mid-range compact"], ["Opel Astra", "Trogir to Sibenik routes", "5 passengers, 2\u20133 bags", "Popular compact hatch"], ["Skoda Octavia", "Family touring", "5 passengers, larger trunk", "Often priced above economy"], ["Nissan Qashqai", "Rural and island access", "5 passengers, higher seating", "SUV comfort tier"], ["Opel Grandland", "Longer Dalmatian coast trips", "5 passengers, extra luggage", "Larger SUV class"], ["Opel Zafira", "Group transfer option", "7 passengers, family luggage", "Minivan category"], ["Mercedes E-Class", "Business travel", "5 passengers, premium comfort", "Premium sedan rate"], ["Mercedes C220d", "Executive airport transfer", "5 passengers, diesel economy", "Higher-end premium"]]} />
      </Section>

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="FAQ: Split Airport Car Rental for Trogir Visitors"
        alt
      >
          <h3 className="text-xl font-bold mt-6 mb-3">How far is Split Airport from Trogir Old Town?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Split Airport is <strong>5.2 to 6.0 km</strong> from Trogir Old Town, and the drive usually takes <strong>10 to 15 minutes</strong>. Croatian traffic data shows the route can stretch to <strong>30 minutes or more</strong> in July and August because the airport road is heavily used. If you arrive on a late charter wave, allow extra time for baggage claim and the terminal exit.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Do Split Airport rental companies require a credit card?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Most Split Airport rental companies require a credit card in the main driver’s name, and many also place a preauthorisation for the excess/deductible. The usual hold is <strong>€300 to €800</strong>, depending on the car class and insurance package. If you only have a debit card, confirm acceptance in writing before booking because policies vary by company.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Is full coverage worth it at Split Airport?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Full coverage can be worth it if you want zero excess and lower dispute risk, and it often replaces a higher franchise with a smaller or no card hold. The extra cost is usually added per day, and the best value depends on the car category and the length of your rental. If you are staying in town for one day only, compare the added insurance cost against the potential deposit hold before deciding.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Can I drive a rental car from Split Airport to the islands?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Yes, you can drive to ferries for Brac, Hvar, Solta, Drvenik Veli, and Drvenik Mali, but you should confirm the rental company’s island and ferry policy first. Jadrolinija operates the main ferries, and some contracts ask for a Green Card or charge a cross-border fee if you leave Croatia. If you plan to cross outside Croatia, ask about permission and coverage before leaving the terminal.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Which Split Airport rental company is best for low deposits?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Avax Rent a Car and Lutar Rent a Car are often considered lower-hold options because some bookings advertise smaller or no deposit requirements. Avax has shown rates from <strong>€19/day</strong>, while Lutar often starts around <strong>€27.60/day</strong> for economy cars like the VW Up. If you are comparing premium cars such as the Mercedes C220d, expect the hold to rise even when the daily rate looks competitive.</p>
      </Section>

      <section className="container max-w-4xl py-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Related guides</h2>
        <ul className="space-y-2 list-disc pl-5">
          <li><a href="/driving-in-trogir" className="text-primary hover:underline">Driving Tips</a></li>
          <li><a href="/day-trips-from-trogir" className="text-primary hover:underline">Day Trips</a></li>
          <li><a href="/trogir-beaches-by-car" className="text-primary hover:underline">Beaches</a></li>
        </ul>
      </section>

      <div className="flex justify-center pb-12">
        <a href="/#compare" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default AirportPage;
