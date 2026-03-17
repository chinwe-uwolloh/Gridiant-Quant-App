import { SectionFrame } from "@/components/primitives/SectionFrame";
import { PriceContourChart } from "@/components/charts/PriceContourChart";

const curve = [0.24, 0.21, 0.19, 0.22, 0.27, 0.35, 0.41, 0.46, 0.44, 0.38, 0.34, 0.29, 0.26, 0.25, 0.28, 0.31, 0.39, 0.52, 0.57, 0.54, 0.43, 0.33, 0.29, 0.25];

export function TimelineWall() {
  return (
    <SectionFrame title="Schedule Studio / 24h Orchestration">
      <PriceContourChart data={curve} />
      <div className="mt-4 grid grid-cols-1 gap-3 text-xs md:grid-cols-4">
        <div className="border border-white/15 p-3">Battery Charge/Discharge Bands</div>
        <div className="border border-white/15 p-3">EV Session Blocks</div>
        <div className="border border-white/15 p-3">Appliance Lanes</div>
        <div className="border border-white/15 p-3">Comfort Markers</div>
      </div>
    </SectionFrame>
  );
}
