import uuid


class AzureQuantumService:
    def submit(self, payload: dict) -> dict:
        return {'job_id': str(uuid.uuid4()), 'status': 'submitted', 'provider_target': payload.get('provider_target', 'local.simulator')}

    def poll(self, job_id: str) -> dict:
        return {'job_id': job_id, 'status': 'succeeded', 'result': {'improved_cost_delta': 0.0}}

    def estimate_resources(self, logical_problem_size: int, qec_scheme: str, target_family: str) -> dict:
        return {
            'logical_qubits': max(8, logical_problem_size * 3),
            'physical_qubits': max(1000, logical_problem_size * 900),
            'runtime_seconds': float(logical_problem_size) * 1.75,
            'qec_scheme': qec_scheme,
            'target_family': target_family,
        }
