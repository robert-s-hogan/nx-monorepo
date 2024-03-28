'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { auth } from '@data/firebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';

// Define the type for your context to include only the current user and loading state
type AuthContextType = {
  currentUser: User | null;
  loading: boolean;
  isAdmin: boolean;
};

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

// Define the props type for your AuthProvider component
type AuthProviderProps = {
  children: ReactNode;
};

// AuthProvider component definition
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // Initial state for isAdmin

  useEffect(() => {
    // Subscribe to the authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
