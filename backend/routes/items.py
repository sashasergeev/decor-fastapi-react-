from typing import List

import crud
import schemas
from dependencies import get_db
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm.session import Session

router = APIRouter(prefix="/item", tags=["Items"])


@router.get("/all", response_model=List[schemas.ItemList])
def all(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items


@router.get("/{item_id}", response_model=schemas.Item)
def show(item_id: int, db: Session = Depends(get_db)):
    item = crud.get_item(db, item_id)
    if item is None:
        raise HTTPException(status = 404, detail = "Does Not Exist.")
    return item


@router.post("/", response_model=schemas.ItemCreate)
def create(item: schemas.ItemCreate, db: Session = Depends(get_db)):
    return crud.create_item(db=db, item=item)


@router.delete("/{item_id}")
def delete(item_id: int, db: Session = Depends(get_db)):
    return crud.delete_item(db, item_id)


