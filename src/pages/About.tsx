import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Trogir Car Rental | Car Rental in Trogir"
        description="Learn about Trogir Car Rental — your trusted car rental comparison service in Trogir. We help you find the best deals from local and international providers."
        canonical="https://trogir-car-rental.com/about"
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "About Trogir Car Rental",
          "url": "https://trogir-car-rental.com/about"
        }]}
      />

      <Breadcrumbs items={[{ label: "About" }]} />

      <Section
        icon={<Info className="w-6 h-6" />}
        title="About Trogir Car Rental"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Trogir Car Rental</h1>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Trogir Car Rental is a car rental comparison service focused on Trogir. We aggregate offers from trusted local and international rental providers so you can easily compare prices, vehicle types, and rental conditions in one place.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our goal is to save you time and money by presenting transparent, up-to-date information about car hire options in Trogir and the surrounding area. Start by <Link to="/trogir-airport-car-rental" className="text-primary underline hover:text-accent">collecting your car at Split Airport</Link> or browse our <Link to="/trogir-car-rental-faq" className="text-primary underline hover:text-accent">car rental FAQ</Link> for insurance and deposit answers.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Affiliate Disclosure</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This website contains affiliate links. When you book a rental car through our comparison widget, we may earn a commission at no extra cost to you. This helps us maintain and improve our service. We only partner with reputable providers to ensure you get reliable deals.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Our Commitment</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We are committed to providing accurate, helpful content about car rental in Trogir. Our guides, tips, and destination articles are created to help you plan a smooth and enjoyable trip. Explore our <Link to="/day-trips-from-trogir" className="text-primary underline hover:text-accent">day trips from Trogir</Link> or learn about <Link to="/driving-in-trogir" className="text-primary underline hover:text-accent">driving rules and parking in Croatia</Link>.
        </p>
      </Section>
    </Layout>
  );
};

export default About;
