from __future__ import annotations

import datetime as dt
from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, Field


class BaseOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)


class TokenOut(BaseModel):
    access_token: str
    token_type: str = "bearer"


class MeOut(BaseOut):
    id: int
    openid: str | None
    username: str | None
    created_at: datetime


class RegisterIn(BaseModel):
    username: str
    password: str = Field(min_length=6, max_length=128)


class PasswordLoginIn(BaseModel):
    username: str
    password: str


class WechatLoginIn(BaseModel):
    code: str


class AccountCreate(BaseModel):
    name: str
    type: str
    subtype: str | None = None
    initial_balance: float = 0
    credit_limit: float | None = None
    bill_date: int | None = None
    due_date: int | None = None
    sort_order: int = 0


class AccountUpdate(BaseModel):
    name: str | None = None
    type: str | None = None
    subtype: str | None = None
    initial_balance: float | None = None
    credit_limit: float | None = None
    bill_date: int | None = None
    due_date: int | None = None
    sort_order: int | None = None
    is_deleted: bool | None = None


class AccountOut(BaseOut):
    id: int
    name: str
    type: str
    subtype: str | None
    initial_balance: float
    credit_limit: float | None
    bill_date: int | None
    due_date: int | None
    sort_order: int
    is_deleted: bool
    created_at: datetime
    updated_at: datetime


class CategoryCreate(BaseModel):
    name: str
    nature: str
    expense_tier: str | None = None
    icon: str | None = None
    color: str | None = None
    is_stable_income: bool = False
    sort_order: int = 0


class CategoryUpdate(BaseModel):
    name: str | None = None
    expense_tier: str | None = None
    icon: str | None = None
    color: str | None = None
    is_stable_income: bool | None = None
    sort_order: int | None = None
    is_deleted: bool | None = None


class CategoryOut(BaseOut):
    id: int
    name: str
    nature: str
    expense_tier: str | None
    icon: str | None
    color: str | None
    is_stable_income: bool
    sort_order: int
    is_system: bool
    is_deleted: bool
    created_at: datetime
    updated_at: datetime


class TransactionCreate(BaseModel):
    entry_type: str
    amount: float = Field(gt=0)
    category_id: int | None = None
    account_id: int
    to_account_id: int | None = None
    transaction_date: date
    note: str | None = None
    budget_id: int | None = None
    is_cash_basis: bool = True


class TransactionUpdate(BaseModel):
    entry_type: str | None = None
    amount: float | None = None
    category_id: int | None = None
    account_id: int | None = None
    to_account_id: int | None = None
    transaction_date: dt.date | None = None
    note: str | None = None
    budget_id: int | None = None
    is_cash_basis: bool | None = None


class TransactionOut(BaseOut):
    id: int
    entry_type: str
    amount: float
    category_id: int | None
    account_id: int
    to_account_id: int | None
    transaction_date: date
    note: str | None
    budget_id: int | None
    liability_id: int | None
    is_cash_basis: bool
    created_at: datetime
    updated_at: datetime


class TransferCreate(BaseModel):
    from_account_id: int
    to_account_id: int
    amount: float = Field(gt=0)
    transaction_date: date
    note: str | None = None


class BudgetCreate(BaseModel):
    name: str
    cycle_type: str
    start_date: date | None = None
    end_date: date | None = None
    amount: float = Field(gt=0)
    category_ids: list[int] = Field(default_factory=list)
    is_active: bool = True


class BudgetUpdate(BaseModel):
    name: str | None = None
    cycle_type: str | None = None
    start_date: date | None = None
    end_date: date | None = None
    amount: float | None = None
    category_ids: list[int] | None = None
    is_active: bool | None = None


class BudgetOut(BaseOut):
    id: int
    name: str
    cycle_type: str
    start_date: date | None
    end_date: date | None
    amount: float
    category_ids: list[int]
    is_active: bool
    period_start: date | None = None
    period_end: date | None = None
    spent: float = 0
    remaining: float = 0
    percent: float = 0
    is_over: bool = False
    created_at: datetime
    updated_at: datetime

class LiabilityRecordOut(BaseOut):
    id: int
    account_id: int
    transaction_id: int
    amount: float
    due_date: date
    bill_date: date
    status: str
    paid_transaction_id: int | None
    created_at: datetime
