// Server-only Supabase client (service-role key). Import this only from
// pages/api/* — never from a client component, since
// SHOPPING_LIST_SUPABASE_SERVICE_ROLE_KEY must not reach the browser bundle.
// The URL itself isn't secret, so it reuses the existing public env var
// rather than needing a second copy of the same value.
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

declare global {
  // eslint-disable-next-line no-var
  var __shoppingListSupabaseClient: SupabaseClient | undefined;
}

function createSupabaseServerClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SHOPPING_LIST_SUPABASE_URL;
  const serviceRoleKey = process.env.SHOPPING_LIST_SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      'Missing NEXT_PUBLIC_SHOPPING_LIST_SUPABASE_URL or SHOPPING_LIST_SUPABASE_SERVICE_ROLE_KEY — set them in .env.local (local) or Vercel Environment Variables (production).'
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

// Reuse a single client across hot reloads / lambda invocations.
export const db = global.__shoppingListSupabaseClient ?? createSupabaseServerClient();

if (process.env.NODE_ENV !== 'production') {
  global.__shoppingListSupabaseClient = db;
}
