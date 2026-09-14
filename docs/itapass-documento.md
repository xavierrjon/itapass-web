# ItaPass — Sistema de Venda e Validação de Ingressos de Futebol Local

**Documento:** Especificação e Documentação do Sistema  
**Versão:** 1.0  
**Status:** Em desenvolvimento

---

# 1. Introdução

## 1.1 Identificação do sistema

O **ItaPass** é um sistema web destinado à comercialização e validação de ingressos para partidas de futebol local.

A solução foi concebida para centralizar o processo de organização de partidas, disponibilização de ingressos, compra por torcedores e controle de acesso aos eventos.

O sistema será composto por uma aplicação web para interação com os usuários e uma API responsável pelo processamento das regras de negócio e pela persistência das informações.

---

# 2. Descrição do Projeto

## 2.1 Contexto

A organização de partidas de futebol local pode envolver processos manuais para divulgação de eventos, controle de ingressos vendidos e conferência dos ingressos na entrada.

O ItaPass propõe uma solução digital para organizar esse fluxo, permitindo que o organizador cadastre uma partida e disponibilize seus ingressos para venda. O torcedor poderá consultar as partidas disponíveis, realizar a compra e receber um ingresso digital com QR Code.

Na entrada do evento, o organizador poderá realizar a leitura do QR Code e verificar a validade do ingresso antes de autorizar o acesso.

## 2.2 Problema

Organizadores de partidas locais podem enfrentar dificuldades para controlar a venda de ingressos e realizar a conferência dos participantes, principalmente quando esses processos são realizados de forma manual.

Para o torcedor, processos pouco estruturados também podem dificultar a consulta de informações da partida e a obtenção do ingresso.

## 2.3 Solução proposta

O ItaPass fornecerá uma plataforma centralizada para:

- Cadastro e gerenciamento de partidas;
- Disponibilização de ingressos;
- Compra de ingressos por torcedores;
- Geração de ingressos digitais;
- Identificação por QR Code;
- Validação dos ingressos na entrada;
- Consulta de informações básicas sobre vendas e público.

---

# 3. Objetivos

## 3.1 Objetivo geral

Desenvolver um sistema web que simplifique o processo de venda e validação de ingressos para partidas de futebol local.

## 3.2 Objetivos específicos

- Permitir que organizadores cadastrem partidas;
- Permitir a definição de preço e quantidade de ingressos;
- Permitir que torcedores consultem partidas disponíveis;
- Permitir a compra de ingressos pela plataforma;
- Gerar ingressos digitais associados às compras;
- Utilizar QR Code para identificação dos ingressos;
- Permitir a validação dos ingressos na entrada;
- Disponibilizar informações básicas sobre vendas e público.

---

# 4. Público e Usuários do Sistema

O sistema possui dois perfis de usuário.

## 4.1 Organizador

Usuário responsável pelo gerenciamento das partidas e pelo controle de entrada nos eventos.

### Responsabilidades

- Cadastrar partidas;
- Gerenciar partidas cadastradas;
- Definir preço e quantidade de ingressos;
- Acompanhar vendas;
- Consultar métricas básicas;
- Validar ingressos.

## 4.2 Torcedor

Usuário que utiliza a plataforma para encontrar partidas e adquirir ingressos.

### Responsabilidades

- Criar uma conta;
- Acessar a plataforma;
- Consultar partidas;
- Visualizar informações dos eventos;
- Comprar ingressos;
- Consultar seus ingressos;
- Apresentar o QR Code na entrada.

---

# 5. Escopo

## 5.1 Escopo funcional

O sistema contemplará inicialmente:

1. Autenticação de usuários;
2. Controle de acesso por perfil;
3. Cadastro de partidas;
4. Gerenciamento de partidas;
5. Consulta de partidas;
6. Compra de ingressos;
7. Geração de ingressos digitais;
8. Geração e leitura de QR Code;
9. Validação de ingressos;
10. Consulta de vendas;
11. Consulta de métricas básicas de público.

## 5.2 Fora do escopo inicial

