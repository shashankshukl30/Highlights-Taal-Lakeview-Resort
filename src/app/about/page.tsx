import Image from "next/image";
import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Highlights Taal Lakeview Resort sits on the southern hills above Taal Lake — three suites, a family room, and one of the closest direct lake views in Batangas.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-12">
        <div className="container-narrow">
          <p className="eyebrow">Our story</p>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[78px] leading-[1.02] tracking-[-0.025em] mt-4">
            <Balancer>
              The southern side of Taal — <span className="italic font-light">closer than the rim, quieter than the strip.</span>
            </Balancer>
          </h1>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-narrow">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-12">
            <Image
              src="/photos/aerial.jpg"
              alt="Aerial view of the resort with Taal Lake stretching out below"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <div className="prose-article">
            <p>
              Most people who&apos;ve seen Taal have seen it from the Tagaytay
              rim. The view is famous and it&apos;s easy to understand why. But
              the rim is ten kilometres of hotels and viewpoints and tour buses,
              and the lake itself feels far away.
            </p>
            <p>
              Highlights sits on the southern side, in Mataas na Kahoy, on the
              hills above Lipa. From here, the lake is closer. The cone is
              clearer. And on most weekday mornings — even most weekend
              mornings — there is no one else here.
            </p>
            <blockquote>
              We didn&apos;t set out to build the biggest resort on the lake. We
              set out to build the one with the best view, and to keep it small
              enough that the view stays the loudest thing in the room.
            </blockquote>
            <p>
              The resort has three suites and a family room — sixteen guests at
              full capacity, twenty-five for daytime gatherings. The pool is
              infinity-edge, facing the cone. There&apos;s a fully-equipped
              kitchen, a lounge with a sound system, indoor and outdoor dining
              areas, and parking for the cars that bring the whole family up
              from Manila.
            </p>
            <p>
              We&apos;re a Filipino family, and we run the place like a Filipino
              family does — with a hand on the kettle and a name remembered. If
              you bring kids, we&apos;ll have a juice ready. If you bring a
              celebration, we&apos;ll help find the cake. We&apos;d love for you
              to come up.
            </p>
          </div>
        </div>
      </section>

      <section
        id="grounds"
        className="surface-cream py-20 md:py-28 scroll-mt-28"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="eyebrow">The grounds</p>
              <h2 className="font-display text-[34px] md:text-[44px] tracking-[-0.025em] leading-[1.05] mt-3">
                <Balancer>
                  An infinity pool, a covered pavilion, and a view that finishes the rest.
                </Balancer>
              </h2>
              <ul className="mt-8 space-y-3 text-ash text-[15.5px] leading-[1.65] list-marigold">
                <li>The infinity pool — facing the cone, swimmable year-round.</li>
                <li>The covered pavilion — pool-side dining for up to twenty.</li>
                <li>The lounge — smart TV, sound system, the kind of room where the family ends up after dinner.</li>
                <li>The kitchen — fully-equipped: gas stove, oven, fridge, the basics already on the counter.</li>
                <li>The grounds — gated, parking for six-plus cars, lit pathways at night.</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/photos/pool-day.jpg"
                  alt="Infinity pool with Taal Lake on a sunny day"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-12">
                <Image
                  src="/photos/curtain-pool.jpg"
                  alt="The view of the pool and lake from a guest room"
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
              <li
                key={p}
                className="border-y border-line py-6 text-[13px] tracking-[0.14em] uppercase text-ash"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
