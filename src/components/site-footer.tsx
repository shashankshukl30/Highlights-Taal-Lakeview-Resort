"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";

export function SiteFooter() {
  return (
    <footer className="surface-ink relative overflow-hidden mt-24 md:mt-32">
      {/* Decorative top hairline */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-ivory/25 to-transparent" />

      <div className="container-wide pt-20 pb-12 md:pt-24 md:pb-16">
        {/* Top: Brand essay + Newsletter */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
          <div className="lg:col-span-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-ivory hover:text-marigold transition-colors"
            >
              <span
                className="block w-9 h-9"
                style={{
                  backgroundColor: "currentColor",
                  WebkitMaskImage: "url(/logo-mark.svg)",
                  maskImage: "url(/logo-mark.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
              <span className="font-display text-2xl md:text-3xl tracking-[-0.02em]">
                Highlights
              </span>
            </Link>

            <p className="mt-6 text-ivory/75 text-[16px] md:text-[17px] leading-[1.65] max-w-md">
              Five rooms above Taal — a quiet stay an hour from Manila, kept in the
              same family since 2018. We&apos;d love to set a place for you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] text-ivory/70">
              <a
                href={site.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ivory transition-colors"
              >
                <MapPin size={14} />
                {site.contact.address.line1}, {site.contact.address.line2}
              </a>
              <a
                href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                onClick={() => track("tel_click", { location: "footer" })}
                className="inline-flex items-center gap-2 hover:text-ivory transition-colors"
              >
                <Phone size={14} /> {site.contact.phoneDisplayPrimary}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-ivory transition-colors"
              >
                <Mail size={14} /> {site.contact.email}
              </a>
              <a
                href={`https://wa.me/${site.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("wa_click", { location: "footer" })}
                className="inline-flex items-center gap-2 hover:text-ivory transition-colors"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <p className="eyebrow-mist mb-3">The Letter from the Lake</p>
            <h3 className="font-display text-[28px] md:text-[34px] tracking-[-0.02em] leading-[1.1] text-ivory">
              One quiet note a month, when the lake feels worth writing about.
            </h3>
            <FooterNewsletter />
          </div>
        </div>

        {/* Middle: link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 mb-16 pt-12 border-t border-ink-line">
          <FooterColumn title="Visit" links={site.navFooter.visit} />
          <FooterColumn title="Celebrate" links={site.navFooter.celebrate} />
          <FooterColumn title="Explore" links={site.navFooter.explore} />
          <FooterColumn title="Fine print" links={site.navFooter.fineprint} />
        </div>

        {/* Hours strip */}
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-6 text-[13px] text-ivory/70 border-t border-ink-line pt-10 mb-12">
          <div>
            <span className="block uppercase tracking-[0.16em] text-[10.5px] text-ivory/50 mb-1">
              Reception
            </span>
            <span>{site.contact.hours.reception}</span>
          </div>
          <div>
            <span className="block uppercase tracking-[0.16em] text-[10.5px] text-ivory/50 mb-1">
              Stay
            </span>
            <span>
              {site.contact.hours.checkIn} <span className="opacity-50 mx-1">/</span>{" "}
              {site.contact.hours.checkOut}
            </span>
          </div>
          <div>
            <span className="block uppercase tracking-[0.16em] text-[10.5px] text-ivory/50 mb-1">
              WhatsApp
            </span>
            <span>{site.contact.hours.whatsapp}</span>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-ink-line text-[12px] text-ivory/55">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>© {new Date().getFullYear()} Highlights Taal Lakeview Resort.</span>
            <span className="hidden md:inline opacity-50">·</span>
            <span>Designed and built by Digiocular.</span>
          </div>
          <div className="flex items-center gap-5 text-ivory/65">
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors"
              >
                Facebook
              </a>
            )}
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="eyebrow-mist mb-4">{title}</h4>
      <ul className="space-y-2.5 text-[14px]">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-ivory/75 hover:text-ivory transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Couldn't sign you up. Try again.");
      setStatus("success");
      track("newsletter_submit", {
        success: true,
        source: "footer",
        already_on_list: !!data?.alreadyOnList,
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
      track("newsletter_submit", { success: false, source: "footer" });
    }
  }

  if (status === "success") {
    return (
      <p className="mt-6 text-ivory/85 text-[15px]">
        You&apos;re on the list. We&apos;ll write when the lake is worth writing about.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6">
      <div className="flex flex-col sm:flex-row gap-2 max-w-md">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className="flex-1 bg-ivory/5 border border-ivory/20 rounded-full px-5 py-3 text-[14.5px] text-ivory placeholder:text-ivory/40 focus:outline-none focus:ring-2 focus:ring-marigold/40 focus:border-marigold transition"
          aria-label="Email address"
          aria-invalid={status === "error"}
        />
        <button
          type="submit"
          disabled={status === "submitting" || !email}
          className="btn btn-sm bg-ivory text-lake hover:bg-white disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Subscribe"}
          {status !== "submitting" && <ArrowUpRight size={13} className="arrow" />}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-2 text-[12.5px] text-marigold">
          {error}
        </p>
      )}
      <p className="mt-3 text-[11.5px] text-ivory/55 leading-relaxed max-w-sm">
        One letter a month. No promotions, no spam. Unsubscribe in one click.
      </p>
    </form>
  );
}
