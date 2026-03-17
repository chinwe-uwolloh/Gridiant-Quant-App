import uuid
from sqlalchemy import Boolean, Float, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class OptimizationRun(Base):
    __tablename__ = 'optimization_runs'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    home_id: Mapped[str] = mapped_column(String, index=True)
    status: Mapped[str] = mapped_column(String(32), default='completed')
    baseline_cost: Mapped[float] = mapped_column(Float, default=0.0)
    optimized_cost: Mapped[float] = mapped_column(Float, default=0.0)
    used_quantum: Mapped[bool] = mapped_column(Boolean, default=False)


class ScenarioReplay(Base):
    __tablename__ = 'scenario_replays'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    optimization_run_id: Mapped[str] = mapped_column(String, index=True)
    scenario_name: Mapped[str] = mapped_column(String(255))
    result_status: Mapped[str] = mapped_column(String(32), default='completed')
