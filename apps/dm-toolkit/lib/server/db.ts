// Server-only Supabase client (service-role key). Import this only from
// pages/api/* — never from a client component, since
// DM_TOOLKIT_SUPABASE_SERVICE_ROLE_KEY must not reach the browser bundle.
// Uses app-specific env var names since .env.local is shared at the workspace
// root alongside other apps' backend credentials.
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

declare global {
  // eslint-disable-next-line no-var
  var __dmToolkitSupabaseClient: SupabaseClient | undefined;
}

function createSupabaseServerClient(): SupabaseClient {
  const url = process.env.DM_TOOLKIT_SUPABASE_URL;
  const serviceRoleKey = process.env.DM_TOOLKIT_SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      'Missing DM_TOOLKIT_SUPABASE_URL or DM_TOOLKIT_SUPABASE_SERVICE_ROLE_KEY — set them in .env.local (local) or Vercel Environment Variables (production).'
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

// Reuse a single client across hot reloads / lambda invocations.
export const db = global.__dmToolkitSupabaseClient ?? createSupabaseServerClient();

if (process.env.NODE_ENV !== 'production') {
  global.__dmToolkitSupabaseClient = db;
}
