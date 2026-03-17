import { GlassCard } from "@/components/primitives/GlassCard";

export function ActionCard({ title, body }: { title: string; body: string }) {
  return (
    <GlassCard className="p-4">
      <p className="text-base font-medium text-iceMist">{title}</p>
      <p className="mt-1 text-sm text-slateAsh">{body}</p>
    </GlassCard>
  );
}
