import uuid
from sqlalchemy import Float, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Battery(Base):
    __tablename__ = 'batteries'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    home_id: Mapped[str] = mapped_column(String, index=True)
    capacity_kwh: Mapped[float] = mapped_column(Float, default=13.5)
    soc: Mapped[float] = mapped_column(Float, default=0.5)
    max_charge_kw: Mapped[float] = mapped_column(Float, default=5.0)
    max_discharge_kw: Mapped[float] = mapped_column(Float, default=5.0)
