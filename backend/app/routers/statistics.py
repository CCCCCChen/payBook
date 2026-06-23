from __future__ import annotations

from datetime import date, timedelta

from fastapi import APIRouter, Depends, Query
from sqlalchemy import case, desc, func, select
from sqlalchemy.orm import Session

from ..auth import get_current_user
from ..db import get_db
from ..models import Account, AmortizationTemplate, Category, Transaction, User


router = APIRouter(prefix="/statistics", tags=["statistics"])


def _month_range(month: str) -> tuple[date, date]:
    y, m = month.split("-")
    start = date(int(y), int(m), 1)
    if start.month == 12:
        end = date(start.year + 1, 1, 1) - timedelta(days=1)
    else:
        end = date(start.year, start.month + 1, 1) - timedelta(days=1)
    return start, end


@router.get("/summary")
def summary(
    month: str = Query(...),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    start, end = _month_range(month)
    income_sum = db.scalar(
        select(func.coalesce(func.sum(Transaction.amount), 0)).where(
            Transaction.user_id == user.id,
            Transaction.entry_type == "income",
            Transaction.transaction_date >= start,
            Transaction.transaction_date <= end,
        )
    )
    expense_sum = db.scalar(
        select(func.coalesce(func.sum(Transaction.amount), 0)).where(
            Transaction.user_id == user.id,
            Transaction.entry_type == "expense",
            Transaction.transaction_date >= start,
            Transaction.transaction_date <= end,
        )
    )
    income = float(income_sum or 0)
    expense = float(expense_sum or 0)

    fixed_monthly_expense = float(
        db.scalar(
            select(func.coalesce(func.sum(AmortizationTemplate.monthly_amount), 0)).where(
                AmortizationTemplate.user_id == user.id,
                AmortizationTemplate.is_active.is_(True),
            )
        )
        or 0
    )

    return {
        "month": month,
        "income": income,
        "expense": expense,
        "balance": income - expense,
        "fixed_monthly_expense": fixed_monthly_expense,
    }


@router.get("/category-pie")
def category_pie(
    start: date = Query(...),
    end: date = Query(...),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    rows = db.execute(
        select(
            Transaction.category_id,
            func.coalesce(func.sum(Transaction.amount), 0).label("amount"),
        )
        .where(
            Transaction.user_id == user.id,
            Transaction.entry_type == "expense",
            Transaction.transaction_date >= start,
            Transaction.transaction_date <= end,
            Transaction.category_id.is_not(None),
        )
        .group_by(Transaction.category_id)
        .order_by(desc("amount"))
    ).all()

    cat_ids = [int(r.category_id) for r in rows if r.category_id is not None]
    cat_map: dict[int, Category] = {}
    if cat_ids:
        cats = db.scalars(select(Category).where(Category.user_id == user.id, Category.id.in_(cat_ids))).all()
        cat_map = {c.id: c for c in cats}

    result = []
    for r in rows:
        cid = int(r.category_id)
        cat = cat_map.get(cid)
        result.append(
            {
                "category_id": cid,
                "amount": float(r.amount or 0),
                "name": cat.name if cat else f"分类#{cid}",
                "icon": cat.icon if cat else None,
                "color": cat.color if cat else None,
            }
        )
    return {"start": start, "end": end, "items": result}


@router.get("/trend")
def trend(
    months: int = Query(default=6, ge=1, le=36),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    today = date.today().replace(day=1)
    month_list: list[tuple[int, int]] = []
    cur = today
    for _ in range(months):
        month_list.append((cur.year, cur.month))
        if cur.month == 1:
            cur = date(cur.year - 1, 12, 1)
        else:
            cur = date(cur.year, cur.month - 1, 1)

    start = date(month_list[-1][0], month_list[-1][1], 1)
    end = today

    month_expr = func.strftime("%Y-%m", Transaction.transaction_date)
    rows = db.execute(
        select(
            month_expr.label("month"),
            func.coalesce(
                func.sum(case((Transaction.entry_type == "income", Transaction.amount), else_=0)),
                0,
            ).label("income"),
            func.coalesce(
                func.sum(case((Transaction.entry_type == "expense", Transaction.amount), else_=0)),
                0,
            ).label("expense"),
        )
        .where(
            Transaction.user_id == user.id,
            Transaction.transaction_date >= start,
            Transaction.transaction_date <= end,
            Transaction.entry_type.in_(["income", "expense"]),
        )
        .group_by("month")
    ).all()

    map_rows = {str(r.month): r for r in rows}
    items = []
    for y, m in month_list:
        key = f"{y:04d}-{m:02d}"
        r = map_rows.get(key)
        items.append(
            {
                "month": key,
                "income": float(r.income or 0) if r else 0.0,
                "expense": float(r.expense or 0) if r else 0.0,
            }
        )
    return {"months": months, "items": items[::-1]}


@router.get("/account-balances")
def account_balances(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    accounts = db.scalars(select(Account).where(Account.user_id == user.id, Account.is_deleted.is_(False))).all()
    ids = [a.id for a in accounts]
    if not ids:
        return {"items": []}

    signed = case(
        (Transaction.entry_type.in_(["income", "transfer_in"]), Transaction.amount),
        (Transaction.entry_type.in_(["expense", "transfer_out"]), -Transaction.amount),
        else_=0,
    )
    rows = db.execute(
        select(Transaction.account_id, func.coalesce(func.sum(signed), 0).label("delta"))
        .where(Transaction.user_id == user.id, Transaction.account_id.in_(ids))
        .group_by(Transaction.account_id)
    ).all()
    delta_map = {int(r.account_id): float(r.delta or 0) for r in rows}

    items = []
    for a in accounts:
        balance = float(a.initial_balance) + delta_map.get(a.id, 0.0)
        items.append({"account_id": a.id, "name": a.name, "type": a.type, "balance": balance})
    items.sort(key=lambda x: x["balance"], reverse=True)
    return {"items": items}

