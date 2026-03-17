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
    const h = 220;
    const x = d3.scaleLinear().domain([0, data.length - 1]).range([18, w - 18]);
    const y = d3.scaleLinear().domain([0, d3.max(data) ?? 1]).range([h - 26, 22]);
    const line = d3.line<number>().x((_, i) => x(i)).y((d) => y(d)).curve(d3.curveCatmullRom.alpha(0.5));
    const area = d3
      .area<number>()
      .x((_, i) => x(i))
      .y0(h - 22)
      .y1((d) => y(d))
      .curve(d3.curveCatmullRom.alpha(0.5));

    const defs = svg.append("defs");
    const grad = defs.append("linearGradient").attr("id", "lineGrad").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    grad.append("stop").attr("offset", "0%").attr("stop-color", "#1C6E8C");
    grad.append("stop").attr("offset", "100%").attr("stop-color", "#2EC4B6");
    const fill = defs.append("linearGradient").attr("id", "areaGrad").attr("x1", "0%").attr("y1", "0%").attr("x2", "0%").attr("y2", "100%");
    fill.append("stop").attr("offset", "0%").attr("stop-color", "rgba(34,211,238,0.32)");
    fill.append("stop").attr("offset", "100%").attr("stop-color", "rgba(34,211,238,0)");

    svg.append("path").attr("d", area(data) ?? "").attr("fill", "url(#areaGrad)");
    svg.append("path").attr("d", line(data) ?? "").attr("fill", "none").attr("stroke", "url(#lineGrad)").attr("stroke-width", 2.4);
  }, [data]);
  return <svg ref={ref} viewBox="0 0 640 220" className="h-[220px] w-full" />;
}
