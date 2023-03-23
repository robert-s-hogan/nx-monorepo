import NextLink from 'next/link';
import { Flex, Box, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { useIsAuthenticated } from '../../hooks/useAuth';
import LogoutButton from '../LogoutButton';

export default function Header() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="w-full md:max-w-7xl container mx-auto">
      <header>
        <Flex py={4} alignItems="center" justifyContent="space-between">
          <Box fontSize="2rem">
            <NextLink href="/" passHref>
              <Link>
                <FontAwesomeIcon icon={faHatWizard} />
              </Link>
            </NextLink>
          </Box>
          {isAuthenticated ? (
            <div className="space-x-4">
              <NextLink href="/admin" passHref>
                <Link>Admin</Link>
              </NextLink>
              <LogoutButton />
            </div>
          ) : (
            <NextLink href="/" passHref>
              <Link>Login</Link>
            </NextLink>
          )}
        </Flex>
      </header>
    </div>
  );
}