Para manter o desenvolvimento do MVP controlado, os seguintes recursos não fazem parte da primeira versão:

- Integração com gateways de pagamento reais;
- Sistema de reembolso;
- Venda de produtos;
- Programa de fidelidade;
- Notificações push;
- Integração com redes sociais;
- Relatórios financeiros avançados;
- Integração com sistemas externos de controle de acesso.

Esses recursos poderão ser avaliados em versões futuras.

---

# 6. Requisitos Funcionais

## RF01 — Cadastro de usuário

O sistema deve permitir que um novo usuário crie uma conta informando os dados necessários para identificação e acesso à plataforma.

## RF02 — Autenticação

O sistema deve permitir que usuários cadastrados realizem login e acessem as funcionalidades correspondentes ao seu perfil.

## RF03 — Cadastro de partida

O sistema deve permitir que um organizador cadastre uma partida informando equipes, data, horário, local, preço e quantidade de ingressos.

## RF04 — Gerenciamento de partida

O sistema deve permitir que o organizador consulte, edite e cancele partidas sob sua responsabilidade.

## RF05 — Consulta de partidas

O sistema deve permitir que torcedores visualizem as partidas disponíveis para compra.

## RF06 — Consulta de detalhes

O sistema deve apresentar as informações detalhadas de uma partida antes da realização da compra.

## RF07 — Compra de ingresso

O sistema deve permitir que um torcedor selecione a quantidade de ingressos desejada e confirme a compra.

## RF08 — Controle de disponibilidade

O sistema deve controlar a quantidade de ingressos disponíveis e impedir vendas acima do limite definido para a partida.

## RF09 — Geração de ingresso

Após uma compra concluída, o sistema deve gerar os ingressos correspondentes e associá-los ao torcedor e à partida.

## RF10 — QR Code

Cada ingresso deve possuir um identificador único representado por um QR Code.

## RF11 — Validação

O sistema deve permitir que o organizador valide um ingresso por meio da leitura do QR Code.

## RF12 — Controle de utilização

O sistema deve impedir que um mesmo ingresso seja validado mais de uma vez.

## RF13 — Consulta de ingressos

O sistema deve permitir que o torcedor consulte os ingressos adquiridos.

## RF14 — Métricas

O sistema deve disponibilizar ao organizador informações básicas sobre vendas e validações.

---

# 7. Requisitos Não Funcionais

## RNF01 — Usabilidade

A interface deve apresentar navegação simples e informações organizadas, reduzindo a quantidade de etapas necessárias para realizar as principais operações.

## RNF02 — Responsividade

A aplicação deve ser responsiva e adequada para utilização em dispositivos desktop e móveis.

## RNF03 — Segurança

O sistema deve proteger as credenciais dos usuários e restringir operações de acordo com as permissões de cada perfil.

## RNF04 — Integridade dos dados

As operações de compra e validação devem preservar a consistência das informações armazenadas.

## RNF05 — Desempenho

As operações principais da API devem apresentar tempo de resposta adequado para utilização em condições normais de operação.

## RNF06 — Manutenibilidade

O código deve ser organizado em módulos e componentes que facilitem manutenção, testes e evolução do sistema.

## RNF07 — Escalabilidade

A arquitetura deve permitir a evolução da aplicação para um número maior de usuários, partidas e ingressos.

---

# 8. User Stories

## US01 — Cadastro de usuário

**Como** usuário,  
**quero** criar uma conta no ItaPass,  
**para** poder utilizar as funcionalidades disponíveis para meu perfil.

### Critérios de aceitação

- O sistema deve permitir o preenchimento dos dados obrigatórios;
- O sistema deve validar os dados informados;
- O sistema não deve permitir cadastro com e-mail já utilizado;
- O cadastro deve ser concluído somente quando os dados forem válidos.

---

## US02 — Login

**Como** usuário cadastrado,  
**quero** realizar login no sistema,  
**para** acessar as funcionalidades disponíveis para meu perfil.

### Critérios de aceitação

