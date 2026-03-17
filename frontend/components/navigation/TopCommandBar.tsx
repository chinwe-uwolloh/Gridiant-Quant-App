"use client";

import { useEnergyMode } from "@/lib/hooks/useEnergyMode";

const modes = ["economy", "comfort", "resilience"] as const;

export function TopCommandBar() {
  const { mode, setMode } = useEnergyMode();
  return (
    <div className="mb-6 flex items-center justify-between border border-white/15 bg-black/25 p-3">
      <div className="font-mono text-xs tracking-[0.18em] text-slateAsh">GRIDIANT 2.0 / COMMAND ENVIRONMENT</div>
      <div className="flex gap-2">
        {modes.map((m) => (
          <button key={m} onClick={() => setMode(m)} className={`border px-3 py-1 text-xs uppercase tracking-wider ${mode === m ? "border-emberAccent text-emberAccent" : "border-white/20 text-iceMist/80"}`}>
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}
