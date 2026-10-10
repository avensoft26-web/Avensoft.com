"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/basePath";
import { ShieldCheck, Zap, Rocket, ArrowRight } from "lucide-react";
import Team from "./Team";

interface MilestoneItem {
  id: string;
  yearLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  story: string;
  quote: string;
  images: {
    src: string;
    caption: string;
  }[];
  isSpecialMilestone?: boolean;
}

const milestones: MilestoneItem[] = [
  {
    id: "01",
    yearLabel: "1st Year • 2023",
    badge: "THE FOUNDATIONAL BOND",
    title: "First Hello at SISTec Bhopal",
    subtitle: "New faces, shared curiosity, and the beginning of a lifelong team.",
    story:
      "Our story began during our first year at SISTec Bhopal. Arriving from different cities, we met inside college classrooms and computer labs. Between semester lectures and campus chai breaks, we discovered a mutual obsession: exploring technology beyond the syllabus. What started as casual conversations quickly solidified into an unbreakable brotherhood.",
    quote: "“Great journeys rarely start with a business plan; they start with genuine friendships.”",
    images: [
      {
        src: assetPath("/1st_Year-1.jpeg"),
        caption: "First day inside SISTec Bhopal computer labs",
      },
      {
        src: assetPath("/1st_Year-2.jpeg"),
        caption: "SISTec campus grounds where our shared journey began",
      },
      {
        src: assetPath("/1st_Year-3.jpeg"),
        caption: "Exploring technology beyond class curriculum",
      },
    ],
  },
  {
    id: "02",
    yearLabel: "2nd Year • 2024",
    badge: "COLLABORATION & EXPLORATION",
    title: "From Classrooms to Real Code",
    subtitle: "College fests, Bhopal explorations, and writing our first joint software.",
    story:
      "By our second year, our synergy had deepened. We spent evenings discussing ideas across Bhopal, teaming up for campus presentations, and competing in technical fests. We realized that memorizing theoretical concepts was not enough — we wanted to write code that actually solved real problems in the real world.",
    quote: "“We realized early on that learning theory was not enough; we wanted to build real software.”",
    images: [
      {
        src: assetPath("/second_year-1.jpeg"),
        caption: "Collaborating on our first software architecture",
      },
      {
        src: assetPath("/second_year-2.jpeg"),
        caption: "Teaming up for technical hackathons and presentations",
      },
      {
        src: assetPath("/second_year-3.jpeg"),
        caption: "Deep evening coding sessions across Bhopal",
      },
    ],
  },
  {
    id: "03",
    yearLabel: "3rd Year • 2025",
    badge: "⭐ THE TURNING POINT • TEAM AVENSOFT FOUNDED",
    title: "The Birth of Team Avensoft",
    subtitle: "The defining milestone year where our engineering collective was officially invented.",
    story:
      "Our third year was the defining moment of our journey. We stopped thinking of ourselves as mere students and officially founded Team Avensoft. We united as a dedicated engineering unit, establishing our collective identity and taking on our first enterprise challenge: designing a sub-6s QR digital verification pass for the SISTec campus.",
    quote: "“In our 3rd year, we stopped thinking of ourselves as just students and officially founded Team Avensoft.”",
    images: [
      {
        src: assetPath("/3rd-year1.jpeg"),
        caption: "Official birth of Team Avensoft — building the campus verification pass",
      },
      {
        src: assetPath("/3rd-year2.jpeg"),
        caption: "Designing real-time cloud and telemetry backend architecture",
      },
      {
        src: assetPath("/3rd-year3.jpeg"),
        caption: "Uniting as a dedicated collective engineering unit",
      },
    ],
    isSpecialMilestone: true,
  },
  {
    id: "04",
    yearLabel: "Final Year • 2026",
    badge: "GRADUATION & ENTERPRISE SCALING",
    title: "From College Team to Engineering Studio",
    subtitle: "Graduating with honors, rejecting traditional 9-to-5s, and committing full-time.",
    story:
      "During our final year, placement offers arrived, but our conviction was already set: we chose each other and committed full-time to Avensoft. We scaled into public sector deployments, launching the CHC Koraon hospital Management System and DualShield AI telematics. On graduation day, we walked out with engineering degrees and a thriving company.",
    quote: "“While others chose corporate placement offers, we chose each other and committed full-time to Avensoft.”",
    images: [
      {
        src: assetPath("/4th-year1.jpeg"),
        caption: "Graduation day with engineering degrees & a registered company",
      },
      {
        src: assetPath("/4th-year2.jpeg"),
        caption: "Deploying the CHC Koraon public health hospital Management System",
      },
      {
        src: assetPath("/4th-year3.jpeg"),
        caption: "Scaling DualShield AI telematics into enterprise production",
      },
    ],
  },
];

