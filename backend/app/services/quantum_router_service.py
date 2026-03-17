import uuid

from app.schemas.quantum import QuantumRefineRequest, QuantumRefineResponse
from app.services.qsharp_service import QSharpService
from app.services.store import store


class QuantumRouterService:
    def __init__(self) -> None:
        self.qsharp = QSharpService()

    def refine(self, payload: QuantumRefineRequest, user_id: str) -> QuantumRefineResponse:
        _ = user_id
        job_id = str(uuid.uuid4())
        quantum_worthy = payload.complexity_score >= 0.65 and len(payload.decision_blocks) > 0
        if not quantum_worthy:
            response = QuantumRefineResponse(job_id=job_id, status='skipped_classical_fallback', used_quantum=False, improved_cost_delta=0.0)
            store.quantum_jobs[job_id] = response.model_dump()
            return response

        try:
            chosen = []
            for b in payload.decision_blocks:
                hour = self.qsharp.solve_reduced_block(b.candidate_hours, b.baseline_choice)
                chosen.append(hour)
            improved = round(max(0.0, len(chosen) * 0.02), 3)
            response = QuantumRefineResponse(job_id=job_id, status='succeeded', used_quantum=True, improved_cost_delta=improved)
        except Exception:
            response = QuantumRefineResponse(job_id=job_id, status='fallback_classical', used_quantum=False, improved_cost_delta=0.0)

        store.quantum_jobs[job_id] = response.model_dump()
        return response

    def get(self, job_id: str, user_id: str) -> QuantumRefineResponse:
        _ = user_id
        data = store.quantum_jobs.get(job_id)
        if not data:
            return QuantumRefineResponse(job_id=job_id, status='unknown', used_quantum=False, improved_cost_delta=0.0)
        return QuantumRefineResponse(**data)
