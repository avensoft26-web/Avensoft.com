export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#000000]/80 backdrop-blur-md transition-opacity duration-300">
      {/* Ambient background glow */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Futuristic Cyber Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <div className="w-16 h-16 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
        {/* Inner reverse rotating ring */}
        <div className="absolute w-10 h-10 rounded-full border-2 border-indigo-500/20 border-b-indigo-400 animate-[spin_1.5s_linear_infinite_reverse]" />
        {/* Center glowing core dot */}
        <div className="absolute w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
      </div>

      {/* Telemetry Status Line */}
      <div className="mt-6 flex flex-col items-center gap-1.5 text-center">
        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Synchronizing Route
        </span>
        <span className="font-mono text-[11px] text-slate-500">
          Avensoft Technologies // Connecting...
        </span>
      </div>
    </div>
  );
}
