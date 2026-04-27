/**
 * Single source of truth for brand, contact, nav, social proof.
 *
 * Edit this file (not the components) to change site-wide copy. Components
 * read from `site` and degrade gracefully if a field is empty.
 *
 * Phone numbers / email / addresses are placeholder until the client confirms.
 * Search for "TODO:" before launch.
 */

export const site = {
  brand: {
    name: "Highlights Taal Lakeview Resort",
    shortName: "Highlights",
    tagline: "A quiet stay above the lake.",
    longTagline:
      "A modern Filipino retreat above Taal — five rooms, an infinity edge over the volcano, and an events lawn the village still talks about.",
    domain: "highlightslakeview.com",
    established: 2018,
  },

  contact: {
    // TODO: confirm with client before launch.
    phonePrimary: "+63 905 576 2382",
    phoneDisplayPrimary: "+63 905 576 2382",
    whatsapp: "639055762382", // digits only, country code prefixed
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
    count: "320+",
  },

  stats: [
    { label: "Lake-view rooms", value: "5" },
    { label: "Year welcoming guests", value: "Since 2018" },
    { label: "Hectares of garden", value: "1.4" },
    { label: "Drive from Manila", value: "≈ 90 min" },
  ],

  pillars: [
    {
      title: "The view",
      copy: "An infinity edge facing Taal Volcano, the cone framed by rolling Batangas hills.",
    },
    {
      title: "The quiet",
      copy: "Five rooms only. No tour buses, no weddings without your blessing — only the breeze and the lake.",
    },
    {
      title: "The welcome",
      copy: "Filipino warmth held softly: hot pandesal at sunrise, calamansi at sundown, your name remembered.",
    },
    {
      title: "The grounds",
      copy: "A 1.4-hectare garden of tall mango trees, a swimming pool, a covered events hall — yours, when you want it.",
    },
  ],

  /**
   * Placeholder testimonials — replace with verbatim Google / Facebook reviews
   * before launch. See _verticals/hospitality.md for the scrape workflow.
   * Names anonymised by default; opt in to real names when client supplies
   * permission.
   */
  testimonials: [
    {
      name: "Joanna L.",
      location: "Quezon City",
      quote:
        "Woke up to the volcano framed by the curtains. Coffee on the deck, no one else in sight. We didn't want to drive back.",
    },
    {
      name: "Marco D.",
      location: "Makati",
      quote:
        "Booked the whole resort for our parents' golden anniversary. The team set up the lawn with paper lanterns — even the lola cried.",
    },
    {
      name: "Elise B.",
      location: "Tagaytay regulars",
      quote:
        "We've stayed at the bigger names on the rim. This is the one we keep coming back to. Quieter, kinder, closer to the lake.",
    },
    {
      name: "Pat R.",
      location: "Singapore",
      quote:
        "An hour and a half from the airport and you'd swear you were a province away. The pandesal at breakfast, the calamansi at dusk — small things, done well.",
    },
  ],

  partners: [
    "Featured · Tara Lets Anywhere",
    "BARAKO · Top 3 Resorts in Mataas na Kahoy",
    "Google · 4.8★ over 300 reviews",
    "Facebook · Highlights Resort",
  ],

  social: {
    facebook: "https://www.facebook.com/HighlightsResort",
    instagram: "https://www.instagram.com/highlightslakeview",
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
      { label: "Rooms & Suites", href: "/rooms" },
      { label: "The Grounds", href: "/about#grounds" },
      { label: "Dining", href: "/dining" },
      { label: "Day Tours", href: "/rooms?type=day-tour" },
    ],
    celebrate: [
      { label: "Events Hall", href: "/events" },
      { label: "Weddings", href: "/events#weddings" },
      { label: "Family Reunions", href: "/events#reunions" },
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
