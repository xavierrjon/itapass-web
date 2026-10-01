# Imagem de DESENVOLVIMENTO do backend.
# O codigo-fonte entra por volume (ver docker-compose.yml), por isso a imagem
# cuida apenas das dependencias e da geracao do Prisma Client.
FROM node:24-alpine

# openssl e necessario pelo engine do Prisma
RUN apk add --no-cache openssl

WORKDIR /app

# Necessario para o prisma.config.ts carregar durante o `npm ci`.
# O valor real vem do ambiente em tempo de execucao.
ENV DATABASE_URL="postgresql://placeholder:placeholder@localhost:5432/placeholder"

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Gera o Prisma Client na imagem. O diretorio de saida (/app/src/generated)
# e coberto por volume anonimo no Compose, entao o host nunca recebe arquivos
# gerados com dono root. O CMD regenera ao iniciar para pegar mudancas no
# schema.prisma sem rebuild.
RUN npx prisma generate

EXPOSE 7777

# `migrate deploy` e idempotente e garante que `docker compose up` ja suba com
# o banco no esquema correto.
CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma generate && npm start"]
