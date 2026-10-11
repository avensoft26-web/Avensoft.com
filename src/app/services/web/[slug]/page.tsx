import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assetPath } from "@/lib/basePath";

const webSubServices = {
  java: {
    title: "Java Development",
    tagline: "Enterprise-Grade Scalable Backends",
    desc: "We build highly secure, robust, and scalable enterprise applications using Java and Spring Boot. Our solutions are designed to handle massive data loads with extreme reliability and multithreading capabilities.",
    image: "/home_image.webp",
    features: [
      "Spring Boot microservices architecture",
      "High-performance multithreaded processing",
      "Enterprise security and authentication",
      "Seamless legacy system integrations",
    ],
    color: "amber",
  },
  php: {
    title: "PHP Development",
    tagline: "Dynamic & Robust Web Applications",
    desc: "Leveraging modern frameworks like Laravel and Symfony, we engineer fast, secure, and dynamic web platforms. From custom CMS to complex eCommerce engines, our PHP solutions are built for speed.",
    image: "/home_image.webp",
    features: [
      "Modern Laravel & Symfony frameworks",
      "Custom CMS and eCommerce solutions",
      "High-speed query optimizations",
      "Secure API integrations",
    ],
    color: "cyan",
  },
  python: {
    title: "Python Development",
    tagline: "AI-Ready Backends & Data Platforms",
    desc: "We harness the power of Python, Django, and FastAPI to build data-driven applications, advanced machine learning pipelines, and highly scalable backends tailored for modern computational needs.",
    image: "/home_image.webp",
    features: [
      "FastAPI and Django web frameworks",
      "Data processing and AI/ML pipelines",
      "High-throughput asynchronous servers",
      "Rapid prototyping and deployment",
    ],
    color: "primary",
  },
  angular: {
    title: "Angular Development",
    tagline: "Structured Single Page Applications",
    desc: "We engineer complex, enterprise-level web applications using Angular. With TypeScript at its core, we deliver highly maintainable, modular, and exceptionally performant frontend architectures.",
    image: "/home_image.webp",
    features: [
      "Strict TypeScript component architecture",
      "RxJS reactive programming models",
      "Enterprise-scale state management",
      "High-performance rendering",
    ],
    color: "fuchsia",
  },
  vuejs: {
    title: "Vue Js Development",
    tagline: "Progressive & Reactive Web Interfaces",
    desc: "Build lightweight, flexible, and blazing-fast user interfaces with Vue.js. We create interactive frontends that perfectly balance performance with developer efficiency for dynamic web apps.",
    image: "/home_image.webp",
    features: [
      "Reactive and component-based architecture",
      "Vuex / Pinia state management",
      "Seamless integration into existing apps",
      "Lightweight and fast virtual DOM",
    ],
    color: "emerald",
  },
  nodejs: {
    title: "Node Js Development",
    tagline: "Fast, Event-Driven Backend Systems",
    desc: "We architect non-blocking, asynchronous backend systems using Node.js. Perfect for real-time applications, web sockets, and high-concurrency microservices requiring ultimate speed.",
    image: "/home_image.webp",
    features: [
      "High-concurrency asynchronous I/O",
      "Real-time WebSockets integration",
      "Express.js & NestJS API architectures",
      "Seamless full-stack JavaScript",
    ],
    color: "emerald",
  },
  reactjs: {
    title: "React Js Development",
    tagline: "Interactive Modern Web UIs",
    desc: "We build world-class, component-driven user interfaces using React.js. From dynamic dashboards to full-scale web portals, we ensure smooth state management and lightning-fast rendering.",
    image: "/home_image.webp",
    features: [
      "Component-driven modular architecture",
      "Advanced state management (Redux/Zustand)",
      "Next.js Server-Side Rendering (SSR)",
      "Highly interactive SPA experiences",
    ],
    color: "cyan",
  },
};

export function generateStaticParams() {
  return Object.keys(webSubServices).map((slug) => ({
    slug: slug,
  }));
}

export default function WebSubServicePage({ params }: { params: { slug: string } }) {
  const service = webSubServices[params.slug as keyof typeof webSubServices];

  if (!service) {
    notFound();
  }

  // Define dynamic color classes based on the service color
  const badgeColor = 
    service.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' :
    service.color === 'primary' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
    service.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
    service.color === 'amber' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
    'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30';

  const glowColor = 
    service.color === 'cyan' ? 'bg-cyan-500/20' :
    service.color === 'primary' ? 'bg-blue-500/20' :
    service.color === 'emerald' ? 'bg-emerald-500/20' :
    service.color === 'amber' ? 'bg-amber-500/20' :
    'bg-fuchsia-500/20';

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#050505]">
      
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 right-10 w-96 h-96 rounded-full blur-[120px] ${glowColor}`} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-heading font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
               <Link href="/services/web" className="hover:underline text-slate-400">Web Services</Link>
               <span className="text-slate-600">/</span>
               <span className={badgeColor.split(' ')[1]}>{service.title}</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-slate-900 dark:text-white mb-6">
              {service.title}
            </h1>
            
            <p className="font-heading text-xl font-bold text-slate-700 dark:text-slate-300 mb-6">
              {service.tagline}
            </p>

            <p className="font-body text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {service.desc}
            </p>

            <div className="space-y-4 mb-10">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${badgeColor.split(' ')[0]}`}>
                    <svg className={`w-3.5 h-3.5 ${badgeColor.split(' ')[1]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-heading font-semibold text-sm text-slate-800 dark:text-slate-200">{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-white text-black font-heading font-bold text-sm shadow-md hover:brightness-90 transition-all">
                Discuss Your Requirement
              </Link>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
             <Image
                src={assetPath(service.image)}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
             <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">{service.title} Platform</h3>
                <p className="font-body text-sm text-slate-300">Live production deployment view</p>
             </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
