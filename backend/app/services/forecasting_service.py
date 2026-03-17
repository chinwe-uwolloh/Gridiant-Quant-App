class ForecastingService:
    def forecast_hourly(self, horizon_hours: int = 24) -> list[dict]:
        return [{'hour': h, 'load_kw': 1.2 + (h % 6) * 0.2, 'solar_kw': max(0.0, 3.0 - abs(12 - h) * 0.25)} for h in range(horizon_hours)]
