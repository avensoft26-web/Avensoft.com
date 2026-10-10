import type { Metadata } from "next";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "About Us — Engineering Team & Leadership",
  description: "Meet the engineers, architects, and designers building mission-critical software systems at Avensoft Technologies.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Team />
    </div>
  );
}
