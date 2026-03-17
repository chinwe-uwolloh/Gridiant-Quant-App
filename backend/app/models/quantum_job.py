import uuid
from sqlalchemy import Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class OptimizationDecisionBlock(Base):
    __tablename__ = 'optimization_decision_blocks'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    optimization_run_id: Mapped[str] = mapped_column(String, index=True)
    complexity_score: Mapped[float] = mapped_column(Float, default=0.0)
    block_size: Mapped[int] = mapped_column(Integer, default=0)


class QuantumRefinementRun(Base):
    __tablename__ = 'quantum_refinement_runs'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    optimization_run_id: Mapped[str] = mapped_column(String, index=True)
    provider_target: Mapped[str] = mapped_column(String(255), default='local.simulator')
    status: Mapped[str] = mapped_column(String(32), default='pending')
    delta_cost: Mapped[float] = mapped_column(Float, default=0.0)


class ResourceEstimateRun(Base):
    __tablename__ = 'resource_estimate_runs'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    quantum_refinement_run_id: Mapped[str] = mapped_column(String, index=True)
    logical_qubits: Mapped[int] = mapped_column(Integer, default=0)
    runtime_seconds: Mapped[float] = mapped_column(Float, default=0.0)
