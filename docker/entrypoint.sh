#!/bin/sh
set -e

# Provision the SQLite schema on first boot if missing.
if [ ! -f /data/dev.db ]; then
  echo "[entrypoint] No DB at /data/dev.db — running prisma db push"
  npx --no-install prisma db push --skip-generate --accept-data-loss
fi

exec "$@"
