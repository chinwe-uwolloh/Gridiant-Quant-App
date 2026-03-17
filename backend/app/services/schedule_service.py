import uuid

from app.schemas.optimization import OptimizationReplayRequest, OptimizationRequest, OptimizationRunOut
from app.schemas.quantum import QuantumDecisionBlock, QuantumRefineRequest
from app.services.classical_optimizer_service import ClassicalOptimizerService
from app.services.quantum_router_service import QuantumRouterService
from app.services.store import store


class ScheduleService:
    def __init__(self) -> None:
        self.classical = ClassicalOptimizerService()
        self.quantum = QuantumRouterService()

    def run(self, payload: OptimizationRequest, user_id: str) -> OptimizationRunOut:
        _ = user_id
        run_id = str(uuid.uuid4())
        classical = self.classical.solve(payload)
        block_candidates = [
            QuantumDecisionBlock(block_id=f'block-{i}', candidate_hours=list(range(d.earliest_start_hour, min(24, d.latest_end_hour + 1))), baseline_choice=d.earliest_start_hour)
            for i, d in enumerate(payload.device_windows[:6])
        ]
        refine = self.quantum.refine(QuantumRefineRequest(optimization_run_id=run_id, complexity_score=min(1.0, len(payload.device_windows) / 10), decision_blocks=block_candidates), user_id)
        optimized_cost = max(0.0, classical.optimized_cost - refine.improved_cost_delta)
        out = OptimizationRunOut(
            run_id=run_id,
            baseline_cost=classical.baseline_cost,
            optimized_cost=round(optimized_cost, 3),
            used_quantum=refine.used_quantum,
            fallback_used=not refine.used_quantum,
            slots=classical.slots,
        )
        store.runs[run_id] = out.model_dump()
        return out

    def get(self, run_id: str, user_id: str) -> OptimizationRunOut:
        _ = user_id
        data = store.runs.get(run_id)
        if not data:
            return OptimizationRunOut(run_id=run_id, baseline_cost=0, optimized_cost=0, used_quantum=False, fallback_used=True, slots=[])
        return OptimizationRunOut(**data)

    def replay(self, payload: OptimizationReplayRequest, user_id: str) -> OptimizationRunOut:
        _ = payload.scenario_name
        return self.get(payload.optimization_run_id, user_id)
