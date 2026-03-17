from fastapi import APIRouter, Depends

from app.api.deps import get_current_user, require_role
from app.schemas.device import DeviceCreate, DeviceOut, DevicePatch
from app.services.device_service import DeviceService

router = APIRouter()


@router.post('', response_model=DeviceOut)
def create_device(payload: DeviceCreate, user: dict = Depends(get_current_user), _: dict = Depends(require_role('admin', 'operator'))) -> DeviceOut:
    return DeviceService().create(payload, user['id'])


@router.patch('/{device_id}', response_model=DeviceOut)
def patch_device(device_id: str, payload: DevicePatch, user: dict = Depends(get_current_user), _: dict = Depends(require_role('admin', 'operator'))) -> DeviceOut:
    return DeviceService().patch(device_id, payload, user['id'])


@router.get('/home/{home_id}', response_model=list[DeviceOut])
def list_home_devices(home_id: str, user: dict = Depends(get_current_user)) -> list[DeviceOut]:
    return DeviceService().for_home(home_id, user['id'])
