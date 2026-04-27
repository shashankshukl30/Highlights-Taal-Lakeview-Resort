"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setActive(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section
      className="relative bg-brand-darkest overflow-hidden"
      aria-label="Room photo gallery"
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((src, i) => (
            <div key={src} className="relative shrink-0 w-full aspect-[16/10] md:aspect-[21/9]">
              <Image
                src={src}
                alt={`${alt} — photo ${i + 1}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
                quality={88}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        onClick={() => embla?.scrollPrev()}
        aria-label="Previous photo"
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/90 hover:bg-cream text-brand inline-flex items-center justify-center transition-colors backdrop-blur-sm"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => embla?.scrollNext()}
        aria-label="Next photo"
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/90 hover:bg-cream text-brand inline-flex items-center justify-center transition-colors backdrop-blur-sm"
      >
        <ChevronRight size={18} />
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 chip chip-mono bg-brand/55 backdrop-blur-md text-cream border-cream/20">
        <span className="tabular-num">{String(active + 1).padStart(2, "0")}</span>
        <span className="opacity-50">/</span>
        <span className="tabular-num opacity-70">{String(images.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
