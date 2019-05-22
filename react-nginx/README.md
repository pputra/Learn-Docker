# Development
---
## run:
docker build -f Dockerfile.dev .
docker run -p 3000:3000 [id]

## run with hot reload:
### using volumes:
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app [id]
### shortcut using docker compose:
docker-compose up --build

# Production
---
## run:
docker build .
docker run -p 8080:80 [id]