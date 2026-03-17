export type KPI = { label: string; value: string; delta: string };

export const dashboardKpis: KPI[] = [
  { label: "Current Cost", value: "$18.42", delta: "-12%" },
  { label: "Optimized Cost", value: "$13.08", delta: "-28%" },
  { label: "Savings Unlocked", value: "24.6%", delta: "+4.1%" },
  { label: "Confidence", value: "92.4%", delta: "+1.8%" },
  { label: "Resilience", value: "0.84", delta: "+0.05" },
];
