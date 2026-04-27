import { Star } from "lucide-react";
import { site } from "@/content/site";

const STOCK_REVIEWS: { quote: string; name: string; place: string; rating: number; source: string }[] = [
  {
    quote:
      "We were the only ones in the pool at sunset. The team set a small table for us by the edge with calamansi sodas. Felt like a private island for an evening.",
    name: "Bea M.",
    place: "Manila",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Booked the Infinity Suite for our anniversary and barely left it. The view does the work — we ordered breakfast on the balcony both mornings.",
    name: "Reggie + Trish C.",
    place: "Quezon City",
    rating: 5,
    source: "Facebook",
  },
  {
    quote:
      "Brought my mother for her seventy-fifth. The whole team remembered her name on day two. Small things, done with intention. That&apos;s the difference.",
    name: "Liza V.",
    place: "Cebu",
    rating: 4,
    source: "Google",
  },
];

export function ProofBlock({ slug }: { slug: string }) {
  // Slug-deterministic shuffle so each room shows a stable but different mix
  const offset = slug.length % STOCK_REVIEWS.length;
  const reviews = [...STOCK_REVIEWS.slice(offset), ...STOCK_REVIEWS.slice(0, offset)];

  return (
    <section className="section surface-cream">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow">Notes from past guests</p>
            <h2 className="font-display text-[30px] md:text-[40px] tracking-[-0.02em] mt-3 leading-[1.1]">
              {site.reviews.rating}<span className="text-marigold">★</span> across {site.reviews.count} reviews on Google &amp; Facebook.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="bg-white rounded-2xl border border-line p-6 flex flex-col"
            >
              <div className="flex items-center gap-1 text-marigold mb-4" aria-label={`${r.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={14} fill={idx < r.rating ? "currentColor" : "none"} />
                ))}
              </div>
              <blockquote className="font-display text-[18px] leading-[1.4] tracking-[-0.005em] text-brand flex-1">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-line text-[13px] text-ash">
                <span className="block text-brand">{r.name}</span>
                <span className="text-ash/80">
                  {r.place} · via {r.source}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
