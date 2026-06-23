from __future__ import annotations

from datetime import date, datetime

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import and_, desc, or_, select
from sqlalchemy.orm import Session

from ..auth import get_current_user
from ..db import get_db
from ..models import Transaction, User
from ..schemas import TransferCreate, TransactionCreate, TransactionOut, TransactionUpdate


router = APIRouter(prefix="/transactions", tags=["transactions"])


def _month_range(month: str) -> tuple[date, date]:
    y, m = month.split("-")
    start = date(int(y), int(m), 1)
    if start.month == 12:
        end = date(start.year + 1, 1, 1)
    else:
        end = date(start.year, start.month + 1, 1)
    return start, end


@router.get("", response_model=list[TransactionOut])
def list_transactions(
    month: str | None = None,
    account_id: int | None = None,
    category_id: int | None = None,
    budget_id: int | None = None,
    keyword: str | None = None,
    start_date: date | None = None,
    end_date: date | None = None,
    limit: int = Query(default=200, ge=1, le=1000),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    where = [Transaction.user_id == user.id]
    if month:
        start, end = _month_range(month)
        where.append(Transaction.date >= start)
        where.append(Transaction.date < end)
    if start_date:
        where.append(Transaction.date >= start_date)
    if end_date:
        where.append(Transaction.date <= end_date)
    if account_id:
        where.append(or_(Transaction.account_id == account_id, Transaction.to_account_id == account_id))
    if category_id:
        where.append(Transaction.category_id == category_id)
    if budget_id:
        where.append(Transaction.budget_id == budget_id)
    if keyword:
        where.append(Transaction.note.like(f"%{keyword}%"))

    stmt = select(Transaction).where(and_(*where)).order_by(desc(Transaction.date), desc(Transaction.id)).limit(limit)
    return db.scalars(stmt).all()


@router.post("", response_model=TransactionOut)
def create_transaction(
    payload: TransactionCreate,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    tx = Transaction(
        user_id=user.id,
        type=payload.type,
        amount=payload.amount,
        category_id=payload.category_id,
        account_id=payload.account_id,
        to_account_id=payload.to_account_id,
        date=payload.date,
        note=payload.note,
        budget_id=payload.budget_id,
        updated_at=datetime.utcnow(),
    )
    db.add(tx)
    db.commit()
    db.refresh(tx)
    return tx


@router.put("/{tx_id}", response_model=TransactionOut)
def update_transaction(
    tx_id: int,
    payload: TransactionUpdate,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    tx = db.get(Transaction, tx_id)
    if tx is None or tx.user_id != user.id:
        raise HTTPException(status_code=404, detail="transaction_not_found")

    for k, v in payload.model_dump(exclude_unset=True).items():
        setattr(tx, k, v)
    tx.updated_at = datetime.utcnow()
    db.add(tx)
    db.commit()
    db.refresh(tx)
    return tx


@router.delete("/{tx_id}")
def delete_transaction(
    tx_id: int,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    tx = db.get(Transaction, tx_id)
    if tx is None or tx.user_id != user.id:
        raise HTTPException(status_code=404, detail="transaction_not_found")
    db.delete(tx)
    db.commit()
    return {"success": True}


@router.post("/transfer")
def transfer(
    payload: TransferCreate,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    if payload.from_account_id == payload.to_account_id:
        raise HTTPException(status_code=400, detail="same_account")

    out_tx = Transaction(
        user_id=user.id,
        type="transfer_out",
        amount=payload.amount,
        category_id=None,
        account_id=payload.from_account_id,
        to_account_id=payload.to_account_id,
        date=payload.date,
        note=payload.note,
        budget_id=None,
        updated_at=datetime.utcnow(),
    )
    in_tx = Transaction(
        user_id=user.id,
        type="transfer_in",
        amount=payload.amount,
        category_id=None,
        account_id=payload.to_account_id,
        to_account_id=payload.from_account_id,
        date=payload.date,
        note=payload.note,
        budget_id=None,
        updated_at=datetime.utcnow(),
    )
    db.add_all([out_tx, in_tx])
    db.commit()
    return {"success": True}
