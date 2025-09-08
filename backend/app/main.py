from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

# Import routers
from .api import auth, users, client_services, services, admin

# Import models to ensure they are registered
from . import models

app = FastAPI(
    title="Growth Bizon API",
    description="API para Growth Bizon LLC - Marketing Digital",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Frontend local
        "http://localhost:5173",  # Vite dev server
        "https://growthbizon.com",  # Tu dominio
        "https://www.growthbizon.com",
        os.getenv("FRONTEND_URL", "http://localhost:3000")  # Variable de entorno
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["authentication"])
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(services.router, prefix="/services", tags=["services"])
app.include_router(client_services.router, prefix="/client-services", tags=["client-services"])
app.include_router(admin.router, prefix="/admin", tags=["admin"])

@app.get("/")
async def root():
    return {
        "message": "Growth Bizon API",
        "version": "1.0.0",
        "status": "running"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port) 