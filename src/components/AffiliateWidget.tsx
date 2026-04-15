import { Search } from "lucide-react";

const AffiliateWidget = () => {
  return (
    <section className="py-8" id="compare">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-background rounded-lg p-6 text-center border border-border shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Search className="text-primary" size={24} />
            <h3 className="text-lg font-bold m-0">Search &amp; Compare Car Rentals</h3>
          </div>
          <div className="my-4 rounded-lg max-w-3xl mx-auto overflow-visible">
            <p className="text-muted-foreground text-sm py-8">
              Rental search widget loading&hellip;
            </p>
          </div>
          <p className="text-muted-foreground text-xs italic mt-3">
            Free cancellation on most vehicles
          </p>
        </div>
      </div>
    </section>
  );
};

export default AffiliateWidget;
