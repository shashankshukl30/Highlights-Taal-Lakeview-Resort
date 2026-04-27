import Image from "next/image";
import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Eight years above the lake. The story of how Highlights came to be — and how we've kept it small on purpose.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-12">
        <div className="container-narrow">
          <p className="eyebrow">Our story</p>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[78px] leading-[1.02] tracking-[-0.025em] mt-4">
            <Balancer>
              Eight years above the lake. <span className="italic font-light">Five rooms, by choice.</span>
            </Balancer>
          </h1>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-narrow">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2200&q=85"
              alt="The grounds at Highlights — pool, garden, mango canopy"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <div className="prose-article">
            <p>
              We bought the land in 2017. There was a single-storey farmhouse on it,
              three mango trees, and a view that we couldn&apos;t quite believe nobody
              else had built on. Our family had been driving past it for years on the
              way to weekends in Lipa, and one Sunday we asked the neighbour whose it
              was. The answer was complicated. The negotiation took six months.
            </p>
            <p>
              We opened in March 2018 with three rooms. The Infinity Suite came in
              the second year. The Loft, which we always meant to build, took until
              2021. We&apos;ve added the events hall, the pool deck, and the garden
              kitchen — but we&apos;ve never gone past five rooms, and we won&apos;t.
            </p>
            <blockquote>
              The point of this place is that the lake is the loudest thing
              you hear at six in the morning. You don&apos;t get that with twenty rooms.
            </blockquote>
            <p>
              The team is small. Mang Tonyo, the gardener, has been here since we
              broke ground. Tita Aida runs the kitchen — she taught us most of the
              breakfast we serve, and most of what we know about cooking sinigang
              the right way. Reception rotates between two cousins on opposite
              weekends.
            </p>
            <p>
              We don&apos;t have a brand strategy. We have a lake, a kitchen, and the
              kind of guests who keep coming back. We&apos;d love for you to be one of
              them.
            </p>
          </div>
        </div>
      </section>

      <section id="grounds" className="surface-cream py-20 md:py-28 scroll-mt-28">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="eyebrow">The grounds</p>
              <h2 className="font-display text-[34px] md:text-[44px] tracking-[-0.025em] leading-[1.05] mt-3">
                <Balancer>1.4 hectares of garden, three mango trees older than the resort, one infinity edge.</Balancer>
              </h2>
              <ul className="mt-8 space-y-3 text-ash text-[15.5px] leading-[1.65] list-marigold">
                <li>The pool deck — heated in cool months, with a sundowner menu from four onwards.</li>
                <li>The mango canopy — three trees, fifty-plus years old, fruiting April–June.</li>
                <li>The events lawn — opens onto the lake, holds up to 120 seated.</li>
                <li>The kitchen garden — herbs, calamansi, a single coffee shrub Mang Tonyo babies.</li>
                <li>The infinity edge — concrete and basalt, cantilevered over the slope. The view, finished.</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1502780402662-acc01917c84a?auto=format&fit=crop&w=1400&q=85"
                  alt="Mango canopy"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-12">
                <Image
                  src="https://images.unsplash.com/photo-1576675784430-3995cea38a73?auto=format&fit=crop&w=1400&q=85"
                  alt="Pool deck"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="press" className="section">
        <div className="container-wide">
          <p className="eyebrow text-center">In the press</p>
          <h2 className="font-display text-[30px] md:text-[42px] text-center tracking-[-0.02em] mt-3 max-w-2xl mx-auto">
            <Balancer>
              Quietly mentioned by the people who write about quiet places.
            </Balancer>
          </h2>
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {site.partners.map((p) => (
              <li key={p} className="border-y border-line py-6 text-[13px] tracking-[0.14em] uppercase text-ash">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
