import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Balancer from "react-wrap-balancer";

export function DiningSection() {
  return (
    <section className="section surface-cream">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/photos/kitchen.jpg"
                  alt="The fully-equipped resort kitchen with marble counters"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-12">
                <Image
                  src="/photos/lounge.jpg"
                  alt="The shared lounge with smart TV and sound system"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <p className="eyebrow">The kitchen + lounge</p>
            <h2 className="font-display text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.025em] mt-3">
              <Balancer>
                Cook for everyone. Or don&apos;t — Lipa town is four kilometres down the hill.
              </Balancer>
            </h2>
            <p className="mt-5 text-ash text-[16px] leading-[1.65]">
              The resort has a fully-equipped kitchen — gas stove, oven,
              full-size fridge, the kapeng barako already on the counter — and a
              dining area that seats fourteen. Most of our guests cook a long
              breakfast and head out for dinner.
            </p>
            <p className="mt-4 text-ash text-[15px] leading-[1.65]">
              We can also arrange catering for groups (Filipino fiesta, plated
              Western, or a long-table family-style spread). Tell us when you
              reach out and we&apos;ll send menu options.
            </p>
            <Link
              href="/dining"
              className="btn btn-ghost text-brand mt-8 border-brand/30"
            >
              See the kitchen <ArrowUpRight size={14} className="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
