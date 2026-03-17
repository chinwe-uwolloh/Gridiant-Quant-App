"use client";

import dynamic from "next/dynamic";

const LivingEnergyField = dynamic(
  () => import("@/components/dashboard/LivingEnergyField").then((mod) => mod.LivingEnergyField),
  { ssr: false }
);

export function LivingEnergyFieldNoSSR() {
  return <LivingEnergyField />;
}
