# syntax=docker/dockerfile:1.7

# ---------- deps ----------
FROM node:22-alpine AS deps
WORKDIR /app
RUN apk add --no-cache openssl
COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm ci --no-audit --no-fund

# ---------- builder ----------
FROM node:22-alpine AS builder
WORKDIR /app
RUN apk add --no-cache openssl
ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URL="file:./dev.db"
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

# ---------- runner ----------
FROM node:22-alpine AS runner
WORKDIR /app
RUN apk add --no-cache openssl
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV DATABASE_URL="file:/data/dev.db"

# Non-root user
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# App: standalone server + static + public assets
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Prisma client + schema for runtime + entrypoint
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/node_modules/prisma ./node_modules/prisma
COPY --from=builder /app/prisma ./prisma
COPY --chown=nextjs:nodejs docker/entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Persistent volume for SQLite
RUN mkdir -p /data && chown -R nextjs:nodejs /data
VOLUME ["/data"]

USER nextjs
EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["node", "server.js"]
