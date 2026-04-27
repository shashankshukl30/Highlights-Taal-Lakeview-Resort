import { notFound } from "next/navigation";
import type { Metadata } from "next";

const POLICIES: Record<string, { title: string; body: string }> = {
  reservations: {
    title: "Reservation policy",
    body: `
## Holding rooms manually
We don't use a real-time booking engine. Every room is held by a person, which lets us protect the quiet of the property and let you ask questions before you commit. When you send an enquiry we usually reply within an hour during daylight (PHT).

## Confirming a stay
A 50% deposit confirms the room. Balance is due on arrival, in cash or card.

## Group sizes
Each room has a stated maximum occupancy. Please respect it — adding extra people without notice means we can't prepare bedding properly.

## Quiet hours
We ask that the property is kept quiet from 10:00 PM to 6:30 AM. The lake is the loudest thing you should hear in the morning.
    `,
  },
  cancellation: {
    title: "Cancellation policy",
    body: `
## Standard rate
Free cancellation up to 7 days before your stay. After that, the first night is non-refundable.

## Whole-resort buyouts and weddings
Cancellation terms are written into the contract for each booking. In general: free up to 60 days out, 50% deposit retained between 60 and 30 days, full payment retained inside 30 days.

## Force majeure
If a typhoon, earthquake, or government advisory makes travel unsafe, we move your dates without penalty. We've done this many times. Just write.

## Talk to us
Plans change. Talk to us before assuming the worst — we usually find a way to move dates rather than charge.
    `,
  },
  privacy: {
    title: "Privacy",
    body: `
## What we collect
When you submit a form on this website, we receive: your name, email, phone number, and the message you wrote. That's it.

## Where it goes
Your enquiry is emailed to our reservations inbox via Resend. Newsletter signups are added to our Resend Audience. We do not sell or share data with third parties.

## Cookies
We use Vercel Analytics (privacy-friendly, no cookies) for basic pageview counts. If we have PostHog enabled (look for a banner), it sets first-party cookies for anonymous funnel analytics. You can clear them any time.

## Get in touch
Want a copy of, or to delete, your data? Email stay@highlightslakeview.com.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(POLICIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = POLICIES[slug];
  if (!p) return {};
  return {
    title: p.title,
    description: `${p.title} — Highlights Taal Lakeview Resort.`,
    robots: { index: true, follow: true },
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = POLICIES[slug];
  if (!p) notFound();

  const blocks = p.body
    .trim()
    .split("\n\n")
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <section className="pt-36 md:pt-44 pb-24">
      <div className="container-narrow">
        <p className="eyebrow">The fine print</p>
        <h1 className="font-display text-[40px] md:text-[56px] tracking-[-0.025em] leading-[1.05] mt-3">
          {p.title}
        </h1>
        <div className="prose-policy mt-10">
          {blocks.map((b, i) => {
            if (b.startsWith("## ")) {
              return <h2 key={i}>{b.replace(/^##\s+/, "")}</h2>;
            }
            return <p key={i}>{b}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
