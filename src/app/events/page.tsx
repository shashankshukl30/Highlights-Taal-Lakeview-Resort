import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Heart, Users, Briefcase } from "lucide-react";
import Balancer from "react-wrap-balancer";

export const metadata: Metadata = {
  title: "Events & Celebrations",
  description:
    "Weddings, family reunions, corporate retreats — held privately above Taal. Covered events hall opens onto the garden lawn. Up to 120 seated.",
};

const TYPES = [
  {
    id: "weddings",
    icon: Heart,
    title: "Weddings",
    body: "Intimate, lake-facing ceremonies followed by a reception on the lawn. We host one wedding per weekend so the day is fully yours.",
    capacity: "Up to 120 seated",
    body2: "Includes whole-resort buyout for the night, ceremony setup, dinner, and breakfast for the wedding party.",
  },
  {
    id: "reunions",
    icon: Users,
    title: "Family reunions",
    body: "Three nights, twelve cousins, a long table at sunset. Whole-resort buyouts are most welcome on weekdays.",
    capacity: "Up to 16 sleeping · 60 dining",
    body2: "Includes all five rooms, breakfast every morning, and one curated long-table dinner.",
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate retreats",
    body: "A clear-headed two-day workshop above the lake. Covered events hall, fast Wi-Fi, the kind of quiet that's hard to find in Manila.",
    capacity: "Up to 30 working · 22 sleeping",
    body2: "Includes meeting setup, three meals daily, and a sundowner on the deck. Photo agenda available on request.",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-ivory">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=85"
            alt="Wedding setup on the lakeside lawn"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-lake/55" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,61,63,0.30) 0%, rgba(14,61,63,0.40) 50%, rgba(14,61,63,0.85) 100%)",
            }}
            aria-hidden
          />
        </div>
        <div className="relative container-wide pt-40 pb-20 md:pt-48 md:pb-28">
          <p className="eyebrow-mist">Events &amp; private celebrations</p>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.025em] mt-4 max-w-[16ch]">
            <Balancer>
              The whole resort. <span className="italic font-light">For your day, only.</span>
            </Balancer>
          </h1>
          <p className="mt-6 text-ivory/85 text-[17px] md:text-[19px] leading-[1.55] max-w-[44ch]">
            One event at a time. Five rooms for the bridal party or family.
            A covered hall that opens onto the lawn. The lake at golden hour
            doing the heavy lifting.
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
                <div className="mt-5 chip chip-bamboo">{t.capacity}</div>
                <p className="mt-4 text-ash text-[14px] leading-[1.65] italic">
                  {t.body2}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The hall facts */}
      <section className="surface-cream py-20 md:py-28">
        <div className="container-wide grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=85"
                alt="The covered events hall opening onto the lawn"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="eyebrow">The events hall</p>
            <h2 className="font-display text-[34px] md:text-[44px] tracking-[-0.025em] mt-3 leading-[1.05]">
              <Balancer>
                Covered, lake-facing, and ready when you are.
              </Balancer>
            </h2>

            <ul className="mt-8 space-y-5 max-w-md">
              <Fact label="Seated capacity" value="120" />
              <Fact label="Cocktail capacity" value="180" />
              <Fact label="Garden lawn" value="≈ 1,200 sqm" />
              <Fact label="Hall dimensions" value="20 × 12 m, double-height" />
              <Fact label="Catering" value="In-house · Filipino + Western" />
              <Fact label="Power & A/V" value="Dedicated genset, full A/V on request" />
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container-narrow">
          <h2 className="font-display text-[32px] md:text-[44px] tracking-[-0.025em] leading-[1.05]">
            <Balancer>
              We hold one date a weekend. Tell us yours.
            </Balancer>
          </h2>
          <p className="mt-5 text-ash text-[16px] md:text-[17px] leading-[1.6] max-w-xl mx-auto">
            Send a few details and Aira (events) will write back the same day with
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
      <span className="font-display text-[20px] md:text-[22px] tracking-[-0.01em] text-lake text-right">
        {value}
      </span>
    </li>
  );
}
