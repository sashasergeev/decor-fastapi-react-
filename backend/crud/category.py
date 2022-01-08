from typing import Optional
from sqlalchemy.orm import Session

import models
import schemas


# Categories
def get_categories(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Category).offset(skip).limit(limit).all()


def get_category(db: Session, cat_id: int):
    return db.query(models.Category).filter(models.Category.id == cat_id).first()


def create_category(db: Session, category: schemas.CategoryCreate):
    create_cat = models.Category(name=category.name)
    db.add(create_cat)
    db.commit()
    db.refresh(create_cat)
    
    for use_id in category.usage_ids:
        category_usage = models.category_to_usage.insert().values(category_id=create_cat.id, usage_id=use_id)
        db.execute(category_usage)
        db.commit()

    return db.query(models.Category).filter(models.Category.id == create_cat.id).first()


def category_by_usage(db: Session, applies: str, usage: str):
    usages = (
                db.query(models.Usage).filter(models.Usage.name == usage)
                    .filter(models.Usage.applied == applies).first().category
            )
    return usages


def update_category(
    db: Session,
    id: int,
    name: Optional[str] = None,
    description: Optional[str] = None,
    image: Optional[str] = None
    ):
    category = db.query(models.Category).filter(models.Category.id == id).one_or_none()

    if category is None:
        return {"detail": "Incorrect category credentials."}

    if name is not None:
        category.name = name
    if description is not None:
        category.description = description
    if image is not None:
        category.image = image
    db.commit()
    db.refresh(category)
    return category


def add_usage(db: Session, body: schemas.CategoryUsage):
    category_usage = models.category_to_usage.insert().values(category_id=body.category_id, usage_id=body.usage_id)
    db.execute(category_usage)
    db.commit()
    return db.query(models.Category).filter(models.Category.id == body.category_id).first()


def remove_usage(db: Session, body: schemas.CategoryUsage):
    category_usage = models.category_to_usage.delete().where(
                                    models.category_to_usage.c.category_id==body.category_id,
                                    models.category_to_usage.c.usage_id==body.usage_id)
    db.execute(category_usage) 
    db.commit()
    return db.query(models.Category).filter(models.Category.id == body.category_id).first()


def delete_category(db: Session, cat_id: int):
    db.query(models.Category).filter(models.Category.id == cat_id).delete()
    db.commit()
    return {"Status": "Category Deleted"}