- O sistema deve solicitar as credenciais necessárias;
- O sistema deve validar as credenciais;
- O sistema deve informar quando as credenciais forem inválidas;
- O usuário deve receber as permissões correspondentes ao seu perfil após a autenticação.

---

## US03 — Cadastrar partida

**Como** organizador,  
**quero** cadastrar uma partida,  
**para** disponibilizar o evento para os torcedores.

### Critérios de aceitação

- O organizador deve informar os times;
- Deve ser possível informar data e horário;
- Deve ser possível informar o local;
- Deve ser possível definir o preço do ingresso;
- Deve ser possível definir a quantidade de ingressos;
- O sistema deve impedir o cadastro quando os dados obrigatórios forem inválidos ou estiverem ausentes.

---

## US04 — Gerenciar partidas

**Como** organizador,  
**quero** gerenciar as partidas cadastradas por mim,  
**para** manter os dados dos eventos atualizados.

### Critérios de aceitação

- O organizador deve visualizar suas partidas;
- O organizador deve poder editar informações permitidas da partida;
- O organizador deve poder cancelar uma partida;
- Uma partida cancelada não deve permitir novas compras.

---

## US05 — Visualizar partidas disponíveis

**Como** torcedor,  
**quero** visualizar as partidas disponíveis,  
**para** escolher um evento para assistir.

### Critérios de aceitação

- O sistema deve listar as partidas disponíveis;
- A listagem deve apresentar informações resumidas;
- Partidas esgotadas devem ser identificadas;
- O torcedor deve conseguir acessar os detalhes de uma partida.

---

## US06 — Consultar detalhes da partida

**Como** torcedor,  
**quero** consultar os detalhes de uma partida,  
**para** decidir se desejo adquirir um ingresso.

### Critérios de aceitação

- O sistema deve apresentar os times;
- Deve apresentar data e horário;
- Deve apresentar o local;
- Deve apresentar o preço;
- Deve apresentar a disponibilidade de ingressos;
- A opção de compra deve estar disponível quando houver ingressos.

---

## US07 — Comprar ingresso

**Como** torcedor,  
**quero** comprar ingressos para uma partida,  
**para** garantir minha entrada no evento.

### Critérios de aceitação

- O sistema deve permitir selecionar a quantidade;
- A quantidade solicitada não pode ultrapassar a disponibilidade;
- O sistema deve calcular o valor total da compra;
- O torcedor deve confirmar a operação;
- A disponibilidade deve ser atualizada após a conclusão da compra.

---

## US08 — Receber ingresso com QR Code

**Como** torcedor,  
**quero** receber um ingresso digital com QR Code após a compra,  
**para** utilizá-lo para acessar a partida.

### Critérios de aceitação

- Cada ingresso deve possuir um identificador único;
- O sistema deve gerar um QR Code associado ao ingresso;
- O ingresso deve estar vinculado à compra;
- O ingresso deve estar vinculado à partida;
- O ingresso deve estar vinculado ao torcedor;
- O ingresso deve possuir um status de utilização.

---

## US09 — Visualizar meus ingressos

**Como** torcedor,  
**quero** visualizar meus ingressos adquiridos,  
**para** consultar e apresentar meu ingresso no evento.

### Critérios de aceitação

- O sistema deve listar os ingressos do torcedor;
- Cada ingresso deve apresentar a partida correspondente;
- O QR Code deve estar disponível;
- O sistema deve apresentar o status do ingresso;
- Ingressos utilizados devem ser identificados.

---

## US10 — Validar ingresso

**Como** organizador,  
**quero** validar um ingresso por meio do QR Code,  
**para** verificar se o torcedor possui autorização para entrar na partida.

### Critérios de aceitação

- O sistema deve permitir a leitura do QR Code;
- O sistema deve identificar o ingresso;
- O sistema deve verificar a existência do ingresso;
- O sistema deve verificar se o ingresso pertence à partida;
- O sistema deve verificar se o ingresso já foi utilizado;
- Um ingresso válido deve ser marcado como utilizado;
- Um ingresso inválido ou já utilizado deve ser recusado.

