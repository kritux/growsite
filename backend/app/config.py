import os
from dotenv import load_dotenv
from pydantic_settings import BaseSettings
from sqlalchemy.engine.url import URL
import urllib.parse

load_dotenv(dotenv_path="app/.env")

class Settings(BaseSettings):
    PROJECT_NAME: str = "Growth Bizon Backend"
    
    # Database settings
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_SERVER: str = "localhost"
    POSTGRES_PORT: str = "5432"
    
    # Security settings
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 24 hours
    
    # File upload settings
    MAX_FILE_SIZE: int = 10 * 1024 * 1024  # 10 MB
    UPLOAD_DIR: str = "uploads"
    ALLOWED_EXTENSIONS: set = {"jpg", "jpeg", "png", "gif", "webp", "pdf"}
    
    class Config:
        env_file = ".env"
        case_sensitive = False

settings = Settings()

# Create database URL with proper encoding for special characters
encoded_password = urllib.parse.quote_plus(settings.POSTGRES_PASSWORD)
DATABASE_URL = URL.create(
    drivername="postgresql+psycopg2",
    username=settings.POSTGRES_USER,
    password=encoded_password,
    host=settings.POSTGRES_SERVER,
    port=settings.POSTGRES_PORT,
    database=settings.POSTGRES_DB
) 