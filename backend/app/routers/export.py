from __future__ import annotations

import csv
import io
from datetime import date

from fastapi import APIRouter, Depends, Query
from fastapi.responses import Response
from sqlalchemy import and_, desc, select
from sqlalchemy.orm import Session

from ..auth import get_current_user
from ..db import get_db
from ..models import Transaction, User


router = APIRouter(prefix="/export", tags=["export"])


@router.get("/csv")
def export_csv(
    start: date = Query(...),
    end: date = Query(...),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    txs = db.scalars(
        select(Transaction)
        .where(and_(Transaction.user_id == user.id, Transaction.date >= start, Transaction.date <= end))
        .order_by(desc(Transaction.date), desc(Transaction.id))
    ).all()

    buf = io.StringIO()
    writer = csv.writer(buf)
    writer.writerow(["id", "type", "amount", "category_id", "account_id", "to_account_id", "date", "note", "budget_id"])
    for t in txs:
        writer.writerow(
            [
                t.id,
                t.type,
                float(t.amount),
                t.category_id or "",
                t.account_id,
                t.to_account_id or "",
                t.date.isoformat(),
                (t.note or "").replace("\n", " ").strip(),
                t.budget_id or "",
            ]
        )

    filename = f"paybook_{start.isoformat()}_{end.isoformat()}.csv"
    data = buf.getvalue().encode("utf-8-sig")
    return Response(
        content=data,
        media_type="text/csv; charset=utf-8",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )
