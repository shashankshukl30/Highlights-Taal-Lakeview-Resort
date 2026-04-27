"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-cream/92 backdrop-blur-xl border-b border-line/70 shadow-[0_8px_24px_-18px_rgba(8,46,59,0.18)]"
            : "bg-gradient-to-b from-brand-darkest/45 to-transparent border-b border-transparent"
        }`}
      >
        <div className="container-wide flex items-center justify-between h-[68px] md:h-[80px]">
          {/* Logo (real JPG mark) */}
          <Link
            href="/"
            aria-label={site.brand.name}
            className="flex items-center gap-3 group"
            onClick={() => track("cta_click", { id: "header_logo", location: "header" })}
          >
            <span
              className={`block relative w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-full overflow-hidden transition-all ${
                scrolled ? "bg-white shadow-sm" : "bg-white/95 shadow-md"
              }`}
            >
              <Image
                src="/logo.jpg"
                alt=""
                fill
                sizes="52px"
                className="object-contain p-1"
                priority
              />
            </span>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display text-[19px] md:text-[22px] tracking-[-0.015em] transition-colors ${
                  scrolled ? "text-brand" : "text-cream"
                }`}
              >
                Highlights
              </span>
              <span
                className={`hidden sm:block text-[10px] tracking-[0.22em] uppercase mt-1 transition-colors ${
                  scrolled ? "text-ash" : "text-cream/75"
                }`}
              >
                Taal · Lakeview · Resort
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className={`hidden lg:flex items-center gap-8 text-[14px] transition-colors ${
              scrolled ? "text-brand/80" : "text-cream/85"
            }`}
          >
            {site.navPrimary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={pathname === item.href || pathname?.startsWith(item.href + "/")}
                className={`nav-link transition-colors ${
                  scrolled ? "hover:text-brand" : "hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
              className={`hidden md:inline-flex items-center gap-2 text-[13px] transition-colors ${
                scrolled ? "text-brand/75 hover:text-brand" : "text-cream/85 hover:text-cream"
              }`}
              onClick={() => track("tel_click", { location: "header" })}
            >
              <Phone size={14} />
              <span className="tabular-num">{site.contact.phoneDisplayPrimary}</span>
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex btn btn-sm btn-primary"
              onClick={() => track("cta_click", { id: "header_reserve", location: "header" })}
            >
              Reserve <ArrowUpRight size={13} className="arrow" />
            </Link>
            <button
              type="button"
              className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${
                scrolled
                  ? "border-line text-brand/80 hover:text-brand hover:bg-cream/40"
                  : "border-cream/30 text-cream hover:bg-cream/10"
              }`}
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 z-[100] bg-brand/70 backdrop-blur-sm"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="fixed top-0 right-0 bottom-0 z-[105] w-[min(420px,92vw)] bg-cream text-brand p-6 md:p-8 flex flex-col"
                >
                  <Dialog.Title className="sr-only">Site menu</Dialog.Title>
                  <div className="flex items-center justify-between mb-10">
                    <span className="flex items-center gap-2">
                      <span className="block relative w-9 h-9 rounded-full overflow-hidden bg-white">
                        <Image
                          src="/logo.jpg"
                          alt=""
                          fill
                          sizes="36px"
                          className="object-contain p-0.5"
                        />
                      </span>
                      <span className="font-display text-2xl tracking-[-0.015em]">
                        Highlights
                      </span>
                    </span>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close menu"
                        className="w-10 h-10 rounded-full border border-line text-brand/70 hover:text-brand inline-flex items-center justify-center"
                      >
                        <X size={18} />
                      </button>
                    </Dialog.Close>
                  </div>

                  <nav className="flex flex-col gap-1">
                    {site.navPrimary.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="font-display text-3xl tracking-[-0.02em] py-3 border-b border-line/60 hover:text-sunset transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto pt-8 space-y-3">
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="btn btn-primary w-full justify-center"
                    >
                      Reserve your stay <ArrowUpRight size={14} className="arrow" />
                    </Link>
                    <a
                      href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                      onClick={() => {
                        track("tel_click", { location: "mobile_drawer" });
                        setOpen(false);
                      }}
                      className="btn btn-ghost w-full justify-center"
                    >
                      <Phone size={14} /> {site.contact.phoneDisplayPrimary}
                    </a>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
