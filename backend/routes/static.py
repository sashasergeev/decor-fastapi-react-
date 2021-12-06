from fastapi import APIRouter
from fastapi.responses import FileResponse

router = APIRouter(prefix="/static", tags=["Static"])


@router.get("/item/{item_id}/image")
def item_image(item_id: str):
    try:
        return FileResponse("static/images/" + item_id + ".jpg")
    finally:
        return {"detail": "File does not exists..."}


@router.get("/item/{item_id}/model")
def item_3dmodel(item_id: str):
    print("static/models/" + item_id + ".stl")
    try:
        return FileResponse("static/models/" + item_id + ".stl")
    finally:
        return {"detail": "File does not exists..."}
