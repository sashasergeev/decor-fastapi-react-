from typing import List, Optional
from pydantic import BaseModel


# DECOR ITEM
class ItemBase(BaseModel):
    name: str
    height: int
    width: int
    image: str
    model_3d: str
    price: int

class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    category_id: int

    class Config:
        orm_mode = True

# Usage of categories
class UsageBase(BaseModel):
    name: str

class UsageCreate(UsageBase):
    pass

class Usage(BaseModel):
    id: int

    class Config:
        orm_mode = True


# CATEGORY
class CategoryBase(BaseModel):
    name: str

    class Config:
        orm_mode = True


class CategoryCreate(CategoryBase):
    pass


class Category(CategoryBase):
    id: int
    items: List[Item] = []
    usage: List[Usage] = []

    class Config:
        orm_mode = True
