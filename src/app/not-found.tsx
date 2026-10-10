import Link from "next/link";
import { assetPath } from "@/lib/basePath";

export default function NotFound() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-[#000000] px-6 py-24 overflow-hidden">
      {/* Deep space background elements */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url(${assetPath("/noise.png")})` }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Terminal Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          STATUS 404 // ROUTE_NOT_FOUND
        </div>

        {/* Glowing Big 404 */}
        <h1 className="font-heading font-black text-7xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-700 tracking-tight leading-none mb-4 select-none drop-shadow-[0_0_35px_rgba(34,211,238,0.25)]">
          404
        </h1>

        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4">
          System Route Offline or Relocated
        </h2>

        <p className="font-body text-base text-slate-400 max-w-md mx-auto leading-relaxed mb-10">
          The requested coordinates do not exist within the Avensoft Technologies cluster. Check the URL for typos or return to our core portal.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 font-heading font-bold text-sm tracking-wide transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span>Return to Command Center</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-[#121215] text-slate-300 font-heading font-semibold text-sm tracking-wide transition-all hover:bg-white/[0.06] hover:text-white hover:border-white/20"
          >
            <span>Browse Offerings</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-[#121215] text-slate-300 font-heading font-semibold text-sm tracking-wide transition-all hover:bg-white/[0.06] hover:text-white hover:border-white/20"
          >
            <span>Contact Engineering</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
