from __future__ import annotations

from datetime import datetime

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..auth import get_current_user
from ..db import get_db
from ..models import Account, User
from ..schemas import AccountCreate, AccountOut, AccountUpdate


router = APIRouter(prefix="/accounts", tags=["accounts"])


@router.get("", response_model=list[AccountOut])
def list_accounts(
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    return db.scalars(
        select(Account)
        .where(Account.user_id == user.id, Account.is_deleted.is_(False))
        .order_by(Account.sort_order.asc(), Account.id.asc())
    ).all()


@router.post("", response_model=AccountOut)
def create_account(
    payload: AccountCreate,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    acc = Account(
        user_id=user.id,
        name=payload.name,
        type=payload.type,
        subtype=payload.subtype,
        initial_balance=payload.initial_balance,
        credit_limit=payload.credit_limit,
        bill_date=payload.bill_date,
        due_date=payload.due_date,
        sort_order=payload.sort_order,
        updated_at=datetime.utcnow(),
    )
    db.add(acc)
    db.commit()
    db.refresh(acc)
    return acc


@router.put("/{account_id}", response_model=AccountOut)
def update_account(
    account_id: int,
    payload: AccountUpdate,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    acc = db.get(Account, account_id)
    if acc is None or acc.user_id != user.id:
        raise HTTPException(status_code=404, detail="account_not_found")

    for k, v in payload.model_dump(exclude_unset=True).items():
        setattr(acc, k, v)
    acc.updated_at = datetime.utcnow()

    db.add(acc)
    db.commit()
    db.refresh(acc)
    return acc


@router.delete("/{account_id}")
def delete_account(
    account_id: int,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    acc = db.get(Account, account_id)
    if acc is None or acc.user_id != user.id:
        raise HTTPException(status_code=404, detail="account_not_found")

    acc.is_deleted = True
    acc.updated_at = datetime.utcnow()
    db.add(acc)
    db.commit()
    return {"success": True}
