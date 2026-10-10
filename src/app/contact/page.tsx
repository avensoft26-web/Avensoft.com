import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us — Initiate a Project",
  description: "Get in touch with Avensoft Technologies for mobile app engineering, web platform development, and AI systems architecture.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
