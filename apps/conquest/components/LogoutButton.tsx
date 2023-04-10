import { useAuth } from '../hooks/useAuth';

interface LogoutButtonProps {
  className?: string;
}

const LogoutButton = ({ className }: LogoutButtonProps) => {
  const { logout } = useAuth();

  return (
    <button onClick={logout} className={className}>
      Logout
    </button>
  );
};

export default LogoutButton;
