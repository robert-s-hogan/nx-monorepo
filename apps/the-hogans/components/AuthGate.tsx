import { ReactNode } from 'react';
import { AuthProvider, RequireAuth, Role } from '@with-nx/auth';

// Login wall for private folders (see lib/access.ts). _app loads this with
// next/dynamic only on those routes, so public pages never download the
// Supabase client.
export default function AuthGate({
  roles,
  children,
}: {
  roles: Role[];
  children: ReactNode;
}) {
  if (
    !process.env.NEXT_PUBLIC_AUTH_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_AUTH_SUPABASE_ANON_KEY
  ) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-center">
        <p>Sign-in isn&apos;t set up for this site yet.</p>
      </div>
    );
  }

  return (
    <AuthProvider returnToCurrentPage>
      <RequireAuth allowedRoles={roles}>{children}</RequireAuth>
    </AuthProvider>
  );
}
