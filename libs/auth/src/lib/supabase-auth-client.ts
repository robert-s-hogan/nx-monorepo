// Shared identity provider for every app that gates on login. This is a
// separate concern from wherever an app's actual data lives (Turso,
// its own Supabase project, etc.) — apps just need this project's Auth
// service, not its database.
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_AUTH_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_AUTH_SUPABASE_ANON_KEY;

export const authClient: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

if (!authClient && typeof window !== 'undefined') {
  console.warn(
    '@with-nx/auth: NEXT_PUBLIC_AUTH_SUPABASE_URL / NEXT_PUBLIC_AUTH_SUPABASE_ANON_KEY are not set — sign-in will not work.'
  );
}
