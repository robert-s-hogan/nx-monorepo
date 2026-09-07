import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import type { Session, User } from '@supabase/supabase-js';

import { authClient } from './supabase-auth-client';
import { getRoleForEmail, Role } from './allowlist';

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  role: Role | null;
  loading: boolean;
  signInWithMagicLink: (email: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

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
          typeof window !== 'undefined' ? window.location.origin : undefined,
      },
    });
    return { error: error?.message ?? null };
  };

  const signOut = async () => {
    await authClient?.auth.signOut();
  };

  const user = session?.user ?? null;
  const role = getRoleForEmail(user?.email);

  return (
    <AuthContext.Provider
      value={{ user, session, role, loading, signInWithMagicLink, signOut }}
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
