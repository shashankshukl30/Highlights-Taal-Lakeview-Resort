import type { MetadataRoute } from "next";
import { rooms } from "@/content/rooms";
import { journalPosts } from "@/content/journal";

const BASE = "https://highlightslakeview.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/rooms",
    "/dining",
    "/events",
    "/about",
    "/journal",
    "/contact",
    "/policies/reservations",
    "/policies/cancellation",
    "/policies/privacy",
  ].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const roomRoutes: MetadataRoute.Sitemap = rooms.map((r) => ({
    url: `${BASE}/rooms/${r.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const journalRoutes: MetadataRoute.Sitemap = journalPosts.map((p) => ({
    url: `${BASE}/journal/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...roomRoutes, ...journalRoutes];
}
