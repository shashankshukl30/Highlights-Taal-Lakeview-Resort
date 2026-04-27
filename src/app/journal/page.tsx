import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { journalPosts } from "@/content/journal";
import { formatDateLong } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from above the lake. Quiet observations from the kitchen, the garden, and the people who walk through Highlights.",
};

export default function JournalPage() {
  const [first, ...rest] = journalPosts;
  return (
    <>
      <section className="pt-36 md:pt-44 pb-12">
        <div className="container-wide">
          <p className="eyebrow">The Journal</p>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[78px] leading-[1.02] tracking-[-0.025em] mt-4 max-w-[16ch]">
            <Balancer>
              Notes from <span className="italic font-light">above the lake.</span>
            </Balancer>
          </h1>
          <p className="mt-5 text-ash text-[16px] md:text-[18px] leading-[1.6] max-w-[52ch]">
            Quiet observations from the kitchen, the garden, and the people
            who walk through Highlights. Posted slowly. Read whenever.
          </p>
        </div>
      </section>

      {first && (
        <section className="pb-16">
          <div className="container-wide">
            <Link
              href={`/journal/${first.slug}`}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={first.cover}
                  alt={first.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[12px] tracking-[0.14em] uppercase text-ash mb-4">
                  <span className="chip chip-bamboo">{first.category}</span>
                  <span>{formatDateLong(first.date)}</span>
                  <span className="opacity-50">·</span>
                  <span>{first.readMin} min read</span>
                </div>
                <h2 className="font-display text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] group-hover:text-sunset transition-colors">
                  <Balancer>{first.title}</Balancer>
                </h2>
                <p className="mt-5 text-ash text-[16px] leading-[1.6] max-w-[48ch]">
                  {first.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-1.5 text-sunset-deep group-hover:text-sunset font-medium transition-colors">
                  Read the post →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {rest.map((p) => (
              <Link key={p.slug} href={`/journal/${p.slug}`} className="card-editorial group">
                <div className="media">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="pt-5">
                  <div className="flex items-center gap-3 text-[11.5px] tracking-[0.14em] uppercase text-ash mb-3">
                    <span>{p.category}</span>
                    <span className="opacity-50">·</span>
                    <span>{formatDateLong(p.date)}</span>
                  </div>
                  <h3 className="font-display text-[26px] tracking-[-0.015em] leading-[1.15] group-hover:text-sunset transition-colors">
                    <Balancer>{p.title}</Balancer>
                  </h3>
                  <span className="underline-grow mt-4 block" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
