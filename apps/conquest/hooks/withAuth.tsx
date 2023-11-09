import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthWrapper = (props) => {
    const router = useRouter();
    const { user, isLoading } = useAuth();

    useEffect(() => {
      if (!isLoading && !user) {
        router.replace('/');
        console.log(`Redirecting to /`);
      }
    }, [user, router, isLoading]);

    return !isLoading && user ? <WrappedComponent {...props} /> : null;
  };

  return AuthWrapper;
};

export default withAuth;
