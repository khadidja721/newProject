# Plumber AI Agent Monorepo

This monorepo contains two workspaces: `server` (API/backend) and `web` (frontend app).

## Workspaces

- `server`: Node.js + TypeScript backend
- `web`: React + Vite + TypeScript frontend

## Getting Started

1. Install deps:
   - npm install
2. Run in dev:
   - npm run dev
3. Build all:
   - npm run build

## Environment

- Copy `.env.example` in each workspace to `.env` and fill in values.

## Scripts

- dev: concurrently start server and web
- build: build both workspaces
- lint: run eslint
- test: run tests
