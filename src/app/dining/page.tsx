import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ChefHat, UtensilsCrossed, Coffee, Soup } from "lucide-react";
import Balancer from "react-wrap-balancer";

export const metadata: Metadata = {
  title: "Dining & The Kitchen",
  description:
    "Cook for everyone in our fully-equipped kitchen, or arrange catering. Lipa town and its restaurants are four kilometres down the hill.",
};

const SERVICES = [
  {
    icon: ChefHat,
    title: "Fully-equipped kitchen",
    body: "Gas stove, oven, full-size fridge, knives, pans, the basics already on the counter (oil, salt, pepper, kapeng barako).",
  },
  {
    icon: UtensilsCrossed,
    title: "Indoor + outdoor dining",
    body: "Indoor dining for fourteen seated. Pool-side pavilion for casual lunches. The lounge for late-night cards.",
  },
  {
    icon: Coffee,
    title: "Filipino breakfast (on request)",
    body: "Pandesal, tapa, longganisa, eggs, fresh fruit, kapeng barako. ₱350/person, served between 6:30 and 10:00.",
  },
  {
    icon: Soup,
    title: "Catering for groups",
    body: "Filipino fiesta, plated Western, or a long-table family-style spread. We work with vendors we trust — tell us when you reach out.",
  },
];

export default function DiningPage() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-12">
        <div className="container-wide">
          <p className="eyebrow">The kitchen + lounge</p>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[78px] leading-[1.02] tracking-[-0.025em] mt-4 max-w-[20ch]">
            <Balancer>
              Cook for everyone, or eat in town. Either way, you&apos;ll eat well.
            </Balancer>
          </h1>
          <p className="mt-6 text-ash text-[16px] md:text-[18px] leading-[1.6] max-w-[52ch]">
            The resort is self-catering by default, with a kitchen built so a
            family of fourteen can cook breakfast together without anyone&apos;s
            elbow in anyone&apos;s sinigang. Want catering instead? Just say so.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide grid md:grid-cols-3 gap-3 md:gap-5">
          <div className="relative aspect-[4/3] md:aspect-auto md:row-span-2 rounded-2xl overflow-hidden">
            <Image
              src="/photos/kitchen.jpg"
              alt="The fully-equipped resort kitchen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/photos/lounge.jpg"
              alt="The shared lounge with smart TV and sound system"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/photos/pool-building.jpg"
              alt="Pool deck and the building"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((s) => (
              <div key={s.title} className="border-t border-line pt-6">
                <s.icon size={20} className="text-sunset mb-4" />
                <h3 className="font-display text-[24px] tracking-[-0.015em]">
                  {s.title}
                </h3>
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
              We work with vegetarians, gluten-free guests, and shellfish-free families.
            </Balancer>
          </h2>
          <p className="mt-5 text-ash text-[16px] leading-[1.6] max-w-xl mx-auto">
            If we&apos;re catering, we plan a parallel menu so nobody at the
            table feels like a footnote. If you&apos;re cooking yourselves,
            we&apos;ll point you to the panaderia and the wet market in Lipa
            town for the freshest pickings.
          </p>
          <Link href="/contact" className="btn btn-primary mt-8 inline-flex">
            Mention it in your enquiry <ArrowUpRight size={14} className="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}
