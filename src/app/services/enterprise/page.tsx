"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Tamper-Proof QR & Gate Passes",
    desc: "Cryptographically signed QR tokens with rolling expiration and HMAC-SHA256 signatures. Security guards verify identity in under 6 seconds, eliminating paper gate passes and forged signatures.",
    tech: ["QR Crypto Signatures", "HMAC-SHA256", "Guard Verification App", "Instant Audit Logs"],
    accent: "text-emerald-600 dark:text-emerald-400",
    borderHover: "hover:border-emerald-400 hover:shadow-emerald-500/20",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    icon: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z",
  },
  {
    title: "Public Health Clinic & OPD",
    desc: "Designed for high-footfall government hospitals and CHCs. 30-second patient registration, unique permanent health ID, bilingual Hindi/English prescription receipts, and doctor queue management.",
    tech: ["Offline OPD Engine", "Bilingual Slips", "Doctor Queue Console", "Daily CMHO Analytics"],
    accent: "text-primary-600 dark:text-primary-400",
    borderHover: "hover:border-primary-400 hover:shadow-primary-500/20",
    bg: "bg-primary-50 dark:bg-primary-950/20",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Sovereign Data & DPDP Act",
    desc: "100% compliant with India's Digital Personal Data Protection (DPDP) Act 2023. Institutional data remains in isolated self-hosted infrastructure with strict role access and zero commercial data sharing.",
    tech: ["DPDP Act 2023", "Isolated VPC / On-Prem", "Data Sovereignty", "Encrypted Backups"],
    accent: "text-cyan-600 dark:text-cyan-400",
    borderHover: "hover:border-cyan-400 hover:shadow-cyan-500/20",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Thermal Printer & Scanner Hardware",
    desc: "Turnkey hardware pairing with 58mm/80mm ESC/POS thermal printers, 1D/2D handheld barcode scanners, and biometric authentication devices over Bluetooth, USB, or local Ethernet.",
    tech: ["ESC/POS Drivers", "Raw Socket Printing", "USB Barcode Scanners", "Plug-and-Play Setup"],
    accent: "text-amber-600 dark:text-amber-400",
    borderHover: "hover:border-amber-400 hover:shadow-amber-500/20",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    icon: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z",
  },
  {
    title: "Automated Non-Repudiation Audit",
    desc: "Every record creation, warden signature, doctor consultation, and gate exit is irrevocably timestamped with operator credentials, creating an airtight audit trail for institutional administration.",
    tech: ["Audit Trails", "Role Attribution", "Dispute Resolution Logs", "Tamper Evident DB"],
    accent: "text-fuchsia-600 dark:text-fuchsia-400",
    borderHover: "hover:border-fuchsia-400 hover:shadow-fuchsia-500/20",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-950/20",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Field Onboarding & Bilingual Training",
    desc: "We don't just write software; we sit with campus guards, clinic registration staff, and administrative clerks. We supply illustrated Hindi/English user guides and on-site training sessions.",
    tech: ["Bilingual Manuals", "On-Site Operator Coaching", "SOP Documentation", "Zero Disruption Cutover"],
    accent: "text-sky-600 dark:text-sky-400",
    borderHover: "hover:border-sky-400 hover:shadow-sky-500/20",
    bg: "bg-sky-50 dark:bg-sky-950/20",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
];

export default function EnterpriseServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      {/* ── CINEMATIC DIVISION HERO ── */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-emerald-500/15 dark:bg-emerald-500/10 blur-[120px]" />
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-primary-500/15 dark:bg-primary-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="badge mb-6 !bg-emerald-500/10 !text-emerald-300 !border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Division 04 • Enterprise & Institutional Systems
            </div>

            <h1 className="font-heading font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              Paperless Institutional Governance. <br />
              <span className="grad-text">Zero Forgery. Zero Queue Friction.</span>
            </h1>

            <p className="font-body text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-6 max-w-2xl">
              We replace fragile manual paper slips, forged registers, and physical bottlenecks with tamper-proof digital systems engineered specifically for colleges, hospitals, and enterprise bodies across Madhya Pradesh & Uttar Pradesh.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/contact" className="btn-primary">
                <svg className="h-4 w-4 fill-slate-950" viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4" /></svg>
                <span>Modernise Your Institution</span>
              </Link>
              <Link href="/portfolio" className="btn-ghost flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>View Institutional Deployments</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
              {[
                { val: "Zero Lost", label: "Paper Registers at CHC" },
                { val: "< 6 Sec", label: "Tamper-Proof Gate Scan" },
                { val: "100%", label: "Timestamped Audit Logs" },
                { val: "DPDP 2023", label: "Sovereign India Data" },
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
            <span className="font-body text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">Institutional Governance</span>
            <h2 className="section-title mt-2">
              Transforming Legacy <span className="grad-text">Workflows.</span>
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              Every system is engineered for zero downtime, low staff digital literacy, and high daily transaction volumes.
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
            Ready to deploy paperless digital operations?
          </h2>
          <p className="font-body text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            We offer 14-day parallel pilot trials for educational campuses and healthcare centres before any contract commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Request 14-Day Pilot Deployment</Link>
            <Link href="/services" className="btn-ghost">Explore All Divisions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
