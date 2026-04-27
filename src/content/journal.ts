/**
 * Journal posts. Stub — add real entries as the client's writer
 * (or our team) fills the editorial calendar.
 */

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Lake" | "Kitchen" | "Garden" | "Notes";
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
      "Most people imagine the volcano as the postcard. The morning version is quieter, slower, and worth getting up for.",
    category: "Lake",
    date: "2026-03-12",
    cover:
      "https://images.unsplash.com/photo-1597040663537-9b50f8a6e2cb?auto=format&fit=crop&w=2000&q=80",
    readMin: 4,
    body: `The first time we watched the lake at six, it was thirty minutes before either of us spoke.

The mist sits on the water until the sun is high enough to lift it. The cone is silhouetted first — a dark wedge against a peach sky — then it gains colour as the haze burns off. By seven you can see the houses in the village across the rim. By eight the fishermen are out.

We've watched it a thousand mornings. It is never the same morning twice.`,
  },
  {
    slug: "what-grows-on-the-grounds",
    title: "What grows on the grounds — fifty years of mango trees, and the bird-of-paradise that came later",
    excerpt:
      "The garden was here before the resort. We've been its caretakers, mostly.",
    category: "Garden",
    date: "2026-02-20",
    cover:
      "https://images.unsplash.com/photo-1502780402662-acc01917c84a?auto=format&fit=crop&w=2000&q=80",
    readMin: 6,
    body: `Three of the mango trees on the grounds are older than the resort by forty years. They were here when this was still farmland, planted by the family that sold us the land in 2017.

The bird-of-paradise screening the Garden Room was planted by Lola Carmen — the matriarch of our cook's family — the spring we opened. The frangipani went in a year later. Each plant has a person attached.

Our gardener, Mang Tonyo, has been here since the beginning. He'll show you which mango is sweetest if you ask.`,
  },
  {
    slug: "filipino-breakfast",
    title: "How to set a Filipino breakfast (and the small things we got wrong at first)",
    excerpt:
      "Pandesal. Tapa. Longganisa. Itlog na pula. The order matters. So does the calamansi.",
    category: "Kitchen",
    date: "2026-01-08",
    cover:
      "https://images.unsplash.com/photo-1551218372-a8789b81b253?auto=format&fit=crop&w=2000&q=80",
    readMin: 5,
    body: `When we opened we tried to put an "international" breakfast on the menu. Cereals, pancakes, an omelette station. It took six months of guests politely picking at our omelettes before we admitted what we should have known: the reason they came to Batangas was for the breakfast their lola made.

Now we serve a single Filipino breakfast and we serve it well. Pandesal still warm from the oven. Tapa cured the night before. Longganisa from the panaderia in town. Itlog na pula on the side. Calamansi, halved, three to a plate. Hot kapeng barako that you can smell from the patio.`,
  },
];

export function getJournalPostBySlug(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
