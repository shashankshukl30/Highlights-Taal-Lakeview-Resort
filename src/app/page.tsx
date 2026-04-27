import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { Pillars } from "@/components/home/pillars";
import { FeaturedRooms } from "@/components/home/featured-rooms";
import { DiningSection } from "@/components/home/dining-section";
import { Testimonials } from "@/components/home/testimonials";
import { EventsSection } from "@/components/home/events-section";
import { ClosingCTA } from "@/components/home/closing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Pillars />
      <FeaturedRooms />
      <DiningSection />
      <Testimonials />
      <EventsSection />
      <ClosingCTA />
    </>
  );
}
