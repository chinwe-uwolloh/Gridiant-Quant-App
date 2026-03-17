"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type AppRoute =
  | "/dashboard"
  | "/insights"
  | "/schedule"
  | "/devices"
  | "/savings"
  | "/settings"
  | "/profile"
  | "/copilot"
  | "/advanced"
  | "/metrics"
  | "/fleet"
  | "/digital-twin"
  | "/quantum-studio"
  | "/schedule-studio"
  | "/backend-center";

const items = [
  { href: "/dashboard", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/insights", label: "Insights" },
  { href: "/devices", label: "Devices" },
  { href: "/savings", label: "Savings" },
  { href: "/settings", label: "Settings" },
] as const satisfies ReadonlyArray<{ href: AppRoute; label: string }>;

const allPages = [
  { href: "/profile", label: "Profile" },
  { href: "/copilot", label: "Copilot" },
  { href: "/advanced", label: "Quantum Lab" },
  { href: "/backend-center", label: "Backend Center" },
  { href: "/metrics", label: "Metrics" },
  { href: "/schedule-studio", label: "Schedule Studio" },
  { href: "/quantum-studio", label: "Quantum Studio" },
  { href: "/digital-twin", label: "Digital Twin" },
  { href: "/fleet", label: "Fleet View" },
] as const satisfies ReadonlyArray<{ href: AppRoute; label: string }>;

export function AppNavigation() {
  const pathname = usePathname();
  return (
    <>
      <nav className="glass-card hidden items-center justify-between p-3 md:flex">
        <p className="tech-font px-2 text-sm text-iceMist">Gridiant</p>
        <div className="flex items-center gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`tech-font rounded-full px-3 py-1.5 text-sm transition duration-200 active:scale-95 ${pathname === item.href ? "bg-cyan-300/20 text-iceMist shadow-[0_0_18px_rgba(34,211,238,0.35)]" : "text-slateAsh hover:bg-white/8 hover:text-iceMist hover:shadow-[0_0_14px_rgba(34,211,238,0.2)]"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <details className="relative">
          <summary className="tech-font cursor-pointer list-none rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-sm text-slateAsh hover:text-iceMist hover:shadow-[0_0_14px_rgba(34,211,238,0.2)] active:scale-95">
            All pages
          </summary>
          <div className="glass-card absolute right-0 z-30 mt-2 w-48 p-2">
            {allPages.map((item) => (
              <Link key={item.href} href={item.href} className="tech-font block rounded-lg px-2 py-2 text-sm text-slateAsh hover:bg-white/8 hover:text-iceMist">
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
      <nav className="fixed inset-x-3 bottom-3 z-20 rounded-2xl border border-white/10 bg-[#0b1016]/95 p-2 backdrop-blur md:hidden">
        <div className="grid grid-cols-4 gap-1">
          {[...items, ...allPages.slice(0, 2)].map((item) => (
            <Link key={item.href} href={item.href} className={`tech-font rounded-lg px-2 py-2 text-center text-xs transition active:scale-95 ${pathname === item.href ? "bg-cyan-300/20 text-iceMist shadow-[0_0_16px_rgba(34,211,238,0.3)]" : "text-slateAsh"}`}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
