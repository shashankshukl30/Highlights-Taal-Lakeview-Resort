"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle, MapPin } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1597040663537-9b50f8a6e2cb?auto=format&fit=crop&w=2400&q=85",
    alt: "Taal Volcano at first light, mist lifting off the lake",
    caption: "First light · Taal Volcano",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=85",
    alt: "An open guest room with floor-to-ceiling glass facing the lake",
    caption: "The Infinity Suite",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85",
    alt: "Garden patio under a fifty-year-old mango tree",
    caption: "The mango canopy",
  },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 6500);
    return () => window.clearInterval(t);
  }, [reduceMotion]);

  return (
    <section className="relative w-full min-h-[92svh] overflow-hidden bg-lake-deepest text-ivory grain">
      {/* Photo crossfade stack */}
      {SLIDES.map((s, i) => (
        <motion.div
          key={s.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: active === i ? 1 : 0 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden={active !== i}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${active === i && !reduceMotion ? "kenburns" : ""}`}
            quality={85}
          />
        </motion.div>
      ))}

      {/* Veil */}
      <div className="hero-veil" aria-hidden />

      {/* Content */}
      <div className="relative z-10 container-wide flex flex-col h-full min-h-[92svh] pt-32 pb-12 md:pt-36 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow-mist"
        >
          Mataas na Kahoy · Batangas · Above Taal
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="font-display mt-5 text-[44px] sm:text-[56px] md:text-[78px] lg:text-[88px] leading-[1.02] tracking-[-0.025em] max-w-[18ch]"
        >
          <Balancer>
            A quiet stay <span className="italic font-light">above the lake.</span>
          </Balancer>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          className="mt-6 max-w-[44ch] text-ivory/85 text-[17px] md:text-[19px] leading-[1.55]"
        >
          <Balancer>
            Five rooms above Taal Volcano. An infinity edge over the caldera, a
            mango-shaded garden, and breakfast served the way your lola would —
            ninety minutes from Manila, a long way from anywhere else.
          </Balancer>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/rooms"
            onClick={() => track("cta_click", { id: "hero_browse_rooms", location: "hero" })}
            className="btn btn-lg btn-primary"
          >
            Browse rooms <ArrowUpRight size={15} className="arrow" />
          </Link>
          <a
            href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
              `Hi ${site.brand.shortName} — I'd like to ask about a stay.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("wa_click", { location: "hero" })}
            className="btn btn-lg btn-ghost text-ivory border-ivory/40"
          >
            <MessageCircle size={15} /> WhatsApp us
          </a>
        </motion.div>

        {/* Bottom info row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-auto pt-12 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6 text-[12.5px] text-ivory/75"
        >
          <InfoRow label="Drive from Manila" value="≈ 90 min" />
          <InfoRow label="Rooms" value="5 only" />
          <InfoRow label="View" value="Direct Taal Volcano" />
          <InfoRow label="Founded" value="2018, family-run" />
        </motion.div>

        {/* Slide indicator */}
        <div className="absolute bottom-6 right-5 md:right-8 flex items-center gap-2.5 text-ivory/65 text-[11.5px] tracking-[0.18em] uppercase">
          <span>{SLIDES[active].caption}</span>
          <div className="flex gap-1.5 ml-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-[2px] transition-all ${
                  active === i ? "w-7 bg-marigold" : "w-3.5 bg-ivory/35 hover:bg-ivory/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Map pin badge — top right */}
        <a
          href={site.contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-24 md:top-28 right-5 md:right-8 hidden md:inline-flex items-center gap-2 text-[12px] text-ivory/70 hover:text-ivory border border-ivory/20 hover:border-ivory/40 rounded-full pl-3 pr-3.5 py-1.5 backdrop-blur-md bg-lake/15 transition-colors"
        >
          <MapPin size={12} /> Open in Maps
        </a>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block uppercase tracking-[0.16em] text-[10px] text-ivory/55 mb-1">
        {label}
      </span>
      <span className="font-display text-[18px] md:text-[20px] text-ivory tracking-[-0.01em]">
        {value}
      </span>
    </div>
  );
}
