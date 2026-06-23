from __future__ import annotations

from datetime import date, datetime

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from ..auth import get_current_user
from ..db import get_db
from ..models import PendingTransaction, RecurringTemplate, Transaction, User
from ..schemas import (
    PendingConfirmIn,
    PendingTransactionOut,
    RecurringTemplateCreate,
    RecurringTemplateOut,
    RecurringTemplateUpdate,
)
from ..services.recurring import generate_pending_for_user


router = APIRouter(tags=["recurring"])


@router.get("/recurring-templates", response_model=list[RecurringTemplateOut])
def list_templates(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.scalars(select(RecurringTemplate).where(RecurringTemplate.user_id == user.id)).all()


@router.post("/recurring-templates", response_model=RecurringTemplateOut)
def create_template(
    payload: RecurringTemplateCreate, user: User = Depends(get_current_user), db: Session = Depends(get_db)
):
    tpl = RecurringTemplate(
        user_id=user.id,
        name=payload.name,
        type=payload.type,
        amount=payload.amount,
        category_id=payload.category_id,
        account_id=payload.account_id,
        cycle_type=payload.cycle_type,
        cycle_day=payload.cycle_day,
        next_due_date=payload.next_due_date,
        is_active=payload.is_active,
        note=payload.note,
        updated_at=datetime.utcnow(),
    )
    db.add(tpl)
    db.commit()
    db.refresh(tpl)
    return tpl


@router.put("/recurring-templates/{template_id}", response_model=RecurringTemplateOut)
def update_template(
    template_id: int,
    payload: RecurringTemplateUpdate,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    tpl = db.get(RecurringTemplate, template_id)
    if tpl is None or tpl.user_id != user.id:
        raise HTTPException(status_code=404, detail="template_not_found")
    for k, v in payload.model_dump(exclude_unset=True).items():
        setattr(tpl, k, v)
    tpl.updated_at = datetime.utcnow()
    db.add(tpl)
    db.commit()
    db.refresh(tpl)
    return tpl


@router.delete("/recurring-templates/{template_id}")
def delete_template(template_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    tpl = db.get(RecurringTemplate, template_id)
    if tpl is None or tpl.user_id != user.id:
        raise HTTPException(status_code=404, detail="template_not_found")
    db.delete(tpl)
    db.commit()
    return {"success": True}


@router.get("/pending-transactions", response_model=list[PendingTransactionOut])
def list_pending(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    generate_pending_for_user(db, user.id, date.today())
    return db.scalars(
        select(PendingTransaction)
        .where(PendingTransaction.user_id == user.id)
        .order_by(desc(PendingTransaction.date), desc(PendingTransaction.id))
    ).all()


@router.post("/pending-transactions/{pending_id}/confirm")
def confirm_pending(
    pending_id: int,
    payload: PendingConfirmIn,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    p = db.get(PendingTransaction, pending_id)
    if p is None or p.user_id != user.id:
        raise HTTPException(status_code=404, detail="pending_not_found")
    if p.status != "pending":
        raise HTTPException(status_code=400, detail="pending_not_pending")

    data = payload.model_dump(exclude_unset=True)
    for k, v in data.items():
        setattr(p, k, v)

    tx = Transaction(
        user_id=user.id,
        type=p.type,
        amount=p.amount,
        category_id=p.category_id,
        account_id=p.account_id,
        to_account_id=None,
        date=p.date,
        note=p.note,
        budget_id=None,
        updated_at=datetime.utcnow(),
    )
    p.status = "confirmed"
    p.updated_at = datetime.utcnow()
    db.add_all([tx, p])
    db.commit()
    return {"success": True, "transaction_id": tx.id}


@router.post("/pending-transactions/{pending_id}/skip")
def skip_pending(pending_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    p = db.get(PendingTransaction, pending_id)
    if p is None or p.user_id != user.id:
        raise HTTPException(status_code=404, detail="pending_not_found")
    if p.status != "pending":
        raise HTTPException(status_code=400, detail="pending_not_pending")
    p.status = "skipped"
    p.updated_at = datetime.utcnow()
    db.add(p)
    db.commit()
    return {"success": True}
