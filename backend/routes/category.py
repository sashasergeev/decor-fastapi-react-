from typing import List

import crud
import schemas
from dependencies import get_db
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm.session import Session

router = APIRouter(prefix="/category", tags=["Category"])


@router.get("/all", response_model=List[schemas.CategoryList])
def all(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    categories = crud.get_categories(db, skip=skip, limit=limit)
    return categories


@router.get("/{cat_id}", response_model=schemas.Category)
def show(cat_id: int, db: Session = Depends(get_db)):
    category = crud.get_category(db, cat_id)
    if category is None:
        raise HTTPException(status=404, detail="Does not exist.")
    return category


@router.post("/", response_model=schemas.Category)
def create(category: schemas.CategoryCreate, db: Session = Depends(get_db)):
    return crud.create_category(db=db, category=category)


@router.delete("/{cat_id}")
def delete(cat_id: int, db: Session = Depends(get_db)):
    return crud.delete_category(db, cat_id)
