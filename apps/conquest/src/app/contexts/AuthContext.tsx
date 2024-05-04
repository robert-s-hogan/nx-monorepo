'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@with-nx/firebase';

export type AuthContextType = {
  currentUser: User | null;
  loading: boolean;
  isAdmin: boolean;
};

export type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Always set loading to false when the auth state is determined
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const value = {
    currentUser,
    loading,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
