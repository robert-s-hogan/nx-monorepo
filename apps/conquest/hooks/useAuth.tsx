import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/router';

type AuthContextType = {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await fetch('http://localhost:3333/api/auth/user', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUser(data);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, []);

  const login = async (email: string, password: string) => {
    console.log(`Logging in with email: ${email} and password: ${password}`);
    const response = await fetch('http://localhost:3333/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login response data:', data); // Add this line

      setUser(data);
      localStorage.setItem('token', data.access_token);
      router.push('/admin');
      return data;
    } else {
      const errorText = await response.text(); // Add this line
      console.error('Authentication failed:', errorText); // Modify this line

      throw new Error('Authentication failed');
    }
  };

  const logout = () => {
    console.log(`Logging out user: ${user?.email}`);
    setUser(null);
    localStorage.removeItem('token');
    console.log(`loacal storage: ${localStorage.getItem('token')}`);
    router.push('/');
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useIsAuthenticated = () => {
  const auth = useAuth();
  return !!auth.user;
};
