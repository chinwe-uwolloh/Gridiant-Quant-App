from dataclasses import dataclass

from app.schemas.optimization import DeviceWindow, OptimizationRequest, ScheduleSlot


@dataclass
class OptimizationResult:
    slots: list[ScheduleSlot]
    baseline_cost: float
    optimized_cost: float


class ClassicalOptimizerService:
    def solve(self, payload: OptimizationRequest) -> OptimizationResult:
        slots: list[ScheduleSlot] = []
        used_load = [0.0] * 24

        ranked = sorted(payload.device_windows, key=lambda d: (not d.critical, d.latest_end_hour - d.earliest_start_hour, d.power_kw), reverse=False)

        for device in ranked:
            start_hour = self._select_start(device, payload, used_load)
            for offset in range(device.duration_hours):
                hour = min(23, start_hour + offset)
                used_load[hour] += device.power_kw
                slots.append(ScheduleSlot(device_id=device.device_id, hour=hour))

        baseline_cost = self._cost(payload.device_windows, payload.hourly_price)
        optimized_cost = self._cost_from_slots(slots, payload.device_windows, payload.hourly_price, payload.hourly_solar_offset, payload.hourly_hvac_penalty, payload.weights.comfort)
        return OptimizationResult(slots=slots, baseline_cost=baseline_cost, optimized_cost=optimized_cost)

    def _select_start(self, d: DeviceWindow, payload: OptimizationRequest, used: list[float]) -> int:
        best_hour = d.earliest_start_hour
        best_score = float('inf')
        latest_start = max(d.earliest_start_hour, d.latest_end_hour - d.duration_hours + 1)
        for start in range(d.earliest_start_hour, latest_start + 1):
            feasible = True
            score = 0.0
            for h in range(start, start + d.duration_hours):
                hour = min(23, h)
                if used[hour] + d.power_kw > payload.max_household_load_kw:
                    feasible = False
                    break
                net_price = max(0.0, payload.hourly_price[hour] - payload.hourly_solar_offset[hour])
                score += d.power_kw * (net_price + payload.weights.comfort * payload.hourly_hvac_penalty[hour])
                if payload.resilience_mode and not d.critical:
                    score += 0.15
            if feasible and score < best_score:
                best_score = score
                best_hour = start
        return best_hour

    def _cost(self, devices: list[DeviceWindow], hourly_price: list[float]) -> float:
        default_hour = 18
        return round(sum(d.power_kw * d.duration_hours * hourly_price[default_hour] for d in devices), 3)

    def _cost_from_slots(self, slots: list[ScheduleSlot], devices: list[DeviceWindow], price: list[float], solar: list[float], hvac: list[float], comfort_weight: float) -> float:
        power_map = {d.device_id: d.power_kw for d in devices}
        total = 0.0
        for slot in slots:
            net = max(0.0, price[slot.hour] - solar[slot.hour])
            total += power_map.get(slot.device_id, 0.0) * (net + comfort_weight * hvac[slot.hour])
        return round(total, 3)
