// Server-only Turso client. Import this only from pages/api/* or scripts — never
// from a client component, since TURSO_AUTH_TOKEN must not reach the browser bundle.
import { createClient, type Client } from '@libsql/client';

declare global {
  // eslint-disable-next-line no-var
  var __play2winffTursoClient: Client | undefined;
}

function createTursoClient(): Client {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    throw new Error(
      'Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN — set them in .env.local (local) or Vercel Environment Variables (production).'
    );
  }

  return createClient({ url, authToken });
}

// Reuse a single client across hot reloads / lambda invocations.
export const db = global.__play2winffTursoClient ?? createTursoClient();

if (process.env.NODE_ENV !== 'production') {
  global.__play2winffTursoClient = db;
}
