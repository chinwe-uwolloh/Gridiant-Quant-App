import uuid
from sqlalchemy import Boolean, Float, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Device(Base):
    __tablename__ = 'devices'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    home_id: Mapped[str] = mapped_column(String, index=True)
    name: Mapped[str] = mapped_column(String(255))
    category: Mapped[str] = mapped_column(String(64))
    power_kw: Mapped[float] = mapped_column(Float, default=0.0)
    is_critical: Mapped[bool] = mapped_column(Boolean, default=False)
    earliest_start_hour: Mapped[int] = mapped_column(default=0)
    latest_end_hour: Mapped[int] = mapped_column(default=23)
    duration_hours: Mapped[int] = mapped_column(default=1)
