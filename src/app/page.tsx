import { ScrollTopOnLoad } from "@/components/home/scroll-top-on-load";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { Pillars } from "@/components/home/pillars";
import { FeaturedRooms } from "@/components/home/featured-rooms";
import { DiningSection } from "@/components/home/dining-section";
import { Testimonials } from "@/components/home/testimonials";
import { EventsSection } from "@/components/home/events-section";
import { ClosingCTA } from "@/components/home/closing-cta";
import { Reveal } from "@/components/shared/reveal";

export default function HomePage() {
  return (
    <>
      <ScrollTopOnLoad />
      <Hero />
      <TrustStrip />
      <Reveal as="section">
        <Pillars />
      </Reveal>
      <Reveal as="section">
        <FeaturedRooms />
      </Reveal>
      <Reveal as="section">
        <DiningSection />
      </Reveal>
      <Reveal as="section">
        <Testimonials />
      </Reveal>
      <Reveal as="section">
        <EventsSection />
      </Reveal>
      <Reveal as="section">
        <ClosingCTA />
      </Reveal>
    </>
  );
}
