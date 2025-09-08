from sqlalchemy import Column, Integer, String, Boolean, JSON
from sqlalchemy.orm import relationship
from ..database import Base

class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    descripcion = Column(String, nullable=True)
    tipo = Column(String, nullable=False)
    pasos_flujo = Column(JSON, nullable=False, default=list)  # Lista de pasos en JSON
    activo = Column(Boolean, default=True)

    # client_services = relationship("ClientService", back_populates="service") 