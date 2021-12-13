from typing import Any, List, Optional
from pydantic import BaseModel


# DECOR ITEM
class ItemBase(BaseModel):
    name: str
    height: int
    width: int
    # price: int
    category_id: Optional[int]


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    image: Optional[str] = None
    model_3d: Optional[str] = None

    class Config:
        orm_mode = True


# Usage of categories
class UsageBase(BaseModel):
    name: str


class UsageCreate(UsageBase):
    applied: str


class Usage(UsageBase):
    id: int
    applies: str

    class Config:
        orm_mode = True


# CATEGORY
class CategoryBase(BaseModel):
    name: str


class CategoryCreate(CategoryBase):
    pass


class CategoryList(CategoryBase):
    id: int

    class Config:
        orm_mode = True


class Category(CategoryBase):
    id: int
    items: List[Item] = []
    usage: List[Usage] = []

    class Config:
        orm_mode = True
