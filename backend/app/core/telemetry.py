from dataclasses import dataclass


@dataclass
class TelemetryEvent:
    name: str
    value: float
    unit: str
    dimensions: dict[str, str]


class TelemetryClient:
    def emit(self, event: TelemetryEvent) -> None:
        # Azure Monitor style abstraction point.
        _ = event
