from fastapi import APIRouter, Depends

from app.api.deps import get_current_user, require_role
from app.schemas.home import HomeCreate, HomeOut, HomePatch
from app.schemas.device import DeviceOut
from app.services.device_service import DeviceService
from app.services.home_service import HomeService

router = APIRouter()


@router.post('', response_model=HomeOut)
def create_home(payload: HomeCreate, user: dict = Depends(get_current_user), _: dict = Depends(require_role('admin', 'operator'))) -> HomeOut:
    return HomeService().create(payload, user['id'])


@router.get('/{home_id}', response_model=HomeOut)
def get_home(home_id: str, user: dict = Depends(get_current_user)) -> HomeOut:
    return HomeService().get(home_id, user['id'])


@router.patch('/{home_id}', response_model=HomeOut)
def patch_home(home_id: str, payload: HomePatch, user: dict = Depends(get_current_user), _: dict = Depends(require_role('admin', 'operator'))) -> HomeOut:
    return HomeService().patch(home_id, payload, user['id'])


@router.get('/{home_id}/devices', response_model=list[DeviceOut])
def list_home_devices(home_id: str, user: dict = Depends(get_current_user)) -> list[DeviceOut]:
    return DeviceService().for_home(home_id, user['id'])
