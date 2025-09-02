FROM node:20-alpine

WORKDIR /app

# Copy root package metadata and workspace metadata
COPY package*.json ./
COPY server/package*.json ./server/

# Install dependencies for all workspaces
RUN npm ci

# Copy the entire repo (for building server workspace)
COPY . .

# Build server
RUN npm run build -w server

EXPOSE 3000

CMD ["npm", "run", "start", "-w", "server"]

