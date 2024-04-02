'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';

import { auth } from '@conquestData/firebaseConfig';
import { AuthContextType, AuthProviderProps } from '@conquestTypes/Auth';

// Create the context with an initial undefined value
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component definition
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // Initial state for isAdmin

  useEffect(() => {
    // Subscribe to the authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (currentUser && user) {
        console.log(`currrentUSer`, currentUser);
      }
      setCurrentUser(user); // Set the current user
      setLoading(false); // Update the loading state
    });

    // Clean up the subscription on component unmount
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    isAdmin, // Include isAdmin in the context value
  };

  // Render children wrapped in the AuthContext provider
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
