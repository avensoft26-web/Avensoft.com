"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    tag: "WEB SYSTEMS",
    title: "Custom Web Development",
    desc: "Fullstack portals, admin dashboards, and REST/GraphQL backends built with Next.js, Node.js, and PostgreSQL. Optimised for sub-300ms load and 99.9% uptime.",
    bullets: ["Role-based access control", "Real-time dashboards & analytics", "Scalable REST / GraphQL APIs", "PostgreSQL + Redis data layer"],
    accent: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", hover: "hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.35)] hover:-translate-y-2",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
  },
  {
    tag: "ANDROID / iOS",
    title: "Native Mobile Engineering",
    desc: "High-performance Android and iOS apps built with Kotlin & Jetpack Compose, featuring 120fps UI, offline-first architecture, and secure background sync.",
    bullets: ["Jetpack Compose / SwiftUI", "Offline-first local DB sync", "Play Store & App Store deployment", "Push notifications & OTP auth"],
    accent: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20", hover: "hover:border-sky-400 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] hover:-translate-y-2",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
  },
  {
    tag: "AI & ML",
    title: "Applied AI & Computer Vision",
    desc: "Edge-deployed neural networks for real-time video stream analysis, sensor telematics, and natural language processing. Zero cloud round-trip latency.",
    bullets: ["TensorFlow Lite / PyTorch Mobile", "Real-time object & face detection", "Crash & drowsiness classification", "NLP pipelines & LLM integrations"],
    accent: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/20", hover: "hover:border-amber-400 hover:shadow-[0_0_35px_rgba(253,224,71,0.35)] hover:-translate-y-2",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
  },
  {
    tag: "UI / UX DESIGN",
    title: "Product Design & UX Research",
    desc: "Award-calibre interfaces rooted in cognitive psychology, accessibility, and data-driven conversion optimisation. From wireframes to pixel-perfect Figma specs.",
    bullets: ["User research & usability testing", "Component design systems", "WCAG 2.2 AA accessibility", "Bilingual / multilingual UI"],
    accent: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", hover: "hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.35)] hover:-translate-y-2",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
  },
  {
    tag: "ENTERPRISE OPS",
    title: "Institutional ERP & Systems",
    desc: "Role-governed database architectures, automated fee registers, inventory logs, and staff verification pipelines replacing legacy Excel and paper-based workflows.",
    bullets: ["Multi-tenant SaaS architecture", "Automated audit trail logging", "ERP & legacy system migrations", "Staff onboarding & training"],
    accent: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", hover: "hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(52,211,153,0.35)] hover:-translate-y-2",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  },
  {
    tag: "MAINTENANCE",
    title: "Support, SLA & Maintenance",
    desc: "Dedicated engineering retainers with 24/7 monitoring, automated backups, direct developer hotline, and guaranteed incident response windows.",
    bullets: ["Direct developer phone support", "Automated daily encrypted backups", "Monthly security patch cycles", "Priority SLA response windows"],
    accent: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/20", hover: "hover:border-amber-400 hover:shadow-[0_0_35px_rgba(253,224,71,0.35)] hover:-translate-y-2",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
];

