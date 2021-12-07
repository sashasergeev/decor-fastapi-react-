from typing import List

from fastapi.datastructures import UploadFile
from fastapi.param_functions import Form

import crud
import schemas
from dependencies import get_db
from fastapi import APIRouter, Depends, HTTPException, File
from sqlalchemy.orm.session import Session

router = APIRouter(prefix="/item", tags=["Items"])


@router.get("/all", response_model=List[schemas.Item])
def all(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items

@router.post("/upload/{item_id}")
def static(item_id: str, image: UploadFile = File(...), model: UploadFile = File(...), db: Session = Depends(get_db)):
    return crud.upload_static(db, item_id, image, model)


@router.get("/{item_id}", response_model=schemas.Item)
def show(item_id: int, db: Session = Depends(get_db)):
    item = crud.get_item(db, item_id)
    if item is None:
        raise HTTPException(status = 404, detail = "Does Not Exist.")
    return item


@router.post("/")
def create(item: schemas.ItemCreate = Form(...), db: Session = Depends(get_db)):
    return crud.create_item(db=db, item=item)


@router.delete("/{item_id}")
def delete(item_id: int, db: Session = Depends(get_db)):
    return crud.delete_item(db, item_id)



