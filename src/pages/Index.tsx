import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import AffiliateWidget from "@/components/AffiliateWidget";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import { Car, DollarSign, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
      }
    ]
  };

  /* Organization + WebSite schemas are in index.html as static JSON-LD (rule #100) */

  return (
    <Layout>
      <SEOHead
        title="Trogir Car Rental — Compare Deals | Trogir Car Rental"
        description="Renting a car in Trogir gives travellers a 6 km airport transfer, day-trip access to Krka National Park, and seasonally low rates from €7 per day in the"
        canonical="https://trogir-car-rental.com"
        jsonLd={[breadcrumbSchema]}
      />

      <HeroSection
        title="Unlock Dalmatia: The Ultimate Guide to Renting a Car in Trogir"
        subtitle={<><p>Renting a car in Trogir gives travellers a 6 km airport transfer, day-trip access to Krka National Park, and seasonally low rates from €7 per day in the off-season. Split Airport (SPU) sits about 10 minutes from Trogir, and 2025 eVisitor data shows 77% of visitors travelling independently, so a rental car matches the local demand for flexible itineraries.</p></>}
        image="/1.webp"
        imageAlt="Car rental in Trogir"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <AffiliateWidget id="compare" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Why rent a car in Trogir?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">A rental car in Trogir is a practical transport tool for Central Dalmatia because beaches, islands, and inland sights are spread across the Dalmatian coast, the Adriatic shoreline, and the routes toward the Dinaric Alps. Trogir’s location near the Bay of Kastela and the Kastela Riviera makes it easy to reach Split Airport, Čiovo Island, and inland attractions without relying on multiple bus changes. The UNESCO old town is walkable, but the wider region is not, so a car is the most efficient option for visitors who want to cover more than one destination in a day.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Gateway to the Dalmatian coast</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Trogir is a strong base because road access connects the town to Kastel Stafilic, Kastel Luksic, Plano, and Split Airport, while ferries and local roads also support trips to Brac, Hvar, Solta, Drvenik Veli, and Drvenik Mali. A rental car makes it easier to reach beaches such as Pantan Beach, Medena Beach, and Uvala Duga without depending on seasonal buses or taxis. For a one-day loop, a driver can combine Trogir Old Town, Okrug Gornji, and Čiovo Island in a single itinerary.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Proximity to Split Airport (SPU)</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Split Airport (SPU) is about 6 km from Trogir, and airport pickup usually takes 10–15 minutes depending on traffic and the route through the Terminal area. The airport’s rental desks and off-airport meet and greet services are designed for quick handovers in the arrivals hall, which is useful for late arrivals and family trips. Because SPU handles millions of passengers annually, advance booking is recommended for July and August, when vehicle choice narrows fastest.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">The preferred choice for independent travellers</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">The 2025 eVisitor data records 152,806 arrivals in Jan–Oct 2025 and 77% independent travel, which supports the demand for self-drive itineraries in Trogir. Independent travellers often use rental cars to move between Krka National Park, Klis Fortress, Sinj, and the coastal towns on the Dalmatian coast without paying for multiple organised transfers. If your itinerary includes stops outside Trogir, a car is usually the most time-efficient option.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Essential for day trips and beaches</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">A car from Trogir makes it possible to reach Krka National Park in about 80 km, Šibenik in about 55 km, and Primosten in under an hour in normal traffic. The same vehicle can also serve short coastal trips to Ciovo Island, Okrug Gornji, and the quieter stretches near Uvala Duga or Medena Beach. For more route ideas, see our <Link to="/day-trips-from-trogir" className="text-primary underline hover:text-accent">day trips from Trogir by rental car</Link> guide.</p>
      </Section>

      <Section
        icon={<DollarSign className="w-6 h-6" />}
        title="How much does car rental cost in Trogir?"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Car rental prices in Trogir vary by season, vehicle class, and insurance choice, with off-season economy cars starting around €7 per day and peak-season luxury cars reaching €250–€350 per day. The table below helps compare common fleet sizes such as a VW Up, VW Golf, Opel Corsa, Opel Astra, Skoda Octavia, Nissan Qashqai, and Mercedes E-Class.</p>
          <DataTable headers={["Season", "Economy (e.g., VW Up, Opel Corsa)", "Compact (e.g., VW Golf, Opel Astra)", "SUV (e.g., Nissan Qashqai, Opel Grandland)", "Luxury (e.g., Mercedes E-Class, Mercedes C220d)"]} rows={[["**Off-Season** (Nov-Apr)", "\u20ac7\u2013\u20ac28/day", "\u20ac10\u2013\u20ac35/day", "\u20ac40\u2013\u20ac60/day", "\u20ac100+/day"], ["**Shoulder** (May-Jun, Sep-Oct)", "\u20ac30\u2013\u20ac45/day", "\u20ac35\u2013\u20ac55/day", "\u20ac60\u2013\u20ac80/day", "\u20ac150\u2013\u20ac250/day"], ["**Peak** (Jul-Aug)", "\u20ac45\u2013\u20ac70/day", "\u20ac70\u2013\u20ac100/day", "\u20ac100\u2013\u20ac150/day", "\u20ac250\u2013\u20ac350/day"]]} />
          <h3 className="text-xl font-bold mt-6 mb-3">Additional costs to consider</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Automatic transmission usually adds €15–€20 per day, and many agencies require a 300–800 euro preauthorisation on the primary credit card as a security deposit. A full coverage package can reduce or remove the excess/deductible, but the exact cost depends on the provider and vehicle class. Parking near Trogir Old Town can reach €7–€10 per hour in peak season, and government-capped fuel prices in April 2026 were about €1.68/L for Euro 95 petrol and €1.88/L for diesel. For parking detail, use our <Link to="/driving-in-trogir" className="text-primary underline hover:text-accent">Trogir driving and parking guide</Link>.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> If you want the lowest base rate, compare local suppliers such as Nova Rent a Car, Avax Rent a Car, Lutar Rent a Car, Zelrent, and Luna Rent a Car against international brands such as Sixt, Green Motion, Carwiz, and Maggiore, because local office delivery and deposit rules can change the final price.</p></InfoBox>
          <WarningBox><p>⚠️ <strong>Warning:</strong> A cheap base rate can become expensive if CDW is excluded, SCDW is optional, or the franchise is high, so always check the total cost with fuel, mileage, and cross-border fees included.</p></WarningBox>
      </Section>

      <ImageDivider image="/2.webp" alt="Trogir car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Top local car rental companies near Trogir"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Local and international suppliers both operate around Split Airport and Trogir, but each company has a different mix of deposit rules, delivery options, and insurance add-ons. The descriptions below reflect each company's published terms and conditions.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Nova Rent a Car</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Nova Rent a Car is a Croatian rental brand with offices at Split Airport and in Trogir Downtown. The company’s two-location setup is useful for arrivals who want a same-day airport pickup or a later city-centre collection, and the large fleet typically improves availability in July and August. For travellers staying near Trogir Old Town, the downtown option can reduce transfer time.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Avax Rent a Car</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Avax Rent a Car offers rates from €19 per day, a 4.7-star Trustpilot rating, and a zero-deposit option on selected rentals. The company also provides a meet and greet service at SPU and free cross-border travel for rentals of 3 days or more, which is useful for trips into Bosnia and Herzegovina or Montenegro. If you need Green Card paperwork, confirm the policy at booking because cross-border approval can vary by rental duration.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Lutar Rent a Car</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Lutar Rent a Car advertises a VW Up from €27.60 per day and a 4.9/5 rating from more than 400 clients. The company also reports last-minute discounts of up to 30%, which can help travelers who are booking close to departure. For city use and short coastal drives, an economy model such as a VW Up or Opel Corsa keeps fuel costs lower than a larger SUV.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Zelrent</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Zelrent is a Trogir-based local agency located in Okrug Gornji on Ciovo Island, and it specialises in Opel models while also offering a Mercedes E-Class-style premium option in the source material. The company provides free delivery and collection within a 10 km radius and also rents scooters such as the Piaggio Medley 125 for short local trips. For guests staying in Kastel Stafilic, Kastel Luksic, or Plano, the delivery radius can make collection more convenient than airport pickup.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Luna Rent a Car</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Luna Rent a Car allows reservations without a credit card and offers a VW Golf from €83 per day in shoulder season. The company also provides free delivery and collection across the Trogir area, which can help travellers staying in Okrug Gornji, Trogir Old Town, or near Pantan Beach. If you need a compact car for highway use toward Šibenik or Krka National Park, the VW Golf is a practical mid-size choice.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">International brands near SPU</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Sixt, Green Motion, Carwiz, and Maggiore operate in the Split Airport area and are often used by travelers who want a familiar international brand and standardized contract terms. These brands commonly offer compact and mid-size cars such as the Skoda Octavia, Opel Zafira, or Opel Grandland, but deposit levels and excess amounts can differ by supplier and season. If you compare international and local providers, check the final invoice rather than the headline rate alone.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="What’s included in your Trogir car rental?"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">A Trogir car rental typically includes CDW, theft protection, mileage terms, and a fuel policy, but the exact package depends on the supplier and the car class. The most important contract items are the excess/deductible, the franchise, the optional SCDW upgrade, and whether the deal is truly full coverage or only a basic waiver.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Insurance:</strong> CDW is standard on many Croatian rentals, but the excess/deductible can still be several hundred euros, and SCDW or zero excess can reduce that liability. Full coverage is usually the best way to simplify claims, but the policy wording must still be checked because tyres, glass, and underbody damage are sometimes excluded.</li>
            <li><strong>Fuel policy:</strong> Full-to-full is the clearest option because you receive the car with a full tank and return it full, while prepaid fuel often costs more than local pump prices. This matters if you plan multiple short drives around Central Dalmatia rather than one long motorway trip.</li>
            <li><strong>Mileage:</strong> Unlimited mileage is common in Croatia, which helps if your route includes Krka National Park, Šibenik, Primosten, and the Peljesac Bridge corridor. Confirm the mileage clause before paying because some lower-cost offers still use a daily cap.</li>
            <li><strong>Cross-border travel:</strong> If you are driving to Mostar or Montenegro, ask for written approval and a Green Card before departure, because border officers may request documents even on a short trip. Avax includes this on 3+ day rentals, while some suppliers such as Sixt may charge an extra cross-border fee.</li>
            <li><strong>Roadside assistance:</strong> HAK is Croatia’s national auto club and can be reached by dialling 1987 in an emergency, while HAC manages major motorways and toll infrastructure. Check the roadside policy before pickup, especially if your route includes night driving or mountain roads toward the Dinaric Alps.</li>
          </ul>
          <InfoBox><p>💡 <strong>Tip:</strong> Keep your rental agreement, insurance certificate, and passport copy together in the vehicle, because border checks and police stops are more straightforward when documents are immediately available.</p></InfoBox>
          <WarningBox><p>⚠️ <strong>Warning:</strong> If your contract says zero excess but excludes glass, tyres, or the underside, you can still face a bill, so read the exclusions list before leaving the airport.</p></WarningBox>
      </Section>

      <ImageDivider image="/3.webp" alt="Trogir car rental" />

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="Getting started — Split Airport pickup"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Split Airport pickup is the fastest way to begin a trip to Trogir because the rental desks and handover points are close to the Terminal and the arrivals hall. Many agencies support meet and greet collection, where an agent meets you in arrivals and walks you to the vehicle, which can save time if you are landing late or traveling with children. From SPU, the drive to Trogir is usually 10–15 minutes, and local bus line 37 is a backup option if your flight is delayed.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">For travellers who want to compare airport-only offers, use our <Link to="/trogir-airport-car-rental" className="text-primary underline hover:text-accent">Split Airport car rental pickup guide</Link>. If you are staying in Trogir Old Town, ask whether the supplier offers city delivery to avoid airport parking fees.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Airport pickup checklist</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Check the Terminal location and the exact meeting point before departure.</li>
            <li>Confirm whether the office uses meet and greet or a desk inside the arrivals hall.</li>
            <li>Ask if the booking includes CDW, SCDW, full coverage, and zero excess.</li>
            <li>Verify whether the card will be used for a preauthorisation or a charged deposit.</li>
            <li>Photograph the car at pickup and return, including wheels, glass, and fuel level.</li>
          </ul>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Trogir rental FAQs"
        alt
      >
          <h3 className="text-xl font-bold mt-6 mb-3">Is it cheaper to rent a car in Trogir or at Split Airport?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Renting in Trogir is often cheaper for city-centre delivery, but Split Airport can offer wider fleet choice and faster pickup. Economy cars start from €7 per day off-season and airport access takes about 10–15 minutes, so the final price usually depends on season and location. If you are arriving by air and leaving the same day, SPU pickup is often the simplest option.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Do I need a credit card to rent a car in Trogir?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Not always, because Luna Rent a Car allows some reservations without a credit card and Avax offers a zero-deposit option on selected rentals. Most companies still use a credit-card preauthorisation for the deposit, and that can range from €300 to €800. If you want the broadest choice of cars, a credit card remains the most widely accepted payment method.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Is insurance included in Trogir car rentals?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Yes, CDW is commonly included, but the excess/deductible may still leave you liable for several hundred euros. Options like SCDW, zero excess, and full coverage can reduce that risk, and cross-border travel may require a Green Card. If you are driving only within Croatia, read the exclusions carefully because glass, tyres, and underbody damage may still be extra.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Can I drive from Trogir to Bosnia and Herzegovina or Montenegro?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Yes, many companies allow cross-border travel with prior approval and a Green Card, and Avax states that 3+ day rentals include that paperwork. Sixt, for example, charges a cross-border fee of €11.20 per day, capped at €56, so border travel is usually possible but not always free. If your route is only coastal, staying within Croatia may be simpler and cheaper.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">What are the best day trips from Trogir by car?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">The best day trips include Krka National Park, Šibenik, Primosten, Klis Fortress, Sinj, and the islands linked by ferries such as Brac, Hvar, Solta, Drvenik Veli, and Drvenik Mali. Krka is about 80 km away and Šibenik about 55 km away, so most of these trips are realistic within one day. If you want a very short outing, beaches on Ciovo Island and around Uvala Duga are easier than inland routes.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Can I pick up my rental car at Split Airport without waiting long?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Yes, airport pickup is usually fast because SPU rental desks are close to the Terminal and meet and greet service can move you directly to the car. The transfer to Trogir usually takes 10–15 minutes, which makes airport collection efficient for most arrivals. If your flight is delayed, ask in advance whether the supplier offers a flexible pickup window.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Which car type is best for Trogir and the Dalmatian coast?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">A compact car such as a VW Golf, Opel Astra, or Skoda Octavia is usually the best balance of price, fuel use, and parking ease. SUVs such as the Nissan Qashqai and Opel Grandland are also available, which are better if you plan luggage-heavy trips or longer routes toward the Dinaric Alps. If you are staying only in Trogir Old Town and Čiovo Island, an economy car like a VW Up or Opel Corsa is often enough.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Do I need a Green Card for cross-border travel?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Yes, a Green Card is normally required or strongly recommended for trips into Bosnia and Herzegovina or Montenegro. Green Card paperwork is part of the cross-border approval process, and HAK can be reached on 1987 if you need roadside support. If you remain inside Croatia, you usually do not need cross-border documentation.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Is a scooter a good alternative to a car in Trogir?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">A scooter can work for short local journeys, and Zelrent offers the Piaggio Medley 125 for this purpose. A scooter is practical for Okrug Gornji, Pantan Beach, and nearby coastal roads where parking is tighter than in open inland areas. If you want day trips to Krka National Park or Šibenik, a car is still the more versatile option.</p>
      </Section>
    </Layout>
  );
};

export default Index;
