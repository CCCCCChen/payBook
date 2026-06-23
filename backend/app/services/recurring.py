from __future__ import annotations

from datetime import date, timedelta

from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from ..models import PendingTransaction, RecurringTemplate


def _last_day_of_month(d: date) -> int:
    next_month = (d.replace(day=28) + timedelta(days=4)).replace(day=1)
    return (next_month - timedelta(days=1)).day


def _add_months(d: date, months: int) -> date:
    year = d.year + (d.month - 1 + months) // 12
    month = (d.month - 1 + months) % 12 + 1
    day = min(d.day, _last_day_of_month(date(year, month, 1)))
    return date(year, month, day)


def compute_next_due_date(template: RecurringTemplate) -> date:
    if template.cycle_type == "weekly":
        return template.next_due_date + timedelta(days=7)

    if template.cycle_type == "monthly":
        base = _add_months(template.next_due_date, 1)
        day = min(int(template.cycle_day), _last_day_of_month(base))
        return base.replace(day=day)

    return template.next_due_date + timedelta(days=30)


def generate_pending_for_user(db: Session, user_id: int, today: date) -> int:
    templates = db.scalars(
        select(RecurringTemplate).where(
            RecurringTemplate.user_id == user_id,
            RecurringTemplate.is_active.is_(True),
            RecurringTemplate.next_due_date <= today,
        )
    ).all()

    created = 0
    for tpl in templates:
        pending = PendingTransaction(
            user_id=user_id,
            template_id=tpl.id,
            type=tpl.type,
            amount=tpl.amount,
            category_id=tpl.category_id,
            account_id=tpl.account_id,
            date=tpl.next_due_date,
            due_date=tpl.next_due_date,
            note=tpl.note,
            status="pending",
        )
        db.add(pending)
        try:
            db.flush()
            created += 1
        except IntegrityError:
            db.rollback()

        tpl.next_due_date = compute_next_due_date(tpl)
        db.add(tpl)

    if created > 0:
        db.commit()
    else:
        db.flush()
        db.commit()

    return created
