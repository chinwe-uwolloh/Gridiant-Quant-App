import uuid

from app.schemas.quantum import QuantumEstimateRequest, QuantumEstimateResponse
from app.services.azure_quantum_service import AzureQuantumService


class EstimatorService:
    def __init__(self) -> None:
        self.azure = AzureQuantumService()

    def estimate(self, payload: QuantumEstimateRequest, user_id: str) -> QuantumEstimateResponse:
        _ = user_id
        estimation = self.azure.estimate_resources(payload.logical_problem_size, payload.qec_scheme, payload.target_family)
        return QuantumEstimateResponse(
            run_id=str(uuid.uuid4()),
            logical_qubits=estimation['logical_qubits'],
            physical_qubits=estimation['physical_qubits'],
            runtime_seconds=estimation['runtime_seconds'],
        )
