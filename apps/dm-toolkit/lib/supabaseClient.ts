// Client-side Supabase client — Realtime subscriptions ONLY. Never used to
// query/write tables directly (all reads/writes go through pages/api/* using
// the server-only service-role client in lib/server/db.ts). Tables have RLS
// enabled with zero policies, so this anon key has no table access anyway —
// see supabase/migrations/0001_init.sql.
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_DM_TOOLKIT_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_DM_TOOLKIT_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing NEXT_PUBLIC_DM_TOOLKIT_SUPABASE_URL or NEXT_PUBLIC_DM_TOOLKIT_SUPABASE_ANON_KEY — set them in .env.local.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
