from pydantic import BaseModel
from typing import List, Optional, Any, Dict

class PasoFlujo(BaseModel):
    nombre: str
    descripcion: Optional[str] = None
    estado: Optional[str] = None  # pendiente, en_progreso, finalizado, etc.

class ServiceBase(BaseModel):
    nombre: str
    descripcion: Optional[str] = None
    tipo: str
    pasos_flujo: List[Dict[str, Any]]  # Cambiado para ser compatible con JSONB
    activo: Optional[bool] = True

class ServiceCreate(ServiceBase):
    pass

class ServiceOut(ServiceBase):
    id: int

    class Config:
        from_attributes = True 