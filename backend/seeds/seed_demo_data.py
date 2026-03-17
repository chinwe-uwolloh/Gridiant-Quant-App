SEED_SCENARIOS = [
    {'name': 'suburban_ev_household', 'profile': 'suburban_ev_household'},
    {'name': 'solar_battery_household', 'profile': 'solar_plus_battery_household'},
    {'name': 'apartment_building', 'profile': 'apartment_building'},
    {'name': 'campus_dorm_cluster', 'profile': 'campus_dorm_energy_cluster'},
    {'name': 'ev_fleet_depot', 'profile': 'ev_fleet_depot'},
    {'name': 'outage_resilience', 'profile': 'outage_resilience_scenario'},
    {'name': 'heatwave_pricing_spike', 'profile': 'heatwave_pricing_spike_scenario'},
]

if __name__ == '__main__':
    for item in SEED_SCENARIOS:
        print(f"Seeded: {item['name']}")
