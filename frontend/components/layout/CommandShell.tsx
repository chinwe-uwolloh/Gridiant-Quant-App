import { ReactNode } from "react";

export function CommandShell({ children }: { children: ReactNode }) {
  return (
    <main className="liquid-bg relative mx-auto max-w-[1440px] px-6 py-8 md:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="float-orb left-[6%] top-[16%] h-36 w-36 bg-cyan-300/10" />
        <div className="float-orb float-orb--alt right-[12%] top-[22%] h-44 w-44 bg-emerald-300/10" />
      </div>
      {children}
    </main>
  );
}
