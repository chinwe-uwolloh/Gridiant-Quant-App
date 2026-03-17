from app.schemas.digital_twin import DigitalTwinOut, DigitalTwinSimulationRequest, TwinZone


class DigitalTwinService:
    def get(self, site_id: str, user_id: str) -> DigitalTwinOut:
        _ = user_id
        return DigitalTwinOut(site_id=site_id, battery_soc=0.62, flexible_load_kw=3.4, zones=[TwinZone(zone_name='Living', temperature_c=21.5, occupancy=2), TwinZone(zone_name='Office', temperature_c=22.1, occupancy=1)])

    def simulate(self, payload: DigitalTwinSimulationRequest, user_id: str) -> DigitalTwinOut:
        _ = user_id
        drift = (24 - payload.external_temp_c) * 0.05
        return DigitalTwinOut(site_id=payload.site_id, battery_soc=0.58, flexible_load_kw=3.9, zones=[TwinZone(zone_name='Living', temperature_c=21.0 - drift, occupancy=max(0, 2 + payload.occupancy_shift)), TwinZone(zone_name='Office', temperature_c=22.0 - drift, occupancy=1)])
