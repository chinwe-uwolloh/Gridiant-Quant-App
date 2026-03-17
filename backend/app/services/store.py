from dataclasses import dataclass, field


@dataclass
class InMemoryStore:
    users: dict = field(default_factory=dict)
    homes: dict = field(default_factory=dict)
    devices: dict = field(default_factory=dict)
    runs: dict = field(default_factory=dict)
    quantum_jobs: dict = field(default_factory=dict)


store = InMemoryStore()
