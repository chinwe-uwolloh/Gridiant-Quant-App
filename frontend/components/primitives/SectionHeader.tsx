export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="mb-4">
      <h2 className="font-display text-[28px] font-semibold leading-tight text-iceMist md:text-[32px]">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-slateAsh">{subtitle}</p> : null}
    </header>
  );
}
