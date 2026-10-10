"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "On-Device Neural Networks",
    desc: "Optimised INT8-quantised TensorFlow Lite and PyTorch Mobile models deployed directly inside mobile runtimes. Zero reliance on continuous cloud connectivity and zero per-API call billing costs.",
    tech: ["TensorFlow Lite", "PyTorch Mobile", "ONNX Runtime", "INT8 Quantization"],
    accent: "text-fuchsia-600 dark:text-fuchsia-400",
    borderHover: "hover:border-fuchsia-400 hover:shadow-fuchsia-500/20",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-950/20",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Real-Time Computer Vision",
    desc: "Sub-40ms vision pipelines using OpenCV and CameraX. Real-time facial landmark detection, driver drowsiness monitoring, eye-aspect-ratio (EAR) computation, and boundary tracking.",
    tech: ["OpenCV", "CameraX Stream", "Facial Landmarks", "Object Tracking"],
    accent: "text-cyan-600 dark:text-cyan-400",
    borderHover: "hover:border-cyan-400 hover:shadow-cyan-500/20",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "G-Force & Telematics Classification",
    desc: "Filtering raw tri-axis accelerometer and gyroscope high-frequency streams through recurrent classification models to distinguish severe vehicular collisions from everyday potholes.",
    tech: ["Sensor Fusion", "Kalman Filters", "G-Force Analysis", "Crash Classification"],
    accent: "text-amber-600 dark:text-amber-400",
    borderHover: "hover:border-amber-400 hover:shadow-amber-500/20",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Custom LLMs & Knowledge Retrieval",
    desc: "Domain-specific vector search pipelines (RAG) connecting institutional documentation, medical registers, or internal SOPs to conversational AI agents with zero hallucination guardrails.",
    tech: ["LangChain", "Vector Embeddings", "FAISS / ChromaDB", "Llama 3 / Mistral"],
    accent: "text-primary-600 dark:text-primary-400",
    borderHover: "hover:border-primary-400 hover:shadow-primary-500/20",
    bg: "bg-primary-50 dark:bg-primary-950/20",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
  },
  {
    title: "Edge Signal Processing & Audio",
    desc: "Fourier Transform (FFT) spectrogram classification on the edge. Identifying acoustic mechanical anomalies, distress cues, or vocal pattern biomarkers on low-power devices.",
    tech: ["FFT Analysis", "Mel Spectrograms", "Audio Classification", "DSP Filters"],
    accent: "text-emerald-600 dark:text-emerald-400",
    borderHover: "hover:border-emerald-400 hover:shadow-emerald-500/20",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  },
  {
    title: "Budget Hardware Optimization",
    desc: "Engineering algorithms specifically targeting low-spec hardware — $80 Android handsets, Raspberry Pi, and edge compute boxes with constrained RAM and thermal limits.",
    tech: ["Memory Profiling", "NNAPI Acceleration", "CPU Cache Tuning", "Thermal Throttling Guard"],
    accent: "text-sky-600 dark:text-sky-400",
    borderHover: "hover:border-sky-400 hover:shadow-sky-500/20",
    bg: "bg-sky-50 dark:bg-sky-950/20",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function AIServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      {/* ── CINEMATIC DIVISION HERO ── */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-fuchsia-500/15 dark:bg-fuchsia-500/10 blur-[120px]" />
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-cyan-500/15 dark:bg-cyan-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="badge mb-6 !bg-amber-400/10 !text-amber-300 !border-amber-400/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Division 03 • Applied AI & Machine Learning
            </div>

            <h1 className="font-heading font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              On-Device Neural Networks. <br />
              <span className="grad-text">Zero Cloud Round-Trip Latency.</span>
            </h1>

            <p className="font-body text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-6 max-w-2xl">
              We build production edge AI systems that execute right on the physical device. Zero reliance on expensive cloud inference APIs, zero delay, and 100% privacy compliance.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/contact" className="btn-primary">
                <svg className="h-4 w-4 fill-slate-950" viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4" /></svg>
                <span>Consult With AI Architects</span>
              </Link>
              <Link href="/portfolio" className="btn-ghost flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>View DualShield AI Case Study</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
              {[
                { val: "< 40ms", label: "Real-Time Frame Inference" },
                { val: "₹0 Cost", label: "Per-Inference Cloud Billing" },
                { val: "100% Edge", label: "Runs Fully Offline" },
                { val: "DPDP Ready", label: "Zero Video Leaves Device" },
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
            <span className="font-body text-xs font-bold tracking-widest uppercase text-fuchsia-600 dark:text-fuchsia-400">Technology Arsenal</span>
            <h2 className="section-title mt-2">
              Edge Intelligence & <span className="grad-text">Applied Vision.</span>
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              Moving beyond theoretical research papers into production neural networks running on millions of hardware cycles.
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

      {/* ── CASE STUDY SPOTLIGHT: DUALSHIELD AI ── */}
      <section className="py-20 bg-slate-100/70 dark:bg-[#04091a] border-y border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="badge !bg-amber-100 !text-amber-800 dark:!bg-amber-950/40 dark:!text-amber-300">
                Flagship R&D • Road Safety Telematics
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                DualShield AI: <br />
                <span className="grad-text">Hardware-Free Vision & Crash Detection</span>
              </h2>
              <p className="font-body text-slate-600 dark:text-slate-400 leading-relaxed">
                India records over 1.5 lakh road fatalities every year. Commercial telematics require ₹15,000+ proprietary boxes. DualShield AI replaces hardware with edge neural networks running directly on an ordinary mounted Android phone.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="font-heading font-bold text-2xl text-amber-600 dark:text-amber-400">₹0 Box</div>
                  <div className="font-body text-xs text-slate-500 mt-1">Uses phone camera & sensors</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="font-heading font-bold text-2xl text-fuchsia-600 dark:text-fuchsia-400">Auto SOS</div>
                  <div className="font-body text-xs text-slate-500 mt-1">Instant GPS dispatch on crash</div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/portfolio" className="btn-primary">
                  Review DualShield Field Trial →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-black p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-heading font-bold text-xs text-fuchsia-400">ON-DEVICE VISION INFERENCE TELEMETRY</span>
                  <span className="text-[10px] font-mono text-emerald-400">FPS: 31.2 • LATENCY: 32ms</span>
                </div>
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between">
                    <span className="text-slate-400">MODEL: DualShield_MobileNetV3_INT8</span>
                    <span className="text-white font-bold">ACTIVE</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between">
                    <span className="text-slate-400">DRIVER_DROWSINESS_CLASSIFIER:</span>
                    <span className="text-emerald-400 font-bold">ALERT (EAR = 0.32)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between">
                    <span className="text-slate-400">G_FORCE_SHOCK_DETECTION:</span>
                    <span className="text-cyan-400 font-bold">NORMAL (0.98G Nominal)</span>
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
            Ready to integrate edge AI into your product?
          </h2>
          <p className="font-body text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Whether you need real-time vision pipelines, on-device sensor intelligence, or local LLM retrieval, we’ll build a zero-cloud-latency system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Schedule AI Architecture Review</Link>
            <Link href="/services" className="btn-ghost">Explore All Divisions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
