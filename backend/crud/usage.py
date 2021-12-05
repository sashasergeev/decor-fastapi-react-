from sqlalchemy.orm import Session

import models
import schemas


def get_usages(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Decorusage).offset(skip).limit(limit).all()


def get_usage(db: Session, usage_id: int):
    return db.query(models.Usage).filter(models.Usage.id == usage_id).first()


def create_usage(db: Session, usage: schemas.UsageCreate):
    usage = models.Usage(**usage.dict())
    db.add(usage)
    db.commit()
    db.refresh(usage)
    return usage


def delete_usage(db: Session, usage_id: int):
    db.query(models.Usage).filter(models.Usage.id == usage_id)
    db.commit()
    return {"Status": "Usage Deleted"}
