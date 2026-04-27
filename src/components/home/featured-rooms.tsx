import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { rooms } from "@/content/rooms";
import { formatPHP } from "@/lib/utils";

export function FeaturedRooms() {
  const featured = rooms.slice(0, 4);

  return (
    <section className="section surface-cream">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-[36rem]">
            <p className="eyebrow">The five rooms</p>
            <h2 className="font-display text-[34px] md:text-[44px] lg:text-[54px] leading-[1.05] tracking-[-0.025em] mt-3">
              Each one different. <span className="italic font-light">All five quiet.</span>
            </h2>
            <p className="mt-5 text-ash text-[16px] leading-[1.6] max-w-[40ch]">
              We have one suite, one loft, one family cabin, and two garden
              rooms. Take a look — they each ask for a different kind of stay.
            </p>
          </div>
          <Link
            href="/rooms"
            className="btn btn-ink self-start md:self-end"
          >
            See all rooms <ArrowUpRight size={14} className="arrow" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {featured.map((room) => (
            <Link
              key={room.slug}
              href={`/rooms/${room.slug}`}
              className="card-room group"
            >
              <div className="media aspect-[4/5]">
                <Image
                  src={room.cover}
                  alt={room.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 chip chip-mono bg-ivory/90 text-lake border-line">
                  {formatPHP(room.fromPHP)}
                  <span className="opacity-60 ml-1">/ night</span>
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11.5px] tracking-[0.16em] uppercase text-ash mb-2">
                  {room.shortLabel}
                </p>
                <h3 className="font-display text-[22px] tracking-[-0.015em] leading-tight group-hover:text-sunset transition-colors">
                  {room.name}
                </h3>
                <p className="mt-2 text-[14px] text-ash leading-[1.55] line-clamp-2">
                  {room.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] text-sunset-deep group-hover:text-sunset font-medium transition-colors">
                  See the room <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
