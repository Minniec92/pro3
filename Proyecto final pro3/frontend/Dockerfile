# Stage 1: Build
FROM node:18-alpine as build

WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Generar build optimizado para producción
RUN npm run build

# Stage 2: Servir el build estático con nginx
FROM nginx:stable-alpine

LABEL maintainer="tu-email@dominio.com"
LABEL description="Frontend React app - Production"

# Copiar build generado desde etapa anterior
COPY --from=build /app/build /usr/share/nginx/html

# Copiar configuración personalizada de nginx (si tenés)
# COPY ./nginx/nginx.prod.conf /etc/nginx/nginx.conf

# Exponer puerto 80 para servir
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
