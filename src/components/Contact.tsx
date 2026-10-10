"use client";
import React, { useState } from "react";
import Link from "next/link";
import { assetPath } from "@/lib/basePath";

// CONFIGURATION:
// 1. Web3Forms Access Key:
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "4ddd09a6-c4d7-4be4-bc05-60affca495e1";

// 2. WhatsApp Phone Number (with country code, e.g., 917992054663):
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "917992054663";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Platform Development",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const botField = (form.elements.namedItem("website_url_check") as HTMLInputElement)?.value;
    if (botField) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const payload = {
        access_key: WEB3FORMS_KEY.trim(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: formData.message.trim(),
        subject: `New Project Enquiry from ${formData.name.trim() || "Client"} — Avensoft Technologies`,
        from_name: "Avensoft Technologies Portal",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Web Platform Development",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to submit request. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again or email avensoft26@gmail.com directly.");
    }
  };

  const handleWhatsAppChat = () => {
    let text = "Hello Avensoft Technologies! I would like to connect and explore working together with your team.";

    const hasDetails = formData.name.trim() || formData.message.trim() || formData.phone.trim();
    if (hasDetails) {
      const lines = [
        "Hello Avensoft Technologies! I'd love to connect and explore working together.\n",
      ];
      if (formData.name.trim()) lines.push(`*Name:* ${formData.name.trim()}`);
      if (formData.phone.trim()) lines.push(`*Phone:* ${formData.phone.trim()}`);
      if (formData.service) lines.push(`*Requirement:* ${formData.service}`);
      if (formData.message.trim()) lines.push(`*Note:* ${formData.message.trim()}`);
      text = lines.join("\n");
    }

    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const inputClasses = "w-full px-5 py-4 bg-[#0a0a0f] border border-white/10 rounded-xl font-body text-[0.95rem] text-white outline-none transition-all focus:border-cyan-500/50 focus:bg-[#121215] focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] placeholder-slate-600";
  const labelClasses = "block font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-slate-500 mb-2.5 ml-1";

  return (
    <>
      {/* ── CONTACT ── */}
      <section id="contact" className="relative overflow-hidden bg-[#000000] py-24 lg:py-36">
        <div className="divider" />

        {/* Deep space background elements */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${assetPath("/noise.png")})` }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-[85rem] px-4 sm:px-6">
          <div className="relative rounded-[2rem] lg:rounded-[3rem] border border-white/[0.08] bg-[#0a0a0f]/60 backdrop-blur-xl p-8 lg:p-16 shadow-[0_0_80px_rgba(34,211,238,0.05)] overflow-hidden">

            {/* Inner ambient glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-[90px] pointer-events-none rounded-full opacity-50"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Left Column: Typography & Channels */}
              <div className="lg:col-span-5 lg:pr-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-body text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span> Initiate Comms
                </div>

                <h2 className="font-heading font-black text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
                  Let's engineer <br />
                  <span className="grad-text">your vision.</span>
                </h2>

                <p className="font-body text-base lg:text-lg text-slate-400 leading-relaxed mb-10 max-w-md">
                  Whether you need a high-performance web platform, native mobile app, or institutional software systems — Avensoft Technologies is ready to deploy.
                </p>

                <div className="space-y-6">
                  {/* Email Channel */}
                  <a href="mailto:avensoft26@gmail.com" className="flex items-center gap-5 group cursor-pointer">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#121215] shadow-inner group-hover:border-indigo-400/50 transition-colors text-indigo-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1">Encrypted Mail</p>
                      <p className="font-body text-base font-semibold text-white tracking-wide group-hover:text-cyan-400 transition-colors">avensoft26@gmail.com</p>
                    </div>
                  </a>

                  {/* Location Channel */}
                  <div className="flex items-center gap-5 group cursor-default">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#121215] shadow-inner text-cyan-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1">Command Center</p>
                      <p className="font-body text-base font-semibold text-white tracking-wide">Bhopal, Madhya Pradesh, India</p>
                    </div>
                  </div>

                  {/* Direct WhatsApp Channel */}
                  <div onClick={handleWhatsAppChat} className="flex items-center gap-5 group cursor-pointer">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#121215] shadow-inner group-hover:border-emerald-400/50 transition-colors text-emerald-400">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.58 2.003.882 2.796.882 3.183 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.769zm3.392 8.232c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.079-.476-1.523-.61-2.502-2.148-2.577-2.25-.074-.102-.619-.824-.619-1.57 0-.746.391-1.113.53-1.264.139-.151.303-.189.404-.189.102 0 .202.001.29.006.094.005.219-.036.342.261.127.307.433 1.056.471 1.134.038.077.064.168.013.27-.051.102-.077.165-.152.253-.076.089-.159.198-.228.266-.076.076-.156.158-.067.311.089.153.395.653.847 1.056.582.52 1.074.681 1.226.757.153.076.242.064.331-.038.089-.102.381-.444.482-.596.102-.153.203-.127.342-.076.139.051.889.419 1.042.495.153.076.254.114.292.177.038.064.038.369-.106.774z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-emerald-400 mb-1">Instant WhatsApp</p>
                      <p className="font-body text-base font-semibold text-white tracking-wide group-hover:text-emerald-400 transition-colors">+91 79920 54663</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7 lg:pl-12">
                <div className="rounded-[1.5rem] border border-white/[0.05] bg-[#121215]/80 p-8 lg:p-10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md">
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    {/* Bot honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <input type="text" name="website_url_check" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className={labelClasses}>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className={labelClasses}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="Phone"
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Service Type</label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:calc(100%-1.25rem)_center] bg-no-repeat pr-10`}
                        >
                          <option className="bg-[#121215] text-slate-200">Web Platform Development</option>
                          <option className="bg-[#121215] text-slate-200">Mobile App Engineering</option>
                          <option className="bg-[#121215] text-slate-200">AI / ML Integration</option>
                          <option className="bg-[#121215] text-slate-200">Institutional & ERP Systems</option>
                          <option className="bg-[#121215] text-slate-200">UI / UX Product Design</option>
                          <option className="bg-[#121215] text-slate-200">Other Custom Software</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Project Overview</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none`}
                        placeholder="Tell us about your goals, timelines, and technical requirements..."
                      />
                    </div>

                    {status === "idle" && (
                      <div className="space-y-4 pt-2">
                        <button
                          type="submit"
                          className="w-full relative group overflow-hidden rounded-xl bg-white px-8 py-4 font-heading font-bold text-slate-900 transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-[0.99]"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            SUBMIT ENQUIRY
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <div className="flex items-center gap-3 py-1">
                          <div className="h-[1px] flex-1 bg-white/10" />
                          <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">or connect directly</span>
                          <div className="h-[1px] flex-1 bg-white/10" />
                        </div>

                        <button
                          type="button"
                          onClick={handleWhatsAppChat}
                          className="w-full flex items-center justify-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 px-6 py-3.5 font-heading font-semibold text-emerald-400 transition-all hover:bg-emerald-900/30 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.58 2.003.882 2.796.882 3.183 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.769zm3.392 8.232c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.079-.476-1.523-.61-2.502-2.148-2.577-2.25-.074-.102-.619-.824-.619-1.57 0-.746.391-1.113.53-1.264.139-.151.303-.189.404-.189.102 0 .202.001.29.006.094.005.219-.036.342.261.127.307.433 1.056.471 1.134.038.077.064.168.013.27-.051.102-.077.165-.152.253-.076.089-.159.198-.228.266-.076.076-.156.158-.067.311.089.153.395.653.847 1.056.582.52 1.074.681 1.226.757.153.076.242.064.331-.038.089-.102.381-.444.482-.596.102-.153.203-.127.342-.076.139.051.889.419 1.042.495.153.076.254.114.292.177.038.064.038.369-.106.774z"/>
                          </svg>
                          <span>Chat on WhatsApp</span>
                        </button>
                      </div>
                    )}

                    {status === "submitting" && (
                      <div className="flex w-full items-center justify-center gap-3 rounded-xl bg-white/10 py-4 text-sm font-semibold text-slate-300 font-body border border-white/5">
                        <svg className="h-5 w-5 animate-spin text-cyan-400" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Transmitting Enquiry...
                      </div>
                    )}

                    {status === "success" && (
                      <div className="space-y-4">
                        <div className="flex w-full items-center justify-center gap-3 rounded-xl border p-5 text-sm font-semibold font-body bg-emerald-950/30 border-emerald-500/40 text-emerald-400">
                          <svg className="h-6 w-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Enquiry dispatched! Avensoft Technologies architects will respond within 24 hours.</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setStatus("idle")}
                          className="w-full py-2.5 text-center font-mono text-xs text-slate-400 hover:text-white transition-colors"
                        >
                          Send another message ↺
                        </button>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="space-y-4">
                        <div className="flex w-full items-center justify-center gap-3 rounded-xl border p-4 text-sm font-semibold font-body bg-rose-950/30 border-rose-500/40 text-rose-400">
                          <span>{errorMessage}</span>
                        </div>
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => setStatus("idle")}
                            className="flex-1 py-3 rounded-xl bg-white/10 text-white font-mono text-xs font-semibold hover:bg-white/20 transition-colors"
                          >
                            Retry Submission
                          </button>
                          <button
                            type="button"
                            onClick={handleWhatsAppChat}
                            className="flex-1 py-3 rounded-xl bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold hover:bg-emerald-800/40 transition-colors"
                          >
                            Send on WhatsApp ➔
                          </button>
                        </div>
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
