import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import AffiliateWidget from "@/components/AffiliateWidget";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import TrogirParkingPlanner from "@/components/TrogirParkingPlanner";
import { ParkingSquare, Bus, CreditCard, AlertTriangle, Zap, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ParkingPlanner = () => {
  return (
    <Layout>
      <SEOHead
        title="Trogir Old Town Parking Planner — Where to Park 2026"
        description="Compare all six Trogir car parks with official 2026 rates, walking times and payment tips. Our free planner finds the cheapest, closest place to park for the car-free UNESCO old town."
        canonical="https://trogir-car-rental.com/trogir-old-town-parking/"
      />

      <Breadcrumbs items={[{ label: "Old Town Parking" }]} />

      <HeroSection
        title="Trogir Old Town Parking: Where to Leave the Car"
        image="/parking/hero-trogir-parking.webp"
        imageAlt="Aerial view of Trogir old town island and the stone bridge to the mainland"
        subtitle={
          <p>
            Trogir's UNESCO old town sits on a tiny car-free island, so every visitor arriving by
            rental car has to park on the edge and walk in. Use the planner below to find the
            cheapest, closest or easiest car park for your stay — built on the official 2026
            municipal tariffs, not guesswork.
          </p>
        }
      />

      <AffiliateWidget />

      <Section
        icon={<ParkingSquare className="w-6 h-6" />}
        title="Plan your Trogir parking in 20 seconds"
      >
        <div className="intro-section">
          <p className="text-gray-700 mb-4 leading-relaxed">
            The single most useful fact about driving to Trogir is that you <strong>cannot</strong>{" "}
            park in the old town itself — the medieval island core is a strictly enforced
            pedestrian (ZTL) zone, open only to residents. Everyone else leaves the car in one of
            six municipal car parks on the mainland or on neighbouring Čiovo island and walks across
            a bridge. The right choice depends on how long you stay, the season, and whether you
            care most about price or distance. Pick your inputs below and the planner ranks every
            lot with its real 2026 cost.
          </p>
        </div>

        <TrogirParkingPlanner />

        <p className="text-gray-700 mt-6 leading-relaxed">
          All public parking in the city is run by the municipal company{" "}
          <a
            href="https://tgholding.hr/parking/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-accent"
          >
            Trogir Holding d.o.o.
          </a>
          , under a price list ratified in the{" "}
          <a
            href="https://trogir.hr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-accent"
          >
            Official Gazette of the City of Trogir (35/25)
          </a>{" "}
          and in force since 1 January 2026. If you are still choosing a vehicle, our{" "}
          <Link to="/trogir-airport-car-rental/" className="text-primary underline hover:text-accent">
            Split Airport pickup guide
          </Link>{" "}
          covers the 5 km handover from SPU, and the{" "}
          <Link to="/driving-in-trogir/" className="text-primary underline hover:text-accent">
            Trogir driving guide
          </Link>{" "}
          explains tolls, fuel and local road rules.
        </p>
      </Section>

      <Section
        icon={<ParkingSquare className="w-6 h-6" />}
        title="The six car parks, explained"
        alt
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl items-start">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Trogir's lots fall into three rings. <strong>Fortin</strong> is the only car park
              physically on the old-town islet — under 150 metres from the Cathedral of St Lawrence,
              but priced to keep cars moving: €10 per hour in peak season with no daily cap, so it is
              a drop-off lot, not a day lot. The mainland staging lots <strong>Travarica (T1)</strong>{" "}
              and <strong>Put Kapelice (T2)</strong> sit just north of the stone bridge, a three-to-five
              minute walk through the North Gate. <strong>Brigi (T4)</strong> and{" "}
              <strong>Gradski / Put Mulina (T3)</strong> are larger lots a little further out — the
              dependable choice once the central lots fill, which in July and August happens by 9am.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Across the channel, the <strong>Čiovo street lots</strong> by the Brown Beach House are
              the same cheap open-lot tariff as T3, about a ten-minute walk over the old Čiovo bridge.
              For where to swim once you have parked, see our{" "}
              <Link to="/trogir-beaches-by-car/" className="text-primary underline hover:text-accent">
                Čiovo beaches by car guide
              </Link>
              .
            </p>
          </div>
          <img
            src="/parking/car-park-near-old-town.webp"
            alt="Rental car parked on the Trogir mainland beside the old town walls"
            width={1200}
            height={685}
            loading="lazy"
            decoding="async"
            className="rounded-lg w-full h-auto"
          />
        </div>

        <DataTable
          headers={["Car park", "Where", "Walk to core", "Peak rate", "Daily cap", "Payment"]}
          rows={[
            ["**Fortin**", "On the islet", "1–2 min (150 m)", "€10/h", "None (drop-off lot)", "Card or cash"],
            ["**Travarica (T1)**", "Mainland, North Gate", "3–5 min (280 m)", "€3/h", "None in peak", "Card or cash"],
            ["**Put Kapelice (T2)**", "Mainland", "4–5 min (330 m)", "€2/h", "None in peak", "Cash only"],
            ["**Brigi (T4)**", "Mainland, Knez Trpimira", "8–10 min (600 m)", "€2/h", "€24/day", "Cash only"],
            ["**Gradski / Put Mulina (T3)**", "Mainland, Tuđmana", "6–8 min (500 m)", "€1.50/h", "€18/day", "Card or cash"],
            ["**Čiovo street lots**", "Čiovo, Brown Beach", "10–12 min (750 m)", "€1.50/h", "€18/day", "Card or cash"],
          ]}
        />
        <InfoBox>
          <p>
            💡 <strong>Closed vs open lots:</strong> the barrier-gated lots (Fortin, T1, T2, T4)
            charge around the clock all year. The open street lots (T3, Čiovo) only charge daytime
            hours in winter, and Sundays and public holidays are free.
          </p>
        </InfoBox>
      </Section>

      <ImageDivider
        image="/parking/ciovo-bridge-trogir.webp"
        alt="The Čiovo bridge over the Foša channel in Trogir at dusk"
      />

      <Section icon={<Bus className="w-6 h-6" />} title="The 'Pantana Park &amp; Ride' myth">
        <p className="text-gray-700 mb-4 leading-relaxed">
          Many travel pages still describe a tidy "Pantana Park &amp; Ride" north of Trogir with a
          free shuttle bus into the old town. For the 2026 season this does not exist as an official,
          ticket-integrated service, and relying on it is the single most common parking mistake
          incoming drivers make.
        </p>
        <WarningBox>
          <p>
            ⚠️ <strong>There is no free municipal shuttle.</strong> Pantana is a protected wetland
            nature reserve; the "parking" there is informal gravel and private villa spaces. The bus
            people remember is the regional <strong>Promet Split Line 37</strong> (Split – airport –
            Trogir terminal), which costs about €3 in cash from the driver or €1.50 in the Promet
            Split app, running every 20 minutes on weekdays. Leaving a rental car unattended by the
            reserve to wait for a commuter bus is not worth it — park in an official T1, T3 or T4 lot
            instead.
          </p>
        </WarningBox>
        <p className="text-gray-700 leading-relaxed">
          The genuinely smart peak-season move is different. Instead of queuing for the stone-bridge
          lots, continue east on the D8 and cross the{" "}
          <strong>New Čiovo Bridge (Most hrvatskih branitelja)</strong>, which bypasses the centre
          entirely, then park in the Čiovo street lots near the Brown Beach House and walk ten
          minutes into the old town over the old swing bridge.
        </p>
      </Section>

      <Section icon={<CreditCard className="w-6 h-6" />} title="Paying for parking as a foreign driver" alt>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Trogir's barrier lots use licence-plate cameras, so the lowest-friction method for visitors
          is the{" "}
          <a
            href="https://www.bmove.com/croatia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-accent"
          >
            Bmove app
          </a>{" "}
          (formerly PayDo): register your rental's plate and a Visa or Mastercard once, and the
          barrier opens and bills you automatically. KeksPay and Aircash work too.
        </p>
        <WarningBox>
          <p>
            ⚠️ <strong>Avoid the SMS option on a foreign SIM.</strong> The m-parking text codes
            (Zone 1 → 708210, Zone 2 → 708110) are premium-rate messages that international carriers
            silently block — your text never arrives, no ticket is registered, and you get fined.
            Only use SMS with a Croatian SIM.
          </p>
        </WarningBox>
        <p className="text-gray-700 leading-relaxed">
          At the machines, <strong>Fortin and T1 accept cards</strong>, but the older terminals at{" "}
          <strong>T2 and T4 take coins and notes only</strong> — keep some euro cash if you head for
          those lots. Several lots give a 10-minute (Fortin: 20-minute) free grace period for quick
          drop-offs.
        </p>
      </Section>

      <Section icon={<AlertTriangle className="w-6 h-6" />} title="Fines, towing and the resident zone">
        <p className="text-gray-700 mb-4 leading-relaxed">
          The old-town interior is a strict no-traffic zone, and enforcement is real. The city runs a
          dedicated tow truck — the "pauk" (spider) — and the 2026 gazette sets its fees at{" "}
          <strong>€100 for a full tow</strong>, <strong>€50</strong> if you reach the truck after
          loading has begun, plus <strong>€30 per day</strong> of impound storage.
        </p>
        <DataTable
          headers={["Offence", "Typical 2026 penalty"]}
          rows={[
            ["Pauk tow to impound", "€100 (+ €30/day storage)"],
            ["Intercepted before removal", "€50"],
            ["Illegal parking (warden / police)", "€30–€60"],
            ["Stopping on a crossing / blocking a junction", "€130"],
            ["Parking in a disabled bay without a permit", "up to €90"],
          ]}
        />
        <InfoBox>
          <p>
            💡 <strong>Pay quickly and save half.</strong> Croatian law gives a 50% discount on a
            traffic fine settled on the spot or within three working days. Note also that the{" "}
            <strong>T1 lot has a "T1-stanari" resident-only section</strong> — park there as a tourist
            and you will be towed. Holders of a valid EU disabled card (70%+) park free at T1, T2, T3
            and T4.
          </p>
        </InfoBox>
      </Section>

      <Section icon={<Zap className="w-6 h-6" />} title="Electric rental cars" alt>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl items-start mt-6">
          <img
            src="/parking/walking-into-old-town.webp"
            alt="Traveller walking with a suitcase across the bridge into Trogir old town"
            width={1200}
            height={685}
            loading="lazy"
            decoding="async"
            className="rounded-lg w-full h-auto"
          />
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The medieval core has no fast chargers, so plan to top up on the periphery. The new{" "}
              <strong>SPOT Shopping Park</strong> in the Plano district near the airport offers free
              parking and public EV chargers, and the ACI Marina has Tesla destination and 22 kW Type 2
              points for those with marina access.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For genuine rapid charging (150 kW+), the Supercharger sites toward Split and the Kozjak
              motorway rest stop are the reliable options. If a day trip is on the cards, our{" "}
              <Link to="/day-trips-from-trogir/" className="text-primary underline hover:text-accent">
                day-trips guide
              </Link>{" "}
              flags charging points along the main routes.
            </p>
          </div>
        </div>
      </Section>

      <Section icon={<HelpCircle className="w-6 h-6" />} title="FAQ">
        <h3 className="text-xl font-bold mt-6 mb-3">Can I drive into Trogir old town?</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          No. The old town is a small island and a strictly enforced pedestrian zone, open only to
          registered residents and service vehicles. Tourists park in one of the six municipal lots on
          the mainland or on Čiovo and walk across a bridge — the longest walk is about 10–12 minutes.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-3">Where is the cheapest place to park in Trogir?</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          For a full day the open street lots — Gradski / Put Mulina (T3) and the Čiovo lots — are
          cheapest, at €1.50 per hour capped at €18 per day in season, or €0.80/h capped at €10/day
          from November to March. Brigi (T4) is similar with a €24 peak cap. Avoid Fortin for anything
          longer than a quick stop: at €10 per hour with no cap it is by far the most expensive.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-3">Is there a free park-and-ride shuttle from Pantana?</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          No. There is no official free shuttle in 2026. Pantana is a nature reserve with informal
          parking; the only bus is the paid regional Promet Split Line 37 (about €3 cash or €1.50 via
          app). Use a proper municipal lot instead.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-3">How do I pay for parking without a Croatian SIM?</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Use the Bmove app with your rental's plate and a credit card, or pay at the machine. Fortin
          and T1 take cards; T2 and T4 are cash-only. Do not use the SMS codes on a foreign SIM — the
          premium-rate texts are blocked and you will not be charged, which results in a fine.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-3">What happens if I park illegally?</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          You risk a €30–€60 fine from wardens or the "pauk" tow truck, which costs €100 plus €30 per
          day of storage to recover your car. Paying a fine within three working days halves it.
        </p>
      </Section>

      <div className="flex justify-center pb-12">
        <a href="/#compare" className="cta-button">Compare Trogir Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default ParkingPlanner;
