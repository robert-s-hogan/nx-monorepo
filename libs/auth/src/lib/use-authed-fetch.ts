import { useAuth } from './auth-context';

// Attaches the current session's access token as a Bearer header, so API
// routes can verify who's calling (see verify-request.ts) instead of only
// relying on the client hiding buttons for the wrong role.
export function useAuthedFetch() {
  const { session } = useAuth();

  return (input: RequestInfo | URL, init: RequestInit = {}) => {
    const headers = new Headers(init.headers);
    if (session?.access_token) {
      headers.set('Authorization', `Bearer ${session.access_token}`);
    }
    return fetch(input, { ...init, headers });
  };
}