---

## US11 — Acompanhar vendas

**Como** organizador,  
**quero** acompanhar as vendas dos ingressos,  
**para** verificar o desempenho da partida.

### Critérios de aceitação

- O sistema deve apresentar o total de ingressos;
- Deve apresentar a quantidade vendida;
- Deve apresentar a quantidade disponível;
- Deve apresentar o valor total das vendas;
- As informações devem considerar apenas as partidas do organizador.

---

## US12 — Visualizar métricas de público

**Como** organizador,  
**quero** visualizar métricas básicas de público,  
**para** acompanhar a quantidade de ingressos efetivamente utilizados.

### Critérios de aceitação

- O sistema deve apresentar a quantidade de ingressos vendidos;
- Deve apresentar a quantidade de ingressos validados;
- Deve apresentar a quantidade de ingressos ainda não utilizados;
- Os dados devem ser relacionados às partidas do organizador;
- As métricas devem ser atualizadas conforme as validações forem realizadas.

---

# 9. Regras de Negócio

## RN01 — Perfil de usuário

Um usuário deve possuir um perfil de acesso definido como **Organizador** ou **Torcedor**.

## RN02 — Permissões

Operações administrativas de partidas e validação de ingressos devem ser restritas ao perfil de organizador.

## RN03 — Compra

A compra de ingressos deve ser realizada por usuários com perfil de torcedor.

## RN04 — Disponibilidade

A quantidade de ingressos vendidos não pode ultrapassar a quantidade disponibilizada para a partida.

## RN05 — Identificação

Cada ingresso deve possuir um identificador único.

## RN06 — Associação do ingresso

Um ingresso deve estar associado a uma única partida, uma compra e um torcedor.

## RN07 — Validação única

Um ingresso validado não pode ser utilizado novamente.

## RN08 — Partida cancelada

Uma partida cancelada não pode receber novas compras.

## RN09 — Validação de evento

O ingresso somente pode ser validado para a partida à qual está associado.

## RN10 — Controle de acesso

Um organizador somente deve gerenciar e consultar as partidas sob sua responsabilidade.

---

# 10. Fluxos Principais

## 10.1 Fluxo de cadastro de partida

```text
Organizador realiza login
        ↓
Acessa gerenciamento de partidas
        ↓
Seleciona cadastro de partida
        ↓
Informa dados do evento
        ↓
Informa preço e quantidade
        ↓
Sistema valida os dados
        ↓
Partida cadastrada
        ↓
Partida disponibilizada para consulta
```

## 10.2 Fluxo de compra

```text
Torcedor realiza login
        ↓
Consulta partidas
        ↓
Seleciona uma partida
        ↓
Visualiza detalhes
        ↓
Seleciona quantidade
        ↓
Confirma compra
        ↓
Sistema registra compra
        ↓
Sistema gera ingresso
        ↓
Sistema disponibiliza QR Code
```

## 10.3 Fluxo de validação

```text
Organizador acessa validação
        ↓
Realiza leitura do QR Code
        ↓
Sistema identifica o ingresso
        ↓
Verifica existência
        ↓
Verifica partida
        ↓
Verifica status
        ↓
Ingresso válido?
   ┌────┴────┐
  SIM       NÃO
   ↓          ↓
Marca como   Recusa
utilizado     entrada
   ↓
Entrada autorizada
```

---

# 11. Arquitetura do Sistema

A aplicação será estruturada em uma arquitetura cliente-servidor, separando a camada de apresentação da camada de regras de negócio e persistência.

```text
┌─────────────────────────────────────────┐
│                CLIENTE                  │
│                                         │
│          Next.js + React                │
│                                         │
│  Páginas • Componentes • Formulários    │
│  Interface • Consumo da API             │
└────────────────────┬────────────────────┘
                     │
                     │ HTTP / REST
                     ▼
┌─────────────────────────────────────────┐
│                 API                     │
│                                         │
│            Node.js + Express            │
│                                         │
│  Routes → Controllers → Services        │
│                     ↓                   │
│                  Prisma                 │
└────────────────────┬────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────┐
│               DATABASE                  │
│                                         │
│                PostgreSQL               │
│                                         │
│ Users • Matches • Purchases • Tickets   │
└─────────────────────────────────────────┘
```

