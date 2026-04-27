/**
 * Stay options. All photos are from the resort itself — no stock.
 * Rates here are placeholders pending client confirmation.
 */

export type Room = {
  slug: string;
  name: string;
  type: "suite" | "family" | "buyout";
  shortLabel: string;
  blurb: string;
  body: string[];
  beds: string;
  guests: string;
  size: string;
  view: string;
  fromPHP: number;
  fromPHPLabel: string;
  perLabel: string;
  cover: string;
  gallery: string[];
  amenities: string[];
  inclusions: string[];
  notIncluded?: string[];
  highlights: { title: string; copy: string }[];
};

export const rooms: Room[] = [
  {
    slug: "premier-king-suite",
    name: "Premier King Suite",
    type: "suite",
    shortLabel: "King · Lake-view balcony",
    blurb:
      "Our flagship room — a king bed, a private balcony with sliding glass that opens onto the lake, and the volcano framed exactly where you'd want it.",
    body: [
      "The Premier King Suite is the room that earns the resort its name. Floor-to-ceiling sliding glass opens onto a long private balcony; sit there with a coffee and Taal sits across the water like a postcard you can't quite believe is real.",
      "Inside: a king bed, soft linens, blackout curtains, a writing desk and chair, and a sliding-door wardrobe. The bathroom is en-suite with hot water on demand and a rain shower.",
      "Air-conditioning, fast Wi-Fi, a smart TV, and an in-room kettle for the coffee that gets you out of bed at six. The room sleeps two adults comfortably.",
    ],
    beds: "1 King",
    guests: "Sleeps 2",
    size: "≈ 32 sqm",
    view: "Direct Taal Volcano + lake",
    fromPHP: 7800,
    fromPHPLabel: "₱7,800",
    perLabel: "per night",
    cover: "/photos/suite-king.jpg",
    gallery: [
      "/photos/suite-king.jpg",
      "/photos/bedroom-balcony.jpg",
      "/photos/curtain-pool.jpg",
      "/photos/balcony-view-pool.jpg",
    ],
    amenities: [
      "Private lake-view balcony",
      "King bed · fresh linens",
      "Rain shower · hot water on demand",
      "Air-conditioned · ceiling fan",
      "Smart TV · cable + streaming",
      "Fast Wi-Fi (resort-wide)",
      "Blackout curtains",
      "In-room kettle + coffee",
    ],
    inclusions: [
      "Welcome drink on arrival",
      "Pool & garden access throughout the stay",
      "Bottled water · refilled daily",
      "Free parking on-site",
      "Resort kitchen access (self-catering)",
    ],
    notIncluded: [
      "Meals (fully-equipped kitchen + nearby restaurants in Lipa)",
      "Day-tour transfers from Manila",
    ],
    highlights: [
      {
        title: "The view does the talking",
        copy: "The balcony faces almost-east. The light wakes you a few minutes before six and you'll thank it.",
      },
      {
        title: "Sliding-glass full wall",
        copy: "Open the doors fully and the room and the balcony become one space. Best with a cup of kapeng barako and a slow morning.",
      },
      {
        title: "Quiet at night",
        copy: "Mataas na Kahoy is one of the quietest places in Batangas. You'll hear the wind, sometimes the cicadas. Not much else.",
      },
    ],
  },
  {
    slug: "lake-view-twin-suite",
    name: "Lake-View Twin Suite",
    type: "suite",
    shortLabel: "Two doubles · Lake-view",
    blurb:
      "Two double beds, a sitting nook, and the same sliding-glass balcony as the Premier — the room we suggest for parents and a teen, or two friends sharing.",
    body: [
      "The Lake-View Twin Suite gives you the same view as the Premier King with a different layout: two full double beds, a small lounge corner with two armchairs, and the long balcony beyond a glass wall.",
      "Most of our guests book this room for a parent + child travelling together, or for two friends on a long weekend. The balcony is generous enough for two cane chairs and a coffee tray.",
      "Air-conditioning, fast Wi-Fi, smart TV, en-suite bathroom with rain shower. Same hot water, same blackout curtains, same view.",
    ],
    beds: "2 Doubles",
    guests: "Sleeps 4",
    size: "≈ 36 sqm",
    view: "Direct Taal Volcano + lake",
    fromPHP: 8800,
    fromPHPLabel: "₱8,800",
    perLabel: "per night",
    cover: "/photos/suite-twin.jpg",
    gallery: [
      "/photos/suite-twin.jpg",
      "/photos/curtain-pool.jpg",
      "/photos/balcony-view-pool.jpg",
      "/photos/pool-day.jpg",
    ],
    amenities: [
      "Two double beds",
      "Sitting corner with armchairs",
      "Private lake-view balcony",
      "Rain shower · hot water on demand",
      "Air-conditioned · ceiling fan",
      "Smart TV",
      "Fast Wi-Fi",
    ],
    inclusions: [
      "Welcome drink on arrival",
      "Pool & garden access throughout the stay",
      "Bottled water · refilled daily",
      "Free parking on-site",
      "Resort kitchen access (self-catering)",
    ],
    highlights: [
      {
        title: "Built for four when you need it",
        copy: "Two real double beds, not a king-plus-rollaway compromise. Comfortable for four adults, generous for three.",
      },
      {
        title: "The same view as the Premier",
        copy: "Identical sliding-glass balcony. The volcano doesn't care which bed you pick.",
      },
    ],
  },
  {
    slug: "family-room",
    name: "Family Room",
    type: "family",
    shortLabel: "Two beds · Family-friendly",
    blurb:
      "Two beds, a private balcony, and an extra-bright corner room — the room our guests with kids book first, and re-book the year after.",
    body: [
      "The Family Room sits on the corner of the building and gets the most morning light of any room we have. Two beds — a queen and a single — with room for a roll-out for a third child if needed.",
      "There's a low cabinet with the smart TV, a small workspace, the same en-suite bathroom as the suites, and a balcony that catches the afternoon sun.",
      "Built deliberately to feel like a kid's room could feel — bright, simple, easy to keep tidy when there's a toddler in tow.",
    ],
    beds: "1 Queen + 1 Single",
    guests: "Sleeps 3 (+1 on rollaway)",
    size: "≈ 30 sqm",
    view: "Side garden + partial lake",
    fromPHP: 6800,
    fromPHPLabel: "₱6,800",
    perLabel: "per night",
    cover: "/photos/bedroom-twin.jpg",
    gallery: [
      "/photos/bedroom-twin.jpg",
      "/photos/balcony-view-pool.jpg",
      "/photos/pool-day.jpg",
    ],
    amenities: [
      "Queen bed + single bed",
      "Private balcony",
      "Rain shower · hot water on demand",
      "Air-conditioned · ceiling fan",
      "Smart TV",
      "Fast Wi-Fi",
      "Roll-out available (₱900)",
    ],
    inclusions: [
      "Welcome juice for the children",
      "Pool & garden access throughout the stay",
      "Bottled water · refilled daily",
      "Free parking",
    ],
    highlights: [
      {
        title: "Built for families with little ones",
        copy: "Tile floors, simple lines, easy to keep clean when there's a four-year-old who just discovered chocolate ice cream.",
      },
      {
        title: "The brightest room we have",
        copy: "Corner location, two windows. The kind of light that makes you wake up smiling, even on a Monday.",
      },
    ],
  },
  {
    slug: "whole-resort",
    name: "Whole-Resort Buyout",
    type: "buyout",
    shortLabel: "All rooms · Sleeps up to 16",
    blurb:
      "The whole property to yourselves — all the rooms, the pool, the lounge, the kitchen. The way we'd book it for our own family reunion.",
    body: [
      "Booking the whole resort means three things: every room is yours, the pool is yours, and the kitchen and lounge are yours from check-in to check-out. No other guests.",
      "It's the option we recommend for family reunions, milestone birthdays, intimate weddings, and small corporate retreats — anything where having the place to yourselves is part of the point.",
      "Sleeps up to sixteen across the rooms; the pool, lounge, kitchen, and dining areas easily host twenty for the day. We can also coordinate catering, decorators, and a sound setup if you'd like — just tell us when you reach out.",
    ],
    beds: "All rooms",
    guests: "Up to 16 sleeping · 25+ for daytime",
    size: "Whole property",
    view: "Direct Taal · whole property",
    fromPHP: 35000,
    fromPHPLabel: "₱35,000",
    perLabel: "per night",
    cover: "/photos/aerial.jpg",
    gallery: [
      "/photos/aerial.jpg",
      "/photos/hero-sunset.jpg",
      "/photos/pool-day.jpg",
      "/photos/balcony-view-pool.jpg",
    ],
    amenities: [
      "Every room (all 3 suites + family room)",
      "Private use of the infinity pool",
      "Lounge with TV + sound system",
      "Fully-equipped kitchen",
      "Indoor + outdoor dining",
      "Free parking for 6+ cars",
      "Fast resort-wide Wi-Fi",
    ],
    inclusions: [
      "Whole-property exclusivity for your stay",
      "Welcome arrangement on arrival",
      "Bottled water throughout",
      "Cleaning between days for multi-night stays",
    ],
    notIncluded: [
      "Catering (we can recommend trusted vendors)",
      "Decor / styling (your suppliers welcome)",
      "Live entertainment (BYO sound system or rent ours)",
    ],
    highlights: [
      {
        title: "Yours, no one else",
        copy: "From the moment you arrive until you leave, the gate stays closed to the public. Only your guests come through.",
      },
      {
        title: "Built for groups of twelve to twenty",
        copy: "The lounge holds twenty for cocktails. The pool deck holds the same for sundowners. The dining area seats sixteen comfortably.",
      },
      {
        title: "We help with the logistics",
        copy: "Catering, decor, photography, transport from Manila — tell us what you need and we'll connect you with the people we trust.",
      },
    ],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}

export function getRelatedRooms(slug: string, n = 3): Room[] {
  const current = getRoomBySlug(slug);
  if (!current) return rooms.slice(0, n);
  return rooms.filter((r) => r.slug !== slug).slice(0, n);
}
