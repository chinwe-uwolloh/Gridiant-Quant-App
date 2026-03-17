from fastapi import APIRouter, Depends

from app.api.deps import get_current_user, require_role
from app.schemas.quantum import QuantumEstimateRequest, QuantumEstimateResponse, QuantumRefineRequest, QuantumRefineResponse
from app.services.estimator_service import EstimatorService
from app.services.quantum_router_service import QuantumRouterService

router = APIRouter()


@router.post('/refine', response_model=QuantumRefineResponse)
def refine(payload: QuantumRefineRequest, user: dict = Depends(get_current_user), _: dict = Depends(require_role('admin', 'operator'))) -> QuantumRefineResponse:
    return QuantumRouterService().refine(payload, user['id'])


@router.get('/jobs/{job_id}', response_model=QuantumRefineResponse)
def get_job(job_id: str, user: dict = Depends(get_current_user)) -> QuantumRefineResponse:
    return QuantumRouterService().get(job_id, user['id'])


@router.post('/estimate', response_model=QuantumEstimateResponse)
def estimate(payload: QuantumEstimateRequest, user: dict = Depends(get_current_user), _: dict = Depends(require_role('admin', 'operator'))) -> QuantumEstimateResponse:
    return EstimatorService().estimate(payload, user['id'])
