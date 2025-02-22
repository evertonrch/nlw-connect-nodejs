# NLW Connect: Sistema de Indicação para Eventos

Este é um sistema de indicação para eventos, desenvolvido durante o evento NLW Connect da Rocketseat.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Fastify**
- **Zod**
- **Drizzle ORM**
- **PostgreSQL**
- **Redis**
- **Docker & Compose**
- **Swagger**

## 📌 Funcionalidades

- **Inscrições de usuários** - Criar e gerenciar inscrições de usuários.
- **Rastreamento de Indicações** - Contabilizar e armazenar indicações realizadas.
- **Ranking de indicações** - Relatório dos usuários com mais indicações.
- **Posição do usuário no ranking** - Obtém a posição do usuário no ranking.

## 📦 Instalação e Execução

### 🏗️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- **Docker** e **Docker Compose** (para rodar o postgres e redis)
- **Node.js** e **npm**

### 📥 Clonando o Repositório

```bash
  git clone https://github.com/seu-usuario/sistema-indicacao-eventos.git
  cd sistema-indicacao-eventos
```

### 🐳 Executando com Docker

```bash
  docker compose up -d
```
Isso inicializará os containers do PostgreSQL e Redis.

### 🔧 Executando Localmente (Sem Docker)

1. **Instale as dependências**
```bash
  npm install
```

2. **Configure as variáveis de ambiente** (configure às variáveis definidas no env.ts)

3. **Execute as migrações do banco** (o comando a seguir tem como base o script drizzle.config.ts)
```bash
  npx drizzle-kit generate && npx drizzle-kit migrate
```

4. Faça o build da aplicação (Opcional, para deploy)
```
  npm run build
```
Isso transpilará os arquivos TypeScript para JavaScript na pasta dist.

5. **Inicie o servidor**
```bash
  npm run dev
```

O servidor será iniciado em `http://localhost:<ENV_PORT>`.

## 📌 Endpoints da API

A API está documentada usando Swagger. Após iniciar o projeto, acesse:
```
http://localhost:<ENV_PORT>/docs
```

---
💡 _Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request._

