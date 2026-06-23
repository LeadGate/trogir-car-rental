import { useState, useMemo } from "react";
import { MapPin, Wallet, Footprints, CreditCard, Coins } from "lucide-react";

/**
 * Trogir Old Town Parking Planner.
 *
 * Cost engine uses the official 2026 municipal tariffs ratified in the
 * Službeni glasnik Grada Trogira 35/25 (23 Dec 2025, effective 1 Jan 2026),
 * operated by Trogir Holding d.o.o. Daily caps and "uncapped" peak lots are
 * modelled exactly as the gazette defines them. All numbers are editable
 * estimates only where labelled; the structural facts (car-free core, walk
 * distances, payment methods) are fixed.
 */

type SeasonKey = "peak" | "shoulder" | "off";
type Priority = "cheapest" | "closest" | "easy";

interface Rate {
  h: number;
  cap: number | null;
}

interface Lot {
  id: string;
  name: string;
  area: string;
  walkMin: number;
  walkM: number;
  rates: Record<SeasonKey, Rate>;
  pay: string;
  cardOk: boolean;
  free: string;
  avail: number; // 1 worst … 5 best peak-season availability
  note: string;
}

const LOTS: Lot[] = [
  {
    id: "fortin",
    name: "Fortin",
    area: "On the old-town islet",
    walkMin: 2,
    walkM: 150,
    rates: { peak: { h: 10, cap: null }, shoulder: { h: 7, cap: null }, off: { h: 2, cap: null } },
    pay: "Card, coins, notes, Bmove",
    cardOk: true,
    free: "20 min",
    avail: 1,
    note: "Closest of all, but premium and uncapped — built for 20-minute drop-offs, not all-day parking.",
  },
  {
    id: "t1",
    name: "Travarica (T1)",
    area: "Mainland, by the North Gate",
    walkMin: 4,
    walkM: 280,
    rates: { peak: { h: 3, cap: null }, shoulder: { h: 2, cap: 24 }, off: { h: 0.8, cap: 10 } },
    pay: "Card, coins, notes, Bmove",
    cardOk: true,
    free: "—",
    avail: 2,
    note: "Best all-round central lot: a short walk over the stone bridge and card payment accepted.",
  },
  {
    id: "t2",
    name: "Put Kapelice (T2)",
    area: "Mainland",
    walkMin: 5,
    walkM: 330,
    rates: { peak: { h: 2, cap: null }, shoulder: { h: 1, cap: 24 }, off: { h: 0.8, cap: 10 } },
    pay: "Coins & notes only",
    cardOk: false,
    free: "—",
    avail: 3,
    note: "Cheaper central tier than T1, but the machine takes cash only — carry euro coins or notes.",
  },
  {
    id: "t4",
    name: "Brigi (T4)",
    area: "Mainland, Knez Trpimira",
    walkMin: 9,
    walkM: 600,
    rates: { peak: { h: 2, cap: 24 }, shoulder: { h: 1.5, cap: 18 }, off: { h: 0.8, cap: 10 } },
    pay: "Coins & notes only",
    cardOk: false,
    free: "10 min",
    avail: 5,
    note: "Big overflow lot for cars and buses — your most reliable bet when central lots fill by 9am.",
  },
  {
    id: "t3",
    name: "Gradski / Put Mulina (T3)",
    area: "Mainland, Dr. F. Tuđmana",
    walkMin: 7,
    walkM: 500,
    rates: { peak: { h: 1.5, cap: 18 }, shoulder: { h: 1.5, cap: 18 }, off: { h: 0.8, cap: 10 } },
    pay: "Machine or Bmove",
    cardOk: true,
    free: "10 min",
    avail: 4,
    note: "Open street lot with the lowest mainland day cap — solid value for a full day.",
  },
  {
    id: "ciovo",
    name: "Čiovo street lots",
    area: "Čiovo, by Brown Beach House",
    walkMin: 11,
    walkM: 750,
    rates: { peak: { h: 1.5, cap: 18 }, shoulder: { h: 1.5, cap: 18 }, off: { h: 0.8, cap: 10 } },
    pay: "Machine or Bmove",
    cardOk: true,
    free: "10 min",
    avail: 5,
    note: "The local bypass: reach it via the New Čiovo Bridge, skip the stone-bridge gridlock, then walk in over the old swing bridge.",
  },
];

const SEASONS: { key: SeasonKey; label: string; range: string }[] = [
  { key: "peak", label: "Peak", range: "Jul–Aug" },
  { key: "shoulder", label: "Shoulder", range: "Apr–Jun, Sep–Oct" },
  { key: "off", label: "Off-season", range: "Nov–Mar" },
];

const PRIORITIES: { key: Priority; label: string }[] = [
  { key: "cheapest", label: "Cheapest" },
  { key: "closest", label: "Closest walk" },
  { key: "easy", label: "Easiest to find a space" },
];

function stayCost(rate: Rate, hours: number): number {
  if (rate.cap == null) return hours * rate.h;
  const days = Math.floor(hours / 24);
  const rem = hours - days * 24;
  return days * rate.cap + Math.min(rem * rate.h, rate.cap);
}

const fmt = (n: number) =>
  "€" + (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, "");

function durationLabel(hours: number): string {
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"}`;
  const d = Math.floor(hours / 24);
  const h = hours - d * 24;
  return `${d} day${d === 1 ? "" : "s"}${h ? ` ${h}h` : ""}`;
}

