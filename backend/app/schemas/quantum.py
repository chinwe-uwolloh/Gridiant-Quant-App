from pydantic import BaseModel


class QuantumDecisionBlock(BaseModel):
    block_id: str
    candidate_hours: list[int]
    baseline_choice: int


class QuantumRefineRequest(BaseModel):
    optimization_run_id: str
    complexity_score: float
    decision_blocks: list[QuantumDecisionBlock]


class QuantumRefineResponse(BaseModel):
    job_id: str
    status: str
    used_quantum: bool
    improved_cost_delta: float
    decision_quality: float = 0.0
    entanglement_score: float = 0.0
    qec_score: float = 0.0
    resource_allocation_efficiency: float = 0.0
    inference_latency_ms: float = 0.0


class QuantumEstimateRequest(BaseModel):
    logical_problem_size: int
    qec_scheme: str = 'surface_code'
    target_family: str = 'majorana_readiness_projection'


class QuantumEstimateResponse(BaseModel):
    run_id: str
    logical_qubits: int
    physical_qubits: int
    runtime_seconds: float
