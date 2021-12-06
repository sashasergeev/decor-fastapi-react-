from fastapi import FastAPI

import models
from database import engine
from routes import category, items, usage, static

models.Base.metadata.create_all(bind=engine)

tags_metadata = [
    {
        "name": "Category",
        "description": "Operations with categories of decor."
    },
    {
        "name": "Items",
        "description": "Operations with decor items."
    },
    {
        "name": "Usage",
        "description": "Operations with usage of categories."
    },
    {
        "name": "Static",
        "description": "Operations with static files."
    }
]

app = FastAPI(openapi_tags=tags_metadata)

app.include_router(category.router)
app.include_router(items.router)
app.include_router(usage.router)
app.include_router(static.router)
