FROM node:20-alpine

WORKDIR /app

COPY . /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

EXPOSE 3000

CMD ["pnpm", "dev"]
