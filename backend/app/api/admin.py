from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..schemas.user import UserCreate, UserOut
from ..crud import user as crud_user
from ..dependencies import get_db

router = APIRouter(prefix="/admin", tags=["admin"])

@router.post("/create-admin", response_model=UserOut)
def create_admin_user(user_in: UserCreate, db: Session = Depends(get_db)):
    """Endpoint temporal para crear usuarios admin"""
    db_user = crud_user.get_user_by_email(db, user_in.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Crear usuario con rol admin
    db_user = crud_user.create_admin_user(db, user_in)
    return db_user 