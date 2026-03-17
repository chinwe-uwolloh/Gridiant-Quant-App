import { SectionFrame } from "@/components/primitives/SectionFrame";

export function QuantumPanel() {
  return (
    <SectionFrame title="Quantum optimization overview">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="border border-white/15 rounded-xl p-4 text-sm">Inference quality score: <span className="text-cyan-200">0.78</span></div>
        <div className="border border-white/15 rounded-xl p-4 text-sm">Cost improvement from hybrid solve: <span className="text-cyan-200">4.2%</span></div>
        <div className="border border-white/15 rounded-xl p-4 text-sm">Entanglement efficiency: <span className="text-cyan-200">91.2%</span></div>
        <div className="border border-white/15 rounded-xl p-4 text-sm">Resource allocation efficiency: <span className="text-cyan-200">87.4%</span></div>
        <div className="border border-white/15 rounded-xl p-4 text-sm">Quantum error correction stability: <span className="text-cyan-200">94.1%</span></div>
        <div className="border border-white/15 rounded-xl p-4 text-sm">Fallback-safe execution keeps schedules reliable for every run</div>
      </div>
    </SectionFrame>
  );
}
