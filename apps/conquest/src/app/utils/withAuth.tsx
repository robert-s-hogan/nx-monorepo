import React, { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correctly import useRouter from next/navigation
import { useAuth } from '@contexts/AuthContext';

// Define props for the HOC, focusing on authentication requirement
interface WithAuthOptions {
  authenticationRequired?: boolean;
}

// This generic function returns a new component, applying authentication logic
const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>,
  { authenticationRequired = true }: WithAuthOptions = {} // Default to true to require authentication
): ComponentType<P> => {
  const WithAuthComponent = (props: P) => {
    const router = useRouter();
    const { currentUser, loading } = useAuth(); // isAdmin removed, as it's not needed

    useEffect(() => {
      if (loading) return; // Wait until loading is false to check auth state
      // Redirect to login if authentication is required and no user is present
      if (authenticationRequired && !currentUser) {
        router.push('/');
      }
    }, [currentUser, loading, authenticationRequired, router]);

    // Show loading indicator or null while the auth state is being confirmed
    if (loading || (authenticationRequired && !currentUser)) {
      return null; // Consider returning null or a minimal loading component to prevent further operations
    }

    // Render the wrapped component with all passed props
    return <WrappedComponent {...props} />;
  };

  // Assign a display name to the component for better debugging
  WithAuthComponent.displayName = `WithAuth(${getDisplayName(
    WrappedComponent
  )})`;

  return WithAuthComponent;
};

// Helper function to get a component's display name
function getDisplayName(WrappedComponent: ComponentType<any>): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;
