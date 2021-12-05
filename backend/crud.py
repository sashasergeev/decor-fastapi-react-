from sqlalchemy.orm import Session

import models, schemas

def create_category(db: Session, category: schemas.CategoryCreate):
    category = models.Category(name=category.name)
    db.add(category)
    db.commit()
    db.refresh(category)
    return category

def get_categories(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Category).offset(skip).limit(limit).all()

def get_category(db: Session, cat_name: str):
    return db.query(models.Category).filter(models.Category.name == cat_name).first()