const TrogirParkingPlanner = () => {
  const [season, setSeason] = useState<SeasonKey>("peak");
  const [hours, setHours] = useState<number>(6);
  const [priority, setPriority] = useState<Priority>("cheapest");

  const ranked = useMemo(() => {
    const withCost = LOTS.map((lot) => ({
      lot,
      cost: stayCost(lot.rates[season], hours),
    }));
    withCost.sort((a, b) => {
      if (priority === "cheapest") return a.cost - b.cost || a.lot.walkMin - b.lot.walkMin;
      if (priority === "closest") return a.lot.walkMin - b.lot.walkMin || a.cost - b.cost;
      return b.lot.avail - a.lot.avail || a.cost - b.cost;
    });
    return withCost;
  }, [season, hours, priority]);

  const top = ranked[0];
  const seasonMeta = SEASONS.find((s) => s.key === season)!;

  return (
    <div className="rounded-xl border border-border bg-background shadow-sm overflow-hidden">
      {/* Controls */}
      <div className="p-5 md:p-6 bg-secondary/40 border-b border-border">
        <div className="grid gap-5 md:grid-cols-3">
          {/* Season */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Season</label>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Season">
              {SEASONS.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setSeason(s.key)}
                  aria-pressed={season === s.key}
                  className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    season === s.key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:bg-secondary"
                  }`}
                >
                  {s.label}
                  <span className="block text-[11px] font-normal opacity-80">{s.range}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Priority</label>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Priority">
              {PRIORITIES.map((p) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setPriority(p.key)}
                  aria-pressed={priority === p.key}
                  className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    priority === p.key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:bg-secondary"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label htmlFor="stay-hours" className="block text-sm font-semibold text-foreground mb-2">
              How long are you staying?{" "}
              <span className="text-primary font-bold">{durationLabel(hours)}</span>
            </label>
            <input
              id="stay-hours"
              type="range"
              min={1}
              max={72}
              step={1}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full accent-[hsl(var(--primary))]"
            />
            <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
              <span>1h</span>
              <span>1 day</span>
              <span>3 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="p-5 md:p-6">
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-5">
          <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">
            Recommended for a {durationLabel(hours)} stay · {seasonMeta.label} season
          </p>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-2xl font-bold text-foreground m-0">{top.lot.name}</h3>
            <span className="text-2xl font-bold text-primary">
              {fmt(top.cost)}
              <span className="text-sm font-normal text-muted-foreground"> total</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1 flex flex-wrap gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1">
              <MapPin size={14} className="text-primary" /> {top.lot.area}
            </span>
            <span className="inline-flex items-center gap-1">
              <Footprints size={14} className="text-primary" /> {top.lot.walkMin} min walk ({top.lot.walkM} m)
            </span>
            <span className="inline-flex items-center gap-1">
              {top.lot.cardOk ? <CreditCard size={14} className="text-primary" /> : <Coins size={14} className="text-primary" />}{" "}
              {top.lot.pay}
            </span>
          </p>
          <p className="text-sm text-foreground mt-3 mb-0">{top.lot.note}</p>
        </div>

        {/* Full comparison */}
        <h4 className="text-base font-bold text-foreground mt-6 mb-3 flex items-center gap-2">
          <Wallet size={18} className="text-primary" /> All lots ranked — {durationLabel(hours)}, {seasonMeta.label} season
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="border border-border px-3 py-2 text-left font-semibold">Car park</th>
                <th className="border border-border px-3 py-2 text-left font-semibold">Your cost</th>
                <th className="border border-border px-3 py-2 text-left font-semibold">Rate (€/h)</th>
                <th className="border border-border px-3 py-2 text-left font-semibold">Walk</th>
                <th className="border border-border px-3 py-2 text-left font-semibold">Payment</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map(({ lot, cost }, i) => {
                const rate = lot.rates[season];
                return (
                  <tr key={lot.id} className={i % 2 === 0 ? "bg-background" : "bg-secondary/40"}>
                    <td className="border border-border px-3 py-2 align-top">
                      <span className="font-semibold">{lot.name}</span>
                      {i === 0 && (
                        <span className="ml-2 inline-block rounded bg-primary/10 text-primary text-[11px] font-semibold px-1.5 py-0.5 align-middle">
                          Top pick
                        </span>
                      )}
                      <span className="block text-xs text-muted-foreground">{lot.area}</span>
                    </td>
                    <td className="border border-border px-3 py-2 align-top font-semibold text-primary">
                      {fmt(cost)}
                    </td>
                    <td className="border border-border px-3 py-2 align-top">
                      {fmt(rate.h)}/h
                      <span className="block text-xs text-muted-foreground">
                        {rate.cap == null ? "no daily cap" : `cap ${fmt(rate.cap)}/day`}
                      </span>
                    </td>
                    <td className="border border-border px-3 py-2 align-top">
                      {lot.walkMin} min
                      <span className="block text-xs text-muted-foreground">{lot.walkM} m</span>
                    </td>
                    <td className="border border-border px-3 py-2 align-top">
                      {lot.cardOk ? "Card / cash" : "Cash only"}
                      <span className="block text-xs text-muted-foreground">{lot.free} free</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3 mb-0">
          Tariffs from the official Trogir Holding price list ratified in the Službeni glasnik Grada
          Trogira 35/25 (effective 1 January 2026). Open street lots (T3, Čiovo) charge €1.50/h
          (cap €18) from 1 May–30 Sep and €0.80/h (cap €10) from 1 Oct–30 Apr — so in early April and
          late October they are already on the lower rate. The "Fortin" and peak "T1/T2" lots have no
          daily cap by design, so their figures keep climbing for long stays.
        </p>
      </div>
    </div>
  );
};

export default TrogirParkingPlanner;
