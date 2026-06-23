from __future__ import annotations

from datetime import date, datetime

from sqlalchemy import Boolean, Date, DateTime, ForeignKey, Integer, Numeric, String, Text, UniqueConstraint
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    openid: Mapped[str | None] = mapped_column(String(100), unique=True, index=True)
    username: Mapped[str | None] = mapped_column(String(100), unique=True, index=True)
    password_hash: Mapped[str | None] = mapped_column(String(255))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    accounts: Mapped[list[Account]] = relationship(back_populates="user", cascade="all, delete-orphan")
    categories: Mapped[list[Category]] = relationship(back_populates="user", cascade="all, delete-orphan")
    transactions: Mapped[list[Transaction]] = relationship(back_populates="user", cascade="all, delete-orphan")
    budgets: Mapped[list[Budget]] = relationship(back_populates="user", cascade="all, delete-orphan")
    liability_records: Mapped[list[LiabilityRecord]] = relationship(back_populates="user", cascade="all, delete-orphan")
    amortization_templates: Mapped[list[AmortizationTemplate]] = relationship(
        back_populates="user", cascade="all, delete-orphan"
    )
    accruals: Mapped[list[Accrual]] = relationship(back_populates="user", cascade="all, delete-orphan")
    user_settings: Mapped[list[UserSetting]] = relationship(back_populates="user", cascade="all, delete-orphan")
    monthly_reports: Mapped[list[MonthlyReport]] = relationship(back_populates="user", cascade="all, delete-orphan")


