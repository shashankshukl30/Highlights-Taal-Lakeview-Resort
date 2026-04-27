import type { Hotel, BreadcrumbList, FAQPage, Organization, WebSite } from "schema-dts";
import { site } from "@/content/site";

const ORIGIN = "https://highlightslakeview.com";

export function organizationLD(): Organization {
  return {
    "@type": "Organization",
    name: site.brand.name,
    url: ORIGIN,
    logo: `${ORIGIN}/logo.svg`,
    sameAs: [site.social.facebook, site.social.instagram].filter(Boolean) as string[],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.contact.address.line1}, ${site.contact.address.line2}`,
      addressLocality: site.contact.address.city,
      addressCountry: site.contact.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phonePrimary,
      contactType: "reservations",
      email: site.contact.email,
      areaServed: "PH",
      availableLanguage: ["en", "fil"],
    },
  };
}

export function websiteLD(): WebSite {
  return {
    "@type": "WebSite",
    name: site.brand.name,
    url: ORIGIN,
    potentialAction: {
      "@type": "SearchAction",
      target: `${ORIGIN}/rooms?q={query}`,
      "query-input": "required name=query",
    } as unknown as WebSite["potentialAction"],
  };
}

export function hotelLD(): Hotel {
  return {
    "@type": "Hotel",
    name: site.brand.name,
    url: ORIGIN,
    image: `${ORIGIN}/og-default.jpg`,
    priceRange: "₱₱",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address.line1,
      addressLocality: site.contact.address.city,
      addressCountry: site.contact.address.country,
    },
    telephone: site.contact.phonePrimary,
    email: site.contact.email,
  };
}

export function breadcrumbLD(items: { name: string; href: string }[]): BreadcrumbList {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${ORIGIN}${it.href}`,
    })),
  };
}

export function faqLD(qa: { q: string; a: string }[]): FAQPage {
  return {
    "@type": "FAQPage",
    mainEntity: qa.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}

export function jsonldScript<T>(data: T) {
  return {
    __html: JSON.stringify({ "@context": "https://schema.org", ...data }),
  };
}
