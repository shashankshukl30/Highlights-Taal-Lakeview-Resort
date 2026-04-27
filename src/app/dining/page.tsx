import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Coffee, UtensilsCrossed, Wine, Soup } from "lucide-react";
import Balancer from "react-wrap-balancer";

export const metadata: Metadata = {
  title: "Dining",
  description:
    "Filipino breakfast served the way your lola would. Lunch and dinner à la carte. The garden kitchen, sundowners, and a long table for celebrations.",
};

const SERVICES = [
  {
    icon: Coffee,
    title: "Filipino breakfast",
    body: "Pandesal, tapa, longganisa, itlog na pula, fresh fruit, kapeng barako. 6:30–10:00 on the patio or in your room.",
  },
  {
    icon: UtensilsCrossed,
    title: "Lunch & dinner",
    body: "À la carte from 11:00 to 21:00. Sinigang, kare-kare, grilled lake tilapia, and the things you'd cook at home.",
  },
  {
    icon: Wine,
    title: "Sundowner deck",
    body: "Pool-side from 16:00. Calamansi sodas, San Miguel, and one cocktail menu Tita Aida changes with the seasons.",
  },
  {
    icon: Soup,
    title: "Long table",
    body: "On request, family-style for groups of 8+. The kitchen sets one menu, plated in the centre, eaten the way it should be.",
  },
];

export default function DiningPage() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-12">
        <div className="container-wide">
          <p className="eyebrow">The kitchen</p>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[78px] leading-[1.02] tracking-[-0.025em] mt-4 max-w-[18ch]">
            <Balancer>
              Filipino food, served the way your lola would.
            </Balancer>
          </h1>
          <p className="mt-6 text-ash text-[16px] md:text-[18px] leading-[1.6] max-w-[52ch]">
            Tita Aida runs the kitchen. The menu is small on purpose — six
            mains for lunch, eight for dinner, two specials a week — but
            everything on it is made from scratch and from the people we know.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide grid md:grid-cols-2 gap-3 md:gap-5">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551218372-a8789b81b253?auto=format&fit=crop&w=1800&q=85"
              alt="Filipino breakfast spread on the patio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-3 md:gap-5">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85"
                alt="Hot kapeng barako"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1565895405129-481af770aab1?auto=format&fit=crop&w=1400&q=85"
                alt="Long-table dinner"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((s) => (
              <div key={s.title} className="border-t border-line pt-6">
                <s.icon size={20} className="text-sunset mb-4" />
                <h3 className="font-display text-[24px] tracking-[-0.015em]">{s.title}</h3>
                <p className="mt-2 text-ash text-[15px] leading-[1.65]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-cream py-20 md:py-28">
        <div className="container-narrow text-center">
          <p className="eyebrow">A note on dietary needs</p>
          <h2 className="font-display text-[28px] md:text-[40px] tracking-[-0.02em] mt-3 leading-[1.1]">
            <Balancer>
              We cook for vegetarians, gluten-free guests, and shellfish-free families with notice.
            </Balancer>
          </h2>
          <p className="mt-5 text-ash text-[16px] leading-[1.6] max-w-xl mx-auto">
            Tell us when you book — Tita Aida builds a quiet parallel menu so
            nobody at the table feels like a footnote.
          </p>
          <Link href="/contact" className="btn btn-primary mt-8 inline-flex">
            Mention it in your enquiry <ArrowUpRight size={14} className="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}
