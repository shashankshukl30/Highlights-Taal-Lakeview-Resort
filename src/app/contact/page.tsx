import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { ContactForm } from "@/components/shared/contact-form";
import { site } from "@/content/site";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Highlights Taal Lakeview Resort by email, phone, or WhatsApp. We reply within an hour during daylight (PHT).",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-12">
        <div className="container-wide">
          <p className="eyebrow">Reservations &amp; enquiries</p>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[76px] leading-[1.02] tracking-[-0.025em] mt-4 max-w-[20ch]">
            <Balancer>
              Tell us when you&apos;d like to come up.
            </Balancer>
          </h1>
          <p className="mt-5 text-ash text-[16px] md:text-[18px] leading-[1.6] max-w-[52ch]">
            We hold rooms manually. Send a few details and we&apos;ll write back
            within an hour during daylight — usually with two or three options
            and a quiet question or two of our own.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-5 space-y-8">
            <Block icon={<Phone size={16} />} title="By phone">
              <a
                href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                className="font-display text-[26px] md:text-[28px] tracking-[-0.01em] text-brand hover:text-sunset transition-colors"
              >
                {site.contact.phoneDisplayPrimary}
              </a>
              <p className="mt-2 text-ash text-[14px]">Reception · 7:00 AM – 10:00 PM PHT</p>
            </Block>

            <Block icon={<MessageCircle size={16} />} title="WhatsApp (fastest)">
              <a
                href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent("Hi Highlights — I'd like to ask about a stay.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-[26px] md:text-[28px] tracking-[-0.01em] text-brand hover:text-sunset transition-colors"
              >
                {site.contact.whatsappDisplay}
              </a>
              <p className="mt-2 text-ash text-[14px]">{site.contact.hours.whatsapp}</p>
            </Block>

            <Block icon={<Mail size={16} />} title="By email">
              <a
                href={`mailto:${site.contact.email}`}
                className="font-display text-[22px] md:text-[24px] tracking-[-0.01em] text-brand hover:text-sunset transition-colors"
              >
                {site.contact.email}
              </a>
              <p className="mt-1 text-ash text-[13px]">For events: {site.contact.eventsEmail}</p>
            </Block>

            <Block icon={<MapPin size={16} />} title="Find the resort">
              <p className="font-display text-[22px] md:text-[24px] tracking-[-0.01em] text-brand leading-tight">
                {site.contact.address.line1}, {site.contact.address.line2}
                <br />
                {site.contact.address.city}, {site.contact.address.country}
              </p>
              <a
                href={site.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sunset-deep hover:text-sunset text-[13.5px] underline-offset-4 hover:underline"
              >
                Open in Google Maps →
              </a>
            </Block>

            <Block icon={<Clock size={16} />} title="Stay logistics">
              <ul className="text-ash text-[14.5px] leading-[1.7] space-y-1">
                <li>{site.contact.hours.checkIn}</li>
                <li>{site.contact.hours.checkOut}</li>
                <li>Late checkout (1 PM) when occupancy allows.</li>
              </ul>
            </Block>
          </aside>
        </div>
      </section>
    </>
  );
}

function Block({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-line pt-6">
      <p className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ash mb-3">
        <span className="text-sunset">{icon}</span> {title}
      </p>
      {children}
    </div>
  );
}
