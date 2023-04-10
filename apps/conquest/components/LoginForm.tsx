import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const LoginForm = () => {
  const [email, _email] = useState('realuser@aol.com');
  const [password, _password] = useState('realuser');

  const auth = useAuth();

  useEffect(() => {
    console.log('Auth object has changed:', auth);
  }, [auth]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await auth.login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <h1 className="text-2xl font-bold">Welcome to Conquest</h1>
      <div className="space-y-4 flex items-start flex-col ">
        <label className="sr-only" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => _email(e.target.value)}
        />
        <label className="sr-only" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => _password(e.target.value)}
        />

        <button type="submit" className="btn-primary">
          Continue
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
