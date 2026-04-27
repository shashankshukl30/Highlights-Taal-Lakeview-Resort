import Balancer from "react-wrap-balancer";
import { site } from "@/content/site";

export function Pillars() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">Why guests choose us</p>
            <h2 className="font-display text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.025em] mt-3">
              <Balancer>
                Quiet, kind, and well-considered — the four things we promise about
                every stay.
              </Balancer>
            </h2>
            <p className="mt-5 text-ash text-[16px] leading-[1.6] max-w-[44ch]">
              Highlights is family-run. We have five rooms, a small team, and a
              lake we&apos;ve been waking up to for eight years. Everything else
              follows from that.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {site.pillars.map((p, i) => (
                <li key={p.title} className="relative pl-7">
                  <span
                    className="absolute left-0 top-1.5 text-[11px] tracking-[0.16em] text-sunset"
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-[22px] md:text-[26px] tracking-[-0.015em]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-ash text-[15.5px] leading-[1.65] max-w-[36ch]">
                    {p.copy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
