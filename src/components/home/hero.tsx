"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MessageCircle, MapPin } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";

type Slide = {
  src: string;
  alt: string;
  caption: string;
  /** Headline shown above this slide. The italic span gets the cursive Fraunces. */
  head: { lead: string; accent: string };
  sub: string;
};

const SLIDES: Slide[] = [
  {
    src: "/photos/hero-sunset.jpg",
    alt: "Sunset over Taal Lake from the infinity pool at Highlights",
    caption: "Sunset · From the pool",
    head: { lead: "Where the sun sets", accent: "over the lake." },
    sub: "Forty-five minutes of pink sky, every clear evening, from a pool that looks straight at the volcano.",
  },
  {
    src: "/photos/aerial.jpg",
    alt: "Aerial view of Highlights showing the pool and Taal Lake",
    caption: "The property · From above",
    head: { lead: "Where the family", accent: "gathers." },
    sub: "Three suites, a family room, a pool you won't get out of, and Taal in the distance — yours, by the room or whole.",
  },
  {
    src: "/photos/pool-day.jpg",
    alt: "Infinity pool with Taal Lake on a sunny day",
    caption: "The pool · Sunny day",
    head: { lead: "Where Taal greets", accent: "every morning." },
    sub: "Ninety minutes from Manila, a long way from anywhere else. Wake up to a view you came for.",
  },
];

const DWELL_MS = 9000;
const FADE_S = 2.2;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, DWELL_MS);
    return () => window.clearInterval(t);
  }, [reduceMotion]);

  const slide = SLIDES[active];

  return (
    <section className="relative w-full min-h-[92svh] overflow-hidden bg-brand-darkest text-cream grain">
      {/* Cinematic crossfade */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={slide.src}
          className="absolute inset-0 will-change-[opacity,transform,filter]"
          initial={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1.0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.06, filter: "blur(6px)" }}
          transition={{
            opacity: { duration: FADE_S, ease: [0.32, 0, 0.16, 1] },
            scale: { duration: DWELL_MS / 1000 + FADE_S, ease: [0.16, 1, 0.3, 1] },
            filter: { duration: FADE_S * 0.9, ease: [0.32, 0, 0.16, 1] },
          }}
          aria-hidden={false}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={active === 0}
            sizes="100vw"
            className="object-cover"
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Veil */}
      <div className="hero-veil" aria-hidden />

      {/* Content */}
      <div className="relative z-10 container-wide flex flex-col h-full min-h-[92svh] pt-32 pb-12 md:pt-36 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow-mist"
        >
          Mataas na Kahoy · Batangas · Above Taal Lake
        </motion.p>

        {/* Rotating headline — crossfades with the slide */}
        <h1
          className="font-display mt-5 text-[44px] sm:text-[56px] md:text-[78px] lg:text-[96px] leading-[1.0] tracking-[-0.03em] max-w-[18ch] min-h-[2.1em]"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={slide.head.lead}
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              <Balancer>
                {slide.head.lead}{" "}
                <span className="italic font-light">{slide.head.accent}</span>
              </Balancer>
            </motion.span>
          </AnimatePresence>
        </h1>

        {/* Rotating sub — crossfades with the slide too */}
        <div className="mt-7 max-w-[46ch] text-cream/85 text-[17px] md:text-[19px] leading-[1.55] min-h-[3.3em]">
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.sub}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <Balancer>{slide.sub}</Balancer>
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTAs — static, don't rotate */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/rooms"
            onClick={() => track("cta_click", { id: "hero_browse_rooms", location: "hero" })}
            className="btn btn-lg btn-primary"
          >
            See the rooms <ArrowUpRight size={15} className="arrow" />
          </Link>
          <a
            href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
              `Hi ${site.brand.shortName} — I'd like to ask about a stay.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("wa_click", { location: "hero" })}
            className="btn btn-lg btn-ghost text-cream border-cream/40"
          >
            <MessageCircle size={15} /> WhatsApp us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.85 }}
          className="mt-auto pt-12 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6 text-[12.5px] text-cream/75"
        >
          <InfoRow label="Drive from Manila" value="≈ 90 min" />
          <InfoRow label="Sleeps up to" value="16 guests" />
          <InfoRow label="View" value="Direct Taal" />
          <InfoRow label="Pool" value="Infinity edge" />
        </motion.div>

        {/* Slide indicator */}
        <div className="absolute bottom-6 right-5 md:right-8 flex items-center gap-2.5 text-cream/65 text-[11.5px] tracking-[0.18em] uppercase">
          <AnimatePresence mode="wait">
            <motion.span
              key={slide.caption}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {slide.caption}
            </motion.span>
          </AnimatePresence>
          <div className="flex gap-1.5 ml-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-[2px] transition-all duration-700 ease-out ${
                  active === i ? "w-8 bg-marigold" : "w-3.5 bg-cream/30 hover:bg-cream/60"
                }`}
              />
            ))}
          </div>
        </div>

        <a
          href={site.contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-24 md:top-28 right-5 md:right-8 hidden md:inline-flex items-center gap-2 text-[12px] text-cream/70 hover:text-cream border border-cream/20 hover:border-cream/40 rounded-full pl-3 pr-3.5 py-1.5 backdrop-blur-md bg-brand/15 transition-colors"
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
      <span className="block uppercase tracking-[0.16em] text-[10px] text-cream/55 mb-1">
        {label}
      </span>
      <span className="font-display text-[18px] md:text-[20px] text-cream tracking-[-0.01em]">
        {value}
      </span>
    </div>
  );
}
