"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { ROOM_FAQS } from "@/content/faq";

export function FAQ() {
  const FAQS = ROOM_FAQS;
  return (
    <section className="section">
      <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow">Questions guests ask</p>
          <h2 className="font-display text-[30px] md:text-[40px] tracking-[-0.02em] mt-3 leading-[1.1] max-w-md">
            What we wish we&apos;d known the first time we stayed somewhere like this.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion.Root type="single" collapsible className="divide-y divide-line border-t border-b border-line">
            {FAQS.map((f, i) => (
              <Accordion.Item key={i} value={`q${i}`}>
                <Accordion.Trigger className="group w-full flex items-start justify-between gap-6 py-5 text-left">
                  <span className="font-display text-[19px] md:text-[22px] tracking-[-0.01em] text-lake group-data-[state=open]:text-sunset transition-colors">
                    {f.q}
                  </span>
                  <span className="mt-1 shrink-0 w-7 h-7 rounded-full border border-line text-lake/60 inline-flex items-center justify-center group-data-[state=open]:rotate-45 group-data-[state=open]:bg-sunset group-data-[state=open]:text-ivory group-data-[state=open]:border-sunset transition-all duration-300">
                    <Plus size={14} />
                  </span>
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-open data-[state=closed]:animate-accordion-close">
                  <p className="pb-6 pr-14 text-ash text-[15.5px] leading-[1.65]">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
