import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const LoginForm = () => {
  const [email, _email] = useState('realuser@aol.com');
  const [password, _password] = useState('realuser');
  const [username, _username] = useState('realuser');

  const auth = useAuth();

  useEffect(() => {
    console.log('Auth object has changed:', auth);
  }, [auth]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await auth.login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            name="username"
            type="text"
            variant="filled"
            value={username}
            onChange={(e) => _username(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            variant="filled"
            value={email}
            onChange={(e) => _email(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            variant="filled"
            value={password}
            onChange={(e) => _password(e.target.value)}
          />
        </FormControl>

        <Button type="submit" colorScheme="purple" width="full">
          Login
        </Button>
      </VStack>
    </form>
  );
};

export default LoginForm;
