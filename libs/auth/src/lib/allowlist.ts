export type Role = 'family' | 'limited';

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

  if (parseEmailList(process.env.NEXT_PUBLIC_AUTH_FAMILY_EMAILS).includes(normalized)) {
    return 'family';
  }
  if (parseEmailList(process.env.NEXT_PUBLIC_AUTH_LIMITED_EMAILS).includes(normalized)) {
    return 'limited';
  }
  return null;
}
