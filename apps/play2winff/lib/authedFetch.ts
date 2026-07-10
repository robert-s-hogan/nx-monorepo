import { getAccessToken } from '@with-nx/auth';

// The hooks in ../hooks/*.ts are plain async functions, not components, so
// they can't call the useAuthedFetch() hook — this attaches a Bearer token
// the same way, for use at each hook's write call sites.
export async function authedFetch(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  const token = await getAccessToken();
  const headers = new Headers(init?.headers);
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return fetch(input, { ...init, headers });
}
