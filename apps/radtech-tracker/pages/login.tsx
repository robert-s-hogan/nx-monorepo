import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { RequireAuth } from '@with-nx/auth';

function RedirectHome() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, [router]);
  return null;
}

function Login() {
  return (
    <RequireAuth allowedRoles={['family']}>
      <RedirectHome />
    </RequireAuth>
  );
}

Login.isPublic = true;

export default Login;
