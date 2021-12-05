from sqlalchemy.orm import Session

import models
import schemas


# Categories
def get_categories(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Category).offset(skip).limit(limit).all()


def get_category(db: Session, cat_id: int):
    return db.query(models.Category).filter(models.Category.id == cat_id).first()


def create_category(db: Session, category: schemas.CategoryCreate):
    category = models.Category(name=category.name)
    db.add(category)
    db.commit()
    db.refresh(category)
    return category


def delete_category(db: Session, cat_id: int):
    db.query(models.Category).filter(models.Category.id == cat_id).delete()
    db.commit()
    return {"Status": "Category Deleted"}
