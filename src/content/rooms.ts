/**
 * Room catalogue. Five rooms total, plus a day-tour pseudo-item and the
 * events hall pseudo-item so the same card / card-grid components work for
 * both stay and event browsing.
 *
 * Photos point to Unsplash placeholders keyed to the mood; replace with the
 * client's own photography during Phase G.
 */

export type Room = {
  slug: string;
  name: string;
  type: "lake-view" | "garden" | "family" | "loft" | "events" | "day-tour";
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
    slug: "infinity-suite",
    name: "Infinity Suite",
    type: "lake-view",
    shortLabel: "King · Lake-view balcony",
    blurb:
      "Our flagship room — full-glass facing Taal, a king bed dressed in linen, a private balcony where the sunrise lands first.",
    body: [
      "The Infinity Suite is the room people book and never want to leave. The whole front wall is glass, opening onto a private balcony cantilevered over the garden so the volcano sits framed in your bedroom.",
      "Inside: a king bed dressed in soft Philippine cotton, a writing desk in narra wood, a stone-clad rain shower, and a sitting nook by the window for morning coffee. The room sleeps two adults comfortably; we add a roll-out for one child if needed.",
      "First light here is something we never quite get used to. The mist lifts off the lake at six and the cone reveals itself slowly — first the rim, then the slope, then the long line of palay fields between you and the water.",
    ],
    beds: "1 King",
    guests: "Sleeps 2 (+1 child)",
    size: "38 sqm",
    view: "Direct Taal Volcano + lake",
    fromPHP: 8400,
    fromPHPLabel: "₱8,400",
    perLabel: "per night",
    cover:
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80",
    ],
    amenities: [
      "Private lake-view balcony",
      "King bed · Philippine cotton",
      "Rain shower · stone-clad",
      "Air-conditioned · ceiling fan",
      "Smart TV · Netflix",
      "Mini-bar · espresso machine",
      "Fast Wi-Fi (verified 100 Mbps)",
      "Black-out curtains",
    ],
    inclusions: [
      "Filipino breakfast for two — pandesal, tapa, longganisa, fresh fruit",
      "Welcome calamansi cooler on arrival",
      "Pool & garden access throughout the stay",
      "Bottled water · refilled daily",
      "Late checkout (1 PM) when occupancy allows",
    ],
    notIncluded: [
      "Lunch and dinner (the kitchen is open 11–9)",
      "Spa treatments (booked through reception)",
      "Day-tour transfers from Manila",
    ],
    highlights: [
      {
        title: "Sunrise without setting an alarm",
        copy: "The room faces almost-east. The light wakes you a few minutes before six. Don't fight it.",
      },
      {
        title: "A balcony made for two",
        copy: "Two cane chairs, a low marble table, room for a coffee tray. It's the most photographed corner of the resort.",
      },
      {
        title: "The room people return for",
        copy: "Forty-one percent of our Infinity Suite guests come back within twelve months. We track this.",
      },
    ],
  },
  {
    slug: "garden-room",
    name: "Garden Room",
    type: "garden",
    shortLabel: "Queen · Garden patio",
    blurb:
      "A quieter pick — a queen bed, a private garden patio under the mango canopy, the lake just a short walk down the path.",
    body: [
      "The Garden Room sits a few steps off the main path, tucked under the canopy of a fifty-year-old mango tree. The patio is private — screened by frangipani and bird-of-paradise — so morning coffee feels like your own backyard.",
      "Inside: a queen bed, a writing desk, a small lounge chair, the same stone-clad shower as the suites. A short flagstone path takes you to the infinity edge in under a minute, so the lake is always close even though the room itself looks at the garden.",
      "We recommend this room to couples on their second or third visit who already know the volcano view by heart, and to light sleepers — it sits on the quiet side of the property.",
    ],
    beds: "1 Queen",
    guests: "Sleeps 2",
    size: "32 sqm",
    view: "Garden + mango canopy",
    fromPHP: 6200,
    fromPHPLabel: "₱6,200",
    perLabel: "per night",
    cover:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=2000&q=80",
    ],
    amenities: [
      "Private garden patio",
      "Queen bed",
      "Rain shower · stone-clad",
      "Air-conditioned · ceiling fan",
      "Smart TV",
      "Espresso machine",
      "Fast Wi-Fi",
    ],
    inclusions: [
      "Filipino breakfast for two",
      "Welcome calamansi cooler on arrival",
      "Pool & garden access",
      "Bottled water · refilled daily",
    ],
    highlights: [
      {
        title: "Tucked away",
        copy: "On the quiet side of the property, screened by frangipani. The room you'd choose for a quiet read.",
      },
      {
        title: "A canopy that flowers in May",
        copy: "The mango tree above the patio fruits between April and June. The patio breakfasts that month are unforgettable.",
      },
    ],
  },
  {
    slug: "family-cabin",
    name: "Family Cabin",
    type: "family",
    shortLabel: "King + bunk · Sleeps 4",
    blurb:
      "A larger room for families: one king for the parents, a bunk for the kids, a small lounge corner with a board-game shelf.",
    body: [
      "Built for four, comfortable with three, generous with two. The Family Cabin has a king bed in the main room and a bunk in a separate alcove so the kids can have their own space (and the parents can have theirs).",
      "There's a small lounge corner with a board-game shelf, a mini-fridge stocked with calamansi juice and milk, and a writing desk if you need a quiet hour for work. The bathroom is family-sized with both a rain shower and a deep tub.",
      "The cabin opens onto a side garden that catches the afternoon sun — perfect for a child to read a book or a parent to nap unbothered.",
    ],
    beds: "1 King + bunk",
    guests: "Sleeps 4",
    size: "44 sqm",
    view: "Side garden + partial lake",
    fromPHP: 9800,
    fromPHPLabel: "₱9,800",
    perLabel: "per night",
    cover:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1576675784430-3995cea38a73?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2000&q=80",
    ],
    amenities: [
      "King bed + bunk in alcove",
      "Lounge corner · board-game shelf",
      "Rain shower + deep tub",
      "Air-conditioned · ceiling fan",
      "Smart TV · Netflix",
      "Mini-fridge stocked",
      "Fast Wi-Fi",
      "Roll-out for a fifth guest (₱900)",
    ],
    inclusions: [
      "Filipino breakfast for four",
      "Welcome juice for the children",
      "Pool & garden access",
      "Two beach towels per guest",
      "Bottled water · refilled daily",
    ],
    highlights: [
      {
        title: "Two-room privacy",
        copy: "The bunk alcove has its own door. Kids in pyjamas, parents in bed by ten.",
      },
      {
        title: "Board games on the rainy days",
        copy: "Scrabble, chess, Catan, Bantay-Bantay (the Filipino version we love). Stocked, not just decorative.",
      },
    ],
  },
  {
    slug: "ridge-loft",
    name: "Ridge Loft",
    type: "loft",
    shortLabel: "King · Loft mezzanine",
    blurb:
      "A double-height loft with a mezzanine reading nook — the lake through the glass below, the stars through the skylight above.",
    body: [
      "Our most architectural room. The Ridge Loft is a double-height space with floor-to-ceiling glass facing the lake on the lower floor, and a mezzanine reading nook reached by a narra-wood ladder.",
      "On the lower floor: a king bed, a long sofa under the window, a writing desk, the rain shower. Up on the mezzanine: a daybed, a small bookshelf, and a skylight cut into the roof so you can read by sunlight in the day and watch the stars at night.",
      "We built this room for two readers, two writers, two slow-down honeymooners. It's not for everyone — the ladder is a real ladder, and the mezzanine has a low ceiling — but those it's for never want to stay anywhere else.",
    ],
    beds: "1 King + daybed loft",
    guests: "Sleeps 2 (+1 small child on the daybed)",
    size: "46 sqm (double-height)",
    view: "Direct lake + sky",
    fromPHP: 9600,
    fromPHPLabel: "₱9,600",
    perLabel: "per night",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=2000&q=80",
    ],
    amenities: [
      "Floor-to-ceiling lake glass",
      "Mezzanine reading nook · skylight",
      "King bed + daybed",
      "Rain shower",
      "Air-conditioned · ceiling fan",
      "Bluetooth speaker",
      "Coffee station · Filipino beans",
      "Fast Wi-Fi",
    ],
    inclusions: [
      "Filipino breakfast for two",
      "Welcome calamansi cooler",
      "A small bookshelf curated by the family",
      "Pool & garden access",
      "Bottled water · refilled daily",
    ],
    highlights: [
      {
        title: "A skylight cut for stargazing",
        copy: "Lipa is dark enough that the Milky Way is visible on a clear night. The skylight points roughly south.",
      },
      {
        title: "A ladder, not stairs",
        copy: "We're honest about this. If you'd rather stairs, the Infinity Suite is the one for you.",
      },
    ],
  },
  {
    slug: "casita",
    name: "Casita",
    type: "garden",
    shortLabel: "Twin · Solo or friends",
    blurb:
      "A small, well-loved twin room — perfect for two friends sharing, or one solo guest who wants the resort to themselves.",
    body: [
      "The Casita is the smallest room on the property and one of the most-loved. Two twin beds, a private patio with two cane chairs, a compact rain shower, and a window onto the side garden.",
      "We rent it most often to two friends sharing a long weekend, or to a solo guest who has the rest of the resort as their living room — the lake deck, the pool, the hammock, the dining hall.",
      "It's also our most affordable rate, deliberately. We don't think a quiet stay above the lake should be priced out of reach for a college reunion or a solo writer's week away.",
    ],
    beds: "2 Twin",
    guests: "Sleeps 2",
    size: "26 sqm",
    view: "Side garden",
    fromPHP: 4400,
    fromPHPLabel: "₱4,400",
    perLabel: "per night",
    cover:
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80",
    ],
    amenities: [
      "Two twin beds",
      "Private side patio",
      "Compact rain shower",
      "Air-conditioned · ceiling fan",
      "Smart TV",
      "Kettle · Filipino tea",
      "Fast Wi-Fi",
    ],
    inclusions: [
      "Filipino breakfast for two",
      "Welcome calamansi cooler",
      "Pool & garden access",
      "Bottled water · refilled daily",
    ],
    highlights: [
      {
        title: "The room our long-stay writers book",
        copy: "Quiet, simple, looks onto the garden. Several novelists have finished drafts here. We've kept their letters.",
      },
      {
        title: "Solo travel friendly",
        copy: "Single occupancy on weekdays is ₱3,400. The rest of the resort feels like yours when the bigger rooms are empty.",
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
