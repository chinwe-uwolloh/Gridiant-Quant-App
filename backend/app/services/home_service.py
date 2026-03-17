import uuid
from fastapi import HTTPException

from app.schemas.home import HomeCreate, HomeOut, HomePatch
from app.services.store import store


class HomeService:
    def create(self, payload: HomeCreate, user_id: str) -> HomeOut:
        home_id = str(uuid.uuid4())
        record = {'id': home_id, 'site_id': payload.site_id, 'user_id': user_id, **payload.model_dump(exclude={'site_id'})}
        store.homes[home_id] = record
        return HomeOut(**record)

    def get(self, home_id: str, user_id: str) -> HomeOut:
        home = store.homes.get(home_id)
        if not home or home['user_id'] != user_id:
            raise HTTPException(status_code=404, detail='Home not found')
        return HomeOut(**home)

    def patch(self, home_id: str, payload: HomePatch, user_id: str) -> HomeOut:
        home = self.get(home_id, user_id).model_dump()
        updates = payload.model_dump(exclude_none=True)
        home.update(updates)
        store.homes[home_id] = home
        return HomeOut(**home)
