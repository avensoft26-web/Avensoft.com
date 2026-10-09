"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const techTickerItems = [
  { label: "Next.js 15", cat: "Web", icon: "⚡" },
  { label: "Kotlin & Compose", cat: "Mobile", icon: "📱" },
  { label: "TensorFlow Lite", cat: "Edge AI", icon: "🧠" },
  { label: "PostgreSQL & Redis", cat: "Data", icon: "🗄️" },
  { label: "CameraX Vision", cat: "CV", icon: "👁️" },
  { label: "SwiftUI & iOS", cat: "Mobile", icon: "🍎" },
  { label: "Docker & DevOps", cat: "Cloud", icon: "🐳" },
  { label: "PyTorch Mobile", cat: "AI", icon: "🤖" },
  { label: "DPDP Act 2023", cat: "Security", icon: "🛡️" },
  { label: "SISTec Bhopal", cat: "Campus", icon: "🏛️" },
  { label: "CHC Koraon", cat: "Healthcare", icon: "🏥" },
  { label: "DualShield AI", cat: "Telematics", icon: "🚗" },
];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0.2]);

  return (
    <div className="relative overflow-hidden bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      
      {/* ══════════════════════════════════════
          SECTION 1 — CINEMATIC DEEP-TECH HERO
      ══════════════════════════════════════ */}
      <section id="top" className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden">

        {/* Clean, Subtle Dark Background Mesh (No Harsh Lighting Orbs) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle diffused ambient warmth */}
          <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-950/15 blur-[160px] pointer-events-none" />
          
          {/* Crisp, Subtle Monochrome Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_70%,transparent_100%)]" />
          
          {/* Subtle concentric tech rings for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-neutral-300/[0.4] dark:border-white/[0.03] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1150px] h-[1150px] rounded-full border border-neutral-300/[0.2] dark:border-white/[0.015] pointer-events-none" />
        </div>

        {/* Main Content Container (2-Column Grid) */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: High-Impact Typography & Narrative */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Clean, Premium Status Pill Badge (No Neon Glow / Lighting) */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-heading font-medium bg-neutral-100 dark:bg-gradient-to-b dark:from-[#24242b] dark:to-[#121215] border border-neutral-200 dark:border-white/[0.14] text-neutral-800 dark:text-neutral-200 shadow-[0_4px_12px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_20px_-3px_rgba(0,0,0,0.8),0_2px_6px_rgba(0,0,0,0.5)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Mission-Critical Engineering • Live Production Systems</span>
              </div>

              {/* Headline with Clean Two-Line Rhythm */}
              <h1 className="font-heading font-extrabold text-[clamp(2.5rem,4.5vw,4.8rem)] tracking-tight leading-[1.08] text-neutral-900 dark:text-white max-w-2xl">
                Deterministic <br />
                Global Deployments <br />
                in <span className="grad-text">1.4 Seconds</span>
              </h1>

              {/* Value Proposition */}
              <p className="font-body text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                Synthesize production containers, replicate optimized binaries across 3 tiers of presence, and orchestrate zero-downtime atomic health verification.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#fef08a] text-neutral-950 font-heading font-bold text-sm shadow-md hover:shadow-lg hover:brightness-105 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  <svg className="h-4 w-4 fill-neutral-950" viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4" /></svg>
                  <span>Simulate Live Deployment</span>
                </button>
                <button className="px-6 py-3.5 rounded-xl border border-neutral-700/60 bg-[#0f1629] text-white font-heading font-bold text-sm hover:border-neutral-500 hover:bg-[#161f36] hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-sm">
                  <svg className="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Open Live Sandbox Frame</span>
                </button>
              </div>

              {/* Institutional Trust Logos */}
              <div className="pt-8 border-t border-neutral-200 dark:border-white/[0.08]">
                <p className="font-body text-[11px] font-bold tracking-[0.18em] uppercase text-neutral-400 mb-3">
                  Battle-Tested in Production
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm font-heading font-bold text-neutral-700 dark:text-neutral-300">
                  <span className="hover:text-cyan-400 transition-colors cursor-default">SISTec Bhopal (Campus Pass)</span>
                  <span className="text-neutral-400 dark:text-neutral-600">•</span>
                  <span className="hover:text-cyan-400 transition-colors cursor-default">CHC Koraon (Mobile OPD)</span>
                  <span className="text-neutral-400 dark:text-neutral-600">•</span>
                  <span className="hover:text-cyan-400 transition-colors cursor-default">DualShield AI (Road Safety)</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Interactive Deep-Tech Telematics & Radar Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Main Terminal Card */}
              <div className="relative rounded-3xl border border-neutral-200 dark:border-white/15 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
                
                {/* Visual Showcase Window */}
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-lg">
                  {/* Dark Theme Real-World Image */}
                  <Image 
                    src="/Avensoft.com/hero-engineering-real.jpg" 
                    alt="Avensoft Ground Engineering & Telematics Lab" 
                    fill 
                    priority 
                    className="hidden dark:block object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                  {/* Light Theme Real-World Image */}
                  <Image 
                    src="/Avensoft.com/hero-engineering-light.jpg" 
                    alt="Avensoft Daylight Engineering Studio" 
                    fill 
                    priority 
                    className="block dark:hidden object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 dark:from-[#121212] via-transparent to-black/30" />
                  
                  {/* Top Live Badge on the Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-[#0a0a0a]/85 text-cyan-300 border border-cyan-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      SYSTEMS_LAB // LIVE_TELEMETRY
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-heading font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                      DEPLOYED IN FIELD
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-heading font-bold text-xs text-neutral-900 dark:text-white drop-shadow-md">
                      Live Telematics & App Benchmarking
                    </span>
                    <span className="font-mono text-[10px] text-amber-500 dark:text-amber-300 bg-white/90 dark:bg-black/70 px-2 py-0.5 rounded border border-amber-400/40 backdrop-blur-sm">
                      ⚡ 1.4s Cold Boot
                    </span>
                  </div>
                </div>

                {/* Simulated Live Telemetry Blocks */}
                <div className="space-y-2.5 mt-4 font-mono text-xs">
                  {/* Block 1 */}
                  <div className="p-3 rounded-xl bg-neutral-100/70 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] flex items-center justify-between hover:border-cyan-500/30 transition-colors">
                    <div>
                      <div className="text-neutral-500 dark:text-neutral-400 text-[10.5px]">MODULE: DUALSHIELD_AI</div>
                      <div className="text-neutral-900 dark:text-white font-bold mt-0.5 text-xs">Edge Vision Inference</div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-[10px] font-bold">32ms LATENCY</span>
                      <div className="text-emerald-500 dark:text-emerald-400 text-[10.5px] mt-0.5">CameraX OK</div>
                    </div>
                  </div>

                  {/* Block 2 */}
                  <div className="p-3 rounded-xl bg-neutral-100/70 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] flex items-center justify-between hover:border-amber-500/30 transition-colors">
                    <div>
                      <div className="text-neutral-500 dark:text-neutral-400 text-[10.5px]">MODULE: CHC_KORAON_OPD</div>
                      <div className="text-neutral-900 dark:text-white font-bold mt-0.5 text-xs">Offline Room DB Sync</div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-600 dark:text-amber-300 text-[10px] font-bold">2G RESILIENT</span>
                      <div className="text-amber-600 dark:text-amber-300 text-[10.5px] mt-0.5">Zero Slips Lost</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Status */}
                <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-heading">
                  <span className="text-neutral-500 dark:text-neutral-400">Ground Deployments</span>
                  <span className="text-neutral-900 dark:text-white font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    14 Enterprise Systems Live
                  </span>
                </div>
              </div>

              {/* Floating Accent Badges (Carefully positioned to never obscure card text) */}
              <div className="hidden sm:block absolute -top-4 -right-4 anim-float z-20">
                <div className="px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#111111]/95 border border-cyan-400/40 text-cyan-600 dark:text-cyan-300 text-xs font-heading font-bold shadow-[0_0_25px_rgba(0,240,255,0.25)] flex items-center gap-2 backdrop-blur-md">
                  <span className="text-cyan-400">⚡</span>
                  <span>120 FPS Android Compose</span>
                </div>
              </div>

              <div className="hidden sm:block absolute -left-6 sm:-left-8 top-[50%] -tranneutral-y-1/2 anim-float-delayed z-20">
                <div className="px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#111111]/95 border border-amber-400/40 text-amber-600 dark:text-amber-300 text-xs font-heading font-bold shadow-[0_0_25px_rgba(253,224,71,0.25)] flex items-center gap-2 backdrop-blur-md">
                  <span className="text-amber-400">✦</span>
                  <span>Deterministic 1.4s Deploy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── CONTINUOUS INFINITE TECH MARQUEE RIBBON ── */}
        <div className="relative z-10 mt-16 pt-6 border-t border-white/[0.08] bg-[#050505]/80 backdrop-blur-md overflow-hidden">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

          {/* Marquee Track (Raised & Embossed 3D Cards) */}
          <div className="flex w-full overflow-hidden py-4">
            <div className="animate-marquee flex items-center gap-4 pr-4 cursor-default">
              {[...techTickerItems, ...techTickerItems].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 px-4.5 py-2.5 rounded-full bg-gradient-to-b from-[#24242b] to-[#121215] border border-white/[0.14] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),0_8px_20px_-3px_rgba(0,0,0,0.85),0_2px_6px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.32),0_14px_28px_-4px_rgba(0,0,0,0.95)] hover:border-white/30 hover:-translate-y-1 transition-all cursor-default shrink-0 whitespace-nowrap"
                >
                  <span className="text-base drop-shadow-sm">{item.icon}</span>
                  <span className="font-heading font-bold text-xs text-neutral-100">{item.label}</span>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-black/45 border border-white/[0.08] text-neutral-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)] font-semibold">{item.cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — BENTO GRID (About)
      ══════════════════════════════════════ */}
      <section id="about" className="relative bg-[#07080c] py-24 lg:py-32 border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="badge mb-5 !bg-primary-900/30 !text-primary-300 !border-primary-500/30">About Avensoft</div>
            <h2 className="section-title max-w-3xl text-white">
              Architected for Scale. <span className="grad-text">Deployed Nationwide.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* Cell 1 — cinematic command center card (Embossed & Raised) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 rounded-3xl overflow-hidden relative min-h-[480px] bg-gradient-to-b from-[#242732] via-[#1a1c24] to-[#111218] border border-white/[0.18] border-t-white/40 shadow-[inset_0_2px_1px_rgba(255,255,255,0.25),inset_0_-2px_2px_rgba(0,0,0,0.8),0_24px_50px_-10px_rgba(0,0,0,0.95)] hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.35),0_32px_64px_-12px_rgba(0,0,0,1)] hover:border-white/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Cinematic Background Image */}
              <Image src="/Avensoft.com/bento-about.jpg" alt="Avensoft Mission Control & Systems Architecture" fill className="object-cover object-center opacity-85 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14] via-[#0e0f14]/50 to-transparent pointer-events-none" />

              {/* Floating Top Telemetry Bar */}
              <div className="relative z-10 p-5 sm:p-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 border border-white/20 backdrop-blur-md text-[11px] font-mono text-cyan-300 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  DISTRIBUTED_CORE // LIVE
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 border border-white/20 backdrop-blur-md text-[11px] font-heading font-semibold text-emerald-300 shadow-lg">
                  <span>⚡ 99.99% Architecture SLA</span>
                </div>
              </div>

              {/* Elevated Content Deck at Bottom */}
              <div className="relative z-10 p-5 sm:p-7">
                <div className="rounded-2xl p-5 sm:p-6 bg-[#121319]/90 border border-white/[0.16] shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.18),0_12px_30px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <p className="font-body text-[11px] font-bold tracking-[0.16em] uppercase text-cyan-400">Core Architecture • Field Tested</p>
                  </div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-tight mb-3">
                    Engineered for mission-critical scale & zero-downtime execution.
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.08]">
                    {["High-Throughput APIs", "Edge AI Inference", "Offline-First Sync", "DPDP Compliant"].map(tag => (
                      <span key={tag} className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.1] text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cell 2 — mission statement (Rich Interactive Highlights) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#242732] via-[#1a1c24] to-[#111218] border border-white/[0.18] border-t-white/40 shadow-[inset_0_2px_1px_rgba(255,255,255,0.25),inset_0_-2px_2px_rgba(0,0,0,0.8),0_24px_50px_-10px_rgba(0,0,0,0.95)] hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.35),0_32px_64px_-12px_rgba(0,0,0,1)] hover:border-white/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                {/* Header with glowing icon and status pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500/25 to-blue-600/25 text-cyan-300 border border-cyan-400/40 shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.25),0_6px_16px_rgba(0,240,255,0.2)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-heading font-bold bg-emerald-500/15 border border-emerald-500/35 text-emerald-400 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Production Ready
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-white mb-2 tracking-tight">Our Mission</h3>
                <p className="font-body text-neutral-300 leading-relaxed text-[0.92rem] mb-5">
                  We engineer software for ground reality — high-footfall institutions, erratic connectivity, and demanding field environments.
                </p>

                {/* 3 Interactive Highlight Pillars */}
                <div className="space-y-2.5">
                  {[
                    { label: "Deterministic Reliability", desc: "Atomic deploys & sub-300ms query latency", icon: "⚡", accent: "text-amber-300", border: "border-amber-400/20" },
                    { label: "Offline-Resilient Architecture", desc: "Local state syncs securely upon reconnect", icon: "🔄", accent: "text-cyan-300", border: "border-cyan-400/20" },
                    { label: "Sovereign Data Security", desc: "100% compliant with India DPDP Act 2023", icon: "🛡️", accent: "text-emerald-300", border: "border-emerald-400/20" },
                  ].map((item) => (
                    <div key={item.label} className={"flex items-start gap-3 p-3 rounded-xl bg-black/45 border " + item.border + " shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] hover:bg-black/65 transition-colors"}>
                      <span className="text-sm mt-0.5">{item.icon}</span>
                      <div>
                        <p className={"font-heading font-bold text-xs " + item.accent}>{item.label}</p>
                        <p className="font-body text-[11px] text-neutral-400 leading-tight mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Authority Stat */}
              <div className="pt-4 mt-5 border-t border-white/[0.12] flex items-center justify-between text-xs">
                <div>
                  <p className="font-body text-neutral-400">Enterprise Engineering</p>
                  <p className="font-heading font-bold text-cyan-400 text-sm mt-0.5">Serving institutional scale since 2023</p>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-cyan-950 border border-cyan-400/50 flex items-center justify-center text-[10px] font-bold text-cyan-200 shadow">🏥</div>
                  <div className="w-7 h-7 rounded-full bg-amber-950 border border-amber-400/50 flex items-center justify-center text-[10px] font-bold text-amber-200 shadow">🏛️</div>
                  <div className="w-7 h-7 rounded-full bg-emerald-950 border border-emerald-400/50 flex items-center justify-center text-[10px] font-bold text-emerald-200 shadow">🚗</div>
                </div>
              </div>
            </motion.div>

            {/* Cell 3 — SISTec Digital Pass (Flagship Live Product Bento) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-5 rounded-3xl overflow-hidden relative flex flex-col justify-between min-h-[490px] bg-gradient-to-b from-[#242732] via-[#1a1c24] to-[#111218] border border-white/[0.18] border-t-white/40 shadow-[inset_0_2px_1px_rgba(255,255,255,0.25),inset_0_-2px_2px_rgba(0,0,0,0.8),0_24px_50px_-10px_rgba(0,0,0,0.95)] hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.35),0_32px_64px_-12px_rgba(0,0,0,1)] hover:border-white/30 hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Top Meta Bar */}
              <div className="relative z-10 p-5 pb-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-md overflow-hidden border border-white/20 shadow-sm flex-shrink-0">
                    <Image src="/Avensoft.com/sistec-logo.jpeg" alt="SISTec Logo" fill className="object-cover" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-heading font-bold bg-emerald-500/15 border border-emerald-400/35 text-emerald-400 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live In Production
                  </span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">SISTec Bhopal, MP</span>
              </div>

              {/* 3D App Display Window */}
              <div className="relative w-full h-[270px] sm:h-[300px] my-auto flex items-center justify-center overflow-hidden px-4">
                <Image 
                  src="/Avensoft.com/hero-mockup.webp" 
                  alt="SISTec Digital Pass System Mockup" 
                  fill 
                  className="object-contain object-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute bottom-2 left-5 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/80 border border-white/20 text-cyan-300 backdrop-blur-md shadow-md">
                    ⚡ Smart Campus Gate Access
                  </span>
                </div>
              </div>

              {/* Bottom Card Deck */}
              <div className="relative z-10 p-5 pt-0">
                <div className="rounded-2xl p-4 bg-[#121319]/95 border border-white/[0.14] shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.15),0_8px_20px_rgba(0,0,0,0.7)] backdrop-blur-md">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-heading font-extrabold text-base text-white tracking-tight">SISTec Digital Pass</h4>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      &lt; 6s Gate Flow
                    </span>
                  </div>
                  <p className="font-body text-xs text-neutral-300 mb-3 leading-relaxed">
                    Smart campus gate pass & security management. Multi-warden approvals, student mobile requests, and tamper-proof QR verification.
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5">
                      {["Next.js", "PostgreSQL", "QR Auth", "PWA"].map(t => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.1] text-neutral-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <a 
                        href="https://deepakkumar7388.github.io/SISTec-Digital-Pass/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-heading font-bold text-xs hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_4px_16px_rgba(6,182,212,0.4)] hover:scale-105"
                      >
                        <span>Launch App</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                      <a 
                        href="https://www.youtube.com/watch?v=NrBc7qjgI5Q" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white/[0.08] text-white font-heading font-semibold text-xs border border-white/[0.15] hover:bg-white/[0.15] transition-all hover:scale-105"
                      >
                        <span className="text-rose-400">▶</span>
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cell 4 — three rich micro stats (High-Impact Visual Metrics) */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Stat 1: < 6s Gate Scan */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl p-6 bg-gradient-to-b from-[#242732] via-[#1a1c24] to-[#111218] border border-white/[0.18] border-t-white/40 shadow-[inset_0_2px_1px_rgba(255,255,255,0.25),inset_0_-2px_2px_rgba(0,0,0,0.8),0_20px_40px_-8px_rgba(0,0,0,0.95)] hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.35),0_28px_50px_-8px_rgba(0,0,0,1)] hover:border-white/30 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[220px] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 text-sm shadow">⚡</span>
                    <a 
                      href="https://deepakkumar7388.github.io/SISTec-Digital-Pass/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[10px] font-mono font-bold uppercase text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-200 transition-colors flex items-center gap-1"
                    >
                      <span>SISTec Live</span>
                      <span>↗</span>
                    </a>
                  </div>
                  <div className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-cyan-400">&lt; 6s</div>
                  <div className="font-heading font-bold text-sm text-white mt-2 mb-1">Gate Scan Speed</div>
                  <p className="font-body text-xs text-neutral-400 leading-relaxed">Instant QR authentication at SISTec main gate per student.</p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
                    <span>Flow Speedup</span>
                    <span className="text-cyan-400 font-bold">~40x</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full w-[96%]" />
                  </div>
                </div>
              </motion.div>

              {/* Stat 2: Zero Lost */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-3xl p-6 bg-gradient-to-b from-[#242732] via-[#1a1c24] to-[#111218] border border-white/[0.18] border-t-white/40 shadow-[inset_0_2px_1px_rgba(255,255,255,0.25),inset_0_-2px_2px_rgba(0,0,0,0.8),0_20px_40px_-8px_rgba(0,0,0,0.95)] hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.35),0_28px_50px_-8px_rgba(0,0,0,1)] hover:border-white/30 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 text-sm shadow">🛡️</span>
                    <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">100% Digital</span>
                  </div>
                  <div className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-emerald-400">Zero</div>
                  <div className="font-heading font-bold text-sm text-white mt-2 mb-1">Paper Slips Lost</div>
                  <p className="font-body text-xs text-neutral-400 leading-relaxed">Complete digital audit trail eliminates forged paper out-passes.</p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
                    <span>Audit Compliance</span>
                    <span className="text-emerald-400 font-bold">100%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-full" />
                  </div>
                </div>
              </motion.div>

              {/* Stat 3: 10,000+ Verified */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-3xl p-6 bg-gradient-to-b from-[#242732] via-[#1a1c24] to-[#111218] border border-white/[0.18] border-t-white/40 shadow-[inset_0_2px_1px_rgba(255,255,255,0.25),inset_0_-2px_2px_rgba(0,0,0,0.8),0_20px_40px_-8px_rgba(0,0,0,0.95)] hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.35),0_28px_50px_-8px_rgba(0,0,0,1)] hover:border-white/30 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-amber-500/15 border border-amber-400/30 text-amber-300 text-sm shadow">🎫</span>
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-300 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30">Zero Fraud</span>
                  </div>
                  <div className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-amber-300">10k+</div>
                  <div className="font-heading font-bold text-sm text-white mt-2 mb-1">Passes Processed</div>
                  <p className="font-body text-xs text-neutral-400 leading-relaxed">Dynamic cryptographic QR codes prevent screenshot forgery.</p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
                    <span>Security Integrity</span>
                    <span className="text-amber-300 font-bold">100%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full h-1.5" />
                </div>
              </motion.div>
            </div>

            {/* Cell 5 — pillars (Embossed & Raised) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-12 rounded-3xl p-8 lg:p-10 bg-gradient-to-b from-[#242732] via-[#1a1c24] to-[#111218] border border-white/[0.18] border-t-white/40 shadow-[inset_0_2px_1px_rgba(255,255,255,0.25),inset_0_-2px_2px_rgba(0,0,0,0.8),0_24px_50px_-10px_rgba(0,0,0,0.95)] hover:border-white/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Zero Paperwork Friction", desc: "Eliminating manual logs, queue delays, and forged approvals through instant QR validation and live digital registers.", color: "text-cyan-400", bg: "bg-cyan-500/15 border-cyan-500/30" },
                  { icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0", title: "Offline-Resilient Architecture", desc: "Field software engineered to keep functioning during telecom drops, syncing securely when connectivity returns.", color: "text-amber-300", bg: "bg-amber-500/15 border-amber-500/30" },
                  { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Sovereign Data Ownership", desc: "Institutional data stays strictly within isolated environments, fully aligned with India's DPDP Act. No third-party monetization.", color: "text-emerald-400", bg: "bg-emerald-500/15 border-emerald-500/30" },
                ].map(({ icon, title, desc, color, bg }) => (
                  <div key={title} className="flex gap-5">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_10px_rgba(0,0,0,0.5)] ${bg} ${color}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={icon} /></svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-white mb-2">{title}</h3>
                      <p className="font-body text-[0.875rem] text-neutral-300 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
