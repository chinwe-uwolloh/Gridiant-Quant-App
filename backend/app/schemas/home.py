from __future__ import annotations

from typing import Optional

from pydantic import BaseModel


class HomeCreate(BaseModel):
    site_id: str
    occupancy: int = 1
    floor_area_m2: float = 120.0
    comfort_priority: float = 0.5


class HomePatch(BaseModel):
    occupancy: Optional[int] = None
    floor_area_m2: Optional[float] = None
    comfort_priority: Optional[float] = None


class HomeOut(BaseModel):
    id: str
    site_id: str
    user_id: str
    occupancy: int
    floor_area_m2: float
    comfort_priority: float
