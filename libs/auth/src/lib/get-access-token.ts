import { authClient } from './supabase-auth-client';

// Non-hook equivalent of useAuthedFetch's token lookup, for call sites that
// aren't React components/hooks (zustand store actions, plain fetch-wrapper
// modules) and so can't call useAuth().
export async function getAccessToken(): Promise<string | null> {
  if (!authClient) {
    return null;
  }
  const { data } = await authClient.auth.getSession();
  return data.session?.access_token ?? null;
}
