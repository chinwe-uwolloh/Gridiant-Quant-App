"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

export function PriceContourChart({ data }: { data: number[] }) {
  const ref = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    const w = 640;
    const h = 180;
    const x = d3.scaleLinear().domain([0, data.length - 1]).range([20, w - 20]);
    const y = d3.scaleLinear().domain([0, d3.max(data) ?? 1]).range([h - 20, 20]);
    const line = d3.line<number>().x((_, i) => x(i)).y((d) => y(d)).curve(d3.curveCatmullRom.alpha(0.5));
    svg.append("path").attr("d", line(data) ?? "").attr("fill", "none").attr("stroke", "#d88938").attr("stroke-width", 2.2);
    svg.append("g").attr("transform", `translate(0,${h - 20})`).call(d3.axisBottom(x).ticks(8).tickSizeOuter(0));
  }, [data]);
  return <svg ref={ref} viewBox="0 0 640 180" className="h-[180px] w-full" />;
}
