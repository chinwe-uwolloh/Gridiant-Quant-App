import uuid
from fastapi import HTTPException

from app.schemas.device import DeviceCreate, DeviceOut, DevicePatch
from app.services.store import store


class DeviceService:
    def create(self, payload: DeviceCreate, user_id: str) -> DeviceOut:
        if payload.home_id not in store.homes or store.homes[payload.home_id]['user_id'] != user_id:
            raise HTTPException(status_code=404, detail='Home not found')
        device_id = str(uuid.uuid4())
        record = {'id': device_id, **payload.model_dump()}
        store.devices[device_id] = record
        return DeviceOut(**record)

    def patch(self, device_id: str, payload: DevicePatch, user_id: str) -> DeviceOut:
        record = store.devices.get(device_id)
        if not record:
            raise HTTPException(status_code=404, detail='Device not found')
        home = store.homes.get(record['home_id'])
        if not home or home['user_id'] != user_id:
            raise HTTPException(status_code=403, detail='Forbidden')
        record.update(payload.model_dump(exclude_none=True))
        return DeviceOut(**record)

    def for_home(self, home_id: str, user_id: str) -> list[DeviceOut]:
        home = store.homes.get(home_id)
        if not home or home['user_id'] != user_id:
            raise HTTPException(status_code=404, detail='Home not found')
        return [DeviceOut(**d) for d in store.devices.values() if d['home_id'] == home_id]
