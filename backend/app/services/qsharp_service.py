from __future__ import annotations

from dataclasses import dataclass


@dataclass
class QuantumSolveResult:
    selected_hour: int
    decision_quality: float
    entanglement_score: float
    qec_score: float
    resource_allocation_efficiency: float
    inference_latency_ms: float


class QSharpService:
    def solve_reduced_block(self, candidate_hours: list[int], baseline_choice: int) -> QuantumSolveResult:
        if not candidate_hours:
            return QuantumSolveResult(
                selected_hour=baseline_choice,
                decision_quality=0.0,
                entanglement_score=0.0,
                qec_score=0.0,
                resource_allocation_efficiency=0.0,
                inference_latency_ms=3.0,
            )

        # Deterministic proxy for Q# scheduling quality:
        # bias towards lower contention hours while preserving baseline when feasible.
        spread = max(candidate_hours) - min(candidate_hours) + 1
        selected = baseline_choice if baseline_choice in candidate_hours else min(candidate_hours)
        quality = 0.72 + min(0.22, len(candidate_hours) * 0.03)
        entanglement = 0.7 + min(0.25, spread * 0.02)
        qec = 0.9 - min(0.08, abs(selected - baseline_choice) * 0.02)
        allocation = 0.74 + min(0.2, (24 - selected) * 0.006)
        latency = 4.2 + len(candidate_hours) * 0.65

        return QuantumSolveResult(
            selected_hour=selected,
            decision_quality=round(quality, 3),
            entanglement_score=round(entanglement, 3),
            qec_score=round(max(0.0, qec), 3),
            resource_allocation_efficiency=round(allocation, 3),
            inference_latency_ms=round(latency, 2),
        )
