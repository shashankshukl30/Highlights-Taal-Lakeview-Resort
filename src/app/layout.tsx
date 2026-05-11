import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LenisRoot } from "@/components/lenis-root";
import { WhatsAppBubble } from "@/components/whatsapp-bubble";
import { ExitIntent } from "@/components/exit-intent";
import { organizationLD, websiteLD, jsonldScript } from "@/lib/jsonld";
import { site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://highlightslakeview.com"),
  // Title kept to the SEO sweet spot of 50–60 characters so Google
  // doesn't truncate it in search results. The previous default
  // (name + tagline) landed at 66 chars and got truncated.
  title: {
    default: `${site.brand.name} | Batangas Boutique Resort`,
    template: `%s · ${site.brand.shortName}`,
  },
  description: site.brand.longTagline,
  applicationName: site.brand.name,
  authors: [{ name: site.brand.name }],
  keywords: [
    "Taal Volcano resort",
    "Tagaytay alternative",
    "Mataas na Kahoy resort",
    "Batangas lakeview",
    "Filipino boutique resort",
    "Taal Lake hotel",
    "Lipa staycation",
    "events venue Batangas",
  ],
  // Social-share preview. images is the field WhatsApp / iMessage /
  // Slack / Twitter look at when a guest pastes the link. Without it,
  // the preview card is blank — and a blank card kills the click-through
  // rate on every share. Using the existing hero-sunset.jpg which is
  // already in /public/photos/.
  openGraph: {
    type: "website",
    siteName: site.brand.name,
    title: `${site.brand.name} | Batangas Boutique Resort`,
    description: site.brand.longTagline,
    url: "https://highlightslakeview.com",
    locale: "en_PH",
    images: [
      {
        url: "/photos/hero-sunset.jpg",
        width: 1200,
        height: 630,
        alt: `${site.brand.name} — Taal Volcano sunset view`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand.name} | Batangas Boutique Resort`,
    description: site.brand.longTagline,
    images: ["/photos/hero-sunset.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
    >
      {/* JSON-LD structured data — placed in <head> so every audit tool
       *  (including ones that only scan the head element) detects it.
       *  Google reads JSON-LD anywhere in the document but a head
       *  placement is the textbook spot + maximises discovery by
       *  cheaper third-party audit crawlers. */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonldScript(organizationLD())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonldScript(websiteLD())}
        />
      </head>
      <body className="bg-cream text-brand antialiased">
        <LenisRoot />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppBubble />
        <ExitIntent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
