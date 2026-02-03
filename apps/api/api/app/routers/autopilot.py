from fastapi import APIRouter
router = APIRouter()
@router.get('')
def get_autopilot():
    return {'status': 'ok'}
