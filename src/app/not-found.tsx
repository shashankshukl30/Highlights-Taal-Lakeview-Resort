import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function NotFound() {
  return (
    <section className="pt-44 pb-32 text-center">
      <div className="container-narrow">
        <p className="eyebrow">404</p>
        <h1 className="font-display text-[44px] md:text-[64px] tracking-[-0.025em] leading-[1.04] mt-4">
          <Balancer>That page seems to have walked off down to the lake.</Balancer>
        </h1>
        <p className="mt-5 text-ash text-[16px] leading-[1.6] max-w-[42ch] mx-auto">
          It happens. Try the rooms, the journal, or just come straight to us — we&apos;re happy to point the way.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/rooms" className="btn btn-primary">
            See the rooms
          </Link>
          <Link href="/" className="btn btn-ghost text-brand border-brand/30">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
