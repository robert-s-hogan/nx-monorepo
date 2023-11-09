import { useAuth } from '../hooks/useAuth';
import { CommonProps } from '@with-nx/types';

const LogoutButton = ({ className }: CommonProps) => {
  const { logout } = useAuth();

  return (
    <button onClick={logout} className={className}>
      Logout
    </button>
  );
};

export default LogoutButton;
