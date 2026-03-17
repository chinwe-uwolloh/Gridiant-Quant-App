import { CommandShell } from "@/components/layout/CommandShell";
import { TopCommandBar } from "@/components/navigation/TopCommandBar";
import { LivingEnergyFieldNoSSR } from "@/components/dashboard/LivingEnergyFieldNoSSR";
import { SectionFrame } from "@/components/primitives/SectionFrame";
import { dashboardKpis } from "@/lib/state/dashboardState";

export default function DashboardPage() {
  return (
    <CommandShell>
      <TopCommandBar />
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <SectionFrame title="Living Energy Field"><LivingEnergyFieldNoSSR /></SectionFrame>
        <SectionFrame title="Strategic Rail">
          <div className="space-y-2 text-sm">{dashboardKpis.map((k) => <div key={k.label} className="flex justify-between border-b border-white/10 py-2"><span>{k.label}</span><span className="font-mono text-emberAccent">{k.value} ({k.delta})</span></div>)}</div>
        </SectionFrame>
      </div>
    </CommandShell>
  );
}
