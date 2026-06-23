from __future__ import annotations

from datetime import datetime

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..auth import get_current_user
from ..db import get_db
from ..models import Category, Transaction, User
from ..schemas import CategoryCreate, CategoryOut, CategoryUpdate


router = APIRouter(prefix="/categories", tags=["categories"])


@router.get("", response_model=list[CategoryOut])
def list_categories(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.scalars(
        select(Category)
        .where(Category.user_id == user.id, Category.is_deleted.is_(False))
        .order_by(Category.sort_order.asc(), Category.id.asc())
    ).all()


@router.post("", response_model=CategoryOut)
def create_category(
    payload: CategoryCreate,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    cat = Category(
        user_id=user.id,
        name=payload.name,
        nature=payload.nature,
        expense_tier=payload.expense_tier,
        icon=payload.icon,
        color=payload.color,
        is_stable_income=payload.is_stable_income,
        sort_order=payload.sort_order,
        is_system=False,
        is_deleted=False,
        updated_at=datetime.utcnow(),
    )
    db.add(cat)
    db.commit()
    db.refresh(cat)
    return cat


@router.put("/{category_id}", response_model=CategoryOut)
def update_category(
    category_id: int,
    payload: CategoryUpdate,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    cat = db.get(Category, category_id)
    if cat is None or cat.user_id != user.id:
        raise HTTPException(status_code=404, detail="category_not_found")
    if cat.is_system:
        allowed = {"icon", "color", "sort_order", "is_deleted"}
        for k in payload.model_dump(exclude_unset=True).keys():
            if k not in allowed:
                raise HTTPException(status_code=400, detail="system_category_limited")

    for k, v in payload.model_dump(exclude_unset=True).items():
        setattr(cat, k, v)
    cat.updated_at = datetime.utcnow()
    db.add(cat)
    db.commit()
    db.refresh(cat)
    return cat


@router.delete("/{category_id}")
def delete_category(
    category_id: int,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    cat = db.get(Category, category_id)
    if cat is None or cat.user_id != user.id:
        raise HTTPException(status_code=404, detail="category_not_found")
    if cat.is_system:
        raise HTTPException(status_code=400, detail="system_category_not_deletable")

    has_refs = (
        db.scalars(
            select(Transaction.id).where(Transaction.user_id == user.id, Transaction.category_id == category_id).limit(1)
        ).first()
        is not None
    )
    if has_refs:
        raise HTTPException(status_code=400, detail="category_in_use")

    cat.is_deleted = True
    cat.updated_at = datetime.utcnow()
    db.add(cat)
    db.commit()
    return {"success": True}
