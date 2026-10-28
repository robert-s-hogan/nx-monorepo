// Server-only Turso client. Import this only from pages/api/* or scripts —
// never from a client component, since RADTECH_TRACKER_TURSO_AUTH_TOKEN
// must not reach the browser bundle.
import { createClient, type Client } from '@libsql/client';

declare global {
  // eslint-disable-next-line no-var
  var __radtechTrackerTursoClient: Client | undefined;
}

function createTursoClient(): Client {
  const url = process.env.RADTECH_TRACKER_TURSO_DATABASE_URL;
  const authToken = process.env.RADTECH_TRACKER_TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    throw new Error(
      'Missing RADTECH_TRACKER_TURSO_DATABASE_URL or RADTECH_TRACKER_TURSO_AUTH_TOKEN — set them in .env.local (local) or Vercel Environment Variables (production).',
    );
  }

  return createClient({ url, authToken });
}

// Created on first use, not at import, so the API route's login check runs
// (and answers 401) even when the env vars are missing. Reused across hot
// reloads / lambda invocations.
export function getDb(): Client {
  if (!global.__radtechTrackerTursoClient) {
    global.__radtechTrackerTursoClient = createTursoClient();
  }
  return global.__radtechTrackerTursoClient;
}
