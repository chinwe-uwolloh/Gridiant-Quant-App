"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { ChartContainer } from "@/components/primitives/ChartContainer";
import { MetricCard } from "@/components/primitives/MetricCard";
import { GlassCard } from "@/components/primitives/GlassCard";
import { PriceContourChart } from "@/components/charts/PriceContourChart";
import { ConsumptionPieChart } from "@/components/charts/ConsumptionPieChart";
import { ApplianceBarChart } from "@/components/charts/ApplianceBarChart";
import { AnimatedNumber } from "@/components/primitives/AnimatedNumber";
import { RadialGauge } from "@/components/primitives/RadialGauge";

const periodOptions = ["daily", "weekly", "monthly", "yearly"] as const;
type Period = (typeof periodOptions)[number];

const trendByPeriod: Record<Period, number[]> = {
  daily: [0.32, 0.28, 0.26, 0.22, 0.24, 0.29, 0.34, 0.39, 0.41, 0.36, 0.31, 0.27],
  weekly: [0.42, 0.39, 0.37, 0.34, 0.31, 0.33, 0.35],
  monthly: [0.44, 0.41, 0.39, 0.36, 0.34, 0.3, 0.28, 0.3, 0.33, 0.36, 0.38, 0.35],
  yearly: [0.52, 0.5, 0.49, 0.45, 0.42, 0.4, 0.38, 0.36, 0.35, 0.34, 0.33, 0.31],
};

const impactByPeriod: Record<Period, { savings: number; peak: number; comfort: number; carbon: number }> = {
  daily: { savings: 12, peak: 16, comfort: 91, carbon: 9 },
  weekly: { savings: 42, peak: 18, comfort: 89, carbon: 12 },
  monthly: { savings: 184, peak: 21, comfort: 88, carbon: 14 },
  yearly: { savings: 2120, peak: 24, comfort: 87, carbon: 19 },
};

const applianceBars = [
  { label: "HVAC", value: 13 },
  { label: "EV", value: 9 },
  { label: "Washer", value: 5 },
  { label: "Dryer", value: 4 },
  { label: "Kitchen", value: 3 },
];

export default function ProfilePage() {
  const [period, setPeriod] = useState<Period>("weekly");
  const trend = trendByPeriod[period];
  const impact = impactByPeriod[period];

  const consumption = useMemo(
    () => [
      { label: "HVAC", value: period === "daily" ? 34 : 37 },
      { label: "EV", value: period === "yearly" ? 26 : 24 },
      { label: "Appliances", value: 22 },
      { label: "Lighting", value: 17 },
    ],
    [period]
  );

  return (
    <AppShell title="Profile" subtitle="Your personal energy goals, habits, and impact over time.">
      <GlassCard className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slateAsh">Energy profile</p>
            <p className="text-lg font-semibold text-iceMist">Comfort-first household with EV charging preference</p>
          </div>
          <div className="flex gap-2">
            {periodOptions.map((option) => (
              <button
                key={option}
                onClick={() => setPeriod(option)}
                className={`rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.12em] ${period === option ? "bg-white/14 text-iceMist" : "text-slateAsh hover:bg-white/8"}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label={`${period} savings`} value={<AnimatedNumber value={impact.savings} prefix="$" />} />
        <MetricCard label="Peak reduction" value={<AnimatedNumber value={impact.peak} suffix="%" />} />
        <MetricCard label="Comfort score" value={<AnimatedNumber value={impact.comfort} suffix="%" />} />
        <MetricCard label="Carbon impact" value={<AnimatedNumber value={impact.carbon} suffix="%" />} helper="Lower footprint vs baseline" />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
        <ChartContainer title="Energy trend" subtitle={`Interactive ${period} view`}>
          <PriceContourChart data={trend} />
        </ChartContainer>
        <ChartContainer title="Consumption split" subtitle="By household category">
          <ConsumptionPieChart data={consumption} />
        </ChartContainer>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <ChartContainer title="Appliance analytics" subtitle="kWh contribution by appliance">
          <ApplianceBarChart data={applianceBars} />
        </ChartContainer>
        <GlassCard className="p-5">
          <h3 className="text-xl font-semibold text-iceMist">Personal impact</h3>
          <div className="mt-4 grid gap-4">
            <RadialGauge value={impact.comfort} label="Comfort quality" />
            <RadialGauge value={impact.peak + 62} label="Schedule consistency" />
            <RadialGauge value={impact.carbon + 70} label="Efficiency momentum" />
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
