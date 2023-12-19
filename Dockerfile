FROM node:18-alpine AS dependencies

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install
COPY .env.example ./.env


FROM node:18-alpine AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
COPY .env.example ./.env
RUN npx prisma generate

RUN yarn build



FROM node:18-alpine AS deploy

WORKDIR /app

ENV NODE_ENV production

COPY --from=build /app/next.config.js ./next.config.js
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY .env.example ./.env

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
