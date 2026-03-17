from fastapi import APIRouter, Depends

from app.api.deps import get_current_user
from app.schemas.metrics import DashboardMetrics, SavingsMetrics, TelemetryMetrics
from app.services.telemetry_service import TelemetryService

router = APIRouter()


@router.get('/dashboard', response_model=DashboardMetrics)
def dashboard(user: dict = Depends(get_current_user)) -> DashboardMetrics:
    return TelemetryService().dashboard(user['id'])


@router.get('/telemetry', response_model=TelemetryMetrics)
def telemetry(user: dict = Depends(get_current_user)) -> TelemetryMetrics:
    return TelemetryService().telemetry(user['id'])


@router.get('/savings', response_model=SavingsMetrics)
def savings(user: dict = Depends(get_current_user)) -> SavingsMetrics:
    return TelemetryService().savings(user['id'])
