import Layout from '../components/layout';
import {
  VStack,
  Button,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import { useFormik } from 'formik';

const handleSignIn = async (email, password) => {
  fetch('https://api-5xsa.onrender.com/signin', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'no-cors',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      handleSignIn(values.email, values.password);
    },
  });

  return (
    <Layout>
      <Heading as="h1" size="xl" mb={4}>
        Login
      </Heading>
      <Flex bg="gray.100" align="center" justify="center" h="auto" p={8}>
        <Box bg="white" p={6} rounded="md">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </FormControl>
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                onChange={formik.handleChange}
                isChecked={formik.values.rememberMe}
                colorScheme="purple"
              >
                Remember me?
              </Checkbox>
              <Button type="submit" colorScheme="purple" width="full">
                Login
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Login;
