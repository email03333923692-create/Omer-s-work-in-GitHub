import { PrismaClient } from "@prisma/client";
import { execSync } from "node:child_process";
import fs from "node:fs";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  prismaReady: boolean | undefined;
};

function ensureSqliteSchema() {
  if (globalForPrisma.prismaReady) return;

  const url = process.env.DATABASE_URL ?? "";
  const match = url.match(/^file:(.+)$/);
  if (!match) {
    globalForPrisma.prismaReady = true;
    return;
  }

  const dbPath = match[1].startsWith("/")
    ? match[1]
    : `${process.cwd()}/${match[1]}`;

  if (fs.existsSync(dbPath)) {
    globalForPrisma.prismaReady = true;
    return;
  }

  // Push schema for ephemeral filesystems (e.g. Vercel /tmp).
  try {
    execSync("npx --no-install prisma db push --skip-generate --accept-data-loss", {
      stdio: "ignore",
      env: process.env,
    });
  } catch (err) {
    console.warn("[prisma] schema bootstrap failed", err);
  }
  globalForPrisma.prismaReady = true;
}

ensureSqliteSchema();

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
