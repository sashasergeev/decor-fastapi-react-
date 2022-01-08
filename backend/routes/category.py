from typing import List, Optional

import crud
import schemas
from dependencies import get_db
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm.session import Session

router = APIRouter(prefix="/category", tags=["Category"])


@router.get("/all", response_model=List[schemas.Category])
def all(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    categories = crud.get_categories(db, skip=skip, limit=limit)
    return categories


@router.get("/usage", response_model=List[schemas.CategoryList])
def category_by_usage(applies: str, usage: str, db: Session = Depends(get_db)):
    return crud.category_by_usage(db=db, applies=applies, usage=usage)


@router.get("/{cat_id}", response_model=schemas.Category)
def show(cat_id: int, db: Session = Depends(get_db)):
    category = crud.get_category(db, cat_id)
    if category is None:
        raise HTTPException(status=404, detail="Does not exist.")
    return category


@router.post("/", response_model=schemas.Category)
def create(category: schemas.CategoryCreate, db: Session = Depends(get_db)):
    return crud.create_category(db=db, category=category)


@router.put("/{id}")
def update(
        id: int, 
        name: Optional[str] = None, 
        description: Optional[str] = None, 
        image: Optional[str] = None, 
        db: Session = Depends(get_db)
        ):
    return crud.update_category(db, id, name, description, image)



@router.put("/usage", response_model=schemas.Category)
def add_usage(body: schemas.CategoryUsage, db: Session = Depends(get_db)):
    return crud.add_usage(db=db, body=body)


@router.delete("/usage", response_model=schemas.Category)
def delete_usage(body: schemas.CategoryUsage, db: Session = Depends(get_db)):
    return crud.remove_usage(db=db, body=body)


@router.delete("/{cat_id}")
def delete(cat_id: int, db: Session = Depends(get_db)):
    return crud.delete_category(db, cat_id)
