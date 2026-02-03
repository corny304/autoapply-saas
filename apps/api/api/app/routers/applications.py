from fastapi import APIRouter

router = APIRouter()

@router.get("")
def list_applications():
    return {"applications": []}

@router.post("/prepare")
def prepare_applications():
    return {"status": "queued"}

@router.post("/{application_id}/generate")
def generate_application(application_id: str):
    return {"status": "queued"}

@router.post("/{application_id}/send")
def send_application(application_id: str):
    return {"status": "queued"}
