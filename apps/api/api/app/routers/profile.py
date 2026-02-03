from fastapi import APIRouter
router = APIRouter()
@router.get('')
def get_profile():
    return {'status': 'ok'}
