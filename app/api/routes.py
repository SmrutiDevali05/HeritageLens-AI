from fastapi import APIRouter, UploadFile, File
import shutil

from app.services.ocr_service import extract_text

router = APIRouter()

@router.get("/test")
def test_route():
    return {
        "status": "Backend Working"
    }

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    file_location = f"temp_{file.filename}"

    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extracted_text = extract_text(file_location)

    return {
        "filename": file.filename,
        "extracted_text": extracted_text
    }