import { ReactNode } from "react";

export function SectionFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="energy-frame blueprint-grid rounded-none p-4 md:p-6">
      <header className="mb-4 flex items-center justify-between border-b border-white/10 pb-2">
        <h2 className="font-display text-xl tracking-wide text-iceMist">{title}</h2>
      </header>
      {children}
    </section>
  );
}
