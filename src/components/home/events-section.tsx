import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Balancer from "react-wrap-balancer";

const HIGHLIGHTS = [
  { label: "Whole-resort sleeps", value: "16 guests" },
  { label: "Daytime capacity", value: "25+ guests" },
  { label: "Lounge", value: "Yes" },
  { label: "Catering", value: "Vendor list provided" },
];

export function EventsSection() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="eyebrow">Events &amp; Celebrations</p>
            <h2 className="font-display text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.025em] mt-3">
              <Balancer>
                Birthdays, reunions, intimate weddings — held privately above the lake.
              </Balancer>
            </h2>
            <p className="mt-5 text-ash text-[16px] leading-[1.65] max-w-[42ch]">
              Book the whole resort and the property is yours from check-in to
              check-out. The pool, the lounge, the kitchen, the view. We host
              one event at a time, so the day belongs entirely to you.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              {HIGHLIGHTS.map((h) => (
                <li key={h.label} className="border-t border-line pt-3">
                  <span className="block text-[10.5px] tracking-[0.16em] uppercase text-ash mb-1">
                    {h.label}
                  </span>
                  <span className="font-display text-[20px] tracking-[-0.01em] text-brand">
                    {h.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/events" className="btn btn-primary">
                See whole-resort options <ArrowUpRight size={14} className="arrow" />
              </Link>
              <Link href="/contact" className="btn btn-ghost text-brand border-brand/30">
                Enquire for a date
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/photos/aerial.jpg"
                alt="Aerial view of the property — pool, pavilion, Taal Lake beyond"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 cinematic-fade" />
              <div className="absolute bottom-5 left-5 right-5 text-cream">
                <span className="block text-[10.5px] tracking-[0.18em] uppercase opacity-80">
                  The whole property · From above
                </span>
                <p className="font-display text-[20px] md:text-[22px] tracking-[-0.01em] mt-1 max-w-[28ch]">
                  Yours, gate to gate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
