import { AppShell } from "@/components/layout/AppShell";
import { GlassCard } from "@/components/primitives/GlassCard";

const endpointGroups = [
  {
    title: "Auth",
    items: ["POST /auth/register", "POST /auth/login", "GET /me"],
  },
  {
    title: "Homes & Devices",
    items: ["POST /homes", "GET /homes/{id}", "PATCH /homes/{id}", "POST /devices", "GET /homes/{id}/devices", "PATCH /devices/{id}"],
  },
  {
    title: "Optimization",
    items: ["POST /optimize/run", "GET /optimize/run/{id}", "POST /optimize/replay", "POST /quantum/refine", "POST /quantum/estimate"],
  },
  {
    title: "Insights",
    items: ["GET /digital-twin/{siteId}", "POST /digital-twin/simulate", "GET /metrics/dashboard", "GET /metrics/telemetry", "GET /metrics/savings", "GET /metrics/quantum-impact"],
  },
];

export default function BackendCenterPage() {
  return (
    <AppShell title="Backend Center" subtitle="Every API surface, route group, and integration entry point in one place.">
      <div className="grid gap-4 md:grid-cols-2">
        {endpointGroups.map((group) => (
          <GlassCard key={group.title} className="p-5">
            <h3 className="text-lg font-semibold text-iceMist">{group.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slateAsh">
              {group.items.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">{item}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
      <GlassCard className="p-5">
        <p className="text-sm text-slateAsh">
          This menu lets you access frontend experiences and backend capabilities from one place while keeping the user experience clean and consumer-friendly.
        </p>
      </GlassCard>
    </AppShell>
  );
}
