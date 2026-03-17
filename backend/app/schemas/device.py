from __future__ import annotations

from typing import Optional

from pydantic import BaseModel


class DeviceCreate(BaseModel):
    home_id: str
    name: str
    category: str
    power_kw: float
    is_critical: bool = False
    earliest_start_hour: int = 0
    latest_end_hour: int = 23
    duration_hours: int = 1


class DevicePatch(BaseModel):
    name: Optional[str] = None
    power_kw: Optional[float] = None
    earliest_start_hour: Optional[int] = None
    latest_end_hour: Optional[int] = None
    duration_hours: Optional[int] = None


class DeviceOut(DeviceCreate):
    id: str
