// Client-side Supabase client. Unlike the Turso apps in this monorepo, this
// stays client-side deliberately — the anon key is designed to be public, and
// this app keeps its existing (already-populated) Supabase project rather
// than moving to Turso, so it can keep Supabase Realtime for live sync.
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SHOPPING_LIST_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SHOPPING_LIST_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing NEXT_PUBLIC_SHOPPING_LIST_SUPABASE_URL or NEXT_PUBLIC_SHOPPING_LIST_SUPABASE_ANON_KEY — set them in .env.local.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
