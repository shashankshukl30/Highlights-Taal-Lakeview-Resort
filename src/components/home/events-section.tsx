import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Balancer from "react-wrap-balancer";

const HIGHLIGHTS = [
  { label: "Seated capacity", value: "120" },
  { label: "Garden lawn", value: "1,200 sqm" },
  { label: "Covered hall", value: "Yes" },
  { label: "In-house catering", value: "Filipino + Western" },
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
                Weddings, reunions, corporate retreats — held privately, above the lake.
              </Balancer>
            </h2>
            <p className="mt-5 text-ash text-[16px] leading-[1.65] max-w-[42ch]">
              Our covered events hall opens onto the garden lawn, and the lawn opens
              onto Taal. We host one event at a time, so the day belongs entirely to
              you. Catering is in-house — Filipino fiesta, plated Western, or a
              long table family-style.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h.label}
                  className="border-t border-line pt-3"
                >
                  <span className="block text-[10.5px] tracking-[0.16em] uppercase text-ash mb-1">
                    {h.label}
                  </span>
                  <span className="font-display text-[20px] tracking-[-0.01em] text-lake">
                    {h.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/events" className="btn btn-primary">
                See the events hall <ArrowUpRight size={14} className="arrow" />
              </Link>
              <Link href="/contact" className="btn btn-ghost text-lake">
                Enquire for a date
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=85"
                alt="A wedding setup on the lakeside lawn at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 cinematic-fade" />
              <div className="absolute bottom-5 left-5 right-5 text-ivory">
                <span className="block text-[10.5px] tracking-[0.18em] uppercase opacity-80">
                  Marie + Jared · December 2025
                </span>
                <p className="font-display text-[20px] md:text-[22px] tracking-[-0.01em] mt-1 max-w-[28ch]">
                  &ldquo;The lake at golden hour did the heavy lifting. We did very little else.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
