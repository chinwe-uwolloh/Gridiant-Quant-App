import uuid
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.core.security import create_access_token, hash_password, verify_password
from app.schemas.auth import LoginRequest, TokenResponse, UserCreate, UserOut
from app.services.store import store


class AuthService:
    def __init__(self, db: Session):
        self.db = db

    def register(self, payload: UserCreate) -> UserOut:
        if payload.email in store.users:
            raise HTTPException(status_code=409, detail='Email already registered')
        user = {'id': str(uuid.uuid4()), 'email': payload.email, 'password': hash_password(payload.password), 'role': payload.role}
        store.users[payload.email] = user
        return UserOut(id=user['id'], email=user['email'], role=user['role'])

    def login(self, payload: LoginRequest) -> TokenResponse:
        user = store.users.get(payload.email)
        if not user or not verify_password(payload.password, user['password']):
            raise HTTPException(status_code=401, detail='Invalid credentials')
        token = create_access_token(user['id'], user['role'])
        return TokenResponse(access_token=token)
