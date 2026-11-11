import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import type { Session, User } from '@supabase/supabase-js';

import { authClient } from './supabase-auth-client';
import type { Role } from './role';

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  role: Role | null;
  loading: boolean;
  signInWithMagicLink: (email: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
  /**
   * Send the sign-in link back to the page the person signed in from,
   * instead of the site's home page. Needed when only some pages are gated
   * (the-hogans): a public home page never loads this provider, so the token
   * in the link would sit unread in the address bar. The page must be
   * covered by the Supabase Redirect URLs allow list (e.g. `https://site/**`).
   */
  returnToCurrentPage?: boolean;
}

export const AuthProvider = ({
  children,
  returnToCurrentPage = false,
}: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  // Role for whichever user it was fetched for, so a stale answer is never
  // shown for someone else and `loading` covers the fetch.
  const [roleFor, setRoleFor] = useState<{ userId: string; role: Role | null } | null>(null);

  useEffect(() => {
    if (!authClient) {
      setLoading(false);
      return;
    }

    authClient.auth.getSession().then(({ data }: { data: { session: Session | null } }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = authClient.auth.onAuthStateChange(
      (_event: string, newSession: Session | null) => {
        setSession(newSession);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const signInWithMagicLink = async (email: string) => {
    if (!authClient) {
      return { error: 'Auth is not configured for this app.' };
    }
    const { error } = await authClient.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo:
          typeof window === 'undefined'
            ? undefined
            : returnToCurrentPage
              ? window.location.origin + window.location.pathname
              : window.location.origin,
      },
    });
    return { error: error?.message ?? null };
  };

  const signOut = async () => {
    await authClient?.auth.signOut();
  };

  const user = session?.user ?? null;
  const userId = user?.id ?? null;
  const accessToken = session?.access_token ?? null;

  // The allowlist is server-only, so ask the app's /api/auth/me for the role.
  // Keyed on the user, not the token, so hourly token refreshes don't refetch.
  useEffect(() => {
    if (!userId || !accessToken) return;
    let cancelled = false;
    fetch('/api/auth/me', { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => (res.ok ? res.json() : { role: null }))
      .catch(() => ({ role: null }))
      .then((body: { role: Role | null }) => {
        if (!cancelled) setRoleFor({ userId, role: body.role ?? null });
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const roleKnown = !userId || roleFor?.userId === userId;
  const role = userId && roleFor?.userId === userId ? roleFor.role : null;

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        role,
        loading: loading || !roleKnown,
        signInWithMagicLink,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
