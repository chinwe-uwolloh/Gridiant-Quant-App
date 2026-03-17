from fastapi import APIRouter, Depends

from app.api.deps import get_current_user, require_role
from app.schemas.optimization import OptimizationReplayRequest, OptimizationRequest, OptimizationRunOut
from app.services.schedule_service import ScheduleService

router = APIRouter()


@router.post('/run', response_model=OptimizationRunOut)
def run_opt(payload: OptimizationRequest, user: dict = Depends(get_current_user), _: dict = Depends(require_role('admin', 'operator'))) -> OptimizationRunOut:
    return ScheduleService().run(payload, user['id'])


@router.get('/run/{run_id}', response_model=OptimizationRunOut)
def get_run(run_id: str, user: dict = Depends(get_current_user)) -> OptimizationRunOut:
    return ScheduleService().get(run_id, user['id'])


@router.post('/replay', response_model=OptimizationRunOut)
def replay(payload: OptimizationReplayRequest, user: dict = Depends(get_current_user), _: dict = Depends(require_role('admin', 'operator'))) -> OptimizationRunOut:
    return ScheduleService().replay(payload, user['id'])
