from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(
    title="ChronicleAI Backend"
)

app.include_router(router)

@app.get("/")
def home():
    return {
        "message": "ChronicleAI Backend Running"
    }