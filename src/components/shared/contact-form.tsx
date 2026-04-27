"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { rooms } from "@/content/rooms";
import { track } from "@/lib/analytics";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialRoom = searchParams?.get("room") || "";
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
        body: JSON.stringify({ ...data, subject: "stay" }),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(out?.error || "Couldn't send your enquiry. Try again.");
      track("enquiry_submit", { success: true, source: "contact_page", room: String(data.room || "") });
      const slug = String(data.room || "");
      window.location.assign(`/contact/sent${slug ? `?room=${encodeURIComponent(slug)}` : ""}`);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
      track("enquiry_submit", { success: false, source: "contact_page" });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="bg-white border border-line rounded-2xl p-6 md:p-8 space-y-5 shadow-[0_30px_60px_-30px_rgba(14,61,63,0.18)]"
    >
      {/* Honeypot */}
      <input type="text" name="_hp" defaultValue="" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] top-[-9999px]" aria-hidden />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="name" label="Your name" required />
        <Field name="email" label="Email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="phone" label="Phone or WhatsApp" type="tel" />
        <Field name="country" label="Travelling from" placeholder="Manila / overseas" />
      </div>

      <label className="block">
        <span className="block text-[11px] tracking-[0.14em] uppercase text-ash mb-1.5">Room of interest</span>
        <select
          name="room"
          defaultValue={initialRoom}
          className="w-full bg-white border border-line rounded-xl px-4 py-3 text-[14.5px] text-brand focus:outline-none focus:ring-2 focus:ring-sunset/40 focus:border-sunset transition appearance-none"
        >
          <option value="">Open — recommend something</option>
          {rooms.map((r) => (
            <option key={r.slug} value={r.slug}>
              {r.name} · {r.shortLabel}
            </option>
          ))}
          <option value="events">Events / private buyout</option>
        </select>
      </label>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="dates" label="Stay window" placeholder="e.g. Jun 14–17" />
        <Field name="guests" label="Guests" placeholder="2 adults" />
      </div>

      <Field name="message" label="Tell us a little about the trip" textarea />

      {status === "error" && (
        <p role="alert" className="text-[13px] text-sunset-deep">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary disabled:opacity-60 w-full justify-center"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
        {status !== "submitting" && <ArrowUpRight size={14} className="arrow" />}
      </button>
      <p className="text-[12px] text-ash leading-relaxed text-center">
        We reply within an hour during daylight (PHT). For faster responses,
        message us on WhatsApp.
      </p>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="bg-white border border-line rounded-2xl p-8 h-96 animate-pulse" />}>
      <ContactFormInner />
    </Suspense>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  textarea = false,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  const baseClass =
    "w-full bg-white border border-line rounded-xl px-4 py-3 text-[14.5px] text-brand placeholder:text-ash/55 focus:outline-none focus:ring-2 focus:ring-sunset/40 focus:border-sunset transition";
  return (
    <label className="block">
      <span className="block text-[11px] tracking-[0.14em] uppercase text-ash mb-1.5">
        {label}
        {required ? <span className="text-sunset ml-0.5">*</span> : null}
      </span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={4} className={baseClass + " resize-none"} />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={
            name === "email" ? "email" : name === "name" ? "name" : name === "phone" ? "tel" : undefined
          }
          className={baseClass}
        />
      )}
    </label>
  );
}
