/**
 * Initialises PostHog if NEXT_PUBLIC_POSTHOG_KEY is present in the env.
 * Without that env var the file is a near-no-op.
 */
import posthog from "posthog-js";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

if (key && typeof window !== "undefined") {
  posthog.init(key, {
    api_host: host,
    disable_session_recording: true,
    capture_pageview: "history_change",
    capture_pageleave: true,
    autocapture: false,
    persistence: "localStorage+cookie",
    person_profiles: "identified_only",
  });
  window.posthog = posthog;
}
