from typing import List

import crud
import schemas
from dependencies import get_db
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm.session import Session

router = APIRouter(prefix="/usage", tags=["Usage"])


@router.get("/all", response_model=List[schemas.Usage])
def all(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    usages = crud.get_usages(db, skip=skip, limit=limit)
    return usages


@router.get("/{usage_id}", response_model=schemas.Usage)
def show(usage_id: int, db: Session = Depends(get_db)):
    usage = crud.get_usage(db, usage_id)
    if usage is None:
        raise HTTPException(status = 404, detail = "Does Not Exist.")
    return usage


@router.post("/", response_model=schemas.Usage)
def create(usage: schemas.UsageCreate, db: Session = Depends(get_db)):
    return crud.create_usage(db, usage)


@router.delete("/{usage_id}")
def delete(usage_id: int, db: Session = Depends(get_db)):
    return crud.delete_usage(db, usage_id)


