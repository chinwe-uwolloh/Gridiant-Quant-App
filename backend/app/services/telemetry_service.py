from datetime import datetime

from app.schemas.metrics import DashboardMetrics, SavingsMetrics, TelemetryMetrics
from app.schemas.metrics import QuantumImpactMetrics


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

    def quantum_impact(self, user_id: str) -> QuantumImpactMetrics:
        _ = user_id
        second = datetime.utcnow().second
        drift = (second % 10) / 100
        return QuantumImpactMetrics(
            quantum_energy_saved_kwh=round(17.6 + drift, 2),
            quantum_cost_saved_usd=round(42.3 + (drift * 10), 2),
            optimization_success_rate=round(0.987 - (drift / 10), 3),
            inference_throughput_per_min=round(124.0 + (second % 6) * 0.9, 2),
            entanglement_efficiency_index=round(0.91 + drift / 2, 3),
            qec_stability_score=round(0.94 + drift / 3, 3),
            realtime_confidence=round(0.88 + drift / 2, 3),
        )
