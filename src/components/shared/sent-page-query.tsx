"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { rooms, getRoomBySlug, type Room } from "@/content/rooms";
import { site } from "@/content/site";
import { formatPHP } from "@/lib/utils";

export function SentPageContent({ allRooms }: { allRooms: Room[] }) {
  const sp = useSearchParams();
  const slug = sp?.get("room") || null;
  const room = slug ? getRoomBySlug(slug) : undefined;
  const cross = allRooms.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="pt-36 md:pt-44 pb-16">
        <div className="container-narrow text-center">
          <CheckCircle2 size={48} className="mx-auto text-sunset" aria-hidden />
          <p className="eyebrow mt-6">Thanks for writing</p>
          <h1 className="font-display text-[40px] md:text-[60px] lg:text-[72px] leading-[1.04] tracking-[-0.025em] mt-4">
            <Balancer>Your enquiry is in. We&apos;ll write back shortly.</Balancer>
          </h1>
          <p className="mt-5 text-ash text-[16px] md:text-[18px] leading-[1.6] max-w-[44ch] mx-auto">
            During daylight (PHT), expect a reply within an hour. For something
            faster, WhatsApp is the kindest channel.
          </p>
          {room && (
            <p className="mt-6 inline-flex items-center gap-2 chip chip-bamboo">
              Enquiry · {room.name}
            </p>
          )}
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${site.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={14} /> Continue on WhatsApp
            </a>
            <Link href="/" className="btn btn-ghost text-lake border-line">
              Back to the lake
            </Link>
          </div>
        </div>
      </section>

      <section className="surface-cream py-20">
        <div className="container-wide">
          <div className="text-center mb-10">
            <p className="eyebrow">While you wait</p>
            <h2 className="font-display text-[28px] md:text-[36px] tracking-[-0.02em] mt-3">
              The other rooms, if you&apos;re curious.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {cross.map((r) => (
              <Link key={r.slug} href={`/rooms/${r.slug}`} className="card-room group">
                <div className="media aspect-[4/5]">
                  <Image
                    src={r.cover}
                    alt={r.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 chip chip-mono bg-ivory/95 text-lake border-line">
                    {formatPHP(r.fromPHP)}
                    <span className="opacity-60 ml-1">/ night</span>
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-[20px] tracking-[-0.015em] group-hover:text-sunset transition-colors">
                    {r.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-[12.5px] text-sunset-deep">
                    See the room <ArrowUpRight size={12} />
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
