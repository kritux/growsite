# 🚀 Railway Deployment Guide - Growth Bizon

## 📋 Pasos para Deploy

### 1. Crear cuenta en Railway
- Ir a https://railway.app
- Login con GitHub
- Crear nuevo proyecto

### 2. Conectar GitHub
- Seleccionar tu repository
- Railway detectará automáticamente Python

### 3. Configurar Variables de Entorno
```bash
SECRET_KEY=tu-secret-key-super-segura
FRONTEND_URL=https://growthbizon.com
DATABASE_URL=sqlite:///./growthbizon.db
```

### 4. Configurar Dominio Personalizado
- Settings → Domains
- Agregar: api.growthbizon.com
- Railway te dará un registro CNAME

### 5. Configurar DNS en Hostinger
- Panel de control → DNS
- Agregar registro CNAME:
  - Tipo: CNAME
  - Nombre: api
  - Valor: [valor que te da Railway]
  - TTL: 300

### 6. Deploy
- Railway hará deploy automático
- Verificar en: https://api.growthbizon.com/docs

## 🔧 URLs Finales
- **Frontend**: https://growthbizon.com
- **Backend**: https://api.growthbizon.com
- **API Docs**: https://api.growthbizon.com/docs
- **Health Check**: https://api.growthbizon.com/health
