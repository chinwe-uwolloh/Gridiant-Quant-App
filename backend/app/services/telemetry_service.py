from app.schemas.metrics import DashboardMetrics, SavingsMetrics, TelemetryMetrics


class TelemetryService:
    def dashboard(self, user_id: str) -> DashboardMetrics:
        _ = user_id
        return DashboardMetrics(baseline_cost=412.0, optimized_cost=309.0, savings_percentage=25.0, peak_shift_percentage=21.0, carbon_reduction_proxy=16.4)

    def telemetry(self, user_id: str) -> TelemetryMetrics:
        _ = user_id
        return TelemetryMetrics(schedule_latency_ms=1420, quantum_invocation_rate=0.19, quantum_timeout_rate=0.03, classical_fallback_rate=0.08, recommendation_acceptance_rate=0.87)

    def savings(self, user_id: str) -> SavingsMetrics:
        _ = user_id
        return SavingsMetrics(month_to_date_cost_baseline=890.0, month_to_date_cost_optimized=672.0, month_to_date_savings_percent=24.5)
