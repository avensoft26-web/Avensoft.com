"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Next.js & Modern React Portals",
    desc: "Architected with Next.js App Router, React Server Components (RSC), and edge-optimised rendering. Sub-300ms First Contentful Paint and 100/100 Lighthouse performance scores.",
    tech: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
    accent: "text-primary-600 dark:text-primary-400",
    borderHover: "hover:border-primary-400 hover:shadow-primary-500/20",
    bg: "bg-primary-50 dark:bg-primary-950/20",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "High-Throughput Node.js APIs",
    desc: "Robust backend engines powered by Node.js, Express, Fastify, and NestJS. Engineered with resilient middleware, rate limiting, and structured OpenAPI documentation.",
    tech: ["Node.js", "Express", "REST APIs", "GraphQL"],
    accent: "text-cyan-600 dark:text-cyan-400",
    borderHover: "hover:border-cyan-400 hover:shadow-cyan-500/20",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Distributed Data Layer & PostgreSQL",
    desc: "Relational database schema modeling with strict indexing, ACID guarantees, transaction safety, and Redis memory caching for sub-millisecond query responses.",
    tech: ["PostgreSQL", "Redis", "Prisma ORM", "Connection Pooling"],
    accent: "text-emerald-600 dark:text-emerald-400",
    borderHover: "hover:border-emerald-400 hover:shadow-emerald-500/20",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    title: "Real-Time Telemetry & WebSockets",
    desc: "Bi-directional WebSocket streaming for instant gate pass approvals, live bed vacancy monitors, operator presence tracking, and real-time dashboard notifications.",
    tech: ["WebSockets", "Socket.io", "Server-Sent Events", "Pub/Sub"],
    accent: "text-fuchsia-600 dark:text-fuchsia-400",
    borderHover: "hover:border-fuchsia-400 hover:shadow-fuchsia-500/20",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-950/20",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Role-Based Multi-Tenant SaaS",
    desc: "Sophisticated access control architectures (RBAC / ABAC) isolating tenants at the schema level, with encrypted audit trails and fine-grained department privileges.",
    tech: ["Multi-Tenancy", "RBAC Auth", "JWT / OAuth2", "Audit Logging"],
    accent: "text-amber-600 dark:text-amber-400",
    borderHover: "hover:border-amber-400 hover:shadow-amber-500/20",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Cloud Infrastructure & Docker DevOps",
    desc: "Automated container builds, zero-downtime rolling deploys, Nginx reverse proxy SSL termination, and automated daily encrypted offsite backups.",
    tech: ["Docker", "Linux / Ubuntu", "Nginx", "GitHub Actions CI/CD"],
    accent: "text-sky-600 dark:text-sky-400",
    borderHover: "hover:border-sky-400 hover:shadow-sky-500/20",
    bg: "bg-sky-50 dark:bg-sky-950/20",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];

export default function WebServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      {/* ── CINEMATIC DIVISION HERO ── */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-primary-500/15 dark:bg-primary-500/10 blur-[120px]" />
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-cyan-500/15 dark:bg-cyan-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="badge mb-6 !bg-cyan-500/10 !text-cyan-300 !border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Division 02 • Enterprise Web Systems
            </div>

            <h1 className="font-heading font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              High-Throughput Web Platforms. <br />
              <span className="grad-text">Engineered for Massive Concurrency.</span>
            </h1>

            <p className="font-body text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-6 max-w-2xl">
              We design and build mission-critical web applications for organizations where downtime is unacceptable. Fullstack Next.js, distributed PostgreSQL, and real-time WebSocket infrastructure running with sub-300ms SLA.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/contact" className="btn-primary">
                <svg className="h-4 w-4 fill-slate-950" viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4" /></svg>
                <span>Discuss Your Web Platform</span>
              </Link>
              <Link href="/portfolio" className="btn-ghost flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>View Web Case Studies</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
              {[
                { val: "< 300ms", label: "Global Edge SLA" },
                { val: "99.9%", label: "Production Uptime" },
                { val: "100% ACID", label: "PostgreSQL Transaction Safety" },
                { val: "Zero Lag", label: "Real-Time WebSocket Sync" },
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
            <span className="font-body text-xs font-bold tracking-widest uppercase text-primary-600 dark:text-primary-400">Architecture Mastery</span>
            <h2 className="section-title mt-2">
              Fullstack Web <span className="grad-text">Specializations.</span>
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              Every layer of our web architecture is built for clean maintainability, bulletproof role governance, and horizontal scalability.
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

      {/* ── CASE STUDY SPOTLIGHT ── */}
      <section className="py-20 bg-slate-100/70 dark:bg-[#04091a] border-y border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="badge !bg-emerald-100 !text-emerald-800 dark:!bg-emerald-950/40 dark:!text-emerald-300">
                Live Deployment • Higher Education
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                SISTec Digital Pass: <br />
                <span className="grad-text">Role-Based Campus Pass Architecture</span>
              </h2>
              <p className="font-body text-slate-600 dark:text-slate-400 leading-relaxed">
                Deployed at Sagar Group of Institutions, Bhopal. Replaced manual multi-signature paper registers with instant mobile requests, live warden dashboards, and sub-6-second QR security gate scans.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="font-heading font-bold text-2xl text-emerald-600 dark:text-emerald-400">&lt; 6 Sec</div>
                  <div className="font-body text-xs text-slate-500 mt-1">Tamper-proof QR gate scan</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="font-heading font-bold text-2xl text-primary-600 dark:text-primary-400">Zero Slips</div>
                  <div className="font-body text-xs text-slate-500 mt-1">Complete paperless transition</div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/portfolio" className="btn-primary">
                  Inspect System Architecture →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-white dark:bg-slate-900 p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="font-heading font-bold text-sm text-slate-800 dark:text-slate-200">Live Campus Pass Monitor</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">STATUS: 200 OK</span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex justify-between">
                    <span className="text-slate-500">REQUEST_ID: SISTEC-2024-9842</span>
                    <span className="text-emerald-500 font-bold">APPROVED (Warden Desk 02)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex justify-between">
                    <span className="text-slate-500">GATE_SCAN_AUTH: HMAC-SHA256</span>
                    <span className="text-cyan-500 font-bold">VERIFIED (Main Gate Guard 01)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex justify-between">
                    <span className="text-slate-500">AUDIT_LOG_STATUS:</span>
                    <span className="text-primary-500 font-bold">PERSISTED TO POSTGRESQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white mb-6">
            Building a web platform that needs to scale?
          </h2>
          <p className="font-body text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Tell us about your expected user load, database complexity, and security requirements. We’ll design a battle-tested architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Schedule Web Architecture Call</Link>
            <Link href="/services" className="btn-ghost">Explore All Divisions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
