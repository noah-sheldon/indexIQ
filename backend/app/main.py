from fastapi import FastAPI
from app.api.routes import router  

app = FastAPI(title="IndexIQ API")

app.include_router(router, prefix="/api")  # All routes will be under /api

@app.get("/")
def read_root():
    return {"message": "Welcome to the IndexIQ API"}
