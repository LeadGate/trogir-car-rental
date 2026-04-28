import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Airport", path: "/trogir-airport-car-rental" },
  { label: "Driving Tips", path: "/driving-in-trogir" },
  { label: "Day Trips", path: "/day-trips-from-trogir" },
  { label: "Beaches", path: "/trogir-beaches-by-car" },
  { label: "FAQ", path: "/trogir-car-rental-faq" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" },
];

const Footer = () => (
  <footer className="border-t border-border bg-secondary py-12">
      <p className="text-xs opacity-60 leading-relaxed mb-4 px-4 max-w-4xl mx-auto">
        trogir-car-rental.com is an independent car rental guide. We may earn a commission when you book through partner links or the booking widget. Final prices, availability, deposits, insurance terms and supplier conditions are provided by the booking partner or rental supplier.
      </p>
    <div className="container">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="text-lg font-bold text-primary">Trogir Car Rental</Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            This site contains affiliate links. We may earn a commission at no extra cost to you. This site provides information only and does not operate a car rental fleet.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-3">Pages</h4>
          <nav className="flex flex-col gap-2">
            {footerLinks.map(link => (
              <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-3">Contact</h4>
          <a href="mailto:info@trogir-car-rental.com" className="text-sm text-primary hover:underline block mb-4">
            info@trogir-car-rental.com
          </a>
          <h4 className="font-bold text-foreground mb-3">Useful Links</h4>
          <nav className="flex flex-col gap-2">
            <a href="https://www.hak.hr/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">HAK — Croatian Auto Club</a>
            <a href="https://www.split-airport.hr/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Split Airport (SPU)</a>
            <a href="https://www.jadrolinija.hr/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Jadrolinija Ferries</a>
          </nav>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        <p className="text-xs opacity-70">Last updated: April 2026</p>
        <p className="mt-1">&copy; 2026 trogir-car-rental.com</p>
      </div>
    </div>
  </footer>
);

export default Footer;
