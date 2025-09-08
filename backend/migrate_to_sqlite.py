#!/usr/bin/env python3
"""
Script para migrar de PostgreSQL a SQLite
"""

import os
import sys
from pathlib import Path

# Agregar el directorio del proyecto al path
project_root = Path(__file__).parent
sys.path.insert(0, str(project_root))

def migrate_to_sqlite():
    """Migrar de PostgreSQL a SQLite"""
    print("🔄 Migrando de PostgreSQL a SQLite...")
    
    # 1. Verificar que los archivos estén actualizados
    print("📋 Verificando configuración...")
    
    # Verificar database.py
    with open("app/database.py", "r") as f:
        content = f.read()
        if "sqlite" in content.lower():
            print("✅ database.py configurado para SQLite")
        else:
            print("❌ database.py no está configurado para SQLite")
            return
    
    # Verificar config.py
    with open("app/config.py", "r") as f:
        content = f.read()
        if "sqlite" in content.lower():
            print("✅ config.py configurado para SQLite")
        else:
            print("❌ config.py no está configurado para SQLite")
            return
    
    # Verificar requirements.txt
    with open("requirements.txt", "r") as f:
        content = f.read()
        if "psycopg2" not in content:
            print("✅ requirements.txt sin dependencias PostgreSQL")
        else:
            print("❌ requirements.txt aún tiene dependencias PostgreSQL")
            return
    
    # 2. Eliminar archivo de BD anterior si existe
    if os.path.exists("growthbizon.db"):
        os.remove("growthbizon.db")
        print("🗑️ Archivo de BD anterior eliminado")
    
    # 3. Ejecutar migraciones
    print("🔄 Ejecutando migraciones...")
    os.system("alembic upgrade head")
    
    # 4. Inicializar BD con datos por defecto
    print("📊 Inicializando datos por defecto...")
    os.system("python init_db.py")
    
    print("\n🎉 Migración completada exitosamente!")
    print("📁 Nueva BD: growthbizon.db")
    print("🔧 Para probar: uvicorn app.main:app --reload")

if __name__ == "__main__":
    migrate_to_sqlite()


