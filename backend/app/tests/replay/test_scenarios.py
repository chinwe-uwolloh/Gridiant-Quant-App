from app.services.telemetry_service import TelemetryService


def test_replay_fixture_metrics_available():
    metrics = TelemetryService().dashboard('u')
    assert metrics.savings_percentage > 0
