from sqlalchemy.orm import Session
from ..models.service import Service
from ..schemas.service import ServiceCreate

def create_service(db: Session, service: ServiceCreate):
    db_service = Service(
        nombre=service.nombre,
        descripcion=service.descripcion,
        tipo=service.tipo,
        pasos_flujo=service.pasos_flujo,
        activo=service.activo
    )
    db.add(db_service)
    db.commit()
    db.refresh(db_service)
    return db_service

def get_service(db: Session, service_id: int):
    return db.query(Service).filter(Service.id == service_id).first()

def get_services(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Service).filter(Service.activo == True).offset(skip).limit(limit).all()

def update_service(db: Session, service_id: int, service: ServiceCreate):
    db_service = db.query(Service).filter(Service.id == service_id).first()
    if db_service:
        db_service.nombre = service.nombre
        db_service.descripcion = service.descripcion
        db_service.tipo = service.tipo
        db_service.pasos_flujo = service.pasos_flujo
        db_service.activo = service.activo
        db.commit()
        db.refresh(db_service)
    return db_service

def delete_service(db: Session, service_id: int):
    db_service = db.query(Service).filter(Service.id == service_id).first()
    if db_service:
        db.delete(db_service)
        db.commit()
    return db_service 