from pydantic import BaseModel


class DashboardMetrics(BaseModel):
    baseline_cost: float
    optimized_cost: float
    savings_percentage: float
    peak_shift_percentage: float
    carbon_reduction_proxy: float


class TelemetryMetrics(BaseModel):
    schedule_latency_ms: float
    quantum_invocation_rate: float
    quantum_timeout_rate: float
    classical_fallback_rate: float
    recommendation_acceptance_rate: float


class SavingsMetrics(BaseModel):
    month_to_date_cost_baseline: float
    month_to_date_cost_optimized: float
    month_to_date_savings_percent: float


class QuantumImpactMetrics(BaseModel):
    quantum_energy_saved_kwh: float
    quantum_cost_saved_usd: float
    optimization_success_rate: float
    inference_throughput_per_min: float
    entanglement_efficiency_index: float
    qec_stability_score: float
    realtime_confidence: float
