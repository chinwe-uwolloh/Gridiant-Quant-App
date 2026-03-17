# Gridiant 2.0

Gridiant 2.0 is a premium AI + quantum enhanced energy orchestration platform for homes, buildings, campuses, EV fleets, and microgrids.

## Stack
- Frontend: Next.js 15 + TypeScript + Tailwind tokens + React Three Fiber + D3 + Framer Motion
- Backend: FastAPI + SQLAlchemy + PostgreSQL + Redis + Celery
- Quantum: Q# kernels + Azure Quantum adapter stubs + estimator-ready path

## Repository Structure
```text
backend/
frontend/
quantum/
interop/
infrastructure/
.github/workflows/
```

## Quick Start
1. Copy env files:
   - `cp .env.example .env`
   - `cp backend/.env.example backend/.env`
   - `cp frontend/.env.example frontend/.env.local`
2. Run local stack:
   - `docker compose up --build`
3. Backend API: `http://localhost:8000/docs`
4. Frontend: `http://localhost:3000`

## Backend Development
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Frontend Development
```bash
cd frontend
npm install
npm run dev
```

## Testing
```bash
cd backend && pytest
cd frontend && npm test
```

## Production Principles
- Classical optimizer is always the baseline and fallback.
- Quantum refinement is optional and scoped to reduced hard blocks.
- JWT + RBAC enforced via route dependencies.
- Sensitive secrets resolved through a secret provider abstraction.
- Telemetry uses Azure Monitor style abstractions with vendor-neutral interfaces.
