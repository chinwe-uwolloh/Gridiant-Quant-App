import { ReactNode } from "react";
import { GlassCard } from "@/components/primitives/GlassCard";

export function ChartContainer({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <GlassCard className="p-5">
      <div className="mb-3">
        <h3 className="text-xl font-semibold text-iceMist">{title}</h3>
        {subtitle ? <p className="text-sm text-slateAsh">{subtitle}</p> : null}
      </div>
      {children}
    </GlassCard>
  );
}
