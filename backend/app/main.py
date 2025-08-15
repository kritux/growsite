from fastapi import FastAPI
from .api import auth
from .api import users
from .api import client_services
from .api import services
from .api import admin
# Importar todos los modelos para asegurar que estén registrados
from . import models

app = FastAPI()

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(client_services.router)
app.include_router(services.router)
app.include_router(admin.router)

@app.get("/")
def read_root():
    return {"message": "Growth Bizon Backend API"} 