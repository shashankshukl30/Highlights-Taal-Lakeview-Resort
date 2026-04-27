import { site } from "@/content/site";

export function Testimonials() {
  return (
    <section className="section surface-ink relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 80% 20%, rgba(243,184,85,0.18) 0%, transparent 70%), radial-gradient(50% 50% at 10% 90%, rgba(224,122,95,0.18) 0%, transparent 75%)",
        }}
      />
      <div className="container-wide relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-[36rem]">
            <p className="eyebrow-mist">{site.reviews.rating}★ across {site.reviews.count} reviews</p>
            <h2 className="font-display text-[34px] md:text-[44px] lg:text-[54px] leading-[1.05] tracking-[-0.025em] mt-3 text-ivory">
              Notes left by the people <span className="italic font-light">who&apos;ve woken up here.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[12.5px] text-ivory/60 tracking-[0.14em] uppercase">
            <span>Google · Facebook</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {site.testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-ink-line bg-lake-soft/40 backdrop-blur-sm p-6 md:p-7 flex flex-col"
            >
              <div
                aria-hidden
                className="text-[36px] leading-none font-display text-marigold/70 mb-2"
              >
                &ldquo;
              </div>
              <blockquote className="font-display text-[19px] md:text-[20.5px] leading-[1.35] tracking-[-0.01em] text-ivory">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink-line text-[13px] text-ivory/70">
                <span className="block text-ivory">{t.name}</span>
                <span className="text-ivory/55">{t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={site.reviews.google}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] text-marigold hover:text-ivory underline-offset-4 hover:underline transition-colors"
          >
            Read every review on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
