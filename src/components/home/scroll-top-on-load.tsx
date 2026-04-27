"use client";

import { useEffect } from "react";

/**
 * Mounted only on the homepage. Reloads of `/` always land at the top —
 * we override the browser's default scroll-position restoration. Other
 * pages keep their default behaviour so a reload of /rooms/foo keeps you
 * where you were reading.
 */
export function ScrollTopOnLoad() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
      return () => {
        window.history.scrollRestoration = prev;
      };
    }
    window.scrollTo(0, 0);
  }, []);
  return null;
}
