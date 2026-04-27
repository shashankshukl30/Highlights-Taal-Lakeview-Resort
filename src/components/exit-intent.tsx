"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { track } from "@/lib/analytics";

const DISMISS_KEY = "highlights:exit-intent:dismissed-until";
const DISMISS_DAYS = 60;

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");
  const armedRef = useRef(true);
  const shownRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (
      window.location.pathname === "/contact" ||
      window.location.pathname.startsWith("/contact/")
    ) {
      armedRef.current = false;
      return;
    }

    try {
      const until = Number(localStorage.getItem(DISMISS_KEY) || 0);
      if (until && until > Date.now()) {
        armedRef.current = false;
        return;
      }
    } catch {
      // localStorage might be blocked
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!armedRef.current) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (shownRef.current) return;
      if (e.clientY <= 4) {
        shownRef.current = true;
        setOpen(true);
        track("exit_intent_shown", { trigger: "mouse_leave_top" });
      }
    };
    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!armedRef.current) return;
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let scrolled = false;
    const onScroll = () => {
      const denom = document.documentElement.scrollHeight - window.innerHeight;
      if (denom > 0 && window.scrollY / denom > 0.5) scrolled = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const t = window.setTimeout(() => {
      if (!shownRef.current && scrolled) {
        shownRef.current = true;
        setOpen(true);
        track("exit_intent_shown", { trigger: "mobile_dwell" });
      }
    }, 30_000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(t);
    };
  }, []);

  function dismiss(reason: "x_button" | "overlay" | "auto") {
    setOpen(false);
    try {
      const until = Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;
      localStorage.setItem(DISMISS_KEY, String(until));
    } catch {
      // ignore
    }
    track("exit_intent_dismissed", { reason });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit_intent" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Couldn't sign you up. Try again.");
      setStatus("success");
      track("newsletter_submit", {
        success: true,
        source: "exit_intent",
        already_on_list: !!data?.alreadyOnList,
      });
      try {
        const until = Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;
        localStorage.setItem(DISMISS_KEY, String(until));
      } catch {
        // ignore
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
      track("newsletter_submit", { success: false, source: "exit_intent" });
    }
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) dismiss("overlay");
      }}
    >
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[120] bg-lake/60 backdrop-blur-[2px]"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="
                  fixed z-[125] inset-x-3 bottom-3
                  md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                  bg-ivory text-lake rounded-3xl
                  shadow-[0_50px_100px_-30px_rgba(11,16,39,0.55)]
                  w-auto md:w-[min(560px,92vw)] max-h-[92vh] overflow-y-auto
                  border border-line
                "
              >
                <div className="relative p-6 md:p-9">
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      onClick={() => dismiss("x_button")}
                      aria-label="Close"
                      className="absolute top-4 right-4 w-9 h-9 rounded-full border border-line text-lake/55 hover:text-lake hover:bg-cream inline-flex items-center justify-center transition-colors"
                    >
                      <X size={15} />
                    </button>
                  </Dialog.Close>

                  {status === "success" ? (
                    <div className="text-center py-4">
                      <CheckCircle2 size={40} className="text-sunset mx-auto" aria-hidden />
                      <Dialog.Title className="font-display text-2xl md:text-3xl mt-4 tracking-[-0.015em]">
                        You&apos;re on the list.
                      </Dialog.Title>
                      <Dialog.Description className="mt-3 text-ash text-[15px] leading-[1.65] max-w-sm mx-auto">
                        We&apos;ll write when the lake feels worth writing about.
                        No promotions, no spam.
                      </Dialog.Description>
                      <button
                        type="button"
                        onClick={() => dismiss("x_button")}
                        className="btn btn-primary mt-6"
                      >
                        Back to the resort
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="eyebrow">Before you go</p>
                      <Dialog.Title className="font-display text-3xl md:text-[34px] leading-[1.08] mt-2 tracking-[-0.02em]">
                        Slow notes from above the lake.{" "}
                        <span className="italic font-light">One letter a month.</span>
                      </Dialog.Title>
                      <Dialog.Description className="mt-3 text-[15px] text-ash leading-[1.65]">
                        Quiet weekends, off-season rates, the morning the mango trees
                        bloom. We send a single letter a month — that&apos;s all.
                      </Dialog.Description>

                      <form onSubmit={onSubmit} noValidate className="mt-6">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <input
                            type="email"
                            name="email"
                            required
                            autoComplete="email"
                            inputMode="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (status === "error") setStatus("idle");
                            }}
                            aria-label="Email address"
                            aria-invalid={status === "error"}
                            className="flex-1 bg-white border border-line rounded-full px-5 py-3 text-[15px] text-lake focus:outline-none focus:ring-2 focus:ring-sunset/40 focus:border-sunset transition"
                          />
                          <button
                            type="submit"
                            disabled={status === "submitting" || !email}
                            className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {status === "submitting" ? "Sending…" : "Subscribe"}
                            {status !== "submitting" && (
                              <ArrowUpRight size={15} className="arrow" />
                            )}
                          </button>
                        </div>
                        {status === "error" && (
                          <p role="alert" className="mt-2 text-[12.5px] text-sunset-deep">
                            {error}
                          </p>
                        )}
                        <p className="mt-3 text-[11.5px] text-ash leading-relaxed">
                          We&apos;ll only ask you once. Unsubscribe in one click, any time.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
