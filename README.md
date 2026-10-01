# ItaPass - Sistema de Venda de Ingressos de Futebol Local 🎟️ 

## Sobre o projeto
Sistema para compra e venda de ingressos de partidas de futebol locais. O sistema será desenvolvido utilizando tecnologias modernas para garantir uma experiência fluida e eficiente para os usuários.

## Tipos de Usuários
- **Organizador**: responsável por gerenciar os jogos e validar ingressos
- **Torcedor**: usuário que compra ingressos para assistir aos jogos

## Funcionalidades
- Cadastro e login de usuários
- Gerenciamento de jogos (organizador)
- Análise métricas de vendas e público simples (organizador)
- Compra e venda de ingressos
- Validação de ingressos com QR Code (organizador)

---

## Tecnologias

**Backend** — Node.js, Express, TypeScript, Prisma, PostgreSQL, Zod, envalid, CORS

**Documentação da API** — OpenAPI 3.0.3 gerado a partir dos schemas Zod, Swagger UI

**Frontend** — Next.js (App Router), React, TypeScript, Tailwind CSS, Lucide Icons, Inter

**Infraestrutura** — Docker, Docker Compose, PostgreSQL 17, pgAdmin

---

## Como executar

O `docker-compose.yml` na raiz sobe **o sistema inteiro**: banco, API e
frontend. Não é preciso instalar Node.js na máquina.

```bash
docker compose up -d
```

| Serviço | URL | Descrição |
| --- | --- | --- |
| Frontend | http://localhost:3000 | Interface |
| API | http://localhost:7777 | API REST |
| **Swagger UI** | **http://localhost:7777/docs** | **Documentação interativa da API** |
| OpenAPI (JSON) | http://localhost:7777/docs/openapi.json | Contrato OpenAPI 3.0.3 |
| pgAdmin | http://localhost:5050 | Administração do banco |
| PostgreSQL | `localhost:5432` | Banco de dados |

As migrations são aplicadas automaticamente na inicialização do backend, e
o banco é criado caso ainda não exista.

Para derrubar:

```bash
docker compose down
```

Para recriar do zero, **apagando os dados**:

```bash
docker compose down -v
```

Para reconstruir as imagens (só é necessário ao alterar
`package.json`, `Dockerfile` ou `.dockerignore`):

```bash
docker compose up -d --build
```

Alterações em `backend/src` e `frontend/src` são refletidas por volume, com
**hot reload** — sem rebuild.

### Desenvolvimento sem Docker

Apenas se preferir rodar Node.js na máquina. Suba só o banco pela raiz:

```bash
docker compose up -d postgres pgadmin
```

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate deploy
npm start
```

```bash
cd frontend
npm install
npm run dev
```

Variáveis de ambiente: copie `backend/.env.example` para `backend/.env` e
`frontend/.env.example` para `frontend/.env.local`.

### Endpoints atuais

```text
GET    /                 → informações da API
GET    /docs             → Swagger UI
GET    /docs/openapi.json → contrato OpenAPI
GET    /matches          → lista de partidas
GET    /matches/:id      → detalhe de uma partida
POST   /matches          → cria uma partida
```

### Documentação

O contrato da API é **gerado a partir dos schemas Zod** usados na
validação, então o que é documentado e o que é validado têm a mesma fonte.
Ao alterar um schema, o contrato muda junto — não existe documento
OpenAPI escrito à mão.

Ao alterar a API, atualize o registro em `backend/src/docs/openapi.ts`
junto com o schema correspondente.

### Especificação

- [docs/itapass-documento.md](./docs/itapass-documento.md) — requisitos e
  regras de negócio
- [docs/wireframe/wireframe.md](./docs/wireframe/wireframe.md) — telas e
  fluxos de interface

### Estado atual

Fase atual: **FASE 1 — Partidas básicas** (concluída).