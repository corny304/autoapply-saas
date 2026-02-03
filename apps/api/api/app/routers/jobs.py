from fastapi import APIRouter
router = APIRouter()
@router.get('')
def get_jobs():
    return {'status': 'ok'}
