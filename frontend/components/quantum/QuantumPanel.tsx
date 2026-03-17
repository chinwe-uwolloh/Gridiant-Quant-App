import { SectionFrame } from "@/components/primitives/SectionFrame";

export function QuantumPanel() {
  return (
    <SectionFrame title="Quantum Studio / Hybrid Refinement">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="border border-white/15 p-4 text-sm">Problem complexity score: <span className="text-emberAccent">0.78</span></div>
        <div className="border border-white/15 p-4 text-sm">Classical vs Hybrid delta: <span className="text-emberAccent">-4.2%</span></div>
        <div className="border border-white/15 p-4 text-sm">Reduced decision graph routed to Q#</div>
        <div className="border border-white/15 p-4 text-sm">Estimator future readiness (Majorana path shown as projection)</div>
      </div>
    </SectionFrame>
  );
}
