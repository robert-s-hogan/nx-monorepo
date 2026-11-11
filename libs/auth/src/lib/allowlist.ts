import type { Role } from './role';

// Server-only: the email lists are set per Vercel project as
// AUTH_FAMILY_EMAILS / AUTH_LIMITED_EMAILS. No NEXT_PUBLIC_ prefix, so they
// never reach the browser bundle; the client gets its role from /api/auth/me.
function parseEmailList(envValue: string | undefined): string[] {
  return (envValue ?? '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function getRoleForEmail(email: string | null | undefined): Role | null {
  if (!email) {
    return null;
  }
  const normalized = email.trim().toLowerCase();

  if (parseEmailList(process.env.AUTH_FAMILY_EMAILS).includes(normalized)) {
    return 'family';
  }
  if (parseEmailList(process.env.AUTH_LIMITED_EMAILS).includes(normalized)) {
    return 'limited';
  }
  return null;
}
