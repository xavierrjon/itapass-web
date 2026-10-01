# Imagem de DESENVOLVIMENTO do frontend.
FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3000

# --hostname 0.0.0.0 expoe o dev server fora do container.
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]
