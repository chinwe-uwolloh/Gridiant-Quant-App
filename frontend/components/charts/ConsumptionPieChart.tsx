"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

type Slice = { label: string; value: number };

export function ConsumptionPieChart({ data }: { data: Slice[] }) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    const w = 280;
    const h = 280;
    const r = 96;
    const pie = d3.pie<Slice>().value((d) => d.value).sort(null);
    const arc = d3.arc<d3.PieArcDatum<Slice>>().innerRadius(52).outerRadius(r);
    const colors = ["#22D3EE", "#2EC4B6", "#1C6E8C", "#94A3B8"];

    const g = svg.append("g").attr("transform", `translate(${w / 2}, ${h / 2})`);
    g.selectAll("path")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (_, i) => colors[i % colors.length])
      .attr("opacity", 0.9);
  }, [data]);

  return <svg ref={ref} viewBox="0 0 280 280" className="h-[220px] w-full" />;
}
