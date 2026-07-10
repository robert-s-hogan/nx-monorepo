export { AuthProvider, useAuth } from './lib/auth-context';
export { RequireAuth } from './lib/require-auth';
export { useAuthedFetch } from './lib/use-authed-fetch';
export { getAccessToken } from './lib/get-access-token';
export { getRoleFromRequest, requireRole } from './lib/verify-request';
export type { Role } from './lib/allowlist';
