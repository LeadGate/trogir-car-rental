import { useEffect, useRef } from "react";
import { Search } from "lucide-react";

const WIDGET_SRC =
  "https://tpembd.com/content?trs=513393&shmarker=713621.trogir&powered_by=true&country=202&city=206351&lang=en&width=100&background=transparent&logo=false&header=false&gearbox=false&cars=false&border=false&footer=false&campaign_id=87&promo_id=4322";

const AffiliateWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = WIDGET_SRC;
    script.charset = "utf-8";
    containerRef.current.appendChild(script);
  }, []);

  return (
    <section className="py-8" id="compare-cars">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-background rounded-lg p-6 text-center border border-border shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Search className="text-primary" size={24} />
            <h3 className="text-lg font-bold m-0">Search &amp; Compare Trogir Car Rentals</h3>
          </div>
          <div ref={containerRef} className="my-4 rounded-lg max-w-3xl mx-auto overflow-visible" />
          <p className="text-muted-foreground text-xs italic mt-3">
            Free cancellation on most vehicles
          </p>
        </div>
      </div>
    </section>
  );
};

export default AffiliateWidget;
