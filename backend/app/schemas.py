from __future__ import annotations

import datetime as dt
from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, Field


class BaseOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)


class TokenOut(BaseModel):
    access_token: str
    token_type: str = "bearer"


class AccountCreate(BaseModel):
    name: str
    type: str = "other"
    initial_balance: float = 0
    sort_order: int = 0


class AccountUpdate(BaseModel):
    name: str | None = None
    type: str | None = None
    initial_balance: float | None = None
    sort_order: int | None = None
    is_deleted: bool | None = None


class AccountOut(BaseOut):
    id: int
    name: str
    type: str
    initial_balance: float
    sort_order: int
    is_deleted: bool
    created_at: datetime
    updated_at: datetime


class CategoryCreate(BaseModel):
    name: str
    type: str
    icon: str | None = None
    color: str | None = None
    sort_order: int = 0


class CategoryUpdate(BaseModel):
    name: str | None = None
    icon: str | None = None
    color: str | None = None
    sort_order: int | None = None
    is_deleted: bool | None = None


class CategoryOut(BaseOut):
    id: int
    name: str
    type: str
    icon: str | None
    color: str | None
    sort_order: int
    is_system: bool
    is_deleted: bool
    created_at: datetime
    updated_at: datetime


class TransactionCreate(BaseModel):
    type: str
    amount: float = Field(gt=0)
    category_id: int | None = None
    account_id: int
    to_account_id: int | None = None
    date: date
    note: str | None = None
    budget_id: int | None = None


class TransactionUpdate(BaseModel):
    type: str | None = None
    amount: float | None = None
    category_id: int | None = None
    account_id: int | None = None
    to_account_id: int | None = None
    date: dt.date | None = None
    note: str | None = None
    budget_id: int | None = None


class TransactionOut(BaseOut):
    id: int
    type: str
    amount: float
    category_id: int | None
    account_id: int
    to_account_id: int | None
    date: date
    note: str | None
    budget_id: int | None
    created_at: datetime
    updated_at: datetime


class TransferCreate(BaseModel):
    from_account_id: int
    to_account_id: int
    amount: float = Field(gt=0)
    date: date
    note: str | None = None


class BudgetCreate(BaseModel):
    name: str
    cycle_type: str
    start_date: date | None = None
    end_date: date | None = None
    amount: float = Field(gt=0)
    category_scope: list[int] = Field(default_factory=list)
    is_active: bool = True


class BudgetUpdate(BaseModel):
    name: str | None = None
    cycle_type: str | None = None
    start_date: date | None = None
    end_date: date | None = None
    amount: float | None = None
    category_scope: list[int] | None = None
    is_active: bool | None = None


class BudgetOut(BaseOut):
    id: int
    name: str
    cycle_type: str
    start_date: date | None
    end_date: date | None
    amount: float
    category_scope: list[int]
    is_active: bool
    period_start: date | None = None
    period_end: date | None = None
    spent: float = 0
    remaining: float = 0
    percent: float = 0
    is_over: bool = False
    created_at: datetime
    updated_at: datetime


class RecurringTemplateCreate(BaseModel):
    name: str
    type: str
    amount: float = Field(gt=0)
    category_id: int | None = None
    account_id: int
    cycle_type: str
    cycle_day: int
    next_due_date: date
    is_active: bool = True
    note: str | None = None


class RecurringTemplateUpdate(BaseModel):
    name: str | None = None
    type: str | None = None
    amount: float | None = None
    category_id: int | None = None
    account_id: int | None = None
    cycle_type: str | None = None
    cycle_day: int | None = None
    next_due_date: date | None = None
    is_active: bool | None = None
    note: str | None = None


class RecurringTemplateOut(BaseOut):
    id: int
    name: str
    type: str
    amount: float
    category_id: int | None
    account_id: int
    cycle_type: str
    cycle_day: int
    next_due_date: date
    is_active: bool
    note: str | None
    created_at: datetime
    updated_at: datetime


class PendingTransactionOut(BaseOut):
    id: int
    template_id: int | None
    type: str
    amount: float
    category_id: int | None
    account_id: int
    date: date
    due_date: date
    note: str | None
    status: str
    created_at: datetime
    updated_at: datetime


class PendingConfirmIn(BaseModel):
    amount: float | None = None
    category_id: int | None = None
    account_id: int | None = None
    date: dt.date | None = None
    note: str | None = None
