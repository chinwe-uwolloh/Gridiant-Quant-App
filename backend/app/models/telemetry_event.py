import uuid
from sqlalchemy import Float, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class TelemetryEventModel(Base):
    __tablename__ = 'telemetry_events'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id: Mapped[str] = mapped_column(String, index=True)
    event_name: Mapped[str] = mapped_column(String(128))
    metric_value: Mapped[float] = mapped_column(Float, default=0.0)


class OverrideEvent(Base):
    __tablename__ = 'override_events'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id: Mapped[str] = mapped_column(String, index=True)
    optimization_run_id: Mapped[str] = mapped_column(String, index=True)
    reason: Mapped[str] = mapped_column(String(255), default='manual_override')
