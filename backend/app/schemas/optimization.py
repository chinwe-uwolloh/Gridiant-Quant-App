from pydantic import BaseModel


class DeviceWindow(BaseModel):
    device_id: str
    power_kw: float
    earliest_start_hour: int
    latest_end_hour: int
    duration_hours: int
    critical: bool = False


class OptimizationWeights(BaseModel):
    cost: float = 0.5
    carbon: float = 0.1
    battery_health: float = 0.2
    comfort: float = 0.2


class OptimizationRequest(BaseModel):
    home_id: str
    max_household_load_kw: float = 10.0
    resilience_mode: bool = False
    device_windows: list[DeviceWindow]
    hourly_price: list[float]
    hourly_solar_offset: list[float]
    hourly_hvac_penalty: list[float]
    weights: OptimizationWeights = OptimizationWeights()


class OptimizationReplayRequest(BaseModel):
    optimization_run_id: str
    scenario_name: str


class ScheduleSlot(BaseModel):
    device_id: str
    hour: int


class OptimizationRunOut(BaseModel):
    run_id: str
    baseline_cost: float
    optimized_cost: float
    used_quantum: bool
    fallback_used: bool
    slots: list[ScheduleSlot]
