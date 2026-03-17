import { CommandShell } from "@/components/layout/CommandShell";
import { TopCommandBar } from "@/components/navigation/TopCommandBar";
import { SectionFrame } from "@/components/primitives/SectionFrame";

export default function MetricsPage() {
  return (
    <CommandShell>
      <TopCommandBar />
      <SectionFrame title="Success Dashboard">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="border border-white/15 p-4">Baseline vs optimized cost</div>
          <div className="border border-white/15 p-4">Savings % and peak load shifted</div>
          <div className="border border-white/15 p-4">Carbon reduction proxy</div>
          <div className="border border-white/15 p-4">Classical vs hybrid solve comparison</div>
          <div className="border border-white/15 p-4 md:col-span-2">Future readiness estimator projection</div>
        </div>
      </SectionFrame>
    </CommandShell>
  );
}
