import type { NextApiRequest } from 'next';

import { authClient } from './supabase-auth-client';
import { getRoleForEmail, Role } from './allowlist';

// Server-side check for API routes — verifies the Bearer token against
// Supabase directly rather than trusting anything the client claims about
// itself, since RequireAuth only gates page rendering, not the API.
//
// Returns the verified email alongside the role for routes that need to key
// data per-user (e.g. radtech-tracker's single-row-per-email progress
// table) rather than just gate on role membership.
export async function getUserFromRequest(
  req: NextApiRequest
): Promise<{ email: string; role: Role | null } | null> {
  if (!authClient) {
    return null;
  }

  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith('Bearer ')
    ? authHeader.slice('Bearer '.length)
    : null;
  if (!token) {
    return null;
  }

  const { data, error } = await authClient.auth.getUser(token);
  if (error || !data.user?.email) {
    return null;
  }

  return { email: data.user.email, role: getRoleForEmail(data.user.email) };
}

export async function getRoleFromRequest(
  req: NextApiRequest
): Promise<Role | null> {
  const user = await getUserFromRequest(req);
  return user?.role ?? null;
}

export async function requireRole(
  req: NextApiRequest,
  allowedRoles: Role[]
): Promise<boolean> {
  const role = await getRoleFromRequest(req);
  return role !== null && allowedRoles.includes(role);
}