class Account(Base):
    __tablename__ = "accounts"
    __table_args__ = (UniqueConstraint("user_id", "name", name="uq_accounts_user_name"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    name: Mapped[str] = mapped_column(String(50))
    type: Mapped[str] = mapped_column(String(20), nullable=False)
    subtype: Mapped[str | None] = mapped_column(String(20))
    initial_balance: Mapped[float] = mapped_column(Numeric(12, 2), default=0, nullable=False)
    credit_limit: Mapped[float | None] = mapped_column(Numeric(12, 2))
    bill_date: Mapped[int | None] = mapped_column(Integer)
    due_date: Mapped[int | None] = mapped_column(Integer)
    sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    is_deleted: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    user: Mapped[User] = relationship(back_populates="accounts")


class Category(Base):
    __tablename__ = "categories"
    __table_args__ = (UniqueConstraint("user_id", "nature", "name", name="uq_categories_user_nature_name"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    name: Mapped[str] = mapped_column(String(50))
    nature: Mapped[str] = mapped_column(String(10))
    expense_tier: Mapped[str | None] = mapped_column(String(20))
    icon: Mapped[str | None] = mapped_column(String(50))
    color: Mapped[str | None] = mapped_column(String(10))
    is_stable_income: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    is_system: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    is_deleted: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    user: Mapped[User] = relationship(back_populates="categories")


class Transaction(Base):
    __tablename__ = "transactions"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    entry_type: Mapped[str] = mapped_column(String(20))
    amount: Mapped[float] = mapped_column(Numeric(12, 2), nullable=False)
    category_id: Mapped[int | None] = mapped_column(ForeignKey("categories.id"))
    account_id: Mapped[int] = mapped_column(ForeignKey("accounts.id"))
    to_account_id: Mapped[int | None] = mapped_column(ForeignKey("accounts.id"))
    transaction_date: Mapped[date] = mapped_column(Date, index=True)
    note: Mapped[str | None] = mapped_column(Text)
    budget_id: Mapped[int | None] = mapped_column(ForeignKey("budgets.id"))
    liability_id: Mapped[int | None] = mapped_column(ForeignKey("liability_records.id"))
    is_cash_basis: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    user: Mapped[User] = relationship(back_populates="transactions")


class Budget(Base):
    __tablename__ = "budgets"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    name: Mapped[str] = mapped_column(String(100))
    cycle_type: Mapped[str] = mapped_column(String(10))
    start_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    end_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    amount: Mapped[float] = mapped_column(Numeric(12, 2), nullable=False)
    category_ids: Mapped[str] = mapped_column(Text, default="[]", nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    user: Mapped[User] = relationship(back_populates="budgets")


class LiabilityRecord(Base):
    __tablename__ = "liability_records"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    account_id: Mapped[int] = mapped_column(ForeignKey("accounts.id"))
    transaction_id: Mapped[int] = mapped_column(ForeignKey("transactions.id"))
    amount: Mapped[float] = mapped_column(Numeric(12, 2), nullable=False)
    due_date: Mapped[date] = mapped_column(Date)
    bill_date: Mapped[date] = mapped_column(Date)
    status: Mapped[str] = mapped_column(String(10), default="pending", nullable=False)
    paid_transaction_id: Mapped[int | None] = mapped_column(ForeignKey("transactions.id"))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    user: Mapped[User] = relationship(back_populates="liability_records")


class AmortizationTemplate(Base):
    __tablename__ = "amortization_templates"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    name: Mapped[str] = mapped_column(String(100))
    category_id: Mapped[int] = mapped_column(ForeignKey("categories.id"))
    total_amount: Mapped[float] = mapped_column(Numeric(12, 2), nullable=False)
    paid_date: Mapped[date] = mapped_column(Date)
    cycle_length: Mapped[int] = mapped_column(Integer, nullable=False)
    cycle_unit: Mapped[str] = mapped_column(String(10), nullable=False)
    monthly_amount: Mapped[float] = mapped_column(Numeric(12, 2), nullable=False)
    start_date: Mapped[date] = mapped_column(Date)
    remaining_amount: Mapped[float] = mapped_column(Numeric(12, 2), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    terminated_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    note: Mapped[str | None] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    user: Mapped[User] = relationship(back_populates="amortization_templates")


class Accrual(Base):
    __tablename__ = "accruals"
    __table_args__ = (UniqueConstraint("user_id", "template_id", "year", "month", name="uq_accrual_user_template_ym"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    template_id: Mapped[int] = mapped_column(ForeignKey("amortization_templates.id"))
    year: Mapped[int] = mapped_column(Integer, nullable=False)
    month: Mapped[int] = mapped_column(Integer, nullable=False)
    amount: Mapped[float] = mapped_column(Numeric(12, 2), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    user: Mapped[User] = relationship(back_populates="accruals")


class UserSetting(Base):
    __tablename__ = "user_settings"
    __table_args__ = (UniqueConstraint("user_id", name="uq_user_settings_user"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    saving_goal_type: Mapped[str | None] = mapped_column(String(10))
    saving_goal_value: Mapped[float | None] = mapped_column(Numeric(12, 2))
    stable_income_category_ids: Mapped[str] = mapped_column(Text, default="[]", nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    user: Mapped[User] = relationship(back_populates="user_settings")


class MonthlyReport(Base):
    __tablename__ = "monthly_reports"
    __table_args__ = (UniqueConstraint("user_id", "year", "month", name="uq_monthly_reports_user_ym"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    year: Mapped[int] = mapped_column(Integer, nullable=False)
    month: Mapped[int] = mapped_column(Integer, nullable=False)
    total_income: Mapped[float] = mapped_column(Numeric(12, 2), default=0, nullable=False)
    total_expense_consumption: Mapped[float] = mapped_column(Numeric(12, 2), default=0, nullable=False)
    total_expense_cash: Mapped[float] = mapped_column(Numeric(12, 2), default=0, nullable=False)
    savings_rate: Mapped[float] = mapped_column(Numeric(5, 2), default=0, nullable=False)
    essential_total: Mapped[float] = mapped_column(Numeric(12, 2), default=0, nullable=False)
    flexible_total: Mapped[float] = mapped_column(Numeric(12, 2), default=0, nullable=False)
    discretionary_total: Mapped[float] = mapped_column(Numeric(12, 2), default=0, nullable=False)
    wish_pool_balance: Mapped[float] = mapped_column(Numeric(12, 2), default=0, nullable=False)
    coverage_months: Mapped[float] = mapped_column(Numeric(5, 2), default=0, nullable=False)
    top_over_budget: Mapped[str] = mapped_column(Text, default="[]", nullable=False)
    top_expense_categories: Mapped[str] = mapped_column(Text, default="[]", nullable=False)
    generated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    user: Mapped[User] = relationship(back_populates="monthly_reports")
