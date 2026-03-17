from fastapi import FastAPI

from app.api import routes_auth, routes_devices, routes_digital_twin, routes_homes, routes_metrics, routes_optimization, routes_quantum, routes_users
from app.core.config import settings

app = FastAPI(title=settings.app_name)

app.include_router(routes_auth.router, prefix="/auth", tags=["auth"])
app.include_router(routes_users.router, tags=["users"])
app.include_router(routes_homes.router, prefix="/homes", tags=["homes"])
app.include_router(routes_devices.router, prefix="/devices", tags=["devices"])
app.include_router(routes_optimization.router, prefix="/optimize", tags=["optimization"])
app.include_router(routes_quantum.router, prefix="/quantum", tags=["quantum"])
app.include_router(routes_digital_twin.router, prefix="/digital-twin", tags=["digital_twin"])
app.include_router(routes_metrics.router, prefix="/metrics", tags=["metrics"])


@app.get('/healthz')
def healthz() -> dict[str, str]:
    return {'status': 'ok'}
