from __future__ import annotations

import json
from datetime import date, datetime, timedelta

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import and_, func, select
from sqlalchemy.orm import Session

from ..auth import get_current_user
from ..db import get_db
from ..models import Budget, Transaction, User
from ..schemas import BudgetCreate, BudgetOut, BudgetUpdate


router = APIRouter(prefix="/budgets", tags=["budgets"])


def _month_range(d: date) -> tuple[date, date]:
    start = d.replace(day=1)
    if start.month == 12:
        end = date(start.year + 1, 1, 1) - timedelta(days=1)
    else:
        end = date(start.year, start.month + 1, 1) - timedelta(days=1)
    return start, end


def _week_range(d: date) -> tuple[date, date]:
    start = d - timedelta(days=d.weekday())
    end = start + timedelta(days=6)
    return start, end


def _budget_period(b: Budget, today: date) -> tuple[date | None, date | None]:
    if b.cycle_type == "monthly":
        return _month_range(today)
    if b.cycle_type == "weekly":
        return _week_range(today)
    if b.cycle_type == "custom":
        return b.start_date, b.end_date
    return None, None


def _to_out(db: Session, b: Budget, today: date) -> dict:
    category_scope = json.loads(b.category_scope or "[]")
    period_start, period_end = _budget_period(b, today)

    spent = 0.0
    if period_start and period_end:
        where = [
            Transaction.user_id == b.user_id,
            Transaction.type == "expense",
            Transaction.budget_id == b.id,
            Transaction.date >= period_start,
            Transaction.date <= period_end,
        ]
        if category_scope:
            where.append(Transaction.category_id.in_(category_scope))
        spent_val = db.scalar(select(func.coalesce(func.sum(Transaction.amount), 0)).where(and_(*where)))
        spent = float(spent_val or 0)

    remaining = max(0.0, float(b.amount) - spent)
    percent = 0.0
    if float(b.amount) > 0:
        percent = spent / float(b.amount)

    return {
        "id": b.id,
        "name": b.name,
        "cycle_type": b.cycle_type,
        "start_date": b.start_date,
        "end_date": b.end_date,
        "amount": float(b.amount),
        "category_scope": category_scope,
        "is_active": bool(b.is_active),
        "period_start": period_start,
        "period_end": period_end,
        "spent": spent,
        "remaining": remaining,
        "percent": percent,
        "is_over": spent > float(b.amount),
        "created_at": b.created_at,
        "updated_at": b.updated_at,
    }


@router.get("")
def list_budgets(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    today = date.today()
    budgets = db.scalars(select(Budget).where(Budget.user_id == user.id)).all()
    return [_to_out(db, b, today) for b in budgets]


@router.post("", response_model=BudgetOut)
def create_budget(payload: BudgetCreate, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    b = Budget(
        user_id=user.id,
        name=payload.name,
        cycle_type=payload.cycle_type,
        start_date=payload.start_date,
        end_date=payload.end_date,
        amount=payload.amount,
        category_scope=json.dumps(payload.category_scope, ensure_ascii=False),
        is_active=payload.is_active,
        updated_at=datetime.utcnow(),
    )
    db.add(b)
    db.commit()
    db.refresh(b)
    return _to_out(db, b, date.today())


@router.put("/{budget_id}", response_model=BudgetOut)
def update_budget(
    budget_id: int, payload: BudgetUpdate, user: User = Depends(get_current_user), db: Session = Depends(get_db)
):
    b = db.get(Budget, budget_id)
    if b is None or b.user_id != user.id:
        raise HTTPException(status_code=404, detail="budget_not_found")

    data = payload.model_dump(exclude_unset=True)
    if "category_scope" in data and data["category_scope"] is not None:
        data["category_scope"] = json.dumps(data["category_scope"], ensure_ascii=False)

    for k, v in data.items():
        setattr(b, k, v)

    b.updated_at = datetime.utcnow()
    db.add(b)
    db.commit()
    db.refresh(b)
    return _to_out(db, b, date.today())


@router.delete("/{budget_id}")
def delete_budget(budget_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    b = db.get(Budget, budget_id)
    if b is None or b.user_id != user.id:
        raise HTTPException(status_code=404, detail="budget_not_found")
    db.delete(b)
    db.commit()
    return {"success": True}
