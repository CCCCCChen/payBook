from __future__ import annotations

import os
from datetime import date

from apscheduler.schedulers.background import BackgroundScheduler
from fastapi import FastAPI

from .db import SessionLocal, engine
from .models import Base, User
from .routers import accounts, auth, budgets, categories, export, recurring, statistics, transactions
from .services.recurring import generate_pending_for_user


def _ensure_data_dir() -> None:
    os.makedirs("data", exist_ok=True)


def _create_tables() -> None:
    Base.metadata.create_all(bind=engine)


def _create_scheduler() -> BackgroundScheduler:
    scheduler = BackgroundScheduler(timezone="Asia/Shanghai")

    def job() -> None:
        with SessionLocal() as db:
            users = db.query(User).all()
            today = date.today()
            for u in users:
                generate_pending_for_user(db, u.id, today)

    scheduler.add_job(job, "cron", hour=0, minute=5)
    scheduler.start()
    return scheduler


app = FastAPI(title="payBook API", openapi_url="/api/v1/openapi.json")


@app.on_event("startup")
def on_startup() -> None:
    _ensure_data_dir()
    _create_tables()
    _create_scheduler()


app.include_router(auth.router, prefix="/api/v1")
app.include_router(accounts.router, prefix="/api/v1")
app.include_router(categories.router, prefix="/api/v1")
app.include_router(transactions.router, prefix="/api/v1")
app.include_router(budgets.router, prefix="/api/v1")
app.include_router(recurring.router, prefix="/api/v1")
app.include_router(export.router, prefix="/api/v1")
app.include_router(statistics.router, prefix="/api/v1")
