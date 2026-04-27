import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, BedDouble, Maximize2, Users, Eye } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { rooms, getRoomBySlug, getRelatedRooms } from "@/content/rooms";
import { site } from "@/content/site";
import { formatPHP } from "@/lib/utils";
import { Gallery } from "@/components/room/gallery";
import { BookingCard } from "@/components/room/booking-card";
import { ProofBlock } from "@/components/room/proof-block";
import { FAQ } from "@/components/room/faq";
import { ROOM_FAQS } from "@/content/faq";
import { StickyMobileCTA } from "@/components/room/sticky-mobile-cta";
import { breadcrumbLD, faqLD, jsonldScript } from "@/lib/jsonld";

export async function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: room.name,
    description: room.blurb,
    openGraph: {
      title: `${room.name} · ${site.brand.shortName}`,
      description: room.blurb,
      images: [room.cover],
      type: "website",
    },
  };
}

export default async function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();
  const related = getRelatedRooms(slug, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonldScript(
          breadcrumbLD([
            { name: "Home", href: "/" },
            { name: "Rooms", href: "/rooms" },
            { name: room.name, href: `/rooms/${room.slug}` },
          ])
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonldScript(faqLD(ROOM_FAQS))}
      />

      {/* Gallery hero */}
      <div className="pt-24 md:pt-28">
        <Gallery images={room.gallery} alt={room.name} />
      </div>

      {/* Title block */}
      <section className="pt-12 md:pt-16">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase text-ash mb-5">
            <Link href="/" className="hover:text-lake">Home</Link>
            <span className="opacity-50">/</span>
            <Link href="/rooms" className="hover:text-lake">Rooms</Link>
            <span className="opacity-50">/</span>
            <span className="text-lake">{room.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">{room.shortLabel}</p>
              <h1 className="font-display text-[40px] sm:text-[52px] md:text-[68px] lg:text-[78px] leading-[1.02] tracking-[-0.025em] max-w-[16ch]">
                <Balancer>{room.name}</Balancer>
              </h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <FactPill icon={<Eye size={14} />} label={room.view} />
              <FactPill icon={<BedDouble size={14} />} label={room.beds} />
              <FactPill icon={<Users size={14} />} label={room.guests} />
              <FactPill icon={<Maximize2 size={14} />} label={room.size} />
            </div>
          </div>
        </div>
      </section>

      {/* Body + Booking card */}
      <section className="pt-10 md:pt-14 pb-16 md:pb-20">
        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 xl:col-span-8 space-y-12">
            {/* Lead body */}
            <div className="space-y-5 text-[17px] md:text-[18px] leading-[1.7] text-lake/85 max-w-[58ch]">
              {room.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6 border-y border-line py-10">
              {room.highlights.map((h) => (
                <div key={h.title}>
                  <h3 className="font-display text-[22px] tracking-[-0.015em] leading-tight">
                    {h.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] text-ash leading-[1.6]">{h.copy}</p>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
              <div>
                <h3 className="eyebrow mb-4">In the room</h3>
                <ul className="space-y-2 list-check text-[15px] text-lake/85">
                  {room.amenities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="eyebrow mb-4">What&apos;s included in the rate</h3>
                <ul className="space-y-2 list-check text-[15px] text-lake/85">
                  {room.inclusions.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                {room.notIncluded && room.notIncluded.length > 0 && (
                  <>
                    <h3 className="eyebrow mt-6 mb-4">Not included</h3>
                    <ul className="space-y-2 list-cross text-[14px]">
                      {room.notIncluded.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-4">
            <BookingCard room={room} />
          </div>
        </div>
      </section>

      <ProofBlock slug={room.slug} />
      <FAQ />

      {/* Related rooms */}
      <section className="section">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">If this isn&apos;t quite the room</p>
              <h2 className="font-display text-[30px] md:text-[40px] tracking-[-0.02em] mt-3 leading-[1.1]">
                The other four are right here.
              </h2>
            </div>
            <Link href="/rooms" className="btn btn-ink self-start md:self-end">
              See all rooms <ArrowUpRight size={14} className="arrow" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {related.map((r) => (
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
                  <p className="text-[11.5px] tracking-[0.16em] uppercase text-ash mb-1.5">
                    {r.shortLabel}
                  </p>
                  <h3 className="font-display text-[22px] tracking-[-0.015em] group-hover:text-sunset transition-colors">
                    {r.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StickyMobileCTA room={room} />
    </>
  );
}

function FactPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[13px] text-lake/75 border border-line bg-ivory rounded-full px-3 py-1.5">
      <span className="text-sunset">{icon}</span>
      {label}
    </span>
  );
}
