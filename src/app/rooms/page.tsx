import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { rooms } from "@/content/rooms";
import { formatPHP } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Five rooms, five different stays — from a flagship lake-view suite with a private balcony to a quiet twin under the mango canopy.",
  openGraph: {
    title: "Rooms & Suites · Highlights Taal Lakeview",
    description:
      "Five rooms, five different stays — choose the room that asks for the kind of trip you're taking.",
  },
};

export default function RoomsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16">
        <div className="container-wide">
          <p className="eyebrow mb-4">The five rooms</p>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.025em] max-w-[18ch]">
            <Balancer>
              Choose the room that asks for the kind of trip you&apos;re taking.
            </Balancer>
          </h1>
          <p className="mt-6 text-ash text-[16px] md:text-[18px] leading-[1.6] max-w-[52ch]">
            Each room is different in size, view, and rhythm. Two open onto the
            lake, two onto the garden, one — our flagship — to both. We have
            five rooms total. We hold them carefully.
          </p>
        </div>
      </section>

      <div className="hairline container-wide" />

      {/* Rooms grid */}
      <section className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {rooms.map((room, i) => (
              <Link
                key={room.slug}
                href={`/rooms/${room.slug}`}
                className={`card-room group ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <div
                  className={`media ${i === 0 ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[5/4]"}`}
                >
                  <Image
                    src={room.cover}
                    alt={room.name}
                    fill
                    sizes={
                      i === 0
                        ? "(max-width: 768px) 100vw, 100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover"
                    priority={i < 2}
                  />
                  <span className="absolute top-4 left-4 chip chip-mono bg-ivory/95 text-lake border-line">
                    {formatPHP(room.fromPHP)}
                    <span className="opacity-60 ml-1">/ night</span>
                  </span>
                  {i === 0 && (
                    <span className="absolute top-4 right-4 chip bg-sunset text-ivory border-sunset">
                      Most-booked
                    </span>
                  )}
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-[11.5px] tracking-[0.16em] uppercase text-ash mb-2">
                    {room.shortLabel}
                  </p>
                  <h2 className="font-display text-[26px] md:text-[30px] tracking-[-0.015em] leading-tight group-hover:text-sunset transition-colors">
                    {room.name}
                  </h2>
                  <p className="mt-3 text-[15px] text-ash leading-[1.6] max-w-[44ch]">
                    {room.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="chip chip-bamboo">{room.beds}</span>
                    <span className="chip chip-mist">{room.guests}</span>
                    <span className="chip chip-ink">{room.size}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-sunset-deep group-hover:text-sunset font-medium transition-colors">
                    See the room <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
