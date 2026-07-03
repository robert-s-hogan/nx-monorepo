// Server-only Turso client. Import this only from pages/api/* or scripts — never
// from a client component, since DM_TOOLKIT_TURSO_AUTH_TOKEN must not reach the
// browser bundle. Uses app-specific env var names since .env.local is shared
// at the workspace root and already holds play2winff's generic TURSO_* vars.
import { createClient, type Client } from '@libsql/client';

declare global {
  // eslint-disable-next-line no-var
  var __dmToolkitTursoClient: Client | undefined;
}

function createTursoClient(): Client {
  const url = process.env.DM_TOOLKIT_TURSO_DATABASE_URL;
  const authToken = process.env.DM_TOOLKIT_TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    throw new Error(
      'Missing DM_TOOLKIT_TURSO_DATABASE_URL or DM_TOOLKIT_TURSO_AUTH_TOKEN — set them in .env.local (local) or Vercel Environment Variables (production).'
    );
  }

  return createClient({ url, authToken });
}

// Reuse a single client across hot reloads / lambda invocations.
export const db = global.__dmToolkitTursoClient ?? createTursoClient();

if (process.env.NODE_ENV !== 'production') {
  global.__dmToolkitTursoClient = db;
}
