from fastapi import APIRouter

router = APIRouter()

@router.get("/example")
async def get_example():
    return {"message": "This is an example endpoint"}

@router.get("/another")
async def get_another():
    return {"message": "This is another endpoint"}
