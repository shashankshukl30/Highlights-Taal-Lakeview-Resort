import type { Metadata } from "next";
import { Suspense } from "react";
import { rooms } from "@/content/rooms";
import { SentPageContent } from "@/components/shared/sent-page-query";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your enquiry has been received.",
  robots: { index: false, follow: false },
};

export default function SentPage() {
  return (
    <Suspense fallback={null}>
      <SentPageContent allRooms={rooms} />
    </Suspense>
  );
}