const engagements = [
  {
    title: "Fixed-Price Project",
    tag: "DEFINED SCOPE",
    tagColor: "text-cyan-400",
    borderHover: "hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]",
    desc: "Ideal for well-scoped portals, mobile apps, and migrations. Clear deliverables, milestone-based signoffs, and full code ownership.",
    bullets: ["Fixed quotation & delivery timeline", "Milestone-based payment gates", "Source code repository handover", "30-day post-launch warranty"],
    highlight: false,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Monthly Engineering Retainer",
    tag: "MOST POPULAR",
    tagColor: "text-amber-300",
    borderHover: "hover:border-amber-400 hover:shadow-[0_0_35px_rgba(253,224,71,0.3)]",
    desc: "Dedicated fullstack, mobile, and AI engineers embedded in your team. Sprint-by-sprint delivery with priority incident response.",
    bullets: ["Bi-weekly sprint deployments", "Flexible scope adjustments", "Direct developer access 24/7", "Priority incident SLA < 4 hours"],
    highlight: true,
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Pilot-First Deployment",
    tag: "RISK-FREE TRIAL",
    tagColor: "text-emerald-400",
    borderHover: "hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.25)]",
    desc: "Test any of our existing institutional products on-site for 14–30 days. Zero infrastructure overhaul required before committing.",
    bullets: ["Live pilot in 7–14 days", "On-site operator training included", "Zero upfront infrastructure cost", "Seamless transition to annual SLA"],
    highlight: false,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <>
      {/* ── SERVICES ── */}
      <section id="services" className="relative bg-neutral-50 dark:bg-[#000000] py-20 lg:py-36 transition-colors duration-300">
        <div className="divider" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 lg:mb-20 max-w-3xl text-center"
          >
            <div className="badge mx-auto mb-5">Core Capabilities</div>
            <h2 className="section-title mb-5">
              Full-spectrum engineering, <span className="grad-text">end to end.</span>
            </h2>
            <p className="font-body text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mx-auto max-w-2xl px-2">
              From initial architecture audit to post-launch maintenance, we handle every layer of your product. No handoffs to junior contractors, no communication gaps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden flex flex-col rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#242732] dark:via-[#1a1c24] dark:to-[#111218] border border-neutral-200 dark:border-white/[0.18] dark:border-t-white/40 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_1px_rgba(255,255,255,0.25),inset_0_-2px_2px_rgba(0,0,0,0.8),0_24px_50px_-10px_rgba(0,0,0,0.95)] hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.35),0_32px_64px_-12px_rgba(0,0,0,1)] hover:border-neutral-300 dark:hover:border-white/30 hover:-translate-y-2 transition-all duration-300 z-10"
              >
                {/* Image Showcase with Glowing Glow */}
                <div className="relative h-56 w-full overflow-hidden border-b border-neutral-100 dark:border-white/10">
                  <img src={s.img} alt={s.title} className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white shadow-[0_4px_16px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="h-6 w-6 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={s.icon} /></svg>
                    </div>
                    <span className={`font-heading text-[11px] font-extrabold tracking-[0.2em] uppercase text-white drop-shadow-lg`}>{s.tag}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow bg-neutral-50/50 dark:bg-transparent transition-colors duration-300">
                  <h3 className="font-heading font-extrabold text-[1.3rem] text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-primary-600 dark:group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="font-body text-[0.95rem] text-neutral-600 dark:text-neutral-400 leading-[1.7] mb-6">{s.desc}</p>

                  <ul className="mt-auto space-y-3 pt-5 border-t border-neutral-200/80 dark:border-white/[0.08]">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${s.bg} ${s.border} border`}>
                          <svg className={`h-3 w-3 ${s.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="font-body text-[0.85rem] font-medium text-neutral-700 dark:text-neutral-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section id="engagement" className="relative bg-[#000000] py-20 lg:py-36 transition-colors duration-300">
        <div className="divider" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="badge mx-auto mb-5">Collaboration Models</div>
            <h2 className="section-title mb-5">
              Pick the model that <span className="grad-text">fits your institution.</span>
            </h2>
            <p className="font-body text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed px-2">
              Transparent pricing with no hidden retainers. Whether you're a first-time buyer or scaling a live system, we have a structure that works.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:gap-6 lg:gap-8 md:grid-cols-3 pt-10 md:pt-6 items-center">
            {engagements.map((e, i) => (
              <div key={i} className={`flex flex-col relative group ${e.highlight ? "z-20" : "z-10"}`}>
                
                {e.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500"></div>
                      <div className="relative rounded-full px-5 py-2 text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-[0_4px_16px_rgba(245,158,11,0.5)] border border-amber-300/50">
                        Most Popular
                      </div>
                    </div>
                  </div>
                )}
                
                <div
                  className={`relative flex flex-col h-full rounded-[2rem] transition-all duration-500 overflow-hidden bg-white dark:bg-gradient-to-b dark:from-[#242732] dark:via-[#1a1c24] dark:to-[#111218] border border-neutral-200 dark:border-white/[0.12] dark:border-t-white/30 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_2px_1px_rgba(255,255,255,0.1),0_24px_50px_-10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.25),0_32px_64px_-12px_rgba(0,0,0,0.8)] group-hover:-translate-y-3 group-hover:border-neutral-300 dark:group-hover:border-white/30 ${
                    e.highlight 
                      ? "!border-amber-400/50 dark:!border-amber-400/50 dark:!border-t-amber-400/80 shadow-[0_20px_40px_-10px_rgba(251,191,36,0.15)] dark:shadow-[inset_0_2px_1px_rgba(253,224,71,0.4),0_30px_60px_-15px_rgba(251,191,36,0.2)] md:scale-105" 
                      : "md:scale-95 group-hover:scale-100"
                  }`}
                >
                  <div className="relative h-48 w-full overflow-hidden border-b border-white/10 mb-6">
                    <img src={e.img} alt={e.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111218] via-[#111218]/40 to-transparent"></div>
                  </div>

                  <div className="flex flex-col flex-grow px-8 pb-8 lg:px-10 lg:pb-10 relative z-10">
                    {e.highlight && (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-[60px] pointer-events-none transform translate-x-1/2 -translate-y-1/2 group-hover:bg-amber-500/20 transition-colors duration-500"></div>
                    )}

                    <span className={`font-heading text-[11px] font-extrabold tracking-[0.2em] uppercase mb-4 block drop-shadow-sm ${e.tagColor}`}>{e.tag}</span>
                    <h3 className="font-heading font-extrabold text-[1.4rem] lg:text-[1.6rem] tracking-tight text-neutral-900 dark:text-white mb-3 relative z-10">{e.title}</h3>
                    <p className="font-body text-[0.95rem] text-neutral-600 dark:text-neutral-400 leading-[1.7] mb-8 relative z-10">{e.desc}</p>
                    
                    <ul className="mt-auto space-y-3.5 pt-6 border-t border-neutral-200/80 dark:border-white/[0.08] relative z-10">
                      {e.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${e.tagColor.replace('text-', 'bg-').replace('-400', '-500/10').replace('-300', '-500/10')}`}>
                            <svg className={`h-3 w-3 ${e.tagColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <span className="font-body text-[0.85rem] font-medium text-neutral-700 dark:text-neutral-300">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="#contact" className={`mt-10 w-full text-center py-4 rounded-xl font-heading font-bold text-[0.9rem] tracking-wide transition-all duration-300 relative z-10 ${
                      e.highlight 
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.6)] hover:scale-[1.03]" 
                        : "bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 border border-transparent dark:hover:border-white/20 hover:scale-[1.03]"
                    }`}>
                      {e.highlight ? "Book Engineering Retainer" : i === 0 ? "Inquire Fixed-Price" : "Request 14-Day Pilot"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
