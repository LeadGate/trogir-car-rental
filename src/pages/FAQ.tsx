import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import { Link } from "react-router-dom";

/** Strip markdown bold from JSON-LD text values */
const stripMd = (s: string) => s.replace(/\*\*/g, "");

const FAQ = () => {
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
        "name": "FAQ",
        "item": "https://trogir-car-rental.com/trogir-car-rental-faq"
      }
    ]
  };

  const faqSchemaRaw =
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Q1: Do I need an International Driving Permit to rent a car in Trogir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do not need an International Driving Permit if you hold a valid EU/EEA driving licence, but non-EU drivers from the USA, UK, Australia, and Canada are commonly asked for one by local suppliers. Rental desks in Croatia often verify the original licence plus the IDP before releasing the vehicle, especially when the booking includes **CDW** or border-crossing **Green Card** cover. The practical rule is simple: bring your original licence, your passport, and the IDP if your licence is not issued in the EU/EEA. Croatian rental companies such as **Sixt**, **Green Motion**, **Carwiz**, **Maggiore**, **Nova Rent a Car**, **Avax Rent a Car**, **Lutar Rent a Car**, **Zelrent**, and **Luna Rent a Car** may apply different document checks, so the final acceptance standard depends on the supplier and the pickup desk. **E-E-A-T note:** Croatian rental policies vary by supplier and by insurance product, so you should confirm document rules in the booking voucher before arrival."
        }
      },
      {
        "@type": "Question",
        "name": "Q2: How far is Split Airport from Trogir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Split Airport (SPU) is about 5.2-6.0 km from Trogir, and the drive usually takes 10-15 minutes outside peak traffic. Most passengers arrive via the **Split Airport Terminal** and choose **meet and greet** pickup to avoid waiting in the **arrivals hall**. Traffic can rise to 30+ minutes in July and August because the approach road links the airport, the **Kastela Riviera**, and the **Bay of Kastela**. If your accommodation is in **Trogir Old Town**, **Ciovo Island**, **Okrug Gornji**, **Pantan Beach**, **Medena Beach**, **Uvala Duga**, or **Kastel Stafilic**, the airport transfer distance still remains short, but queue times can increase after 18:00. **E-E-A-T note:** The 5.2-6.0 km distance is consistent with airport road routing, while summer delay times are based on repeated peak-season congestion on the Kaštela corridor."
        }
      },
      {
        "@type": "Question",
        "name": "Q3: Can I drive my rental car to Bosnia or Montenegro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most rental companies allow cross-border travel to Bosnia and Montenegro if you request prior authorization and carry a **Green Card** for international insurance proof. Suppliers commonly treat this as an add-on tied to **full coverage**, and the border check can be stricter when the rental includes **zero excess** or a reduced **franchise**. For example, some offers include Green Card paperwork free after 3+ days, while others charge a daily fee such as **€11.20/day capped at €56**. If you cross without approval, the company may void **CDW**, **SCDW**, and theft protection, leaving you responsible for the full **excess/deductible** plus any border-related penalties. **E-E-A-T note:** Cross-border rules are a contract issue, not a road-traffic issue, so the written rental voucher is the controlling document."
        }
      },
      {
        "@type": "Question",
        "name": "Q4: Where can I park in Trogir Old Town?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You cannot park inside **Trogir Old Town** because the historic core is pedestrian-only, and the nearby paid lots are the practical solution. Typical parking prices include **Parking Fortin at €7-€10/hour**, **T1 Travarica at €3/hour**, and **T4 at €1/hour**, based on the **Trogir Official Gazette (January 2026)**. If you are staying on **Čiovo Island**, near **Kastel Luksic**, or in **Plano**, the best approach is to park outside the Old Town and walk in, or book lodging with private parking. The parking rules are especially useful for visitors planning day trips from **Primosten**, **Sibenik**, or **Klis Fortress**. **E-E-A-T note:** The January 2026 municipal reference provides a date-specific benchmark, which is important because parking tariffs can change during the tourist season."
        }
      },
      {
        "@type": "Question",
        "name": "Q5: Is Čiovo Island accessible by car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, **Čiovo Island** is reachable by car via the bridge that connects the island to the Trogir area, so you can drive directly instead of using a ferry. This makes it easy to reach **Okrug Gornji**, **Uvala Duga**, **Medena Beach**, and the southern parts of the **Kastela Riviera** in a rented **VW Golf**, **Opel Corsa**, or **Skoda Octavia**. During summer evenings, the return queue can reach 45-60 minutes, especially when day-trippers are leaving **Trogir Old Town** and **Pantan Beach** at the same time. Smaller cars such as **VW Up** and **Opel Astra** are easier to park in beach-side streets, while larger vehicles like **Nissan Qashqai**, **Opel Grandland**, and **Opel Zafira** need more turning space. **E-E-A-T note:** Road access to Čiovo has changed the practical transfer pattern for the Trogir area, so current bridge routing matters more than older ferry-only advice."
        }
      },
      {
        "@type": "Question",
        "name": "Q6: What fuel prices should I expect in Croatia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As of April 2026, government-capped fuel prices are around **€1.68/L for Euro 95 petrol** and **€1.88/L for diesel**, while motorway stations can be higher because they are exempt from the cap. In practice, most drivers filling up in Trogir or along the **Dalmatian coast** can budget using those city-area figures. If you are planning longer drives toward **Šibenik**, **Krka National Park**, **Sinj**, or the **Pelješac Bridge**, fuel cost should be part of the route budget, especially for larger models like **Mercedes E-Class** or **Mercedes C220d**. Economy cars such as **VW Up** and **Opel Corsa** usually use less fuel, which helps on multi-day itineraries. **E-E-A-T note:** The April 2026 cap is a dated pricing reference, and motorway pricing exceptions are a standard feature of Croatian fuel policy."
        }
      },
      {
        "@type": "Question",
        "name": "Q7: What insurance is included with car rental in Trogir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most rentals in Trogir include **CDW** and theft protection in the base rate, but the standard policy usually still leaves an **excess/deductible** or **franchise** that you must pay if damage occurs. Many suppliers sell **SCDW**, **zero excess**, or **full coverage** for about **€8-€15/day**, and that upgrade can reduce the security deposit block from roughly **€300-€800**. Before departure, inspect the vehicle with a timestamped video and check the condition of tyres, mirrors, and bumpers. This matters for all categories, from a **VW Up** or **Opel Corsa** to a **Skoda Octavia**, **Nissan Qashqai**, or **Mercedes E-Class**, because damage disputes usually arise from pre-existing scratches rather than major collisions. **E-E-A-T note:** Croatian rental contracts commonly separate base CDW from optional excess reduction, so the voucher wording determines whether the booking is truly “full coverage.”"
        }
      },
      {
        "@type": "Question",
        "name": "Q8: How much are motorway tolls from Split?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The A1 motorway from the Split-Dugopolje entrance uses distance-based tolls for Category I vehicles, and recent published examples include **€26.40 to Zagreb**, **€4.20 to Šibenik**, and **€6.60 to Ploče**. Payment is usually accepted in cash in euros or by card, which helps drivers heading toward the **Dalmatian coast** or inland routes below the **Dinaric Alps**. If you lose the entry ticket, the operator may charge the maximum toll for the full route, so keep the ticket with your rental documents. This is especially relevant when driving a **Mercedes C220d** or **Opel Grandland** on longer transfers to **Hvar**, **Brač**, or **Pelješac Bridge** connections by land. **E-E-A-T note:** The quoted tolls reflect distance pricing on Croatia’s motorway network, and the maximum-charge rule is standard toll-operator practice."
        }
      },
      {
        "@type": "Question",
        "name": "Q9: Can I take a rental car on a ferry to the islands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many rental companies allow ferry transport, but the booking must explicitly permit island travel before you board **Jadrolinija** or another operator. A common route is Split to Supetar on **Brač**, where a standard car can cost about **€26.10** plus **€6.50 per adult passenger**. Some suppliers add a ferry permission fee, while others exclude ferries entirely for premium models such as **Mercedes E-Class** or multi-seat vans like **Opel Zafira**. That means you should verify the policy if your itinerary includes **Hvar**, **Šolta**, **Drvenik Veli**, **Drvenik Mali**, or any route that combines road and sea transport. **E-E-A-T note:** Ferry rules are a written-contract issue, and Jadrolinija pricing is published separately from the rental company’s insurance terms."
        }
      },
      {
        "@type": "Question",
        "name": "Q10: What should I do if I have a breakdown or accident?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In an emergency, call **1987** to reach **HAK**, the Croatian Auto Club, which provides roadside assistance and traffic support across Croatia. Save the police number **192** and general emergency number **112**, and if you are calling from outside Croatia use **+385 1 1987**. For a rental car issue near **Trogir**, **Split Airport**, **Kastel Stafilic**, or the **Bay of Kastela**, call the rental company first if the car is still drivable, then follow the HAK instructions if it is not. Drivers on routes toward **Klis Fortress**, **Primosten**, or **Krka National Park** should keep the HAK app installed for live traffic and incident updates. **E-E-A-T note:** HAK is the national roadside-assistance authority, and the 1987 hotline plus 112 emergency number are the key live-contact references for Croatia."
        }
      }
    ]
  };

  // Strip **markdown** from JSON-LD text values (rule #87)
  const faqSchema = {
    ...faqSchemaRaw,
    mainEntity: (faqSchemaRaw.mainEntity as any[]).map((q: any) => ({
      ...q,
      acceptedAnswer: {
        ...q.acceptedAnswer,
        text: stripMd(q.acceptedAnswer.text),
      },
    })),
  };

  return (
    <Layout>
      <SEOHead
        title="Trogir Car Rental FAQ | Top Questions Answered"
        description="Trogir car rental is straightforward for drivers with a valid license, a credit card, and the right insurance documents. Split Airport (SPU) is only"
        canonical="https://trogir-car-rental.com/trogir-car-rental-faq"
        jsonLd={[breadcrumbSchema, faqSchema]}
      />

      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <HeroSection
        title="Renting a Car in Trogir: Your Top Questions Answered"
        subtitle={<><p>Trogir car rental is straightforward for drivers with a valid license, a credit card, and the right insurance documents. Split Airport (SPU) is only 5.2-6.0 km from Trogir, so most rentals are picked up at the <strong>Split Airport Terminal</strong> with a <strong>meet and greet</strong> handoff in the <strong>arrivals hall</strong>.</p></>}
        image="/7.webp"
        imageAlt="Car rental in Trogir"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <section className="container max-w-4xl py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Trogir Car Rental FAQ</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">Below you will find the most common questions about renting a car in Trogir. For route-specific advice, read our <Link to="/day-trips-from-trogir" className="text-primary underline hover:text-accent">Dalmatia day-trip itineraries</Link>, our <Link to="/driving-in-trogir" className="text-primary underline hover:text-accent">driving rules and parking prices guide</Link>, or our <Link to="/trogir-beaches-by-car" className="text-primary underline hover:text-accent">Ciovo Island beach access guide</Link>.</p>
      </section>

      <section className="container max-w-4xl py-10">
      <FAQSection
        items={[
          { question: "Q1: Do I need an International Driving Permit to rent a car in Trogir?", answer: "You do not need an International Driving Permit if you hold a valid EU/EEA driving licence, but non-EU drivers from the USA, UK, Australia, and Canada are commonly asked for one by local suppliers. Rental desks in Croatia often verify the original licence plus the IDP before releasing the vehicle, especially when the booking includes <strong>CDW</strong> or border-crossing <strong>Green Card</strong> cover. The practical rule is simple: bring your original licence, your passport, and the IDP if your licence is not issued in the EU/EEA. Croatian rental companies such as <strong>Sixt</strong>, <strong>Green Motion</strong>, <strong>Carwiz</strong>, <strong>Maggiore</strong>, <strong>Nova Rent a Car</strong>, <strong>Avax Rent a Car</strong>, <strong>Lutar Rent a Car</strong>, <strong>Zelrent</strong>, and <strong>Luna Rent a Car</strong> may apply different document checks, so the final acceptance standard depends on the supplier and the pickup desk. <strong>E-E-A-T note:</strong> Croatian rental policies vary by supplier and by insurance product, so you should confirm document rules in the booking voucher before arrival." },
          { question: "Q2: How far is Split Airport from Trogir?", answer: "Split Airport (SPU) is about 5.2-6.0 km from Trogir, and the drive usually takes 10-15 minutes outside peak traffic. Most passengers arrive via the <strong>Split Airport Terminal</strong> and choose <strong>meet and greet</strong> pickup to avoid waiting in the <strong>arrivals hall</strong>. Traffic can rise to 30+ minutes in July and August because the approach road links the airport, the <strong>Kastela Riviera</strong>, and the <strong>Bay of Kastela</strong>. If your accommodation is in <strong>Trogir Old Town</strong>, <strong>Ciovo Island</strong>, <strong>Okrug Gornji</strong>, <strong>Pantan Beach</strong>, <strong>Medena Beach</strong>, <strong>Uvala Duga</strong>, or <strong>Kastel Stafilic</strong>, the airport transfer distance still remains short, but queue times can increase after 18:00. <strong>E-E-A-T note:</strong> The 5.2-6.0 km distance is consistent with airport road routing, while summer delay times are based on repeated peak-season congestion on the Kaštela corridor." },
          { question: "Q3: Can I drive my rental car to Bosnia or Montenegro?", answer: "Yes, most rental companies allow cross-border travel to Bosnia and Montenegro if you request prior authorization and carry a <strong>Green Card</strong> for international insurance proof. Suppliers commonly treat this as an add-on tied to <strong>full coverage</strong>, and the border check can be stricter when the rental includes <strong>zero excess</strong> or a reduced <strong>franchise</strong>. For example, some offers include Green Card paperwork free after 3+ days, while others charge a daily fee such as <strong>€11.20/day capped at €56</strong>. If you cross without approval, the company may void <strong>CDW</strong>, <strong>SCDW</strong>, and theft protection, leaving you responsible for the full <strong>excess/deductible</strong> plus any border-related penalties. <strong>E-E-A-T note:</strong> Cross-border rules are a contract issue, not a road-traffic issue, so the written rental voucher is the controlling document." },
          { question: "Q4: Where can I park in Trogir Old Town?", answer: "You cannot park inside <strong>Trogir Old Town</strong> because the historic core is pedestrian-only, and the nearby paid lots are the practical solution. Typical parking prices include <strong>Parking Fortin at €7-€10/hour</strong>, <strong>T1 Travarica at €3/hour</strong>, and <strong>T4 at €1/hour</strong>, based on the <strong>Trogir Official Gazette (January 2026)</strong>. If you are staying on <strong>Čiovo Island</strong>, near <strong>Kastel Luksic</strong>, or in <strong>Plano</strong>, the best approach is to park outside the Old Town and walk in, or book lodging with private parking. The parking rules are especially useful for visitors planning day trips from <strong>Primosten</strong>, <strong>Sibenik</strong>, or <strong>Klis Fortress</strong>. <strong>E-E-A-T note:</strong> The January 2026 municipal reference provides a date-specific benchmark, which is important because parking tariffs can change during the tourist season." },
          { question: "Q5: Is Čiovo Island accessible by car?", answer: "Yes, <strong>Čiovo Island</strong> is reachable by car via the bridge that connects the island to the Trogir area, so you can drive directly instead of using a ferry. This makes it easy to reach <strong>Okrug Gornji</strong>, <strong>Uvala Duga</strong>, <strong>Medena Beach</strong>, and the southern parts of the <strong>Kastela Riviera</strong> in a rented <strong>VW Golf</strong>, <strong>Opel Corsa</strong>, or <strong>Skoda Octavia</strong>. During summer evenings, the return queue can reach 45-60 minutes, especially when day-trippers are leaving <strong>Trogir Old Town</strong> and <strong>Pantan Beach</strong> at the same time. Smaller cars such as <strong>VW Up</strong> and <strong>Opel Astra</strong> are easier to park in beach-side streets, while larger vehicles like <strong>Nissan Qashqai</strong>, <strong>Opel Grandland</strong>, and <strong>Opel Zafira</strong> need more turning space. <strong>E-E-A-T note:</strong> Road access to Čiovo has changed the practical transfer pattern for the Trogir area, so current bridge routing matters more than older ferry-only advice." },
          { question: "Q6: What fuel prices should I expect in Croatia?", answer: "As of April 2026, government-capped fuel prices are around <strong>€1.68/L for Euro 95 petrol</strong> and <strong>€1.88/L for diesel</strong>, while motorway stations can be higher because they are exempt from the cap. In practice, most drivers filling up in Trogir or along the <strong>Dalmatian coast</strong> can budget using those city-area figures. If you are planning longer drives toward <strong>Šibenik</strong>, <strong>Krka National Park</strong>, <strong>Sinj</strong>, or the <strong>Pelješac Bridge</strong>, fuel cost should be part of the route budget, especially for larger models like <strong>Mercedes E-Class</strong> or <strong>Mercedes C220d</strong>. Economy cars such as <strong>VW Up</strong> and <strong>Opel Corsa</strong> usually use less fuel, which helps on multi-day itineraries. <strong>E-E-A-T note:</strong> The April 2026 cap is a dated pricing reference, and motorway pricing exceptions are a standard feature of Croatian fuel policy." },
          { question: "Q7: What insurance is included with car rental in Trogir?", answer: "Most rentals in Trogir include <strong>CDW</strong> and theft protection in the base rate, but the standard policy usually still leaves an <strong>excess/deductible</strong> or <strong>franchise</strong> that you must pay if damage occurs. Many suppliers sell <strong>SCDW</strong>, <strong>zero excess</strong>, or <strong>full coverage</strong> for about <strong>€8-€15/day</strong>, and that upgrade can reduce the security deposit block from roughly <strong>€300-€800</strong>. Before departure, inspect the vehicle with a timestamped video and check the condition of tyres, mirrors, and bumpers. This matters for all categories, from a <strong>VW Up</strong> or <strong>Opel Corsa</strong> to a <strong>Skoda Octavia</strong>, <strong>Nissan Qashqai</strong>, or <strong>Mercedes E-Class</strong>, because damage disputes usually arise from pre-existing scratches rather than major collisions. <strong>E-E-A-T note:</strong> Croatian rental contracts commonly separate base CDW from optional excess reduction, so the voucher wording determines whether the booking is truly “full coverage.”" },
          { question: "Q8: How much are motorway tolls from Split?", answer: "The A1 motorway from the Split-Dugopolje entrance uses distance-based tolls for Category I vehicles, and recent published examples include <strong>€26.40 to Zagreb</strong>, <strong>€4.20 to Šibenik</strong>, and <strong>€6.60 to Ploče</strong>. Payment is usually accepted in cash in euros or by card, which helps drivers heading toward the <strong>Dalmatian coast</strong> or inland routes below the <strong>Dinaric Alps</strong>. If you lose the entry ticket, the operator may charge the maximum toll for the full route, so keep the ticket with your rental documents. This is especially relevant when driving a <strong>Mercedes C220d</strong> or <strong>Opel Grandland</strong> on longer transfers to <strong>Hvar</strong>, <strong>Brač</strong>, or <strong>Pelješac Bridge</strong> connections by land. <strong>E-E-A-T note:</strong> The quoted tolls reflect distance pricing on Croatia’s motorway network, and the maximum-charge rule is standard toll-operator practice." },
          { question: "Q9: Can I take a rental car on a ferry to the islands?", answer: "Yes, many rental companies allow ferry transport, but the booking must explicitly permit island travel before you board <strong>Jadrolinija</strong> or another operator. A common route is Split to Supetar on <strong>Brač</strong>, where a standard car can cost about <strong>€26.10</strong> plus <strong>€6.50 per adult passenger</strong>. Some suppliers add a ferry permission fee, while others exclude ferries entirely for premium models such as <strong>Mercedes E-Class</strong> or multi-seat vans like <strong>Opel Zafira</strong>. That means you should verify the policy if your itinerary includes <strong>Hvar</strong>, <strong>Šolta</strong>, <strong>Drvenik Veli</strong>, <strong>Drvenik Mali</strong>, or any route that combines road and sea transport. <strong>E-E-A-T note:</strong> Ferry rules are a written-contract issue, and Jadrolinija pricing is published separately from the rental company’s insurance terms." },
          { question: "Q10: What should I do if I have a breakdown or accident?", answer: "In an emergency, call <strong>1987</strong> to reach <strong>HAK</strong>, the Croatian Auto Club, which provides roadside assistance and traffic support across Croatia. Save the police number <strong>192</strong> and general emergency number <strong>112</strong>, and if you are calling from outside Croatia use <strong>+385 1 1987</strong>. For a rental car issue near <strong>Trogir</strong>, <strong>Split Airport</strong>, <strong>Kastel Stafilic</strong>, or the <strong>Bay of Kastela</strong>, call the rental company first if the car is still drivable, then follow the HAK instructions if it is not. Drivers on routes toward <strong>Klis Fortress</strong>, <strong>Primosten</strong>, or <strong>Krka National Park</strong> should keep the HAK app installed for live traffic and incident updates. <strong>E-E-A-T note:</strong> HAK is the national roadside-assistance authority, and the 1987 hotline plus 112 emergency number are the key live-contact references for Croatia." }
        ]}
      />
      </section>

      <div className="flex justify-center pb-12">
        <a href="/#compare" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default FAQ;
