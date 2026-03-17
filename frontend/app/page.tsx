import Link from "next/link";
import { CommandShell } from "@/components/layout/CommandShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { LivingEnergyFieldNoSSR } from "@/components/dashboard/LivingEnergyFieldNoSSR";

export default function LandingPage() {
  return (
    <CommandShell>
      <FadeIn>
        <div className="grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
          <section>
            <h1 className="font-display text-5xl leading-tight text-iceMist">Gridiant 2.0</h1>
            <p className="mt-4 max-w-xl text-slateAsh">Premium AI + quantum enhanced orchestration for electricity cost, resilience, comfort, and peak shaping across homes, campuses, fleets, and microgrids.</p>
            <div className="mt-6 flex gap-3 text-xs uppercase tracking-wider">
              <Link href="/dashboard" className="border border-emberAccent px-4 py-2 text-emberAccent">Enter Command Center</Link>
              <Link href="/quantum-studio" className="border border-white/20 px-4 py-2">Quantum Studio</Link>
            </div>
          </section>
          <section className="energy-frame p-2"><LivingEnergyFieldNoSSR /></section>
        </div>
      </FadeIn>
    </CommandShell>
  );
}
