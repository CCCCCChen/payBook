from __future__ import annotations

import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .db import engine
from .models import Base
from .routers import accounts, auth, budgets, categories, export, statistics, transactions


def _ensure_data_dir() -> None:
    os.makedirs("data", exist_ok=True)


def _create_tables() -> None:
    Base.metadata.create_all(bind=engine)


app = FastAPI(title="payBook API", openapi_url="/api/v2/openapi.json")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup() -> None:
    _ensure_data_dir()
    _create_tables()


app.include_router(auth.router, prefix="/api/v2")
app.include_router(accounts.router, prefix="/api/v2")
app.include_router(categories.router, prefix="/api/v2")
app.include_router(transactions.router, prefix="/api/v2")
app.include_router(budgets.router, prefix="/api/v2")
app.include_router(export.router, prefix="/api/v2")
app.include_router(statistics.router, prefix="/api/v2")