---

# 12. Stack Tecnológica

## 12.1 Frontend

### Next.js

Framework baseado em React utilizado para construção da aplicação web.

Responsabilidades:

- Estrutura da aplicação;
- Roteamento;
- Renderização das páginas;
- Organização dos componentes;
- Comunicação com a API.

### React

Biblioteca utilizada para construção da interface e dos componentes da aplicação.

Responsabilidades:

- Componentização;
- Gerenciamento de estado da interface;
- Interações do usuário;
- Criação de componentes reutilizáveis.

---

## 12.2 Backend

### Node.js

Ambiente de execução utilizado para executar o servidor da aplicação.

### Express

Framework utilizado para implementação da API REST.

Responsabilidades:

- Definição de endpoints;
- Recebimento e tratamento de requisições;
- Aplicação das regras de negócio;
- Comunicação com o banco de dados;
- Retorno das respostas para o frontend.

---

## 12.3 Persistência

### PostgreSQL

Sistema gerenciador de banco de dados relacional utilizado para persistência dos dados da aplicação.

Os principais dados armazenados serão:

- Usuários;
- Partidas;
- Compras;
- Ingressos;
- Informações de validação.

### Prisma

ORM utilizado para comunicação entre a aplicação backend e o PostgreSQL.

Responsabilidades:

- Modelagem das entidades;
- Definição dos relacionamentos;
- Consultas ao banco;
- Operações de criação, leitura, atualização e exclusão;
- Gerenciamento das migrations.

---

## 12.4 Design e interface

### Figma

Utilizado para planejamento e desenvolvimento da interface visual do sistema.

O design será utilizado como referência para implementação dos componentes e páginas da aplicação.

---

## 12.5 Controle de versão

### Git

Utilizado para controle de versão do código-fonte.

### GitHub

Utilizado para hospedagem do código e colaboração entre os integrantes da equipe.

---

# 13. Modelo Conceitual de Dados

O sistema terá inicialmente as seguintes entidades principais:

## 13.1 User

Representa um usuário cadastrado.

Atributos principais:

- `id`
- `name`
- `email`
- `password`
- `role`
- `createdAt`
- `updatedAt`

Possíveis valores para `role`:

- `ORGANIZER`
- `FAN`

---

## 13.2 Match

Representa uma partida cadastrada.

Atributos principais:

- `id`
- `homeTeam`
- `awayTeam`
- `date`
- `time`
- `location`
- `ticketPrice`
- `ticketQuantity`
- `status`
- `organizerId`
- `createdAt`
- `updatedAt`

---

## 13.3 Purchase

Representa uma compra realizada por um torcedor.

Atributos principais:

- `id`
- `fanId`
- `matchId`
- `quantity`
- `totalAmount`
- `status`
- `createdAt`

---

## 13.4 Ticket

Representa um ingresso individual.

Atributos principais:

- `id`
- `code`
- `purchaseId`
- `fanId`
- `matchId`
- `status`
- `validatedAt`
- `createdAt`

---

# 14. Relacionamentos Principais

```text
USER
 │
 ├── 1:N ── MATCH
 │           │
 │           └── 1:N ── PURCHASE
 │                         │
 └── 1:N ─────────────────┤
                           │
                           └── 1:N ── TICKET
```

### Relacionamentos

- Um **Organizador** pode cadastrar várias partidas;
- Uma **Partida** pertence a um organizador;
- Um **Torcedor** pode realizar várias compras;
- Uma **Compra** pertence a um torcedor;
- Uma **Compra** está relacionada a uma partida;
- Uma **Compra** pode gerar vários ingressos;
- Um **Ingresso** pertence a uma única compra;
- Um **Ingresso** está associado a um torcedor e a uma partida.

