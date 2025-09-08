#!/usr/bin/env python3
"""
Script para inicializar la base de datos SQLite de Growth Bizon
"""

import os
import sys
from pathlib import Path

# Agregar el directorio del proyecto al path
project_root = Path(__file__).parent
sys.path.insert(0, str(project_root))

from app.database import engine, Base
from app.models import user, service, client_service
from app.crud import user as crud_user
from app.schemas.user import UserCreate
from sqlalchemy.orm import Session

def init_db():
    """Inicializar la base de datos"""
    print("🗄️ Inicializando base de datos SQLite...")
    
    # Crear todas las tablas
    Base.metadata.create_all(bind=engine)
    print("✅ Tablas creadas exitosamente")
    
    # Crear usuario admin por defecto
    db = Session(engine)
    try:
        # Verificar si ya existe un admin
        admin_user = crud_user.get_user_by_email(db, "admin@growthbizon.com")
        if not admin_user:
            admin_data = UserCreate(
                name="Administrador",
                email="admin@growthbizon.com",
                password="admin123"  # Cambiar en producción
            )
            admin_user = crud_user.create_admin_user(db, admin_data)
            print("✅ Usuario admin creado:")
            print(f"   Email: {admin_user.email}")
            print(f"   Password: admin123")
        else:
            print("ℹ️ Usuario admin ya existe")
            
        # Crear servicios por defecto
        from app.crud import service as crud_service
        from app.schemas.service import ServiceCreate
        
        default_services = [
            {
                "nombre": "Gestión de Redes Sociales",
                "descripcion": "Manejo completo de redes sociales para tu negocio",
                "tipo": "redes_sociales",
                "pasos_flujo": [
                    {"nombre": "Análisis inicial", "descripcion": "Evaluación de la marca actual"},
                    {"nombre": "Estrategia", "descripcion": "Desarrollo de estrategia de contenido"},
                    {"nombre": "Creación de contenido", "descripcion": "Diseño y producción de posts"},
                    {"nombre": "Publicación", "descripcion": "Programación y publicación"},
                    {"nombre": "Monitoreo", "descripcion": "Análisis de resultados"}
                ]
            },
            {
                "nombre": "SEO y Optimización",
                "descripcion": "Mejora el posicionamiento de tu sitio web",
                "tipo": "seo",
                "pasos_flujo": [
                    {"nombre": "Auditoría SEO", "descripcion": "Análisis completo del sitio"},
                    {"nombre": "Optimización on-page", "descripcion": "Mejoras en el contenido"},
                    {"nombre": "Optimización técnica", "descripcion": "Mejoras en velocidad y estructura"},
                    {"nombre": "Link building", "descripcion": "Construcción de enlaces"},
                    {"nombre": "Monitoreo", "descripcion": "Seguimiento de rankings"}
                ]
            },
            {
                "nombre": "Marketing Digital",
                "descripcion": "Estrategias integrales de marketing digital",
                "tipo": "marketing",
                "pasos_flujo": [
                    {"nombre": "Análisis de mercado", "descripcion": "Estudio de la competencia"},
                    {"nombre": "Estrategia", "descripcion": "Desarrollo de plan de marketing"},
                    {"nombre": "Implementación", "descripcion": "Ejecución de campañas"},
                    {"nombre": "Optimización", "descripcion": "Ajustes basados en resultados"},
                    {"nombre": "Reportes", "descripcion": "Análisis de rendimiento"}
                ]
            }
        ]
        
        for service_data in default_services:
            existing_service = db.query(crud_service.Service).filter(
                crud_service.Service.nombre == service_data["nombre"]
            ).first()
            
            if not existing_service:
                service_create = ServiceCreate(**service_data)
                crud_service.create_service(db, service_create)
                print(f"✅ Servicio creado: {service_data['nombre']}")
            else:
                print(f"ℹ️ Servicio ya existe: {service_data['nombre']}")
                
    except Exception as e:
        print(f"❌ Error al crear datos iniciales: {e}")
    finally:
        db.close()
    
    print("\n🎉 Base de datos inicializada exitosamente!")
    print("📁 Archivo de BD: growthbizon.db")
    print("🔧 Para ejecutar el servidor: uvicorn app.main:app --reload")

if __name__ == "__main__":
    init_db()


