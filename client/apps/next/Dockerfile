FROM oven/bun:1 as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Copy the rest of the source files into the image.
COPY . .

ENV NODE_ENV=production

RUN bun install

WORKDIR /usr/src/app/client/apps/next

RUN bun install

RUN bun run build

EXPOSE 3000

CMD bun run start











