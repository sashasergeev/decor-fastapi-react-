from typing import List
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm.session import Session
import crud, models, schemas
from database import engine, session

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = session()
    try: 
        yield db
    finally:
        db.close()


@app.get("/category/all", response_model=List[schemas.CategoryBase])
def read_categories(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    categories = crud.get_categories(db, skip=skip, limit=limit)
    return categories


@app.get("/category/{cat_name}", response_model=schemas.Category)
def read_category(cat_name: str, db: Session = Depends(get_db)):
    category = crud.get_category(db, cat_name)
    if category is None:
        raise HTTPException(status=404, detail="Category with such name does not exist.")
    return category


@app.post("/category/", response_model=schemas.Category)
def create_category(category: schemas.CategoryCreate, db: Session = Depends(get_db)):
    return crud.create_category(db=db, category=category)


