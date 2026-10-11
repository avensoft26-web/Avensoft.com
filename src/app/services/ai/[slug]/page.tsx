import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assetPath } from "@/lib/basePath";

const aiSubServices = {
  consulting: {
    title: "AI Consulting & Development",
    tagline: "Strategic Roadmap to Intelligent Systems",
    desc: "We analyze your business infrastructure to identify high-impact AI integration points. From conceptualization and data strategy to full-scale custom model development, we guide your transformation into an AI-first enterprise.",
    image: "/home_image.webp",
    features: [
      "Enterprise AI strategy & feasibility analysis",
      "Data pipeline architecture & preparation",
      "Custom predictive & classification models",
      "End-to-end AI software engineering",
    ],
    color: "amber",
  },
  "generative-ai": {
    title: "Generative AI Development",
    tagline: "Custom LLMs & Content Generation",
    desc: "Harness the power of foundational models (GPT, Claude, Llama) tailored specifically to your proprietary data. We engineer systems capable of generating text, code, images, and voice that align perfectly with your brand identity.",
    image: "/home_image.webp",
    features: [
      "Custom LLM fine-tuning and deployment",
      "Retrieval-Augmented Generation (RAG)",
      "Multi-modal generation (Text, Image, Audio)",
      "Prompt engineering & guardrail implementation",
    ],
    color: "fuchsia",
  },
  "ai-agents": {
    title: "AI Agent Development",
    tagline: "Autonomous Workflows & Digital Workers",
    desc: "Deploy autonomous AI agents capable of reasoning, planning, and executing complex, multi-step workflows. We build digital workers that can interact with your existing APIs, databases, and software to automate entire departments.",
    image: "/home_image.webp",
    features: [
      "Autonomous multi-step reasoning models",
      "Agent-to-API and Tool integration",
      "Multi-agent collaborative systems",
      "Continuous learning and self-correction",
    ],
    color: "cyan",
  },
  chatbots: {
    title: "AI Chatbot Development",
    tagline: "Intelligent Conversational Interfaces",
    desc: "Move beyond simple decision trees. We develop context-aware, highly intelligent conversational AI chatbots that understand user intent, analyze sentiment, and resolve complex customer service inquiries instantly.",
    image: "/home_image.webp",
    features: [
      "Context-aware NLP/NLU chatbots",
      "Omnichannel deployment (Web, WhatsApp, Slack)",
      "Real-time CRM and Knowledge Base integration",
      "Sentiment analysis and human-handoff",
    ],
    color: "emerald",
  },
};

export function generateStaticParams() {
  return Object.keys(aiSubServices).map((slug) => ({
    slug: slug,
  }));
}

export default function AISubServicePage({ params }: { params: { slug: string } }) {
  const service = aiSubServices[params.slug as keyof typeof aiSubServices];

  if (!service) {
    notFound();
  }

  // Define dynamic color classes based on the service color
  const badgeColor = 
    service.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' :
    service.color === 'primary' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
    service.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
    service.color === 'amber' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
    'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30';

  const glowColor = 
    service.color === 'cyan' ? 'bg-cyan-500/20' :
    service.color === 'primary' ? 'bg-blue-500/20' :
    service.color === 'emerald' ? 'bg-emerald-500/20' :
    service.color === 'amber' ? 'bg-amber-500/20' :
    'bg-fuchsia-500/20';

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#050505]">
      
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 right-10 w-96 h-96 rounded-full blur-[120px] ${glowColor}`} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-heading font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
               <Link href="/services/ai" className="hover:underline text-slate-400">AI Services</Link>
               <span className="text-slate-600">/</span>
               <span className={badgeColor.split(' ')[1]}>{service.title}</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-slate-900 dark:text-white mb-6">
              {service.title}
            </h1>
            
            <p className="font-heading text-xl font-bold text-slate-700 dark:text-slate-300 mb-6">
              {service.tagline}
            </p>

            <p className="font-body text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {service.desc}
            </p>

            <div className="space-y-4 mb-10">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${badgeColor.split(' ')[0]}`}>
                    <svg className={`w-3.5 h-3.5 ${badgeColor.split(' ')[1]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-heading font-semibold text-sm text-slate-800 dark:text-slate-200">{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-white text-black font-heading font-bold text-sm shadow-md hover:brightness-90 transition-all">
                Discuss Your AI Strategy
              </Link>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
             <Image
                src={assetPath(service.image)}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
             <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">{service.title} Systems</h3>
                <p className="font-body text-sm text-slate-300">Intelligent Architecture View</p>
             </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
