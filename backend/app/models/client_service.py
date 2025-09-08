from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from ..database import Base

class ClientService(Base):
    __tablename__ = "client_services"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    service_id = Column(Integer, ForeignKey("services.id"), nullable=False)
    fecha_inicio = Column(DateTime(timezone=True), server_default=func.now())
    estado = Column(String, default="pendiente")  # pendiente, en_progreso, finalizado, etc.
    progreso = Column(String, nullable=True)  # Puede ser porcentaje o texto
    entregables = Column(JSON, default=list)  # Lista de objetos: {nombre, ruta, fecha, comentarios}
    historial_cambios = Column(JSON, default=list)  # Lista de cambios/comentarios
    fecha_ultimo_cambio = Column(DateTime(timezone=True), onupdate=func.now())

    user = relationship("User")
    service = relationship("Service") 