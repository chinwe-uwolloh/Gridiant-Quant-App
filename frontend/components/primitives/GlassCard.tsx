import { ReactNode } from "react";

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`glass-card soft-hover ${className}`}>{children}</section>;
}
