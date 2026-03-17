"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

type BarDatum = { label: string; value: number };

export function ApplianceBarChart({ data }: { data: BarDatum[] }) {
  const ref = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    const w = 640;
    const h = 220;
    const x = d3.scaleBand().domain(data.map((d) => d.label)).range([30, w - 16]).padding(0.22);
    const y = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value) ?? 1]).range([h - 24, 18]);

    svg.append("g")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.label) ?? 0)
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => h - 24 - y(d.value))
      .attr("rx", 8)
      .attr("fill", "#22D3EE")
      .attr("opacity", 0.85);

    svg.append("g")
      .attr("transform", `translate(0,${h - 24})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .selectAll("text")
      .attr("fill", "#94A3B8")
      .attr("font-size", "10px");
  }, [data]);
  return <svg ref={ref} viewBox="0 0 640 220" className="h-[220px] w-full" />;
}
