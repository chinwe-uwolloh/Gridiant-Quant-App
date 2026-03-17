from __future__ import annotations

from functools import lru_cache
from typing import Optional

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env', extra='ignore')

    app_name: str = 'Gridiant 2.0 API'
    env: str = 'dev'
    jwt_secret: str = 'change-me'
    jwt_alg: str = 'HS256'
    access_token_minutes: int = 120
    database_url: str = 'postgresql+psycopg://gridiant:gridiant@localhost:5432/gridiant'
    redis_url: str = 'redis://localhost:6379/0'
    azure_quantum_workspace: Optional[str] = None
    azure_quantum_resource_group: Optional[str] = None
    azure_quantum_subscription: Optional[str] = None
    azure_quantum_location: Optional[str] = None
    azure_key_vault_url: Optional[str] = None


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
