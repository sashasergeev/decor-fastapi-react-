from fastapi import APIRouter
from fastapi.responses import FileResponse

router = APIRouter(prefix="/static", tags=["Static"])


# FOR CATEGORIES 
@router.get("/category/{id}/image")
def item_image(id: str):
    return FileResponse("static/category/" + id + ".png")


# FOR ITEMS
@router.get("/item/{item_id}/image")
def item_image(item_id: str):
    return FileResponse("static/images/" + item_id + ".jpg")


@router.get("/item/{item_id}/model")
def item_3dmodel(item_id: str):
    print("static/models/" + item_id + ".stl")
    return FileResponse("static/models/" + item_id + ".stl")
