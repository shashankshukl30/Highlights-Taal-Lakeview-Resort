import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Balancer from "react-wrap-balancer";

export function DiningSection() {
  return (
    <section className="section surface-cream">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551218372-a8789b81b253?auto=format&fit=crop&w=1400&q=85"
                  alt="Filipino breakfast served on the patio: pandesal, tapa, longganisa, calamansi"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-12">
                <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85"
                  alt="Hot kapeng barako being poured from a clay pot"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow">The kitchen</p>
            <h2 className="font-display text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.025em] mt-3">
              <Balancer>
                Filipino breakfast, served the way your <span className="italic font-light">lola</span> would.
              </Balancer>
            </h2>
            <p className="mt-5 text-ash text-[16px] leading-[1.65]">
              Pandesal still warm from the oven at six. Tapa cured the night
              before. Longganisa from the panaderia in Lipa town, four kilometres
              down the hill. Itlog na pula on the side. Calamansi, halved, three
              to a plate. Kapeng barako you can smell from the patio.
            </p>
            <p className="mt-4 text-ash text-[15px] leading-[1.65] italic">
              Lunch and dinner are à la carte from 11 to 9 — sinigang, kare-kare,
              grilled tilapia from the lake, the things you&apos;d cook at home if
              you had the time.
            </p>
            <Link
              href="/dining"
              className="btn btn-ghost text-lake mt-8"
            >
              See the menu <ArrowUpRight size={14} className="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
