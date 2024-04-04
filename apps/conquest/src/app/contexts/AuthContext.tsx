// Original path: apps/conquest/src/app/contexts/AuthContext.tsx
'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../../../../libs/firebase/src/lib/firebase-config';
import { AuthContextType, AuthProviderProps } from '../types';

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
      if (currentUser && user) {
        console.log(`currrentUSer`, currentUser);
      }
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};