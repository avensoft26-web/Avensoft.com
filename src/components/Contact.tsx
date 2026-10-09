"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website_url_check")) return;
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  const inputClasses = "w-full px-5 py-4 bg-[#0a0a0f] border border-white/10 rounded-xl font-body text-[0.95rem] text-white outline-none transition-all focus:border-indigo-500/50 focus:bg-[#121215] focus:shadow-[0_0_20px_rgba(99,102,241,0.1)] placeholder-slate-600";
  const labelClasses = "block font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-slate-500 mb-2.5 ml-1";

  return (
    <>
      {/* ── CONTACT ── */}
      <section id="contact" className="relative overflow-hidden bg-[#000000] py-24 lg:py-36">
        <div className="divider" />

        {/* Deep space background elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-[85rem] px-4 sm:px-6">
          <div className="relative rounded-[2rem] lg:rounded-[3rem] border border-white/[0.08] bg-[#0a0a0f]/60 backdrop-blur-xl p-8 lg:p-16 shadow-[0_0_80px_rgba(34,211,238,0.05)] overflow-hidden">

            {/* Inner glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-[80px] pointer-events-none rounded-full opacity-50"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Left Column: Typography */}
              <div className="lg:col-span-5 lg:pr-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-body text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span> Initiate
                </div>

                <h2 className="font-heading font-black text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
                  Let's build something <br />
                  <span className="grad-text">extraordinary.</span>
                </h2>

                <p className="font-body text-base lg:text-lg text-slate-400 leading-relaxed mb-10 max-w-md">
                  Whether you need a scalable enterprise platform, a cutting-edge AI integration, or a stunning mobile experience — our engineering collective is ready.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Encrypted Comms", val: "avensoft26@gmail.com", col: "text-indigo-400" },
                    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Command Center", val: "Bhopal, Madhya Pradesh", col: "text-cyan-400" },
                  ].map(({ icon, label, val, col }) => (
                    <div key={label} className="flex items-center gap-5 group cursor-default">
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#121215] shadow-inner group-hover:border-white/20 transition-colors ${col}`}>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1">{label}</p>
                        <p className="font-body text-base font-semibold text-white tracking-wide">{val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7 lg:pl-12">
                <div className="rounded-[1.5rem] border border-white/[0.05] bg-[#121215]/80 p-8 lg:p-10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md">
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <div className="hidden" aria-hidden="true">
                      <input type="text" name="website_url_check" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className={labelClasses}>Your Name</label>
                        <input type="text" required className={inputClasses} placeholder="Your name" />
                      </div>
                      <div>
                        <label className={labelClasses}>Email Address</label>
                        <input type="email" required className={inputClasses} placeholder="Your email address" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className={labelClasses}>Phone</label>
                        <input type="tel" required className={inputClasses} placeholder="Your phone number" />
                      </div>
                      <div>
                        <label className={labelClasses}>Service Type</label>
                        <select required className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:calc(100%-1.25rem)_center] bg-no-repeat pr-10`}>
                          <option className="bg-[#121215] text-slate-200">Web Platform Development</option>
                          <option className="bg-[#121215] text-slate-200">Mobile App Engineering</option>
                          <option className="bg-[#121215] text-slate-200">AI / ML Integration</option>
                          <option className="bg-[#121215] text-slate-200">Architecture Consulting</option>
                          <option className="bg-[#121215] text-slate-200">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Your Message</label>
                      <textarea
                        rows={4}
                        required
                        className={`${inputClasses} resize-none`}
                        placeholder="Tell us about your goals, timelines, and technical requirements..."
                      />
                    </div>

                    {status === "idle" && (
                      <button type="submit" className="w-full relative group overflow-hidden rounded-xl bg-white px-8 py-4 font-heading font-bold text-slate-900 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          SEND
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    )}

                    {status === "submitting" && (
                      <div className="flex w-full items-center justify-center gap-3 rounded-xl bg-white/10 py-4 text-sm font-semibold text-slate-300 font-body border border-white/5">
                        <svg className="h-5 w-5 animate-spin text-indigo-400" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Processing Request...
                      </div>
                    )}

                    {status === "success" && (
                      <div className="flex w-full items-center justify-center gap-3 rounded-xl border py-4 text-sm font-semibold font-body bg-emerald-900/20 border-emerald-500/30 text-emerald-400">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Request received! Our architects will reach out within 24 hours.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
