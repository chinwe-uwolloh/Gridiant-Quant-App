from app.schemas.metrics import DashboardMetrics


def test_dashboard_contract_shape():
    payload = DashboardMetrics(
        baseline_cost=100,
        optimized_cost=80,
        savings_percentage=20,
        peak_shift_percentage=15,
        carbon_reduction_proxy=9,
    )
    assert payload.model_dump().keys() == {'baseline_cost', 'optimized_cost', 'savings_percentage', 'peak_shift_percentage', 'carbon_reduction_proxy'}
