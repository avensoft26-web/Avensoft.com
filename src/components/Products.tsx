"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    title: "SISTec Digital Campus Pass",
    category: "Education & Campus Administration",
    status: "LIVE IN PRODUCTION",
    statusColor: "text-emerald-600 dark:text-emerald-400",
    statusBg: "bg-emerald-100 dark:bg-emerald-900/30",
    hoverBorder: "hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(52,211,153,0.35)] hover:-translate-y-2",
    location: "Sagar Group of Institutions, Bhopal, MP",
    problem: "Paper hostel out-passes took 30+ minutes of multi-warden signatures, suffered forged entries, and created security bottlenecks at campus gates during peak rush hours.",
    solution: "A role-based digital pass system where students request on mobile, wardens approve instantly, and guards scan tamper-proof QR codes — the entire flow takes under 45 seconds.",
    outcomes: [
      { label: "Gate scan time", val: "< 6 seconds" },
      { label: "Paper slips saved", val: "Thousands/month" },
      { label: "Audit trail", val: "100% timestamped" },
      { label: "Fraud incidents", val: "Zero since launch" },
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "QR Auth", "PWA"],
    img: "/hero-mockup.webp",
    liveUrl: "https://deepakkumar7388.github.io/SISTec-Digital-Pass/",
    videoUrl: "https://www.youtube.com/watch?v=NrBc7qjgI5Q",
  },
  {
    title: "CHC Koraon Hospital Management System",
    category: "Public Health Informatics",
    status: "LIVE IN PRODUCTION",
    statusColor: "text-cyan-400",
    statusBg: "bg-cyan-100 dark:bg-cyan-900/30",
    hoverBorder: "hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.35)] hover:-translate-y-2",
    location: "Community Health Centre, Koraon, Prayagraj, UP",
    problem: "Patients queued for 60+ minutes for handwritten OPD slips. Doctors had no patient history access, and health officers had zero real-time consultation data.",
    solution: "30-second digital OPD slip generation with unique patient ID, bilingual receipt printing, live doctor queue dashboard, and automated daily reports for BMO and CMHO offices.",
    outcomes: [
      { label: "Queue time reduction", val: "~40% faster" },
      { label: "Daily OPD entries", val: "Managed digitally" },
      { label: "Network requirement", val: "Works on 4G" },
      { label: "Paper registers lost", val: "Zero" },
    ],
    tech: ["React", "Node.js", "MySQL", "ESC/POS Printing", "Offline Sync"],
    img: "/chc_web_mockup.jpg",
    liveUrl: "https://deepakkumar7388.github.io/Chaudhary_Health_Care-Center-Koraon-Pryagraj/",
    simulatorUrl: "https://deepakkumar7388.github.io/CHC_Simulator/",
  },
  {
    title: "DualShield AI — Road Safety Platform",
    category: "Road Safety • On-Device Machine Learning",
    status: "FIELD TRIAL",
    statusColor: "text-amber-300",
    statusBg: "bg-amber-100 dark:bg-amber-900/30",
    hoverBorder: "hover:border-amber-400 hover:shadow-[0_0_35px_rgba(253,224,71,0.35)] hover:-translate-y-2",
    location: "Android • Zero External Hardware Required",
    problem: "Most drivers cannot afford expensive hardware boxes for road safety. Moreover, drivers are unaware of entering accident-prone 'High-Risk Zones' until it's too late.",
    solution: "A mobile app that accesses built-in smartphone sensors to automatically detect accidents and instantly generate an SOS with live location and automated calling. It also uses GPS to provide voice alerts when entering High-Risk Zones based on the user's real-time speed.",
    outcomes: [
      { label: "Accident Detection", val: "Sensor-based AI" },
      { label: "SOS Generation", val: "Auto Call & Location" },
      { label: "High-Risk Zone", val: "Voice Speed Alerts" },
      { label: "Hardware Cost", val: "₹0 (Phone Only)" },
    ],
    tech: ["Android SDK", "Sensor APIs", "GPS & Geofencing", "Text-to-Speech", "Auto-SOS"],
    img: "/dualshield-mockup.jpg",
  },
];

