"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Phone, MessageCircle, Printer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import type { Room } from "@/content/rooms";
import { site } from "@/content/site";
import { formatPHP } from "@/lib/utils";
import { track } from "@/lib/analytics";

export function BookingCard({ room }: { room: Room }) {
  const [enquireOpen, setEnquireOpen] = useState(false);
  return (
    <aside
      className="lg:sticky lg:top-28 self-start"
      data-print-hide
    >
      <div className="bg-white border border-line rounded-2xl p-6 shadow-[0_30px_60px_-30px_rgba(14,61,63,0.18)]">
        <div className="flex items-baseline justify-between mb-1">
          <span className="text-[10.5px] tracking-[0.16em] uppercase text-ash">From</span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-bamboo">{room.shortLabel}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-[40px] md:text-[44px] tracking-[-0.02em] text-lake tabular-num">
            {formatPHP(room.fromPHP)}
          </span>
          <span className="text-ash text-[13px]">{room.perLabel}</span>
        </div>
        <p className="mt-2 text-[13px] text-ash">
          Filipino breakfast included · weekend rates apply Fri–Sun.
        </p>

        <div className="my-5 hairline" />

        <ul className="space-y-2 text-[13.5px] text-lake/80">
          <li className="flex justify-between">
            <span className="text-ash">View</span>
            <span className="text-lake">{room.view}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-ash">Bed</span>
            <span className="text-lake">{room.beds}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-ash">Sleeps</span>
            <span className="text-lake">{room.guests}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-ash">Size</span>
            <span className="text-lake">{room.size}</span>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => {
            track("enquiry_open", { source: "booking_card", room: room.slug });
            setEnquireOpen(true);
          }}
          className="btn btn-primary w-full justify-center mt-6"
        >
          Check availability <ArrowUpRight size={14} className="arrow" />
        </button>
        <a
          href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
            `Hi Highlights — I'd like to enquire about the ${room.name}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("wa_click", { location: "booking_card", room: room.slug })}
          className="btn btn-whatsapp w-full justify-center mt-2"
        >
          <MessageCircle size={14} /> WhatsApp us
        </a>
        <a
          href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
          onClick={() => track("tel_click", { location: "booking_card", room: room.slug })}
          className="btn btn-ghost text-lake w-full justify-center mt-2 border-line"
        >
          <Phone size={14} /> {site.contact.phoneDisplayPrimary}
        </a>

        <button
          type="button"
          onClick={() => {
            track("itinerary_download", { room: room.slug });
            window.print();
          }}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 text-[12.5px] text-ash hover:text-lake transition-colors"
        >
          <Printer size={13} /> Save room page (PDF)
        </button>
      </div>

      <p className="mt-4 text-[12px] text-ash leading-relaxed text-center max-w-xs mx-auto lg:mx-0 lg:text-left">
        We hold rooms manually. Replies usually within an hour during daylight (PHT).
      </p>

      <EnquireSheet
        open={enquireOpen}
        onOpenChange={setEnquireOpen}
        room={room}
      />
    </aside>
  );
}

function EnquireSheet({
  open,
  onOpenChange,
  room,
}: {
  open: boolean;
  onOpenChange: (next: boolean) => void;
  room: Room;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          room: room.slug,
          roomTitle: room.name,
          subject: "stay",
        }),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(out?.error || "Couldn't send your enquiry. Try again.");
      track("enquiry_submit", { success: true, source: "booking_card", room: room.slug });
      onOpenChange(false);
      window.location.assign(`/contact/sent?room=${encodeURIComponent(room.slug)}`);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
      track("enquiry_submit", { success: false, source: "booking_card", room: room.slug });
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[110] bg-lake/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-x-0 bottom-0 z-[115] bg-ivory text-lake rounded-t-3xl md:rounded-3xl md:left-1/2 md:top-1/2 md:bottom-auto md:-translate-x-1/2 md:-translate-y-1/2 md:w-[min(640px,92vw)] md:max-h-[90vh] max-h-[92vh] overflow-y-auto border-t md:border border-line"
              >
                <div className="p-6 md:p-9">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="eyebrow">Enquire about a stay</p>
                      <Dialog.Title className="font-display text-[26px] md:text-[32px] tracking-[-0.02em] mt-2">
                        {room.name}
                      </Dialog.Title>
                      <Dialog.Description className="mt-1 text-ash text-[13.5px]">
                        We&apos;ll reply within an hour during daylight (PHT).
                      </Dialog.Description>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        aria-label="Close"
                        className="w-9 h-9 rounded-full border border-line text-lake/55 hover:text-lake inline-flex items-center justify-center"
                      >
                        ×
                      </button>
                    </Dialog.Close>
                  </div>

                  <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-4">
                    {/* Honeypot */}
                    <input type="text" name="_hp" defaultValue="" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] top-[-9999px]" aria-hidden />

                    <Field name="name" label="Your name" required />
                    <Field name="email" label="Email" type="email" required />
                    <Field name="phone" label="Phone or WhatsApp" type="tel" />
                    <Field name="country" label="Where are you travelling from?" />
                    <Field name="dates" label="Stay window" placeholder="e.g. Jun 14–17" className="sm:col-span-2" />
                    <Field name="guests" label="Guests" placeholder="2 adults, 1 child" className="sm:col-span-2" />
                    <Field name="message" label="Anything we should know?" textarea className="sm:col-span-2" />

                    {status === "error" && (
                      <p role="alert" className="sm:col-span-2 text-[13px] text-sunset-deep">
                        {error}
                      </p>
                    )}

                    <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn btn-primary disabled:opacity-60 sm:flex-1 justify-center"
                      >
                        {status === "submitting" ? "Sending…" : "Send enquiry"}
                        {status !== "submitting" && <ArrowUpRight size={14} className="arrow" />}
                      </button>
                      <Link
                        href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
                          `Hi Highlights — I'd like to enquire about the ${room.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp justify-center"
                      >
                        <MessageCircle size={14} /> WhatsApp instead
                      </Link>
                    </div>
                  </form>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  textarea = false,
  className = "",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  className?: string;
  placeholder?: string;
}) {
  const baseClass =
    "w-full bg-white border border-line rounded-xl px-4 py-3 text-[14.5px] text-lake placeholder:text-ash/55 focus:outline-none focus:ring-2 focus:ring-sunset/40 focus:border-sunset transition";
  return (
    <label className={`block ${className}`}>
      <span className="block text-[11px] tracking-[0.14em] uppercase text-ash mb-1.5">
        {label}
        {required ? <span className="text-sunset ml-0.5">*</span> : null}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={3}
          className={baseClass + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={
            name === "email"
              ? "email"
              : name === "name"
              ? "name"
              : name === "phone"
              ? "tel"
              : undefined
          }
          className={baseClass}
        />
      )}
    </label>
  );
}
