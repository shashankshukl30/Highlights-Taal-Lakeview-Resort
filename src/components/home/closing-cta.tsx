import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { site } from "@/content/site";

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=2400&q=85"
          alt="Taal Volcano framed at golden hour"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-lake/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,61,63,0.05) 0%, rgba(14,61,63,0.45) 60%, rgba(14,61,63,0.85) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative container-narrow py-32 md:py-44 text-center text-ivory">
        <p className="eyebrow-mist">Reservations open year-round</p>
        <h2 className="font-display text-[36px] md:text-[58px] lg:text-[72px] leading-[1.04] tracking-[-0.025em] mt-4">
          <Balancer>
            Come up to the lake. <span className="italic font-light">We&apos;ll keep your room.</span>
          </Balancer>
        </h2>
        <p className="mt-6 text-ivory/85 text-[17px] md:text-[19px] leading-[1.55] max-w-xl mx-auto">
          <Balancer>
            Five rooms only — most weekends fill three weeks ahead. Reach us by
            email or WhatsApp; we usually reply within an hour during daylight.
          </Balancer>
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="btn btn-lg btn-primary">
            Reserve your stay <ArrowUpRight size={15} className="arrow" />
          </Link>
          <a
            href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
              "Hi Highlights — I'd like to ask about a stay."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-ghost border-ivory/40 text-ivory"
          >
            <MessageCircle size={15} /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
