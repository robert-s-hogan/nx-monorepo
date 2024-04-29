import React, { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import { Text } from '@with-nx/generic-ui';

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

    useEffect(() => {
      if (loading) return;

      if (authenticationRequired && !currentUser) {
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
