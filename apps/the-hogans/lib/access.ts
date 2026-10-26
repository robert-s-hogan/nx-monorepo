// Which folders of the site need a login, and which groups may open them.
// Groups are @with-nx/auth roles, filled per Vercel project:
//   family  → NEXT_PUBLIC_AUTH_FAMILY_EMAILS
//   limited → NEXT_PUBLIC_AUTH_LIMITED_EMAILS
// The list lives in private-folders.json so scripts/generate-sitemap.mjs can
// leave the same folders out of the sitemap.
import type { Role } from '@with-nx/auth';

import privateFolders from './private-folders.json';

const FOLDERS = privateFolders as Record<string, Role[]>;

/** Roles allowed to open this route, or null when it's public. */
export function rolesForPath(pathname: string): Role[] | null {
  for (const [folder, roles] of Object.entries(FOLDERS)) {
    if (pathname === folder || pathname.startsWith(`${folder}/`)) return roles;
  }
  return null;
}
