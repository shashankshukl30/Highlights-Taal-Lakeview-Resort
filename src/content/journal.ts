/**
 * Journal posts. All cover photos are from the resort.
 */

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Lake" | "Kitchen" | "Around" | "Notes";
  date: string;
  cover: string;
  body: string;
  readMin: number;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "first-light-on-taal",
    title: "First light on Taal — what it actually looks like at six",
    excerpt:
      "Most people imagine the volcano as a postcard. The morning version is quieter, slower, and worth getting up for.",
    category: "Lake",
    date: "2026-03-12",
    cover: "/photos/taal-cone.jpg",
    readMin: 4,
    body: `The first time we watched the lake at six, it was thirty minutes before either of us spoke.

The mist sits on the water until the sun is high enough to lift it. The cone is silhouetted first — a dark wedge against a peach sky — then it gains colour as the haze burns off. By seven you can see the houses in the village across the rim. By eight the fishermen are out.

We've watched it a thousand mornings. It is never the same morning twice.`,
  },
  {
    slug: "sundown-from-the-pool",
    title: "Sundown from the pool — the half-hour that justifies the drive",
    excerpt:
      "If you're only here for one night, this is the half-hour you came for. Time it carefully.",
    category: "Lake",
    date: "2026-02-20",
    cover: "/photos/hero-sunset.jpg",
    readMin: 3,
    body: `The pool is east-facing, but the sky behind you turns first.

If you swim a slow length around six, you'll catch the high clouds going pink before the lake has had a chance to register the change. By six-fifteen the volcano is a silhouette and the water has gone from blue to gold to a colour we haven't found a word for.

Six-thirty is when most guests reach for their phones. We try to remember to leave ours in the room.`,
  },
  {
    slug: "the-drive-from-manila",
    title: "The drive from Manila — the easy version",
    excerpt:
      "Ninety minutes, two highways, one careful left at a tricycle stand. Here's the route we send to first-time guests.",
    category: "Around",
    date: "2026-01-08",
    cover: "/photos/driveway.jpg",
    readMin: 5,
    body: `From Makati or BGC, take SLEX south past Sto. Tomas. Exit at Lipa, follow the signs into town.

From Lipa, the road climbs gently for about fifteen minutes — past a panaderia we'd recommend stopping at if you haven't had pandesal yet — and then the lake suddenly appears on your right. You're nearly here.

The last kilometre is a quiet residential road. Mind the dogs and the tricycles. The gate is on the right, marked with our sign.`,
  },
];

export function getJournalPostBySlug(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