export default function AboutJourney() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Native smooth scroll listener mapping scrollY to discrete steps
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled inside the container
      const totalScrollableDistance = rect.height - windowHeight;
      if (totalScrollableDistance <= 0) return;

      const scrolledDistance = -rect.top;
      
      // Progress from 0 to 1
      let progress = scrolledDistance / totalScrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      // Map to 16 discrete steps (0 through 15)
      const step = Math.min(15, Math.floor(progress * 16));
      setCurrentStep(step);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Programmatic scroll helper for dots and prev/next buttons
  const scrollToStep = useCallback((stepIndex: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollableDistance = rect.height - windowHeight;
    
    // Target the middle of the requested step's scroll range
    const targetProgress = (stepIndex + 0.5) / 16;
    const targetScrollY = window.scrollY + rect.top + (targetProgress * totalScrollableDistance);
    
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  }, []);

  // Calculate global camera pan index (0 to 3)
  const activeMilestone = Math.min(3, Math.floor(currentStep / 4));

  return (
    <div className="relative bg-[#000000] text-white">
      
      {/* ── HERO HEADER (Normal Scroll Flow) ── */}
      <div className="pt-32 pb-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            College Camaraderie to <span className="grad-text">Avensoft Technologies</span>
          </h1>
          <p className="font-body text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            How four years of college friendship at SISTec Bhopal led to the official invention of Team Avensoft in our 3rd year, and our commitment to building mission-critical software systems.
          </p>
        </div>
      </div>


      {/* ── NATIVE SCROLLYTELLING TRACK ── */}
      {/* 1000vh creates a huge native scrollable area */}
      <div ref={containerRef} className="relative h-[800vh] sm:h-[1000vh]">
        
        {/* The pinned viewport */}
        <div className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#000000]">
          
          {/* Ambient Lighting & Grid */}
          <div className="absolute top-0 right-1/4 w-[750px] h-[750px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute top-[45%] left-[-10%] w-[650px] h-[650px] bg-white/[0.03] rounded-full blur-[170px] pointer-events-none" />
          <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* Inner Panning Container (Translates Y based on active milestone) */}
          <div 
            className="absolute top-0 left-0 w-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateY(-${activeMilestone * 100}dvh)` }}
          >
            
            {/* 4 Years of Milestones */}
            {milestones.map((item, idx) => {
              const isBoxLeft = idx % 2 === 0;
              const isCurrentMilestone = activeMilestone === idx;
              
              // Determine line drawing status
              let lineStatus = "hidden";
              if (currentStep > idx * 4 + 3) lineStatus = "full";
              else if (currentStep === idx * 4 + 3) lineStatus = "halfway";

              // Determine which photo is visible
              const photoIdx = isCurrentMilestone 
                ? Math.min(2, currentStep % 4)
                : currentStep > idx * 4 ? 2 : 0;

              // Setup SVG Paths perfectly aligned with the CSS grid gap (7/12 & 5/12)
              const isFinalNode = idx === milestones.length - 1;
              const startX = isBoxLeft ? 950 : 250;
              const endX = isFinalNode ? 600 : (isBoxLeft ? 250 : 950);
              // HTML Node Positioning (Percentages to prevent SVG distortion)
              const startPct = isBoxLeft ? "79.166%" : "20.833%";
              const endPct = isFinalNode ? "50%" : (isBoxLeft ? "20.833%" : "79.166%");
              
              // S-Curve Path: visible elegant curve across the seam instead of hidden right angles
              const desktopPath = `M ${startX} 20 L ${startX} 35 C ${startX} 50, ${endX} 50, ${endX} 65 L ${endX} 80`;
              const mobilePath = "M 100 20 L 100 80";

              return (
                <div key={item.id} className="h-[100dvh] w-full flex flex-col items-center justify-center relative">
                  
                  {/* Content Block & SVG Container (constrained to max-w to align perfectly) */}
                  <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 sm:mt-0 h-full flex items-center mx-auto">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 xl:gap-16 items-center w-full">
                      
                      {/* Box (Images) */}
                      <div className={`lg:col-span-7 xl:col-span-8 ${isBoxLeft ? "lg:order-1" : "lg:order-2"}`}>
                        <div className={`relative rounded-3xl overflow-hidden border bg-[#15171e] p-1.5 sm:p-3.5 shadow-2xl transition-all duration-500 hover:-translate-y-1.5 ${
                          item.isSpecialMilestone
                            ? "border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.15)]"
                            : "border-[#2a2d3d] hover:border-white/30"
                        }`}>
                          <div className="relative aspect-[16/10] sm:aspect-[16/9] min-h-[200px] sm:min-h-[380px] lg:min-h-[440px] w-full overflow-hidden rounded-2xl bg-black">
                            
                            {item.images.map((img, imgI) => {
                              const offset = imgI - photoIdx;
                              return (
                                <div
                                  key={imgI}
                                  style={{ transform: `translateX(${offset * 100}%)` }}
                                  className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] w-full h-full"
                                >
                                  <Image
                                    src={img.src}
                                    alt={`Photo ${imgI + 1}`}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 pointer-events-none">
                                    <span className="font-mono text-[10px] sm:text-xs text-white bg-black/85 backdrop-blur-md px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-lg border border-white/30 inline-block">
                                      📷 {img.caption}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}

                            <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between z-20">
                              <span className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-mono font-bold border backdrop-blur-md ${
                                item.isSpecialMilestone
                                  ? "bg-white/10 text-white border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                  : "bg-[#15171e]/90 text-white border-[#2a2d3d] shadow-lg"
                              }`}>
                                YEAR {item.id}
                              </span>
                              
                              {/* Clickable Step Dots */}
                              <div className="flex items-center gap-1 sm:gap-1.5 bg-[#15171e]/90 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-[#2a2d3d] shadow-lg">
                                {item.images.map((_, dotI) => (
                                  <button
                                    key={dotI}
                                    onClick={() => scrollToStep(idx * 4 + dotI)}
                                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                                      dotI === photoIdx ? "w-4 sm:w-6 bg-white" : "w-1.5 sm:w-2 bg-white/30 hover:bg-white/60"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Text Context */}
                      <div className={`lg:col-span-5 xl:col-span-4 space-y-2 sm:space-y-4 mt-3 sm:mt-0 lg:mt-0 ${isBoxLeft ? "lg:order-2" : "lg:order-1"}`}>
                        <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase border inline-block mb-1 ${
                          item.isSpecialMilestone ? "bg-white/10 text-white border-white/30" : "bg-white/5 text-slate-300 border-white/10"
                        }`}>
                          {item.yearLabel}
                        </span>
                        <h2 className="font-heading font-black text-xl sm:text-3xl text-white tracking-tight leading-snug">
                          {item.title}
                        </h2>
                        <p className="font-heading font-medium text-xs sm:text-base text-white/80 leading-relaxed">
                          {item.subtitle}
                        </p>
                        <p className="font-body text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed">
                          {item.story}
                        </p>
                      </div>

                    </div>

                    {/* SVG Circuit Connector - Hidden on mobile to prevent overlaps */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[100dvh] pointer-events-none z-[-1] overflow-visible">
                      
                      {/* Desktop SVG Line */}
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 1200 100" preserveAspectRatio="none">
                        {!isFinalNode && (
                          <path d={desktopPath} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2.5" strokeLinecap="round" />
                        )}
                        {!isFinalNode && (
                          <path 
                            d={desktopPath} fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"
                            pathLength="100" strokeDasharray="100" 
                            strokeDashoffset={lineStatus === "hidden" ? 100 : lineStatus === "halfway" ? 50 : 0}
                            style={{ transition: "stroke-dashoffset 800ms ease", filter: "drop-shadow(0 0 4px rgba(255,255,255,0.4))" }}
                          />
                        )}
                      </svg>

                      {/* Desktop HTML Nodes (prevents oval distortion) */}
                      <div className="absolute w-[18px] h-[18px] rounded-full bg-[#15171e] border-[2.5px] border-white flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.3)] z-10" style={{ left: `calc(${startPct} - 9px)`, top: 'calc(20% - 9px)' }}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      </div>
                      {!isFinalNode && (
                        <div className="absolute w-[18px] h-[18px] rounded-full bg-[#15171e] border-[2.5px] border-white flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.3)] z-10" style={{ left: `calc(${endPct} - 9px)`, top: 'calc(80% - 9px)' }}>
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>

      {/* End Section: Values & CTA (Moved to normal document flow) */}
      <div className="w-full flex flex-col items-center justify-center relative z-10 py-24 sm:py-32 bg-[#000000]">
        <div className="w-full max-w-[1000px] px-4 sm:px-6 lg:px-8 text-center animate-fadeIn delay-300 mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest">Our DNA</span>
          </div>
          
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-4">
            Why Avensoft is <span className="text-white/40 italic">Different</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
            We aren't a traditional agency. We are a tightly knit engineering collective forged through years of shared ambition and relentless execution.
          </p>
          
          {/* 3 Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
            
            {/* Card 1 */}
            <div className="group relative p-8 rounded-3xl border border-white/10 bg-[#0d0e12] overflow-hidden hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                <ShieldCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">Unshakable Trust</h3>
              <p className="font-body text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                Forged over 4 years of college camaraderie. Zero corporate politics, zero ego. Just pure engineering.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 rounded-3xl border border-white/10 bg-[#0d0e12] overflow-hidden hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                <Zap className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">Relentless Ethic</h3>
              <p className="font-body text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                The habit of working relentlessly through late nights is ingrained deep within our team's DNA.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 rounded-3xl border border-white/10 bg-[#0d0e12] overflow-hidden hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                <Rocket className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">Full Conviction</h3>
              <p className="font-body text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                We rejected safe 9-to-5 placement offers to choose our own venture, dedicating 100% of our talent to our clients.
              </p>
            </div>
          </div>

          {/* Premium CTA Banner */}
          <div className="group relative rounded-3xl border border-white/10 bg-[#0a0a0c] p-10 sm:p-14 overflow-hidden shadow-2xl transition-all hover:border-white/20">
            {/* Subtle Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3" />
            
            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-6 text-center leading-[1.1]">
                Born from college ambition, <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">built for enterprise scale.</span>
              </h2>
              <p className="text-white/50 text-base max-w-xl mx-auto mb-10 text-center">
                Ready to turn your vision into reality? Partner with a team that treats your product as their own.
              </p>
              <Link href="/#contact" className="group/btn relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-heading font-bold text-sm sm:text-base overflow-hidden transition-transform hover:scale-105 active:scale-95">
                <span className="relative z-10">Start a Project With Us</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

        </div>
      </div>
      
      {/* ── THE COLLECTIVE / TEAM (Imported) ── */}
      <Team showOnlyTeam />

    </div>
  );
}
