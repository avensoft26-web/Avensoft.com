import type { Metadata } from "next";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Our Work & Case Studies — Live Deployments",
  description: "Explore enterprise software deployments by Avensoft Technologies: SISTec Digital Campus Pass, CHC Koraon OPD Suite, and DualShield AI.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <Products />
    </div>
  );
}
