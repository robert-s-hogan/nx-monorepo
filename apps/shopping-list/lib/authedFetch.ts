import { getAccessToken } from '@with-nx/auth';

// useStore's write actions are zustand store functions, not components, so
// they can't call the useAuthedFetch() hook — this attaches a Bearer token
// the same way, for use at each write call site.
export async function authedFetch(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  const token = await getAccessToken();
  const headers = new Headers(init?.headers);
  headers.set('Content-Type', 'application/json');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return fetch(input, { ...init, headers });
}
