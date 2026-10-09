import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Products = dynamic(() => import("@/components/Products"), { ssr: true });
const Team = dynamic(() => import("@/components/Team"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <Team />
      <Contact />
    </main>
  );
}
