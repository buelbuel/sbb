FROM oven/bun:latest

WORKDIR /app
COPY . .
RUN bun install --production && bun run build

ENV PORT=8080
EXPOSE 8080

CMD ["bun", "run", "start"]
