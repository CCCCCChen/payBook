from __future__ import annotations

import hashlib
from datetime import datetime

import httpx
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..auth import create_access_token
from ..db import get_db
from ..models import Account, User
from ..seed import ensure_system_categories
from ..settings import settings


router = APIRouter(prefix="/auth", tags=["auth"])


class LoginIn(BaseModel):
    code: str | None = None
    openid: str | None = None


async def _code_to_openid(code: str) -> str:
    if settings.auth_mode != "wechat":
        h = hashlib.sha256(code.encode("utf-8")).hexdigest()
        return f"mock_{h[:24]}"

    if not settings.wechat_appid or not settings.wechat_secret:
        raise HTTPException(status_code=500, detail="WECHAT_APPID/WECHAT_SECRET not set")

    url = "https://api.weixin.qq.com/sns/jscode2session"
    params = {
        "appid": settings.wechat_appid,
        "secret": settings.wechat_secret,
        "js_code": code,
        "grant_type": "authorization_code",
    }
    async with httpx.AsyncClient(timeout=10) as client:
        resp = await client.get(url, params=params)
        data = resp.json()

    openid = data.get("openid")
    if not openid:
        raise HTTPException(status_code=401, detail="wechat_login_failed")

    return openid


def _ensure_default_accounts(db: Session, user_id: int) -> None:
    existing = db.scalars(select(Account).where(Account.user_id == user_id, Account.is_deleted.is_(False))).first()
    if existing is not None:
        return

    db.add_all(
        [
            Account(user_id=user_id, name="支付宝", type="alipay", initial_balance=0, sort_order=1),
            Account(user_id=user_id, name="信用卡", type="credit", initial_balance=0, sort_order=2),
            Account(user_id=user_id, name="微信钱包", type="wechat", initial_balance=0, sort_order=3),
            Account(user_id=user_id, name="银行卡", type="bank", initial_balance=0, sort_order=4),
            Account(user_id=user_id, name="现金", type="cash", initial_balance=0, sort_order=5),
        ]
    )
    db.commit()


@router.post("/login")
async def login(payload: LoginIn, db: Session = Depends(get_db)):
    if payload.openid:
        openid = payload.openid
    elif payload.code:
        openid = await _code_to_openid(payload.code)
    else:
        raise HTTPException(status_code=400, detail="code_or_openid_required")

    user = db.scalars(select(User).where(User.openid == openid)).first()
    if user is None:
        user = User(openid=openid, created_at=datetime.utcnow())
        db.add(user)
        db.commit()
        db.refresh(user)

    ensure_system_categories(db, user)
    _ensure_default_accounts(db, user.id)

    token = create_access_token(user.id)
    return {"access_token": token, "token_type": "bearer"}
