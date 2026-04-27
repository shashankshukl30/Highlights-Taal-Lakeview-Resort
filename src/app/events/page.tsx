import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Heart, Users, Briefcase } from "lucide-react";
import Balancer from "react-wrap-balancer";

export const metadata: Metadata = {
  title: "Events & Celebrations",
  description:
    "Whole-resort buyouts for birthdays, family reunions, intimate weddings, and corporate retreats — held privately above Taal Lake.",
};

const TYPES = [
  {
    id: "reunions",
    icon: Users,
    title: "Birthdays & reunions",
    body: "The reason most groups come up. Sleeps sixteen, dines twenty-five, and has a pool the kids will never want to leave.",
    capacity: "Up to 16 sleeping · 25+ dining",
    body2:
      "Includes whole-resort exclusivity for the night, breakfast for the group, and free parking for six-plus cars.",
  },
  {
    id: "weddings",
    icon: Heart,
    title: "Intimate weddings",
    body: "Lake-facing ceremonies followed by a reception on the pool deck. We host one wedding per weekend so the day is fully yours.",
    capacity: "Up to 30 seated for ceremony",
    body2:
      "Whole-resort buyout for the night before through morning after. We work with wedding coordinators and decorators on the recommended-vendor list.",
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate retreats",
    body: "A clear-headed two-day workshop above the lake. Lounge with sound system, fast Wi-Fi, the kind of quiet that's hard to find in BGC.",
    capacity: "Up to 16 sleeping · 25 working",
    body2:
      "Includes meeting setup, breakfast, and a sundowner on the pool deck. AV and a presentation screen on request.",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-cream">
        <div className="absolute inset-0">
          <Image
            src="/photos/hero-sunset.jpg"
            alt="Sunset over Taal Lake from the resort pool"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand/55" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,46,59,0.30) 0%, rgba(8,46,59,0.45) 50%, rgba(8,46,59,0.85) 100%)",
            }}
            aria-hidden
          />
        </div>
        <div className="relative container-wide pt-40 pb-20 md:pt-48 md:pb-28">
          <p className="eyebrow-mist">Whole-resort buyouts</p>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.025em] mt-4 max-w-[16ch]">
            <Balancer>
              The whole resort. <span className="italic font-light">For your day, only.</span>
            </Balancer>
          </h1>
          <p className="mt-6 text-cream/85 text-[17px] md:text-[19px] leading-[1.55] max-w-[44ch]">
            One celebration at a time. Sixteen rooms-worth of family. The pool,
            the lounge, the kitchen. The lake at golden hour doing the heavy
            lifting.
          </p>
          <Link href="/contact" className="btn btn-lg btn-primary mt-9">
            Enquire about a date <ArrowUpRight size={15} className="arrow" />
          </Link>
        </div>
      </section>

      {/* Three event types */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {TYPES.map((t) => (
              <article id={t.id} key={t.id} className="scroll-mt-28">
                <t.icon size={22} className="text-sunset mb-5" />
                <h2 className="font-display text-[28px] tracking-[-0.015em] leading-[1.1]">
                  {t.title}
                </h2>
                <p className="mt-3 text-ash text-[15.5px] leading-[1.65]">{t.body}</p>
                <div className="mt-5 chip chip-foliage">{t.capacity}</div>
                <p className="mt-4 text-ash text-[14px] leading-[1.65] italic">{t.body2}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The property facts */}
      <section className="surface-cream py-20 md:py-28">
        <div className="container-wide grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/photos/aerial.jpg"
                alt="Aerial view of the property"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="eyebrow">The property</p>
            <h2 className="font-display text-[34px] md:text-[44px] tracking-[-0.025em] mt-3 leading-[1.05]">
              <Balancer>
                Yours, gate to gate.
              </Balancer>
            </h2>
            <ul className="mt-8 space-y-5 max-w-md">
              <Fact label="Whole-resort sleeps" value="16 guests" />
              <Fact label="Daytime gathering" value="25+ guests" />
              <Fact label="Pool" value="Infinity edge · year-round" />
              <Fact label="Kitchen" value="Fully-equipped, group-ready" />
              <Fact label="Lounge" value="Smart TV + sound system" />
              <Fact label="Parking" value="6+ cars on-site" />
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container-narrow">
          <h2 className="font-display text-[32px] md:text-[44px] tracking-[-0.025em] leading-[1.05]">
            <Balancer>We hold one date a weekend. Tell us yours.</Balancer>
          </h2>
          <p className="mt-5 text-ash text-[16px] md:text-[17px] leading-[1.6] max-w-xl mx-auto">
            Send a few details and we&apos;ll write back the same day with
            available dates and a quiet quote.
          </p>
          <Link href="/contact" className="btn btn-lg btn-primary mt-8">
            Enquire about a date <ArrowUpRight size={15} className="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
      <span className="text-[12.5px] tracking-[0.14em] uppercase text-ash">{label}</span>
      <span className="font-display text-[20px] md:text-[22px] tracking-[-0.01em] text-brand text-right">
        {value}
      </span>
    </li>
  );
}
