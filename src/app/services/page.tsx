"use client";
import React from "react";
import Link from "next/link";
import Services from "@/components/Services";
import { motion } from "framer-motion";

const divisions = [
  {
    title: "Mobile App Development",
    desc: "120fps Native Android (Kotlin & Jetpack Compose), iOS (SwiftUI), and offline-first Room DB sync built for harsh ground conditions.",
    href: "/services/mobile",
    tag: "DIVISION 01",
    accent: "text-cyan-400",
    borderHover: "hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Web App Development",
    desc: "Sub-300ms SLA fullstack Next.js portals, distributed Node.js APIs, connection-pooled PostgreSQL, and real-time WebSockets.",
    href: "/services/web",
    tag: "DIVISION 02",
    accent: "text-cyan-400",
    borderHover: "hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "AI & ML Development",
    desc: "INT8-quantised TensorFlow Lite neural networks, CameraX real-time computer vision, and vehicular crash telematics on the edge.",
    href: "/services/ai",
    tag: "DIVISION 03",
    accent: "text-amber-300",
    borderHover: "hover:border-amber-400 hover:shadow-[0_0_30px_rgba(253,224,71,0.25)]",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Enterprise & Institutional ERP",
    desc: "Paperless digital campus passes, community health OPD systems, thermal printer pairing, and 100% DPDP Act compliance.",
    href: "/services/enterprise",
    tag: "DIVISION 04",
    accent: "text-emerald-400",
    borderHover: "hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.25)]",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "UI / UX & Product Design",
    desc: "Figma token libraries, bilingual interfaces for field operators, WCAG 2.2 AA accessibility, and conversion-optimised user flows.",
    href: "/services/design",
    tag: "DIVISION 05",
    accent: "text-amber-300",
    borderHover: "hover:border-amber-400 hover:shadow-[0_0_30px_rgba(253,224,71,0.25)]",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      {/* ── HEADER ── */}
      <section className="relative py-16 lg:py-24 border-b border-slate-200 dark:border-white/10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="badge mb-5">Offerings Directory</div>
            <h1 className="font-heading font-extrabold text-[clamp(2.5rem,5vw,4.2rem)] tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Dedicated Engineering <br />
              <span className="grad-text">Specializations & Divisions.</span>
            </h1>
            <p className="font-body text-lg text-slate-600 dark:text-slate-400 mt-6 leading-relaxed">
              Explore our specialized branches below. Each division is staffed by dedicated senior engineers and equipped with domain-specific architecture blueprints, benchmarks, and live case studies.
            </p>
          </div>

          {/* Divisions Quick Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {divisions.map((d, idx) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Link
                  href={d.href}
                  className={`glass p-8 h-full flex flex-col justify-between transition-all duration-300 ${d.borderHover} hover:-translate-y-2 hover:shadow-xl group ${d.bg} block`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 ${d.accent} shadow-sm group-hover:scale-110 transition-transform`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={d.icon} />
                        </svg>
                      </div>
                      <span className="font-body text-[11px] font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500">
                        {d.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-cyan-400 transition-colors">
                      {d.title}
                    </h3>
                    <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {d.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between font-heading font-bold text-xs text-primary-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>Explore Division Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMBEDDED SERVICES & COLLABORATION MODELS ── */}
      <Services />
    </div>
  );
}
