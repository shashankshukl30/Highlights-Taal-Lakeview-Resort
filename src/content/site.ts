/**
 * Single source of truth — brand, contact, nav, social proof.
 * Edit copy here, never in components.
 */

export const site = {
  brand: {
    name: "Highlights Taal Lakeview Resort",
    shortName: "Highlights",
    tagline: "Where Taal greets every morning.",
    longTagline:
      "A modern Filipino resort high above Taal Lake — a chef's kitchen, a lounge that holds the family, and an infinity pool with a view that does the rest.",
    domain: "highlightslakeview.com",
  },

  contact: {
    // TODO: confirm with client before launch.
    phonePrimary: "+63 905 576 2382",
    phoneDisplayPrimary: "+63 905 576 2382",
    whatsapp: "639055762382",
    whatsappDisplay: "+63 905 576 2382",
    email: "stay@highlightslakeview.com",
    eventsEmail: "events@highlightslakeview.com",
    address: {
      line1: "Manggahan",
      line2: "Mataas na Kahoy",
      city: "Batangas",
      country: "Philippines",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Highlights+Taal+Lakeview+Resort+Mataas+na+Kahoy+Batangas",
    hours: {
      checkIn: "Check-in · 2:00 PM",
      checkOut: "Check-out · 12:00 noon",
      reception: "Reception · 7:00 AM – 10:00 PM (PHT)",
      whatsapp: "WhatsApp anytime · we usually reply within an hour during daylight",
    },
  },

  reviews: {
    google:
      "https://www.google.com/maps/search/?api=1&query=Highlights+Taal+Lakeview+Resort",
    facebook: "https://www.facebook.com/HighlightsResort",
    rating: "4.8",
    count: "300+",
  },

  stats: [
    { label: "Sleeps up to", value: "20 guests" },
    { label: "View", value: "Direct Taal" },
    { label: "Pool", value: "Infinity edge" },
    { label: "Drive from Manila", value: "≈ 90 min" },
  ],

  pillars: [
    {
      title: "The view",
      copy: "An infinity pool that ends where Taal Lake begins — volcano in the centre, palm trees framing the edge.",
    },
    {
      title: "Designed for the whole family",
      copy: "Two suites, a family room, a chef's kitchen, a lounge with the sound system already set up. Bring everyone.",
    },
    {
      title: "Filipino warmth, modern comfort",
      copy: "Aircon in every room, fast Wi-Fi, hot water on demand — and a host who remembers your kids' names by morning.",
    },
    {
      title: "An hour and a half from Manila",
      copy: "Close enough for a long weekend. Far enough that you'll forget what day it is.",
    },
  ],

  /**
   * Placeholder testimonials — replace with verbatim Google / Facebook reviews
   * before launch. Anonymise names by default unless the client opts in.
   */
  testimonials: [
    {
      name: "Joanna L.",
      location: "Quezon City",
      quote:
        "Booked the whole resort for my mum's 70th. The pool at sunset, the kitchen full of cousins cooking — felt like our own private island.",
    },
    {
      name: "Marco D.",
      location: "Makati",
      quote:
        "The infinity pool is genuinely as nice as the photos. We had eighteen people, three cars, and not a single complaint. We'll be back next December.",
    },
    {
      name: "Elise B.",
      location: "Singapore",
      quote:
        "Closer to Taal than the Tagaytay rim hotels and at half the price. The host messaged us back in twenty minutes on a Sunday. Already planning a return.",
    },
    {
      name: "Pat R.",
      location: "BGC",
      quote:
        "Modern, clean, well-stocked kitchen. The kids didn't want to leave the pool; we didn't want to leave the view.",
    },
  ],

  partners: [
    "Featured · Tara Lets Anywhere",
    "BARAKO · Top 3 Resorts in Mataas na Kahoy",
    "Google · 4.8★ · 300+ reviews",
    "Facebook · Highlights Resort",
  ],

  social: {
    facebook: "https://www.facebook.com/HighlightsResort",
    instagram: "",
    pinterest: "",
    tiktok: "",
  },

  navPrimary: [
    { label: "Stay", href: "/rooms" },
    { label: "Events", href: "/events" },
    { label: "Dining", href: "/dining" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ],

  navFooter: {
    visit: [
      { label: "Stay options", href: "/rooms" },
      { label: "The Pool & Grounds", href: "/about#grounds" },
      { label: "Dining", href: "/dining" },
      { label: "Day Tour rates", href: "/rooms" },
    ],
    celebrate: [
      { label: "Whole-Resort Buyout", href: "/events" },
      { label: "Birthdays & Reunions", href: "/events#reunions" },
      { label: "Weddings", href: "/events#weddings" },
      { label: "Corporate Retreats", href: "/events#corporate" },
    ],
    explore: [
      { label: "About Highlights", href: "/about" },
      { label: "Journal", href: "/journal" },
      { label: "Press", href: "/about#press" },
      { label: "Contact", href: "/contact" },
    ],
    fineprint: [
      { label: "Reservation policy", href: "/policies/reservations" },
      { label: "Cancellation", href: "/policies/cancellation" },
      { label: "Privacy", href: "/policies/privacy" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
} as const;

export type Site = typeof site;
