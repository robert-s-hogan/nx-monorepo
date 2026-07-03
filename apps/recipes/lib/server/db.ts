// Server-only Turso client. Import this only from pages/api/* or scripts — never
// from a client component, since RECIPES_TURSO_AUTH_TOKEN must not reach the
// browser bundle.
import { createClient, type Client } from '@libsql/client';

declare global {
  // eslint-disable-next-line no-var
  var __recipesTursoClient: Client | undefined;
}

function createTursoClient(): Client {
  const url = process.env.RECIPES_TURSO_DATABASE_URL;
  const authToken = process.env.RECIPES_TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    throw new Error(
      'Missing RECIPES_TURSO_DATABASE_URL or RECIPES_TURSO_AUTH_TOKEN — set them in .env.local (local) or Vercel Environment Variables (production).'
    );
  }

  return createClient({ url, authToken });
}

// Reuse a single client across hot reloads / lambda invocations.
export const db = global.__recipesTursoClient ?? createTursoClient();

if (process.env.NODE_ENV !== 'production') {
  global.__recipesTursoClient = db;
}
