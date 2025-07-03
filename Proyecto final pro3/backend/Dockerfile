FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM node:18-alpine

LABEL maintainer="tu-email@dominio.com"
LABEL description="Backend Node.js app - Production"

WORKDIR /app

COPY --from=build /app ./


EXPOSE 3001

ENV NODE_ENV=production

CMD ["node", "server.js"]
