# 🚀 Sistema Web Full-Stack con Docker

## 📋 Componentes Principales

### 🎯 Arquitectura General
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Nginx │ │ React │ │ Express │
│ (Proxy) │◄──►│ (Frontend) │◄──►│ (Backend) │
│ :80 │ │ :3000 │ │ :3001 │
└─────────────┘ └─────────────┘ └─────────────┘
│
┌─────────────┐ ┌─────────────┐
│ Redis │ │ PostgreSQL │
│ (Cache) │ │ (DB) │
│ :6379 │ │ :5432 │
└─────────────┘ └─────────────┘

### 🔧 Servicios del Sistema

| Servicio  | Tecnología         | Puerto | Función              |
|-----------|--------------------|--------|----------------------|
| Frontend  | React 18           | 3000   | Interfaz de usuario   |
| Backend   | Express + Sequelize| 3001   | API REST             |
| Database  | PostgreSQL 15      | 5432   | Base de datos        |
| Cache     | Redis 7            | 6379   | Cache y sesiones     |
| Proxy     | Nginx              | 80     | Reverse proxy        |
| pgAdmin   | pgAdmin 4          | 5050   | Administración BD    |

---

## 🏗️ Construcción Inicial

### 1️⃣ Preparación del Entorno
```bash
# (Si no está creado) Crear estructura de proyecto
./setup-directories.sh proyecto-final-prog3

# Navegar al proyecto
cd proyecto-final-prog3

# Crear archivo de variables de entorno
cp .env.example .env

# Configuración de Variables
POSTGRES_DB=app_database
POSTGRES_USER=app_user
POSTGRES_PASSWORD=app_password

NODE_ENV=development
PORT=3001

DB_HOST=database
DB_PORT=5432
DB_NAME=app_database
DB_USER=app_user
DB_PASSWORD=app_password

JWT_SECRET=mi_jwt_secret_super_seguro_para_desarrollo_2024
CORS_ORIGIN=http://localhost:3000

REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_ENV=development

CHOKIDAR_USEPOLLING=true
WATCHPACK_POLLING=true
FAST_REFRESH=true

WDS_SOCKET_HOST=localhost
WDS_SOCKET_PORT=3000
WDS_SOCKET_PATH=/ws

ESLINT_NO_DEV_ERRORS=true
GENERATE_SOURCEMAP=true

REDIS_HOST=redis
REDIS_PORT=6379
REDIS_URL=redis://redis:6379

PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=admin123
PGADMIN_CONFIG_SERVER_MODE=False
PGADMIN_CONFIG_MASTER_PASSWORD_REQUIRED=False

DEBUG=true
LOG_LEVEL=debug
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=10MB

EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=tu_usuario_mailtrap
EMAIL_PASS=tu_password_mailtrap
EMAIL_FROM=noreply@tuapp.com

RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW_MS=900000
SESSION_SECRET=mi_session_secret_para_desarrollo
COOKIE_SECURE=false
COOKIE_HTTP_ONLY=true
COOKIE_SAME_SITE=lax

#Construcción y Levantado
docker-compose build
docker-compose up -d

#Ejecución del Sistema

##Comandos Básicos
docker-compose up           # Levantar todos los servicios en primer plano
docker-compose up -d        # Levantar servicios en segundo plano (detached)
docker-compose logs -f      # Ver logs en tiempo real
docker-compose logs -f backend  # Logs específicos del backend
docker-compose down         # Detener servicios
docker-compose down -v      # Detener servicios y limpiar volúmenes

#URLs de Acceso
Frontend: http://localhost:3000

Backend API: http://localhost:3001/api

Health Check: http://localhost:3001/health

Nginx Proxy: http://localhost

pgAdmin 4: http://localhost:5050

Base de datos: localhost:5432


#Desarrollo con Hot Reload
React y Express detectan cambios automáticamente y recargan o reinician.

La base de datos persiste mediante volúmenes Docker.

#Comandos de Mantenimiento
docker container prune          # Limpiar contenedores detenidos
docker image prune              # Limpiar imágenes sin uso
docker system prune -a          # Limpiar todo el sistema Docker
docker-compose down -v --rmi all
docker-compose build --no-cache
docker-compose up

#Estructura de Archivos Clave
proyecto-final-prog3/
├── backend/
├── frontend/
├── database/
├── nginx/
├── pgadmin/
├── docker-compose.yml
├── .env
├── README.md
├── setup-directories.sh

## 🔄 Desarrollo con Hot Reload

### Funcionamiento Automático
- ✅ **React**: Cambios en `.js`, `.jsx`, `.css` dentro de `frontend/src/` → Recarga automática del frontend.
- ✅ **Express**: Cambios en `.js` dentro de `backend/` → Reinicio automático del backend con `nodemon`.
- ✅ **Base de datos**: Persistencia garantizada mediante volúmenes Docker para PostgreSQL.

### Workflow de Desarrollo
1. Modificá archivos en `frontend/src/` o `backend/`.
2. Los cambios son detectados automáticamente.
3. El servicio correspondiente se actualiza (recarga o reinicio).
4. Verificá los cambios en el navegador o mediante llamadas al API.

Esta configuración permite un desarrollo ágil sin necesidad de reiniciar manualmente servicios o perder datos.

## 🐞 Debugging

### Acceder a los contenedores
```bash
# Acceder al shell del contenedor backend
docker-compose exec backend sh

# Acceder al shell del contenedor frontend
docker-compose exec frontend sh

#Ver variables de entorno en backend
docker-compose exec backend env

#Monitorear recursos Docker en tiempo real
docker stats

Límites de Recursos en Producción
En entornos productivos, es esencial aplicar límites de CPU y memoria a los contenedores para garantizar un uso eficiente y estable de los recursos del sistema. Estas configuraciones se manejan comúnmente con orquestadores como Docker Swarm o Kubernetes, que permiten definir límites y reservas detalladas.

Como este proyecto utiliza Docker Compose en modo clásico para desarrollo local, la definición de límites de recursos no está implementada ni aplicada automáticamente. Para producción, se recomienda migrar a un orquestador compatible o configurar el motor Docker para controlar el uso de recursos según las necesidades.
