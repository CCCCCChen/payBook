from __future__ import annotations

from sqlalchemy.orm import Session

from .models import Category, User


SYSTEM_CATEGORIES: dict[str, list[dict]] = {
    "expense": [
        {"name": "住房", "icon": "🏠", "color": "#00B42A", "expense_tier": "essential"},
        {"name": "医疗", "icon": "🩺", "color": "#F53F3F", "expense_tier": "essential"},
        {"name": "餐饮", "icon": "🍜", "color": "#FF7D00", "expense_tier": "flexible"},
        {"name": "交通", "icon": "🚌", "color": "#165DFF", "expense_tier": "flexible"},
        {"name": "购物", "icon": "🛍️", "color": "#F53F3F", "expense_tier": "discretionary"},
        {"name": "娱乐", "icon": "🎮", "color": "#722ED1", "expense_tier": "discretionary"},
        {"name": "人情", "icon": "🎁", "color": "#FF7D00", "expense_tier": "discretionary"},
        {"name": "其他", "icon": "🧾", "color": "#4E5969", "expense_tier": "flexible"},
    ],
    "income": [
        {"name": "工资", "icon": "💰", "color": "#00B42A", "is_stable_income": True},
        {"name": "奖金", "icon": "🏆", "color": "#FF7D00", "is_stable_income": False},
        {"name": "兼职", "icon": "🧑‍💻", "color": "#165DFF", "is_stable_income": False},
        {"name": "投资", "icon": "📈", "color": "#00B42A", "is_stable_income": False},
        {"name": "退款", "icon": "↩️", "color": "#4E5969", "is_stable_income": False},
        {"name": "其他", "icon": "🧾", "color": "#4E5969", "is_stable_income": False},
    ],
}


def ensure_system_categories(db: Session, user: User) -> None:
    existing = (
        db.query(Category)
        .filter(Category.user_id == user.id, Category.is_system.is_(True), Category.is_deleted.is_(False))
        .count()
    )
    if existing > 0:
        return

    sort_order = 0
    for nature, items in SYSTEM_CATEGORIES.items():
        for it in items:
            sort_order += 1
            db.add(
                Category(
                    user_id=user.id,
                    nature=nature,
                    name=it["name"],
                    expense_tier=it.get("expense_tier"),
                    icon=it.get("icon"),
                    color=it.get("color"),
                    is_stable_income=bool(it.get("is_stable_income", False)),
                    sort_order=sort_order,
                    is_system=True,
                    is_deleted=False,
                )
            )

    db.commit()
