from app.schemas.optimization import DeviceWindow, OptimizationRequest
from app.services.classical_optimizer_service import ClassicalOptimizerService


def test_classical_optimizer_generates_slots():
    payload = OptimizationRequest(
        home_id='h1',
        device_windows=[
            DeviceWindow(device_id='d1', power_kw=2.0, earliest_start_hour=1, latest_end_hour=8, duration_hours=2, critical=True),
            DeviceWindow(device_id='d2', power_kw=1.2, earliest_start_hour=5, latest_end_hour=12, duration_hours=1),
        ],
        hourly_price=[0.3] * 24,
        hourly_solar_offset=[0.1] * 24,
        hourly_hvac_penalty=[0.05] * 24,
    )
    result = ClassicalOptimizerService().solve(payload)
    assert len(result.slots) == 3
    assert result.optimized_cost <= result.baseline_cost
