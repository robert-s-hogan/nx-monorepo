import { FormEvent, ReactNode, useState } from 'react';
import { Button, Heading, Input, Spinner, Text } from '@with-nx/react-ui';

import { useAuth } from './auth-context';
import { Role } from './allowlist';

interface RequireAuthProps {
  children: ReactNode;
  allowedRoles: Role[];
}

export const RequireAuth = ({ children, allowedRoles }: RequireAuthProps) => {
  const { user, role, loading, signInWithMagicLink, signOut } = useAuth();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const isAllowed = role !== null && allowedRoles.includes(role);

  if (user && isAllowed) {
    return <>{children}</>;
  }

  if (user && !isAllowed) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="max-w-sm space-y-4 px-4 text-center">
          <Heading level={2}>This account doesn&apos;t have access</Heading>
          <Text>
            Signed in as {user.email}. Contact the site owner if you think
            this is a mistake.
          </Text>
          <Button variant="secondary" onClick={() => signOut()}>
            Sign out
          </Button>
        </div>
      </div>
    );
  }

  if (sent) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="max-w-sm space-y-2 px-4 text-center">
          <Heading level={2}>Check your email</Heading>
          <Text>We sent a sign-in link to {email}.</Text>
        </div>
      </div>
    );
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    const { error: signInError } = await signInWithMagicLink(email);
    setSubmitting(false);
    if (signInError) {
      setError(signInError);
    } else {
      setSent(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 px-4 text-center"
      >
        <Heading level={2}>Sign in</Heading>
        <Input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          ariaLabel="Email address"
        />
        <Button type="submit" variant="primary" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send magic link'}
        </Button>
        {error && <Text className="text-red-600">{error}</Text>}
      </form>
    </div>
  );
};
