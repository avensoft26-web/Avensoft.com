"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { assetPath } from "@/lib/basePath";

interface OfferingCategory {
  id: string;
  title: string;
  subtitle: string;
  pageHref: string;
  color: string;
  iconBg: string;
  icon: string;
  subcategories: {
    title: string;
    desc: string;
    href: string;
  }[];
}

const offeringsData: OfferingCategory[] = [
  {
    id: "mobile",
    title: "Mobile App Development",
    subtitle: "Craft High-Performance iOS & Android Apps",
    pageHref: "/services/mobile",
    color: "text-white",
    iconBg: "bg-white/5 text-white border border-white/10",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    subcategories: [
      { title: "Flutter App Development", desc: "High-performance, beautiful UI for iOS & Android", href: "/services/mobile/flutter" },
      { title: "Android App Development", desc: "Native Kotlin & Compose apps for maximum performance", href: "/services/mobile/android" },
      { title: "iOS App Development", desc: "Native Swift & SwiftUI apps for the Apple ecosystem", href: "/services/mobile/ios" },
      { title: "React Native App Development", desc: "Cross-platform solutions built with JavaScript", href: "/services/mobile/react-native" },
    ],
  },
  {
    id: "web",
    title: "Web App Development",
    subtitle: "Fast, Resilient & Scalable Cloud Platforms",
    pageHref: "/services/web",
    color: "text-white",
    iconBg: "bg-white/5 text-white border border-white/10",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    subcategories: [
      { title: "Java Development", desc: "Enterprise-grade scalable backend solutions", href: "/services/web/java" },
      { title: "PHP Development", desc: "Dynamic and robust web applications", href: "/services/web/php" },
      { title: "Python Development", desc: "AI-ready backends and data-driven applications", href: "/services/web/python" },
      { title: "Angular Development", desc: "Structured, high-performance single page apps", href: "/services/web/angular" },
      { title: "Vue Js Development", desc: "Progressive, flexible, and reactive web interfaces", href: "/services/web/vuejs" },
      { title: "Node Js Development", desc: "Fast and scalable event-driven backend systems", href: "/services/web/nodejs" },
      { title: "React Js Development", desc: "Interactive, component-based modern web UIs", href: "/services/web/reactjs" },
    ],
  },
  {
    id: "ai",
    title: "AI & ML Development",
    subtitle: "Edge Vision, Sensor Models & Neural Networks",
    pageHref: "/services/ai",
    color: "text-white",
    iconBg: "bg-white/5 text-white border border-white/10",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    subcategories: [
      { title: "AI Consulting & Development", desc: "Strategic planning and custom AI model development", href: "/services/ai/consulting" },
      { title: "Generative AI Development", desc: "Custom LLMs, text, image, and voice generation", href: "/services/ai/generative-ai" },
      { title: "AI Agent Development", desc: "Autonomous AI agents to automate complex workflows", href: "/services/ai/ai-agents" },
      { title: "AI Chatbot Development", desc: "Intelligent conversational bots and customer service AI", href: "/services/ai/chatbots" },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise & Institutional Systems",
    subtitle: "Paperless Governance, Gates & Healthcare ERP",
    pageHref: "/services/enterprise",
    color: "text-white",
    iconBg: "bg-white/5 text-white border border-white/10",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    subcategories: [
      { title: "Digital Campus Gate Passes", desc: "QR instant verification (<6s) replacing manual paper slips", href: "/services/enterprise" },
      { title: "Public Health Clinic & OPD", desc: "Rapid 30-second patient registration & doctor dashboard", href: "/services/enterprise" },
      { title: "DPDP Act Compliance & Security", desc: "Isolated self-hosted database environments for public bodies", href: "/services/enterprise" },
      { title: "Hardware & Thermal Printer Pairing", desc: "ESC/POS receipt printing & handheld biometric integration", href: "/services/enterprise" },
    ],
  },
  {
    id: "design",
    title: "UI / UX & Product Design",
    subtitle: "Human-Centric Digital Interfaces & Design Systems",
    pageHref: "/services/design",
    color: "text-white",
    iconBg: "bg-white/5 text-white border border-white/10",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    subcategories: [
      { title: "Production Design Systems", desc: "Figma token libraries, reusable components & style guides", href: "/services/design" },
      { title: "Bilingual Public Sector UX", desc: "Accessible interfaces for low-literacy field operators", href: "/services/design" },
      { title: "Dynamic Micro-Interactions", desc: "Tactile feedback, fluid physics & state animations", href: "/services/design" },
      { title: "Conversion & Usability Audits", desc: "Eliminating friction points across onboarding & checkouts", href: "/services/design" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [offeringsOpen, setOfferingsOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("mobile");

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const fn = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 15);

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleOfferingsEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOfferingsOpen(true);
  };

  const handleOfferingsLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOfferingsOpen(false);
    }, 220);
  };

  const selectedCategoryData = offeringsData.find((c) => c.id === activeCategory) || offeringsData[0];

  return (
    <>
      <header className={`fixed top-0 z-[100] w-full transition-all duration-1000 ease-in-out ${visible ? "translate-y-0" : "-translate-y-full"} ${scrolled ? "bg-[#000000]/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-transparent border-b border-transparent"}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:py-2.5">

          <Link href="/" className="group flex items-center">
            <img src={assetPath("/AVENSOFT-dark-theme.png")} alt="Avensoft Logo" className="h-10 lg:h-12 w-auto object-contain scale-[1.35] lg:scale-[1.4] origin-left transition-transform duration-300 group-hover:scale-[1.45]" />
          </Link>

          {/* Clean Enterprise Desktop Nav Links (Matching Kody's exact layout) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <Link
              href="/about"
              className={`font-body text-[15px] font-medium transition-colors duration-200 ${pathname === "/about" ? "text-white font-semibold" : "text-slate-300 hover:text-white"}`}
            >
              About us
            </Link>

            {/* OFFERINGS DROPDOWN TRIGGER */}
            <div
              className="relative py-2"
              onMouseEnter={handleOfferingsEnter}
              onMouseLeave={handleOfferingsLeave}
            >
              <button
                onClick={() => setOfferingsOpen(!offeringsOpen)}
                className={`font-body text-[15px] font-medium flex items-center gap-1.5 transition-colors duration-200 ${offeringsOpen || pathname.startsWith("/services") ? "text-white font-semibold" : "text-slate-300 hover:text-white"}`}
              >
                <span>Offerings</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${offeringsOpen ? "rotate-180 text-white" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* KODY TECHNOLAB STYLE SLEEK OBSIDIAN 2-COLUMN MEGA MENU */}
              <AnimatePresence>
                {offeringsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[860px] z-50 pointer-events-auto"
                  >
                    <div className="rounded-2xl border border-white/[0.12] bg-[#050505] backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden">
                      {/* Top Header Label */}
                      <div className="px-6 py-3 border-b border-white/[0.06] bg-white/[0.02] flex items-center justify-between text-xs">
                        <span className="font-heading font-bold uppercase tracking-wider text-slate-400 text-[11px]">Avensoft Engineering Capabilities</span>
                        <Link href="/services" onClick={() => setOfferingsOpen(false)} className="font-heading font-semibold text-white hover:underline">
                          View All Offerings Overview →
                        </Link>
                      </div>

                      {/* 2-Column Master-Detail Layout */}
                      <div className="grid grid-cols-12 min-h-[390px]">
                        {/* LEFT COLUMN: Categories list */}
                        <div className="col-span-6 p-4 space-y-1.5 border-r border-white/[0.06] bg-[#000000]">
                          {offeringsData.map((item) => {
                            const isSelected = activeCategory === item.id;
                            return (
                              <button
                                key={item.id}
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveCategory(item.id);
                                }}
                                onMouseEnter={() => setActiveCategory(item.id)}
                                className={`w-full text-left p-3.5 rounded-xl block transition-all duration-200 group ${isSelected ? "bg-white/[0.08] border border-white/[0.15] shadow-lg" : "hover:bg-white/[0.04] border border-transparent"}`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3.5">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}>
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={item.icon} />
                                      </svg>
                                    </div>
                                    <div className="flex items-center">
                                      <h4 className={`font-heading font-bold text-[0.95rem] transition-colors ${isSelected ? "text-white" : "text-slate-200 group-hover:text-white"}`}>
                                        {item.title}
                                      </h4>
                                    </div>
                                  </div>

                                  <svg className={`w-4 h-4 transition-all duration-200 ${isSelected ? "translate-x-0 opacity-100 text-white" : "-translate-x-2 opacity-0 text-slate-500 group-hover:opacity-80 group-hover:translate-x-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* RIGHT COLUMN: Browse By Category Sub-items */}
                        <div className="col-span-6 p-6 flex flex-col justify-between bg-[#0a0a0c]">
                          <div>
                            <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-white/[0.06]">
                              <p className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400">
                                Browse by category
                              </p>
                              <span className={`font-heading font-bold text-xs ${selectedCategoryData.color}`}>
                                {selectedCategoryData.title}
                              </span>
                            </div>

                            <div className="space-y-3">
                              {selectedCategoryData.subcategories.map((sub, idx) => (
                                <Link
                                  key={idx}
                                  href={sub.href}
                                  onClick={() => setOfferingsOpen(false)}
                                  className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all" />
                                  <div className="font-heading font-semibold text-[0.9rem] text-slate-200 group-hover:text-white transition-colors">
                                    {sub.title}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                            <span className="font-body text-xs text-slate-400">Technology Blueprint</span>
                            <Link
                              href={selectedCategoryData.pageHref}
                              onClick={() => setOfferingsOpen(false)}
                              className="font-heading font-bold text-xs text-white hover:underline flex items-center gap-1.5"
                            >
                              Open {selectedCategoryData.title} Page
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                          </div>
                        </div>
                      </div>


                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/portfolio"
              className={`font-body text-[15px] font-medium transition-colors duration-200 ${pathname === "/portfolio" ? "text-white font-semibold" : "text-slate-300 hover:text-white"}`}
            >
              Our Work
            </Link>

            <Link
              href="/services"
              className={`font-body text-[15px] font-medium transition-colors duration-200 ${pathname === "/services" ? "text-white font-semibold" : "text-slate-300 hover:text-white"}`}
            >
              Capabilities
            </Link>


          </div>

          {/* Right Action Items (Featuring Kody-style Badge & Start Button) */}
          <div className="flex items-center gap-3.5">

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-heading font-bold text-sm text-slate-950 bg-white hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300"
            >
              Contact us
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5"
              aria-label="Toggle Navigation Menu"
            >
              <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>

        {/* MOBILE RESPONSIVE DRAWER & ACCORDION */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-white/10 bg-[#000000]/98 backdrop-blur-3xl px-6 py-6"
            >
              <div className="space-y-3">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 font-heading font-semibold text-base transition-colors ${pathname === "/" ? "text-white" : "text-slate-200"}`}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 font-heading font-semibold text-base transition-colors ${pathname === "/about" ? "text-white" : "text-slate-200"}`}
                >
                  About us
                </Link>

                {/* Mobile Offerings Accordion */}
                <div className="border-y border-white/10 py-2">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href="/services"
                      onClick={() => setMenuOpen(false)}
                      className="text-slate-200 font-heading font-semibold text-base"
                    >
                      Offerings Overview
                    </Link>
                    <button
                      onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
                      className="p-1 rounded-md hover:bg-white/10"
                      aria-label="Expand offerings subpages"
                    >
                      <svg className={`w-4 h-4 transition-transform duration-300 ${mobileOfferingsOpen ? "rotate-180 text-white" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {mobileOfferingsOpen && (
                    <div className="pl-3 pr-1 py-2 space-y-4">
                      {offeringsData.map((cat) => (
                        <div key={cat.id} className="space-y-1.5">
                          <Link
                            href={cat.pageHref}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between group"
                          >
                            <span className={`font-heading font-bold text-sm ${cat.color} group-hover:underline`}>{cat.title}</span>
                            <span className="text-[11px] text-slate-400">View Page →</span>
                          </Link>
                          <div className="pl-3 border-l-2 border-white/10 space-y-1.5">
                            {cat.subcategories.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                onClick={() => setMenuOpen(false)}
                                className="block font-body text-xs text-slate-400 hover:text-white"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/portfolio"
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 font-heading font-semibold text-base transition-colors ${pathname === "/portfolio" ? "text-white" : "text-slate-200"}`}
                >
                  Our Work (Portfolio)
                </Link>

                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 font-heading font-semibold text-base transition-colors ${pathname === "/services" ? "text-white" : "text-slate-200"}`}
                >
                  Capabilities
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 font-heading font-semibold text-base transition-colors ${pathname === "/contact" ? "text-white" : "text-slate-200"}`}
                >
                  Contact
                </Link>

                <div className="pt-4 mt-2">
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center px-6 py-2.5 rounded-xl font-heading font-bold text-sm text-slate-950 bg-white hover:bg-gray-200 transition-all duration-300"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
