"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import type { Room } from "@/content/rooms";
import { site } from "@/content/site";
import { formatPHP } from "@/lib/utils";
import { track } from "@/lib/analytics";

export function StickyMobileCTA({ room }: { room: Room }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky-mobile-cta">
      <div className="flex-1 min-w-0">
        <span className="block text-[10px] tracking-[0.16em] uppercase text-ash leading-tight">
          From
        </span>
        <span className="font-display text-[19px] text-lake leading-tight tracking-[-0.01em] tabular-num">
          {formatPHP(room.fromPHP)}{" "}
          <span className="text-[12px] text-ash">/ night</span>
        </span>
      </div>
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          track("cta_click", { id: "mobile_cta_enquire", location: "sticky_mobile", room: room.slug });
          setOpen(true);
        }}
        className="btn btn-sm btn-primary"
      >
        Enquire <ArrowUpRight size={13} className="arrow" />
      </Link>
      <a
        href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
          `Hi Highlights — I'd like to enquire about the ${room.name}.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("wa_click", { location: "sticky_mobile", room: room.slug })}
        className="btn btn-sm btn-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={14} />
      </a>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[110] bg-lake/55 backdrop-blur-sm"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="fixed inset-x-0 bottom-0 z-[115] bg-ivory text-lake rounded-t-3xl border-t border-line p-6 max-h-[90vh] overflow-y-auto"
                >
                  <Dialog.Title className="font-display text-2xl tracking-[-0.015em] mb-2">
                    Reach us about {room.name}
                  </Dialog.Title>
                  <Dialog.Description className="text-ash text-[14px] leading-[1.55] mb-5">
                    Three ways to start a conversation. Pick what works for you.
                  </Dialog.Description>
                  <div className="space-y-2.5">
                    <Link
                      href={`/contact?room=${room.slug}`}
                      className="btn btn-primary w-full justify-center"
                      onClick={() => setOpen(false)}
                    >
                      Send a written enquiry <ArrowUpRight size={14} className="arrow" />
                    </Link>
                    <a
                      href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
                        `Hi Highlights — I'd like to enquire about the ${room.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp w-full justify-center"
                    >
                      <MessageCircle size={14} /> WhatsApp us
                    </a>
                    <a
                      href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                      className="btn btn-ghost text-lake border-line w-full justify-center"
                    >
                      Call {site.contact.phoneDisplayPrimary}
                    </a>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </div>
  );
}
