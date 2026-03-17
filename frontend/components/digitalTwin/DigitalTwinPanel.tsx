import { SectionFrame } from "@/components/primitives/SectionFrame";

export function DigitalTwinPanel() {
  return (
    <SectionFrame title="Digital Twin Studio">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="border border-white/15 p-4">Zone thermal profile</div>
        <div className="border border-white/15 p-4">Flexible load windows</div>
        <div className="border border-white/15 p-4">Scenario simulation controls</div>
      </div>
    </SectionFrame>
  );
}
