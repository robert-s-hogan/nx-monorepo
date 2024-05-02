'use client';

import React, { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';

interface WithAuthOptions {
  authenticationRequired?: boolean;
}

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>,
  { authenticationRequired = true }: WithAuthOptions = {}
): ComponentType<P> => {
  const WithAuthComponent = (props: P) => {
    const router = useRouter();
    const { currentUser, loading } = useAuth();

    if (loading || (authenticationRequired && !currentUser)) {
      return <div>Loading authentication status...</div>; // or a spinner/loader component
    }

    useEffect(() => {
      // Ensure this code only runs on the client side
      if (!loading && authenticationRequired && !currentUser) {
        router.push('/');
      }
    }, [currentUser, loading, authenticationRequired, router]);

    if (loading || (authenticationRequired && !currentUser)) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${getDisplayName(
    WrappedComponent
  )})`;

  return WithAuthComponent;
};

function getDisplayName(WrappedComponent: ComponentType<any>): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;
