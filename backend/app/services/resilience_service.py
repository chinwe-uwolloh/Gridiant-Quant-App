class ResilienceService:
    def score(self, battery_soc: float, critical_load_kw: float, outage_hours: int) -> float:
        reserve = battery_soc * 13.5
        demand = critical_load_kw * outage_hours
        return round(min(1.0, reserve / max(1.0, demand)), 3)
