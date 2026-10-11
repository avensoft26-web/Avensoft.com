"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { assetPath } from "@/lib/basePath";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress for premium feel
  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 100, mass: 0.4 });

  // --- TECH TREE SHATTER TRANSFORMS (Phase 1: 0 to 0.22) ---
  const treeOpacity = useTransform(smoothProgress, [0.16, 0.24], [1, 0]);
  const treeScale = useTransform(smoothProgress, [0, 0.24], [1, 1.8]);
  const treeBlur = useTransform(smoothProgress, [0.16, 0.24], ["blur(0px)", "blur(12px)"]);

  const snakeLength = useTransform(smoothProgress, [0, 0.24], [1, 0.4]);

  // Nodes flying out in the exact direction of their final path segment
  // Left
  const b1X = useTransform(smoothProgress, [0, 0.24], ["0vw", "-120vw"]);
  const b1Y = useTransform(smoothProgress, [0, 0.24], ["0vh", "0vh"]);

  // Up-Left
  const b2X = useTransform(smoothProgress, [0, 0.24], ["0vw", "-80vw"]);
  const b2Y = useTransform(smoothProgress, [0, 0.24], ["0vh", "-120vh"]);

  // Up
  const b3X = useTransform(smoothProgress, [0, 0.24], ["0vw", "0vw"]);
  const b3Y = useTransform(smoothProgress, [0, 0.24], ["0vh", "-150vh"]);

  // Left
  const b4X = useTransform(smoothProgress, [0, 0.24], ["0vw", "-150vw"]);
  const b4Y = useTransform(smoothProgress, [0, 0.24], ["0vh", "10vh"]);

  // Up
  const b5X = useTransform(smoothProgress, [0, 0.24], ["0vw", "-10vw"]);
  const b5Y = useTransform(smoothProgress, [0, 0.24], ["0vh", "-150vh"]);

  // Up-Left
  const b6X = useTransform(smoothProgress, [0, 0.24], ["0vw", "-100vw"]);
  const b6Y = useTransform(smoothProgress, [0, 0.24], ["0vh", "-100vh"]);

  // Up-Right
  const b7X = useTransform(smoothProgress, [0, 0.24], ["0vw", "80vw"]);
  const b7Y = useTransform(smoothProgress, [0, 0.24], ["0vh", "-120vh"]);

  // Right
  const b8X = useTransform(smoothProgress, [0, 0.24], ["0vw", "150vw"]);
  const b8Y = useTransform(smoothProgress, [0, 0.24], ["0vh", "20vh"]);

  // Up-Right
  const b9X = useTransform(smoothProgress, [0, 0.24], ["0vw", "120vw"]);
  const b9Y = useTransform(smoothProgress, [0, 0.24], ["0vh", "-100vh"]);

  // Up
  const b10X = useTransform(smoothProgress, [0, 0.24], ["0vw", "20vw"]);
  const b10Y = useTransform(smoothProgress, [0, 0.24], ["0vh", "-150vh"]);

  // --- AVENSOFT SHATTER TRANSFORMS ---
  const stoneOpacity = useTransform(smoothProgress, [0, 0.20], [1, 0]);

  const aX = useTransform(smoothProgress, [0, 0.24], [0, -200]);
  const aY = useTransform(smoothProgress, [0, 0.24], [0, 300]);
  const aR = useTransform(smoothProgress, [0, 0.24], [0, -60]);

  const vX = useTransform(smoothProgress, [0, 0.24], [0, -120]);
  const vY = useTransform(smoothProgress, [0, 0.24], [0, 380]);
  const vR = useTransform(smoothProgress, [0, 0.24], [0, -35]);

  const eX = useTransform(smoothProgress, [0, 0.24], [0, -40]);
  const eY = useTransform(smoothProgress, [0, 0.24], [0, 420]);
  const eR = useTransform(smoothProgress, [0, 0.24], [0, 20]);

  const nX = useTransform(smoothProgress, [0, 0.24], [0, 20]);
  const nY = useTransform(smoothProgress, [0, 0.24], [0, 450]);
  const nR = useTransform(smoothProgress, [0, 0.24], [0, -10]);

  const sX = useTransform(smoothProgress, [0, 0.24], [0, 90]);
  const sY = useTransform(smoothProgress, [0, 0.24], [0, 390]);
  const sR = useTransform(smoothProgress, [0, 0.24], [0, 50]);

  const oX = useTransform(smoothProgress, [0, 0.24], [0, 160]);
  const oY = useTransform(smoothProgress, [0, 0.24], [0, 460]);
  const oR = useTransform(smoothProgress, [0, 0.24], [0, -45]);

  const fX = useTransform(smoothProgress, [0, 0.24], [0, 240]);
  const fY = useTransform(smoothProgress, [0, 0.24], [0, 310]);
  const fR = useTransform(smoothProgress, [0, 0.24], [0, 80]);

  const tX = useTransform(smoothProgress, [0, 0.24], [0, 350]);
  const tY = useTransform(smoothProgress, [0, 0.24], [0, 380]);
  const tR = useTransform(smoothProgress, [0, 0.24], [0, 120]);

  // --- ASSEMBLY TRANSFORMS (Phase 2: 0.16 to 0.40, then HOLD until 0.85) ---
  // Left Column
  const badgeY = useTransform(smoothProgress, [0.16, 0.38], ["-30px", "0px"]);
  const badgeOpacity = useTransform(smoothProgress, [0.16, 0.35], [0, 1]);

  const titleX = useTransform(smoothProgress, [0.16, 0.40], ["-50px", "0px"]);
  const titleY = useTransform(smoothProgress, [0.16, 0.40], ["-30px", "0px"]);
  const titleRotate = useTransform(smoothProgress, [0.16, 0.40], [-6, 0]);
  const titleOpacity = useTransform(smoothProgress, [0.16, 0.36], [0, 1]);
  const titleBlur = useTransform(smoothProgress, [0.16, 0.40], ["blur(12px)", "blur(0px)"]);

  const descX = useTransform(smoothProgress, [0.18, 0.42], ["-40px", "0px"]);
  const descOpacity = useTransform(smoothProgress, [0.18, 0.38], [0, 1]);

  const buttonsY = useTransform(smoothProgress, [0.20, 0.44], ["30px", "0px"]);
  const buttonsOpacity = useTransform(smoothProgress, [0.20, 0.42], [0, 1]);

  // Right Column (Image & Telemetry)
  const cardX = useTransform(smoothProgress, [0.16, 0.42], ["60px", "0px"]);
  const cardY = useTransform(smoothProgress, [0.16, 0.42], ["40px", "0px"]);
  const cardRotate = useTransform(smoothProgress, [0.16, 0.42], [10, 0]);
  const cardScale = useTransform(smoothProgress, [0.16, 0.42], [1.15, 1]);
  const cardOpacity = useTransform(smoothProgress, [0.16, 0.38], [0, 1]);
  const cardBlur = useTransform(smoothProgress, [0.16, 0.42], ["blur(16px)", "blur(0px)"]);

  // Ribbon
  const ribbonY = useTransform(smoothProgress, [0.25, 0.46], ["100%", "0%"]);
  const ribbonOpacity = useTransform(smoothProgress, [0.25, 0.44], [0, 1]);

  // General elements
  const bgOpacity = useTransform(smoothProgress, [0.14, 0.32], [0, 1]);

  return (
    <div className="relative bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">

      {/* ══════════════════════════════════════
          SECTION 1 — SHATTERED TO ASSEMBLED HERO
      ══════════════════════════════════════ */}
      <section ref={containerRef} id="top" className="relative h-[320vh]">

        {/* Sticky viewport container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-28 pb-6 sm:pt-32 sm:pb-8">

          {/* ── THE SHATTERING TECH TREE (Phase 1) ── */}
          <motion.div
            style={{ opacity: treeOpacity, scale: treeScale, filter: treeBlur }}
            className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="relative">
              {/* Core Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[60px] rounded-full" />

              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 overflow-visible">
                {/* Branch 1 (Points Left) */}
                <motion.g style={{ x: b1X, y: b1Y }} className="text-neutral-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                  <motion.path style={{ pathLength: snakeLength }} d="M60,160 L100,160 L100,240 L160,300 L160,400" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="60" cy="160" r="8" stroke="currentColor" strokeWidth="4" fill="#0a0a0a" />
                </motion.g>

                {/* Branch 2 (Points Up-Left) */}
                <motion.g style={{ x: b2X, y: b2Y }} className="text-neutral-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                  <motion.path style={{ pathLength: snakeLength }} d="M120,210 L120,260 L160,300 L160,400" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="120" cy="210" r="8" stroke="currentColor" strokeWidth="4" fill="#0a0a0a" />
                </motion.g>

                {/* Branch 3 (Points Up) */}
                <motion.g style={{ x: b3X, y: b3Y }} className="text-neutral-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                  <motion.path style={{ pathLength: snakeLength }} d="M140,220 L140,280 L180,320 L180,400" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="140" cy="220" r="8" stroke="currentColor" strokeWidth="4" fill="#0a0a0a" />
                </motion.g>

                {/* Branch 4 (Points Left) */}
                <motion.g style={{ x: b4X, y: b4Y }} className="text-neutral-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                  <motion.path style={{ pathLength: snakeLength }} d="M60,240 L100,240 L180,320 L180,400" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="60" cy="240" r="8" stroke="currentColor" strokeWidth="4" fill="#0a0a0a" />
                </motion.g>

                {/* Branch 5 (Points Up) */}
                <motion.g style={{ x: b5X, y: b5Y }} className="text-neutral-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                  <motion.path style={{ pathLength: snakeLength }} d="M160,80 L160,220 L200,260 L200,400" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="160" cy="80" r="8" stroke="currentColor" strokeWidth="4" fill="#0a0a0a" />
                </motion.g>

                {/* Branch 6 (Points Up-Left) */}
                <motion.g style={{ x: b6X, y: b6Y }} className="text-neutral-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                  <motion.path style={{ pathLength: snakeLength }} d="M180,140 L220,180 L220,260 L200,280 L200,400" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="180" cy="140" r="8" stroke="currentColor" strokeWidth="4" fill="#0a0a0a" />
                </motion.g>

                {/* Branch 7 (Points Up-Right) */}
                <motion.g style={{ x: b7X, y: b7Y }} className="text-neutral-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                  <motion.path style={{ pathLength: snakeLength }} d="M260,180 L260,260 L220,300 L220,400" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="260" cy="180" r="8" stroke="currentColor" strokeWidth="4" fill="#0a0a0a" />
                </motion.g>

                {/* Branch 8 (Points Right) */}
                <motion.g style={{ x: b8X, y: b8Y }} className="text-neutral-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                  <motion.path style={{ pathLength: snakeLength }} d="M320,260 L280,260 L220,320 L220,400" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="320" cy="260" r="8" stroke="currentColor" strokeWidth="4" fill="#0a0a0a" />
                </motion.g>

                {/* Branch 9 (Points Up-Right) */}
                <motion.g style={{ x: b9X, y: b9Y }} className="text-neutral-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                  <motion.path style={{ pathLength: snakeLength }} d="M340,160 L300,200 L300,260 L240,320 L240,400" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="340" cy="160" r="8" stroke="currentColor" strokeWidth="4" fill="#0a0a0a" />
                </motion.g>

                {/* Branch 10 (Points Up) */}
                <motion.g style={{ x: b10X, y: b10Y }} className="text-neutral-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                  <motion.path style={{ pathLength: snakeLength }} d="M280,220 L280,300 L240,340 L240,400" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="280" cy="220" r="8" stroke="currentColor" strokeWidth="4" fill="#0a0a0a" />
                </motion.g>
              </svg>

              {/* AVENSOFT Stone Shatter Text */}
              <motion.div
                style={{ opacity: stoneOpacity }}
                className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] flex gap-1 sm:gap-2 font-black text-4xl sm:text-5xl md:text-6xl tracking-widest text-neutral-400 dark:text-neutral-500 uppercase drop-shadow-md"
              >
                <motion.span style={{ x: aX, y: aY, rotate: aR, display: 'inline-block' }}>A</motion.span>
                <motion.span style={{ x: vX, y: vY, rotate: vR, display: 'inline-block' }}>V</motion.span>
                <motion.span style={{ x: eX, y: eY, rotate: eR, display: 'inline-block' }}>E</motion.span>
                <motion.span style={{ x: nX, y: nY, rotate: nR, display: 'inline-block' }}>N</motion.span>
                <motion.span style={{ x: sX, y: sY, rotate: sR, display: 'inline-block' }}>S</motion.span>
                <motion.span style={{ x: oX, y: oY, rotate: oR, display: 'inline-block' }}>O</motion.span>
                <motion.span style={{ x: fX, y: fY, rotate: fR, display: 'inline-block' }}>F</motion.span>
                <motion.span style={{ x: tX, y: tY, rotate: tR, display: 'inline-block' }}>T</motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Clean, Subtle Dark Background Mesh */}
          <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-950/15 blur-[160px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_70%,transparent_100%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-neutral-300/[0.4] dark:border-white/[0.03] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1150px] h-[1150px] rounded-full border border-neutral-300/[0.2] dark:border-white/[0.015] pointer-events-none" />
          </motion.div>

          {/* Main Content Container (2-Column Grid) */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 w-full my-auto flex">

            {/* NEW: Massive Bleeding Background Image for Right Side */}
            <motion.div
              style={{ x: cardX, y: cardY, opacity: cardOpacity, scale: cardScale, filter: cardBlur }}
              className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[95vw] lg:w-[65vw] h-[85vh] z-0 pointer-events-none"
            >
              <div
                className="absolute inset-0 rounded-l-[40px] overflow-hidden"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 50%)'
                }}
              >
                <Image
                  src={assetPath("/home_image.webp")}
                  alt="Avensoft Ground Engineering & Telematics Lab"
                  fill
                  priority
                  className="hidden dark:block object-cover object-left-top opacity-50 mix-blend-screen"
                />
                <Image
                  src={assetPath("/home_image.webp")}
                  alt="Avensoft Technologies Studio"
                  fill
                  priority
                  className="block dark:hidden object-cover object-left-top opacity-30 mix-blend-multiply"
                />
                {/* Gradient overlays to fade top and bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 dark:from-[#0a0a0a] via-transparent to-neutral-50 dark:to-[#0a0a0a] h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent mix-blend-overlay" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">

              {/* LEFT COLUMN: High-Impact Typography & Narrative */}
              <div className="lg:col-span-7 space-y-6">

                {/* Status Pill Badge */}
                <motion.div style={{ y: badgeY, opacity: badgeOpacity }} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-heading font-medium bg-neutral-100 dark:bg-gradient-to-b dark:from-[#24242b] dark:to-[#121215] border border-neutral-200 dark:border-white/[0.14] text-neutral-800 dark:text-neutral-200 shadow-[0_4px_12px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_20px_-3px_rgba(0,0,0,0.8),0_2px_6px_rgba(0,0,0,0.5)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>Mission-Critical Engineering • Live Production Systems</span>
                </motion.div>

                {/* Headline */}
                <motion.h1 style={{ x: titleX, y: titleY, rotate: titleRotate, opacity: titleOpacity, filter: titleBlur }} className="font-heading font-extrabold text-[clamp(2.5rem,4.5vw,4.8rem)] tracking-tight leading-[1.08] text-neutral-900 dark:text-white max-w-2xl origin-left">
                  Deterministic <br />
                  Global Deployments <br />
                  in <span className="grad-text">1.4 Seconds</span>
                </motion.h1>

                {/* Value Proposition */}
                <motion.p style={{ x: descX, opacity: descOpacity }} className="font-body text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                  Synthesize production containers, replicate optimized binaries across 3 tiers of presence, and orchestrate zero-downtime atomic health verification.
                </motion.p>

                {/* Action Buttons */}
                <motion.div style={{ y: buttonsY, opacity: buttonsOpacity }} className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/about" className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#fef08a] text-neutral-950 font-heading font-bold text-sm shadow-md hover:shadow-lg hover:brightness-105 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                    <svg className="h-4 w-4 fill-neutral-950" viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4" /></svg>
                    <span>Explore Offerings</span>
                  </Link>
                  <Link href="/contact" className="px-6 py-3.5 rounded-xl border border-neutral-700/60 bg-[#0f1629] text-white font-heading font-bold text-sm hover:border-neutral-500 hover:bg-[#161f36] hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-sm">
                    <svg className="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Contact Us</span>
                  </Link>
                </motion.div>

              </div>
            </div>
          </div>

          {/* ── CONTINUOUS INFINITE TECH MARQUEE RIBBON ── */}
          <motion.div style={{ y: ribbonY, opacity: ribbonOpacity }} className="relative z-10 mt-auto pt-6 border-t border-white/[0.08] bg-[#050505]/80 backdrop-blur-md overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
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
          </motion.div>

          {/* Scroll Down Indicator Removed */}

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
              <Image src={assetPath("/bento-about.jpg")} alt="Avensoft Mission Control & Systems Architecture" fill className="object-cover object-center opacity-85 transition-transform duration-700 group-hover:scale-105" />
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
                    <Image src={assetPath("/sistec-logo.jpeg")} alt="SISTec Logo" fill className="object-cover" />
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
                  src={assetPath("/hero-mockup.webp")}
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
