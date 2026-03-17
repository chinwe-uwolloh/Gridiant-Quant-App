import uuid
from sqlalchemy import Float, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Organization(Base):
    __tablename__ = 'organizations'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name: Mapped[str] = mapped_column(String(255), index=True)


class Site(Base):
    __tablename__ = 'sites'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    organization_id: Mapped[str] = mapped_column(String, index=True)
    name: Mapped[str] = mapped_column(String(255))
    grid_region: Mapped[str] = mapped_column(String(64))


class HomeProfile(Base):
    __tablename__ = 'home_profiles'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    site_id: Mapped[str] = mapped_column(String, index=True)
    user_id: Mapped[str] = mapped_column(String, index=True)
    occupancy: Mapped[int] = mapped_column(default=1)
    floor_area_m2: Mapped[float] = mapped_column(Float, default=120.0)
    comfort_priority: Mapped[float] = mapped_column(Float, default=0.5)
