import { CommandShell } from "@/components/layout/CommandShell";
import { AppNavigation } from "@/components/navigation/AppNavigation";
import { Button } from "@/components/primitives/Button";
import { GlassCard } from "@/components/primitives/GlassCard";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import type { Route } from "next";

const benefits = [
  "Lower electricity costs every week",
  "Automate appliance timing around rate windows",
  "Maintain comfort while reducing peak load",
];

const faqs = [
  {
    q: "How does Gridiant help me save?",
    a: "Gridiant finds lower-cost time windows for devices and builds a daily plan around your comfort settings.",
  },
  {
    q: "Do I need advanced hardware?",
    a: "No. You can start with your current setup and add smart devices over time.",
  },
  {
    q: "What powers the optimization?",
    a: "A hybrid optimization engine with quantum-inspired intelligence and Q# powered scheduling routines.",
  },
];

const quickLinks = [
  "/dashboard",
  "/schedule",
  "/insights",
  "/devices",
  "/savings",
  "/settings",
  "/profile",
  "/copilot",
  "/advanced",
  "/backend-center",
  "/metrics",
  "/quantum-studio",
] as const satisfies readonly Route[];

export default function LandingPage() {
  return (
    <CommandShell>
      <div className="space-y-8 pb-10">
        <AppNavigation />
        <header className="glass-card flex items-center justify-between px-5 py-4">
          <p className="font-display text-xl font-semibold text-iceMist">Gridiant 2.0</p>
          <Button href="/dashboard" variant="secondary">Open app</Button>
        </header>

        <section className="grid gap-6 rounded-[24px] border border-white/10 bg-gradient-to-br from-[#0A2540]/80 via-[#0F3D5E]/55 to-[#1C6E8C]/40 p-6 md:grid-cols-[1.08fr_0.92fr] md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">Premium home energy optimization</p>
            <h1 className="mt-3 font-display text-[42px] font-semibold leading-tight text-iceMist md:text-[48px]">
              Smarter schedules. Lower bills. Better comfort.
            </h1>
            <p className="mt-4 max-w-xl text-[15px] text-slateAsh">
              Gridiant helps your home run more efficiently with AI planning and quantum-inspired optimization that feels effortless.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/dashboard">Start saving</Button>
              <Button href="/insights" variant="secondary">See how it works</Button>
            </div>
          </div>
          <GlassCard className="relative min-h-[320px] overflow-hidden p-6">
            <div className="float-orb left-6 top-8 h-28 w-28 bg-cyan-300/25" />
            <div className="float-orb float-orb--alt right-10 top-16 h-36 w-36 bg-teal-300/20" />
            <div className="relative z-10">
              <p className="text-sm text-slateAsh">Today</p>
              <p className="mt-2 text-[24px] font-semibold text-iceMist">Cooling schedule optimized for tonight</p>
              <p className="mt-2 text-sm text-slateAsh">$12 saved • peak reduced • comfort maintained</p>
              <div className="mt-6 space-y-2 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">Dishwasher shifted to lower-cost hours</div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">Smart charging window found</div>
              </div>
            </div>
          </GlassCard>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {benefits.map((item) => (
            <GlassCard key={item} className="p-5">
              <p className="text-[16px] text-iceMist">{item}</p>
            </GlassCard>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <GlassCard className="p-6">
            <SectionHeader title="How it works" subtitle="Simple steps, meaningful savings." />
            <ol className="space-y-3 text-sm text-slateAsh">
              <li>1. Connect your home and preferences.</li>
              <li>2. Receive a daily optimized schedule.</li>
              <li>3. Approve actions and track the results.</li>
            </ol>
          </GlassCard>
          <GlassCard className="p-6">
            <SectionHeader title="Trusted by design" subtitle="Built for reliability and clarity." />
            <div className="grid gap-3 text-sm text-slateAsh">
              <p>• Under 2s schedule refresh for everyday scenarios</p>
              <p>• 99.9% automation continuity with safe fallback behavior</p>
              <p>• Azure Quantum-inspired architecture with future-ready Q# integration</p>
            </div>
          </GlassCard>
        </section>

        <GlassCard className="p-6">
          <SectionHeader title="Frequently asked questions" />
          <div className="space-y-3">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-medium text-iceMist">{item.q}</p>
                <p className="mt-1 text-sm text-slateAsh">{item.a}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <SectionHeader title="Everything in one menu" subtitle="Jump to every page and capability from here." />
          <div className="grid gap-2 text-sm md:grid-cols-3">
            {quickLinks.map((path) => (
              <Button key={path} href={path} variant="secondary" className="justify-start">
                {path.replace("/", "").replace("-", " ") || "home"}
              </Button>
            ))}
          </div>
        </GlassCard>
      </div>
    </CommandShell>
  );
}
