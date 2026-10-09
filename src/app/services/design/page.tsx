"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Production Design Systems",
    desc: "Complete component libraries built with Figma auto-layout, design tokens, responsive typography scales, and strict dark/light mode parity that developers can implement 1:1.",
    tech: ["Figma Tokens", "Component Specs", "Atomic Design", "Design-to-Code Parity"],
    accent: "text-amber-600 dark:text-amber-400",
    borderHover: "hover:border-amber-400 hover:shadow-amber-500/20",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Bilingual & Public-Sector UX",
    desc: "Designing for real people — high-contrast typography, large touch targets for harsh outdoor sun, and bilingual Hindi/English terminology for municipal and clinic staff.",
    tech: ["Bilingual UI", "Low-Literacy UX", "High-Contrast Palettes", "Sunlight Legibility"],
    accent: "text-primary-600 dark:text-primary-400",
    borderHover: "hover:border-primary-400 hover:shadow-primary-500/20",
    bg: "bg-primary-50 dark:bg-primary-950/20",
    icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
  },
  {
    title: "Micro-Interactions & Fluid Motion",
    desc: "Tactile micro-animations, spring physics, and loading state transitions that give interfaces a responsive, alive feel while guiding the user's attention naturally.",
    tech: ["Framer Motion", "Spring Physics", "State Transitions", "Haptic Feedback"],
    accent: "text-fuchsia-600 dark:text-fuchsia-400",
    borderHover: "hover:border-fuchsia-400 hover:shadow-fuchsia-500/20",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-950/20",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "WCAG 2.2 AA Accessibility",
    desc: "Ensuring all interactive states pass rigorous contrast ratios, screen reader accessibility, semantic HTML tagging, and keyboard navigation compliance.",
    tech: ["WCAG 2.2 AA", "Screen Reader Testing", "Semantic Aria Roles", "Keyboard Navigation"],
    accent: "text-emerald-600 dark:text-emerald-400",
    borderHover: "hover:border-emerald-400 hover:shadow-emerald-500/20",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "Field Usability Testing",
    desc: "We don't guess in meeting rooms. We take interactive prototypes directly to hospital registration desks and campus gates to measure task completion speed and error rates.",
    tech: ["Contextual Inquiry", "Task Time Benchmarking", "Error Rate Auditing", "Live Feedback Loops"],
    accent: "text-cyan-600 dark:text-cyan-400",
    borderHover: "hover:border-cyan-400 hover:shadow-cyan-500/20",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    title: "Conversion & Friction Reduction",
    desc: "Streamlining complex administrative forms into effortless multi-step flows, reducing gate clearance and patient check-in times down to under 45 seconds.",
    tech: ["Funnel Optimization", "Form Simplification", "Cognitive Load Reduction", "Fast Sign-Off UX"],
    accent: "text-sky-600 dark:text-sky-400",
    borderHover: "hover:border-sky-400 hover:shadow-sky-500/20",
    bg: "bg-sky-50 dark:bg-sky-950/20",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

export default function DesignServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      {/* ── CINEMATIC DIVISION HERO ── */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-amber-500/15 dark:bg-amber-500/10 blur-[120px]" />
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-fuchsia-500/15 dark:bg-fuchsia-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="badge mb-6 !bg-cyan-500/10 !text-cyan-300 !border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Division 05 • Product Design & UX Research
            </div>

            <h1 className="font-heading font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              Human-Centric Digital Interfaces. <br />
              <span className="grad-text">Clarity, Speed & Cognitive Ease.</span>
            </h1>

            <p className="font-body text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-6 max-w-2xl">
              We design digital products rooted in cognitive psychology, usability benchmarks, and accessibility. From complete Figma design systems to bilingual interfaces tested in high-pressure public sector environments.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/contact" className="btn-primary">
                <svg className="h-4 w-4 fill-slate-950" viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4" /></svg>
                <span>Book a Product Design Review</span>
              </Link>
              <Link href="/services" className="btn-ghost flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Explore All Capabilities</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
              {[
                { val: "WCAG 2.2 AA", label: "Accessibility Compliant" },
                { val: "Bilingual", label: "Hindi & English UI" },
                { val: "100% Figma", label: "Developer Ready Tokens" },
                { val: "< 45 Sec", label: "End-to-End Task Flow" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="font-heading font-black text-2xl grad-text">{m.val}</div>
                  <div className="font-body text-xs text-slate-500 dark:text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES GRID ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <span className="font-body text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-amber-400">Design Craftsmanship</span>
            <h2 className="section-title mt-2">
              From Wireframe to <span className="grad-text">Production Design.</span>
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              Every screen is engineered with deep empathy for the end user and zero friction for software developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass p-8 flex flex-col justify-between transition-all duration-300 ${cap.borderHover} hover:-translate-y-2 hover:shadow-xl dark:shadow-none group ${cap.bg}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 ${cap.accent} shadow-sm group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={cap.icon} />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3">
                    {cap.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200 dark:border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {cap.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white mb-6">
            Need an interface that users love to touch?
          </h2>
          <p className="font-body text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Let’s review your existing product flow or design your new platform from scratch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Request UI/UX Consultation</Link>
            <Link href="/services" className="btn-ghost">Explore All Divisions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
