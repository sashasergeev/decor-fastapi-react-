from typing import Optional
from fastapi.datastructures import UploadFile
from fastapi.param_functions import File
from sqlalchemy.orm import Session

import models
import schemas

import shutil


# Items
def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.DecorItem).offset(skip).limit(limit).all()


def get_item(db: Session, item_id: int):
    return db.query(models.DecorItem).filter(models.DecorItem.id == item_id).first()


def upload_static(db: Session, item_id: str, image: UploadFile = File(...), model: UploadFile = File(...)):
    item = db.query(models.DecorItem).filter(models.DecorItem.id == item_id).first()
    if item is None:
        return {"detail": "Incorrect item credentials."}
    
    image.filename = item_id + "." + image.filename.rsplit(".", 1)[1]
    with open(f"static/images/{image.filename}", "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)
    
    model.filename = item_id + "." + model.filename.rsplit(".", 1)[1]
    with open(f"static/models/{model.filename}", "wb") as buffer:
        shutil.copyfileobj(model.file, buffer)
    
    return {"detail": "static files uploaded"}


def update_item(
        db: Session, 
        item_id: int, 
        name: Optional[str] = None, 
        height: Optional[int] = None, 
        width: Optional[int] = None, 
        price: Optional[int] = None, 
        category_id: Optional[int] = None, 
        image: Optional[str] = None, 
        model_3d: Optional[str] = None
        ):
    item = db.query(models.DecorItem).filter(models.DecorItem.id == item_id).one_or_none()
    if item is None:
        return {"detail": "Incorrect item credentials."}
    
    if name is not None:
        item.name = name
    if height is not None:
        item.height = height
    if width is not None:
        item.width = width
    if price is not None:
        item.price = price
    if category_id is not None:
        item.category_id = category_id
    if image is not None:
        item.image = image
    if model_3d is not None:
        item.model_3d = model_3d

    db.commit()
    db.refresh(item)
    return item
    


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
