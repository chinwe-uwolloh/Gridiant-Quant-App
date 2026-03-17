import { AppShell } from "@/components/layout/AppShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { PriceContourChart } from "@/components/charts/PriceContourChart";
import { ConsumptionPieChart } from "@/components/charts/ConsumptionPieChart";
import { ApplianceBarChart } from "@/components/charts/ApplianceBarChart";
import { AnimatedNumber } from "@/components/primitives/AnimatedNumber";
import { RadialGauge } from "@/components/primitives/RadialGauge";
import { MetricCard } from "@/components/primitives/MetricCard";
import { ActionCard } from "@/components/primitives/ActionCard";
import { ChartContainer } from "@/components/primitives/ChartContainer";
import { GlassCard } from "@/components/primitives/GlassCard";
import { QuantumRealtimePanel } from "@/components/dashboard/QuantumRealtimePanel";

const trend = [0.34, 0.29, 0.24, 0.21, 0.25, 0.32, 0.38, 0.43, 0.41, 0.37, 0.33, 0.3, 0.28, 0.27, 0.29, 0.33, 0.39, 0.47, 0.51, 0.49, 0.42, 0.36, 0.31, 0.28];
const consumption = [
  { label: "HVAC", value: 37 },
  { label: "EV", value: 24 },
  { label: "Appliances", value: 21 },
  { label: "Lighting", value: 18 },
];
const applianceBars = [
  { label: "HVAC", value: 14 },
  { label: "EV", value: 11 },
  { label: "Washer", value: 5 },
  { label: "Dryer", value: 4 },
  { label: "Dish", value: 3 },
];

export default function DashboardPage() {
  return (
    <AppShell title="Home" subtitle="Your home is running efficiently with quantum-inspired optimization.">
      <FadeIn>
        <GlassCard className="p-6">
          <p className="text-xs uppercase tracking-[0.12em] text-cyan-200">Today’s optimization outcome</p>
          <h2 className="mt-2 font-display text-[24px] font-semibold text-iceMist">Cooling schedule optimized for tonight</h2>
          <p className="mt-2 text-sm text-slateAsh">$12 saved • peak reduced • comfort maintained</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <MetricCard label="Energy saved this week" value={<AnimatedNumber value={42} prefix="$" />} />
            <MetricCard label="Peak usage reduced" value={<AnimatedNumber value={18} suffix="%" />} />
            <MetricCard label="Quantum energy saved" value={<AnimatedNumber value={17.8} suffix=" kWh" decimals={1} />} helper="Q# powered scheduling engine" />
          </div>
        </GlassCard>
      </FadeIn>

      <div className="grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
        <ChartContainer title="Energy trend today" subtitle="Real-time household load">
          <PriceContourChart data={trend} />
        </ChartContainer>
        <ChartContainer title="Daily consumption split" subtitle="Where energy is used most">
          <ConsumptionPieChart data={consumption} />
        </ChartContainer>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <ChartContainer title="Appliance activity" subtitle="kWh by appliance today">
          <ApplianceBarChart data={applianceBars} />
        </ChartContainer>
        <GlassCard className="p-5">
          <h3 className="text-xl font-semibold text-iceMist">Status</h3>
          <div className="mt-4 grid gap-4">
            <RadialGauge value={89} label="Comfort maintained" />
            <RadialGauge value={77} label="Efficiency on track" />
            <RadialGauge value={84} label="Cost control strength" />
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <ActionCard title="Dishwasher shifted to lower-cost hours" body="Now scheduled for 10:30 PM low-rate window." />
        <ActionCard title="Smart charging window found" body="EV charging starts at 11:00 PM and completes before 6:00 AM." />
        <ActionCard title="Peak load reduced for tonight" body="Battery hold applied to smooth evening demand." />
      </div>

      <QuantumRealtimePanel />
    </AppShell>
  );
}
