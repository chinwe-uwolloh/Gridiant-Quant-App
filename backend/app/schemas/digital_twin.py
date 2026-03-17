from pydantic import BaseModel


class TwinZone(BaseModel):
    zone_name: str
    temperature_c: float
    occupancy: int


class DigitalTwinOut(BaseModel):
    site_id: str
    battery_soc: float
    flexible_load_kw: float
    zones: list[TwinZone]


class DigitalTwinSimulationRequest(BaseModel):
    site_id: str
    external_temp_c: float
    occupancy_shift: int = 0
