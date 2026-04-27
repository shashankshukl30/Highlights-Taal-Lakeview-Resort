import { site } from "@/content/site";

export function TrustStrip() {
  const items = site.partners;
  return (
    <section
      aria-label="Press and recognition"
      className="surface-cream border-y border-line py-6 overflow-hidden"
    >
      <div className="marquee-mask">
        <div className="marquee-track items-center text-[12.5px] tracking-[0.16em] uppercase text-brand/65">
          {[...items, ...items, ...items].map((item, i) => (
            <span key={i} className="px-8 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
