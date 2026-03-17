import { describe, expect, it } from "vitest";
import { dashboardKpis } from "../lib/state/dashboardState";

describe("dashboard state", () => {
  it("contains strategic KPI entries", () => {
    expect(dashboardKpis.length).toBeGreaterThan(3);
  });
});
