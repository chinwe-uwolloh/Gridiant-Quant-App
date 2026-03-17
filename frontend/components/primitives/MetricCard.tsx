import { ReactNode } from "react";
import { GlassCard } from "@/components/primitives/GlassCard";

export function MetricCard({
  label,
  value,
  helper,
}: {
  label: string;
  value: ReactNode;
  helper?: string;
}) {
  return (
    <GlassCard className="p-5">
      <p className="text-sm text-slateAsh">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-iceMist">{value}</p>
      {helper ? <p className="mt-1 text-xs text-slateAsh">{helper}</p> : null}
    </GlassCard>
  );
}
