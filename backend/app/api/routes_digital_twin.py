from fastapi import APIRouter, Depends

from app.api.deps import get_current_user
from app.schemas.digital_twin import DigitalTwinOut, DigitalTwinSimulationRequest
from app.services.digital_twin_service import DigitalTwinService

router = APIRouter()


@router.get('/{site_id}', response_model=DigitalTwinOut)
def get_twin(site_id: str, user: dict = Depends(get_current_user)) -> DigitalTwinOut:
    return DigitalTwinService().get(site_id, user['id'])


@router.post('/simulate', response_model=DigitalTwinOut)
def simulate(payload: DigitalTwinSimulationRequest, user: dict = Depends(get_current_user)) -> DigitalTwinOut:
    return DigitalTwinService().simulate(payload, user['id'])
