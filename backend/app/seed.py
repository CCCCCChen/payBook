from __future__ import annotations

from sqlalchemy.orm import Session

from .models import Category, User


SYSTEM_CATEGORIES: dict[str, list[dict]] = {
    "expense": [
        {"name": "餐饮", "icon": "🍜", "color": "#FF7D00"},
        {"name": "交通", "icon": "🚌", "color": "#165DFF"},
        {"name": "购物", "icon": "🛍️", "color": "#F53F3F"},
        {"name": "娱乐", "icon": "🎮", "color": "#722ED1"},
        {"name": "住房", "icon": "🏠", "color": "#00B42A"},
        {"name": "医疗", "icon": "🩺", "color": "#F53F3F"},
        {"name": "人情", "icon": "🎁", "color": "#FF7D00"},
        {"name": "其他", "icon": "🧾", "color": "#4E5969"},
    ],
    "income": [
        {"name": "工资", "icon": "💰", "color": "#00B42A"},
        {"name": "奖金", "icon": "🏆", "color": "#FF7D00"},
        {"name": "兼职", "icon": "🧑‍💻", "color": "#165DFF"},
        {"name": "投资", "icon": "📈", "color": "#00B42A"},
        {"name": "退款", "icon": "↩️", "color": "#4E5969"},
        {"name": "其他", "icon": "🧾", "color": "#4E5969"},
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
    for t, items in SYSTEM_CATEGORIES.items():
        for it in items:
            sort_order += 1
            db.add(
                Category(
                    user_id=user.id,
                    type=t,
                    name=it["name"],
                    icon=it.get("icon"),
                    color=it.get("color"),
                    sort_order=sort_order,
                    is_system=True,
                    is_deleted=False,
                )
            )

    db.commit()