const processSteps = [
  { num: "01", title: "Field Assessment", desc: "We sit alongside the clerk, gate guard, or OPD operator — documenting actual bottlenecks, hardware constraints, and internet conditions in the field.", color: "text-cyan-400", border: "border-cyan-500", hover: "hover:bg-cyan-500/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]" },
  { num: "02", title: "Architecture Design", desc: "We produce a lean, pragmatic system design — no over-engineered cloud stack. Right-sized for your institution's load, connectivity, and budget.", color: "text-amber-300", border: "border-amber-500", hover: "hover:bg-amber-500/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(253,224,71,0.2)]" },
  { num: "03", title: "Parallel Pilot", desc: "We run a 2-week live pilot alongside existing paper systems, letting staff build confidence with zero disruption to daily operations.", color: "text-cyan-400", border: "border-cyan-500", hover: "hover:bg-cyan-500/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]" },
  { num: "04", title: "Go-Live & Handover", desc: "Full production deployment, role-based access for administrators, bilingual staff training manuals, and printer/scanner hardware pairing.", color: "text-emerald-400", border: "border-emerald-500", hover: "hover:bg-emerald-500/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]" },
];

export default function Products() {
  return (
    <>
      {/* ── PORTFOLIO ── */}
      <section id="deployments" className="relative bg-slate-50 dark:bg-[#000000] py-20 lg:py-36 transition-colors duration-300">
        <div className="divider" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 lg:mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between text-center md:text-left">
            <div>
              <div className="badge mb-5 mx-auto md:mx-0">Live Portfolio</div>
              <h2 className="section-title">
                Software solving <span className="grad-text">real problems</span><br className="hidden md:block" /> in the real world.
              </h2>
            </div>
            <p className="font-body text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0 px-2 md:px-0">
              Every deployment listed here is actively in use. Not a demo, not a prototype.
            </p>
          </div>

          <div className="space-y-24 lg:space-y-40">
            {products.map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
              >
                {/* Visual / Image Side */}
                <div className="w-full lg:w-[55%] relative group">
                  <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl"></div>
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-[5/4] border border-slate-200/60 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] dark:shadow-black">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>
                  
                  {/* Floating Meta Tag */}
                  <div className={`absolute top-6 ${i % 2 !== 0 ? 'right-6 lg:-right-6' : 'left-6 lg:-left-6'} z-10 flex items-center gap-3 bg-white/95 dark:bg-[#0a0a0c]/95 backdrop-blur-md border border-slate-200/80 dark:border-white/10 px-5 py-2.5 rounded-2xl shadow-xl transition-transform duration-500 group-hover:-translate-y-1`}>
                    <span className={`h-2.5 w-2.5 rounded-full ${p.statusColor.replace('text-', 'bg-')} animate-pulse`}></span>
                    <span className="font-heading text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-900 dark:text-white">{p.status}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  <span className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-4">{p.category}</span>
                  <h3 className="font-heading font-extrabold text-[2rem] lg:text-[2.8rem] leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {p.title}
                  </h3>
                  
                  <div className="flex items-center gap-2.5 mb-8">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="font-body text-[0.9rem] font-medium text-slate-600 dark:text-slate-400">{p.location}</span>
                  </div>

                  <div className="space-y-7 mb-10">
                    <div className="pl-6 border-l-[3px] border-slate-200 dark:border-white/10">
                      <p className="font-body text-[11px] font-bold tracking-[0.15em] uppercase text-rose-500 mb-2">The Problem</p>
                      <p className="font-body text-[0.95rem] text-slate-600 dark:text-slate-400 leading-relaxed">{p.problem}</p>
                    </div>
                    <div className={`pl-6 border-l-[3px] ${p.statusColor.replace('text-', 'border-').replace('400', '500').replace('300', '500')}`}>
                      <p className={`font-body text-[11px] font-bold tracking-[0.15em] uppercase mb-2 ${p.statusColor}`}>What We Built</p>
                      <p className="font-body text-[0.95rem] text-slate-600 dark:text-slate-400 leading-relaxed">{p.solution}</p>
                    </div>
                  </div>

                  {/* Outcomes Minimal Grid */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
                    {p.outcomes.map(({ label, val }) => (
                      <div key={label}>
                        <p className={`font-heading font-extrabold text-[1.6rem] tracking-tight mb-1 ${p.statusColor}`}>{val}</p>
                        <p className="font-body text-[0.75rem] text-slate-500 font-bold uppercase tracking-widest">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-10 flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="rounded-full px-3.5 py-1.5 text-[0.7rem] font-bold font-body uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200 dark:bg-white/[0.03] dark:text-neutral-400 dark:border-white/10 transition-colors hover:bg-slate-200 dark:hover:bg-white/10">{t}</span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-200/80 dark:border-white/10">
                    {p.liveUrl ? (
                      <>
                        <a 
                          href={p.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-primary flex-1 flex items-center justify-center gap-2 !bg-gradient-to-r !from-cyan-500 !to-blue-600 !text-slate-950 font-bold shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all hover:scale-[1.02] py-3.5 rounded-xl"
                        >
                          <span>Launch Live App</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                        {p.videoUrl && (
                          <a 
                            href={p.videoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-ghost flex-1 flex items-center justify-center gap-2 border-slate-300 dark:border-white/20 hover:border-rose-500/50 hover:bg-rose-500/10 transition-all hover:scale-[1.02] py-3.5 rounded-xl bg-white/50 dark:bg-transparent"
                          >
                            <span className="text-rose-500 font-bold">▶</span>
                            <span>Video Demo</span>
                          </a>
                        )}
                        {p.simulatorUrl && (
                          <a 
                            href={p.simulatorUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-ghost flex-1 flex items-center justify-center gap-2 border-slate-300 dark:border-white/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all hover:scale-[1.02] py-3.5 rounded-xl bg-white/50 dark:bg-transparent"
                          >
                            <span className="text-purple-400 font-bold">🎮</span>
                            <span>Play Simulator</span>
                          </a>
                        )}
                      </>
                    ) : (
                      <Link href="#contact" className="btn-primary w-full py-3.5 rounded-xl">
                        Request a Demo →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="relative bg-white dark:bg-[#000000] py-20 lg:py-36 transition-colors duration-300">
        <div className="divider" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-14 lg:mb-16 max-w-3xl text-center">
            <div className="badge mx-auto mb-5">How We Work</div>
            <h2 className="section-title mb-5">
              Zero operational <span className="grad-text">interruption</span> deployment.
            </h2>
            <p className="font-body text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed px-2">
              A proven four-stage sequence built around institutions that cannot afford downtime. We run alongside your existing systems until you're confident — not before.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto mt-16 lg:mt-24">
            {/* The continuous vertical line */}
            <div className="absolute left-7 md:left-[8.5rem] top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
            
            <div className="space-y-12 lg:space-y-20 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col md:flex-row items-start gap-6 md:gap-14 group"
                >
                  {/* Glowing Node and Blueprint Number */}
                  <div className="relative flex items-center shrink-0 w-16 md:w-48 pl-3 md:pl-0 z-10 md:justify-end mt-4">
                    {/* Number floating next to the line (Desktop) */}
                    <div className={`hidden md:block font-heading text-6xl lg:text-8xl font-black ${step.color.replace('text-', 'text-').replace('400', '500/20').replace('300', '400/20')} transition-colors duration-500 group-hover:${step.color} mr-10 drop-shadow-xl`}>
                      {step.num}
                    </div>
                    {/* The Node on the line */}
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-white dark:border-[#000000] bg-slate-100 dark:bg-[#0f121b] shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center relative z-20 group-hover:scale-125 transition-transform duration-500 ease-out">
                      <div className={`h-3 w-3 md:h-4 md:w-4 rounded-full ${step.color.replace('text-', 'bg-')} animate-pulse`}></div>
                      {/* Glow behind node */}
                      <div className={`absolute inset-0 rounded-full ${step.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500`}></div>
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="flex-1 w-full bg-white dark:bg-[#0a0c10] border border-slate-200 dark:border-white/[0.08] p-8 lg:p-12 rounded-[2.5rem] rounded-tl-none shadow-xl shadow-slate-200/50 dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] dark:shadow-black transition-all duration-500 hover:-translate-y-2 dark:hover:bg-[#0d1016] dark:hover:border-white/[0.15] relative overflow-hidden group-hover:shadow-2xl dark:group-hover:shadow-black">
                    {/* Background number for mobile only */}
                    <div className="md:hidden font-heading text-8xl font-black text-slate-100 dark:text-white/5 absolute -top-4 -right-4 pointer-events-none select-none">
                      {step.num}
                    </div>
                    
                    <span className={`font-body text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block ${step.color}`}>Deployment Phase</span>
                    <h3 className="font-heading font-extrabold text-[1.6rem] lg:text-[2rem] text-slate-900 dark:text-white mb-5 relative z-10 tracking-tight group-hover:text-primary-600 dark:group-hover:text-white transition-colors">{step.title}</h3>
                    <p className="font-body text-[1rem] lg:text-[1.1rem] text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{step.desc}</p>
                    
                    {/* Accenting loading bar at bottom */}
                    <div className={`absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-700 ease-in-out ${step.color.replace('text-', 'bg-')}`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DATA SECURITY ── */}
      <section className="relative py-20 lg:py-36 overflow-hidden bg-white dark:bg-[#000000] transition-colors duration-300">
        <div className="divider" />
        
        {/* Background Grid and Radial Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-400/20 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center p-4 md:p-5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mb-8 border border-cyan-200 dark:border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative group cursor-default">
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 dark:bg-cyan-400/10 animate-ping opacity-50"></div>
              <svg className="w-8 h-8 md:w-10 md:h-10 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              Your data belongs <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#fde047]">strictly to your institution.</span>
            </h2>
            
            <p className="font-body text-[1.05rem] lg:text-[1.25rem] text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Patient clinical records, student travel histories, and government applicant data are never monetized, never shared with third parties, and never used in ML training datasets without explicit written consent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
            {[
              { img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "AES-256 encryption at rest & in transit", title: "Military-Grade" },
              { img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", text: "Granular role-based staff permissions", title: "Zero Trust" },
              { img: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=600&auto=format&fit=crop", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", text: "Daily automated off-site backups", title: "Redundancy" },
            ].map(({ img, icon, text, title }) => (
              <div key={text} className="relative group flex flex-col rounded-[2rem] bg-white/50 dark:bg-[#0a0c10] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-slate-200/50 dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] dark:shadow-black hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent dark:from-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative h-48 w-full overflow-hidden border-b border-white/5 mb-6">
                  <img src={img} alt={title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0a0c10]/80 backdrop-blur-md text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-cyan-500/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={icon} /></svg>
                  </div>
                </div>

                <div className="flex flex-col flex-grow px-8 pb-8 lg:px-10 lg:pb-10 text-center relative z-10">
                  <h4 className="font-heading font-extrabold text-[1.2rem] text-slate-900 dark:text-white mb-3 tracking-wide">{title}</h4>
                  <p className="font-body text-[0.95rem] text-slate-600 dark:text-slate-400 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10">
            <div className="flex items-center gap-3 bg-white dark:bg-[#0f121b] border border-slate-200 dark:border-white/10 px-5 py-3 rounded-full shadow-sm">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-body text-xs font-bold tracking-widest uppercase text-slate-600 dark:text-slate-300">DPDP Act Compliant</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-white/10"></div>
            <Link href="#contact" className="font-heading font-bold text-[1rem] text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-2 group transition-colors">
              Request Security Architecture Specs
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
