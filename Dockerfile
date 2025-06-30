# Étape 1 : build
FROM node:22.13.1 AS builder

WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.* ./
COPY .env .env
COPY src ./src
COPY public ./public
COPY index.html ./

RUN npm install
RUN npm run build

# Étape 2 : serve le build statique
FROM nginx:alpine

# Copier le build dans nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
