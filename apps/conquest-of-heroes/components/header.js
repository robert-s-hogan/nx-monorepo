import Head from 'next/head';
import NextLink from 'next/link';
import LoginForm from './LoginForm';
import {
  Flex,
  Container,
  Box,
  Link,
  MenuList,
  MenuGroup,
  Menu,
  MenuButton,
  HStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from '@emotion/react';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default function Header() {
  return (
    <Container maxW={{ md: '4xl', xl: 'full' }} px={{ base: 4, xl: 52 }}>
      <header>
        <Head>
          <title>Conquest of Heroes</title>
          <meta
            name="description"
            content="Conquest of Heroes a DND Dungeon Master Tool"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Flex
          py={4}
          alignItems="center"
          justifyContent="space-between"
          minW="100%"
        >
          <Box fontSize="2rem">
            <NextLink href="/" passHref>
              <Link>
                <FontAwesomeIcon
                  icon={faHatWizard}
                  css={{
                    animation: `${rotate} 5s linear infinite`,
                  }}
                />
              </Link>
            </NextLink>
          </Box>
          <HStack spacing={4}>
            <Menu closeOnSelect={false}>
              <MenuButton>Login</MenuButton>
              <MenuList py={0} keepMounted>
                {/* <MenuItem onClick={() => router.push('/')}>Home</MenuItem> */}
                <MenuGroup>
                  {/* <MenuItem onClick={() => router.push('/spells')}>
                  Spells
                </MenuItem> */}
                  {/* <MenuItem>My Account</MenuItem> */}
                  <Box px={4} py={4}>
                    <LoginForm />
                  </Box>
                </MenuGroup>
              </MenuList>
            </Menu>
            <NextLink href="/admin" passHref>
              <Link>Admin</Link>
            </NextLink>
          </HStack>
        </Flex>
      </header>
    </Container>
  );
}
