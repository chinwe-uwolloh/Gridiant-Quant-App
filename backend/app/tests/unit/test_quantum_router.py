from app.schemas.quantum import QuantumDecisionBlock, QuantumRefineRequest
from app.services.quantum_router_service import QuantumRouterService


def test_quantum_router_fallback_when_not_worthy():
    payload = QuantumRefineRequest(
        optimization_run_id='run',
        complexity_score=0.2,
        decision_blocks=[QuantumDecisionBlock(block_id='b1', candidate_hours=[1, 2, 3], baseline_choice=2)],
    )
    out = QuantumRouterService().refine(payload, 'u1')
    assert out.used_quantum is False
