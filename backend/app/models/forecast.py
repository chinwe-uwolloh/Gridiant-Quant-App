import uuid
from sqlalchemy import Float, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class PriceCurve(Base):
    __tablename__ = 'price_curves'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    site_id: Mapped[str] = mapped_column(String, index=True)
    hour: Mapped[int] = mapped_column(default=0)
    price_per_kwh: Mapped[float] = mapped_column(Float, default=0.2)


class WeatherForecast(Base):
    __tablename__ = 'weather_forecasts'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    site_id: Mapped[str] = mapped_column(String, index=True)
    hour: Mapped[int] = mapped_column(default=0)
    temperature_c: Mapped[float] = mapped_column(Float, default=20.0)


class EnergyForecast(Base):
    __tablename__ = 'energy_forecasts'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    home_id: Mapped[str] = mapped_column(String, index=True)
    hour: Mapped[int] = mapped_column(default=0)
    expected_load_kw: Mapped[float] = mapped_column(Float, default=1.0)
    expected_solar_kw: Mapped[float] = mapped_column(Float, default=0.0)
