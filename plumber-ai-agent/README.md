Plumber AI Agent Monorepo
=========================

This monorepo contains the `server` (Node + TypeScript + Prisma) and `web` (Vite + React + TypeScript) workspaces.

Getting Started
---------------

1. Install dependencies:

   - npm install

2. Create environment files from examples:

   - cp server/.env.example server/.env
   - cp web/.env.example web/.env

3. Run development servers concurrently:

   - npm run dev

Scripts
-------

- dev: Runs server and web concurrently
- build: Builds both workspaces
- lint: Runs ESLint across server and web sources
- test: Runs tests

Workspaces
----------

- server: API server with Express, Prisma, and TypeScript
- web: Frontend app with React, Vite, and TypeScript

