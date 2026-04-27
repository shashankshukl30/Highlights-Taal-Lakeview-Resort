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
          src="/photos/twilight.jpg"
          alt="Taal at twilight, the volcano silhouetted against a pink sky"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,46,59,0.10) 0%, rgba(8,46,59,0.50) 60%, rgba(8,46,59,0.90) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative container-narrow py-32 md:py-44 text-center text-cream">
        <p className="eyebrow-mist">Reservations open year-round</p>
        <h2 className="font-display text-[36px] md:text-[58px] lg:text-[72px] leading-[1.04] tracking-[-0.025em] mt-4">
          <Balancer>
            Come up to the lake. <span className="italic font-light">We&apos;ll keep your room.</span>
          </Balancer>
        </h2>
        <p className="mt-6 text-cream/85 text-[17px] md:text-[19px] leading-[1.55] max-w-xl mx-auto">
          <Balancer>
            Three suites and a family room — most weekends fill three weeks ahead.
            Reach us by email or WhatsApp; we usually reply within an hour during
            daylight (PHT).
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
            className="btn btn-lg btn-ghost border-cream/40 text-cream"
          >
            <MessageCircle size={15} /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
