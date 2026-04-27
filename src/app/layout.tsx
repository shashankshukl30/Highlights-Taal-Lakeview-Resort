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
  title: {
    default: `${site.brand.name} — ${site.brand.tagline}`,
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
  openGraph: {
    type: "website",
    siteName: site.brand.name,
    title: `${site.brand.name} — ${site.brand.tagline}`,
    description: site.brand.longTagline,
    url: "https://highlightslakeview.com",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand.name} — ${site.brand.tagline}`,
    description: site.brand.longTagline,
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
      <body className="bg-cream text-brand antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonldScript(organizationLD())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonldScript(websiteLD())}
        />
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
