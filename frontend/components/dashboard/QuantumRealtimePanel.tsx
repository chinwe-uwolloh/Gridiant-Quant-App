"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "@/components/primitives/GlassCard";
import { apiFetch } from "@/lib/api/apiFetch";

type QuantumLive = {
  quantum_energy_saved_kwh: number;
  quantum_cost_saved_usd: number;
  optimization_success_rate: number;
  entanglement_efficiency_index: number;
  qec_stability_score: number;
};

export function QuantumRealtimePanel() {
  const [live, setLive] = useState<QuantumLive>({
    quantum_energy_saved_kwh: 17.8,
    quantum_cost_saved_usd: 42.4,
    optimization_success_rate: 0.987,
    entanglement_efficiency_index: 0.912,
    qec_stability_score: 0.941,
  });

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const data = await apiFetch<QuantumLive>("/metrics/quantum-impact");
        if (mounted) setLive(data);
      } catch {
        // keep local fallback values when API is unavailable in static mode
      }
    };
    void load();
    const timer = setInterval(() => {
      void load();
    }, 3000);
    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, []);

  return (
    <GlassCard className="p-5">
      <p className="text-xs uppercase tracking-[0.12em] text-cyan-200">Live quantum impact</p>
      <p className="mt-2 text-xl font-semibold text-iceMist">Grounded hybrid optimization telemetry</p>
      <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">Energy saved: <span className="text-cyan-200">{live.quantum_energy_saved_kwh.toFixed(2)} kWh</span></div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">Cost saved: <span className="text-cyan-200">${live.quantum_cost_saved_usd.toFixed(2)}</span></div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">Optimization success: <span className="text-cyan-200">{(live.optimization_success_rate * 100).toFixed(2)}%</span></div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">Entanglement efficiency: <span className="text-cyan-200">{(live.entanglement_efficiency_index * 100).toFixed(2)}%</span></div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 md:col-span-2">QEC stability: <span className="text-cyan-200">{(live.qec_stability_score * 100).toFixed(2)}%</span></div>
      </div>
    </GlassCard>
  );
}
