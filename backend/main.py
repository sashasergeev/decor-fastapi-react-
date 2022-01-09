from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import models
from database import engine
from routes import category, items, usage, static, users

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
    },
    {
        "name": "Users",
        "description": "User Interactions"
    },
]

app = FastAPI(openapi_tags=tags_metadata)

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(category.router)
app.include_router(items.router)
app.include_router(usage.router)
app.include_router(static.router)
app.include_router(users.router)
