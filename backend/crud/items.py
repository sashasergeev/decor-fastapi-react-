from sqlalchemy.orm import Session

import models
import schemas


# Items
def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.DecorItem).offset(skip).limit(limit).all()


def get_item(db: Session, item_id: int):
    return db.query(models.DecorItem).filter(models.DecorItem.id == item_id).first()


def create_item(db: Session, item: schemas.ItemCreate):
    item = models.DecorItem(**item.dict())
    db.add(item)
    db.commit()
    item.image = f"http://127.0.0.1:8000/static/item/{item.id}/image"
    item.model_3d = f"http://127.0.0.1:8000/static/item/{item.id}/model"
    db.commit()
    db.refresh(item)
    return item


def delete_item(db: Session, item_id: int):
    db.query(models.DecorItem).filter(models.DecorItem.id == item_id).delete()
    db.commit()
    return {"Status": "Item Deleted"}
