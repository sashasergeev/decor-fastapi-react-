from fastapi import APIRouter, Depends, HTTPException, Request, Body
from pydantic import BaseModel
from sqlalchemy.orm.session import Session

from dependencies import get_db

import models

router = APIRouter(prefix="/users", tags=["Users"])


class Submit(BaseModel):
    name: str
    phone: str
    email: str
    message: str


@router.get("/submit")
def all(db: Session = Depends(get_db)):
    return db.query(models.Submit).all()


@router.post("/submit")
def create(submit: Submit, db: Session = Depends(get_db)):
    info = models.Submit(**submit.dict())
    db.add(info)
    db.commit()
    return "Submitted"


@router.delete("/submit/{int}")
def delete( id: int,db: Session = Depends(get_db)):
    db.query(models.Submit).filter(models.Submit.id == id).delete()
    db.commit()
    return {"Status": "User submit Deleted"}
