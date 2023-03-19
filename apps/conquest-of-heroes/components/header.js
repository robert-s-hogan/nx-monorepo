import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import LoginForm from './LoginForm';
import {
  Flex,
  Container,
  Box,
  UnorderedList,
  Link,
  ListItem,
  MenuList,
  Button,
  HStack,
  MenuGroup,
  Menu,
  MenuButton,
  MenuItem,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  HamburgerIcon,
  IconButton,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const router = useRouter();

  return (
    <Container maxW={{ md: '4xl', xl: 'full' }} px={{ base: 4, xl: 48 }}>
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
                <FontAwesomeIcon icon={faHatWizard} />
              </Link>
            </NextLink>
          </Box>
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
        </Flex>
      </header>
    </Container>
  );
}