---

# 15. Organização do Backend

A API deverá ser organizada de forma modular, separando responsabilidades.

Estrutura sugerida:

```text
backend/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── match.controller.js
│   │   ├── purchase.controller.js
│   │   └── ticket.controller.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── match.service.js
│   │   ├── purchase.service.js
│   │   └── ticket.service.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── match.routes.js
│   │   ├── purchase.routes.js
│   │   └── ticket.routes.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── role.middleware.js
│   │
│   ├── app.js
│   └── server.js
│
├── prisma/
│   └── schema.prisma
│
└── package.json
```

A separação entre **rotas, controllers, services e acesso ao banco** tem como objetivo manter as responsabilidades organizadas e facilitar a manutenção do código.

---

# 16. Organização do Frontend

Estrutura sugerida:

```text
frontend/
├── src/
│   ├── app/
│   │   ├── login/
│   │   ├── cadastro/
│   │   ├── partidas/
│   │   ├── ingressos/
│   │   └── organizador/
│   │
│   ├── components/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Header/
│   │   ├── MatchCard/
│   │   └── TicketCard/
│   │
│   ├── services/
│   │   └── api.js
│   │
│   └── ...
│
└── package.json
```

---

# 17. API — Módulos Principais

A API REST será organizada de acordo com os principais recursos do sistema.

## Autenticação

Exemplos de operações:

```text
POST /auth/register
POST /auth/login
```

## Partidas

```text
GET    /matches
GET    /matches/:id
POST   /matches
PUT    /matches/:id
DELETE /matches/:id
```

## Compras

```text
POST /purchases
GET  /purchases
GET  /purchases/:id
```

## Ingressos

```text
GET  /tickets
GET  /tickets/:id
POST /tickets/:id/validate
```

Os endpoints apresentados representam a estrutura inicial da API e poderão ser ajustados durante a implementação.

---

# 18. Segurança

A aplicação deverá considerar mecanismos básicos de segurança, incluindo:

- Armazenamento seguro de senhas;
- Autenticação de usuários;
- Controle de autorização por perfil;
- Validação dos dados recebidos pela API;
- Proteção das rotas privadas;
- Identificação segura dos ingressos;
- Validação do ingresso no servidor;
- Prevenção de reutilização de ingressos.

A validação de um ingresso não deverá depender exclusivamente das informações apresentadas no frontend. A confirmação deverá ser realizada pelo backend consultando os dados persistidos.

---

# 19. MVP

A primeira versão do sistema terá como foco validar o funcionamento do fluxo essencial:

```text
CADASTRAR PARTIDA
        ↓
VISUALIZAR PARTIDA
        ↓
COMPRAR INGRESSO
        ↓
GERAR INGRESSO
        ↓
GERAR QR CODE
        ↓
VALIDAR INGRESSO
```

O MVP deve priorizar a implementação correta desse fluxo antes da inclusão de funcionalidades secundárias.

---

# 20. Evolução Futura

Após a validação do MVP, o sistema poderá receber novas funcionalidades, como:

- Integração com pagamentos online;
- Cancelamento e reembolso;
- Notificações;
- Recuperação de senha;
- Histórico detalhado de compras;
- Relatórios avançados;
- Dashboard completo para organizadores;
- Diferentes categorias de ingressos;
- Controle de lotes;
- Cupons de desconto;
- Melhorias no gerenciamento de eventos.

---

# 21. Considerações Finais

O ItaPass foi projetado para solucionar o processo de comercialização e controle de ingressos de partidas de futebol local por meio de uma plataforma digital.

A arquitetura proposta separa a interface, a API e a persistência de dados, utilizando **Next.js e React** no frontend, **Node.js e Express** no backend e **Prisma com PostgreSQL** para gerenciamento dos dados.

O desenvolvimento será orientado pelas User Stories, requisitos e regras de negócio definidos neste documento, mantendo como prioridade a implementação e validação do fluxo principal de **cadastro de partida, compra de ingresso e validação por QR Code**.