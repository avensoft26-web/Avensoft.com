import type { Metadata } from "next";
import AboutJourney from "@/components/AboutJourney";

export const metadata: Metadata = {
  title: "Our Journey & Story — From College Roots to Enterprise Systems",
  description: "Discover the journey of Avensoft Technologies — how engineering students from SISTec Bhopal built mission-critical software for campuses, hospitals, and enterprises.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutJourney />
    </main>
  );
}
