import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
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
    <Container maxW={{ md: '4xl', xl: 'full' }} px={{ xl: 48 }}>
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
          <Menu>
            <MenuButton>
              <HamburgerIcon fontSize="3xl" />
            </MenuButton>
            <MenuList py={0}>
              <MenuItem onClick={() => router.push('/')}>Home</MenuItem>
              <MenuGroup title="Data">
                <MenuItem onClick={() => router.push('/spells')}>
                  Spells
                </MenuItem>
                {/* <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem> */}
              </MenuGroup>
            </MenuList>
          </Menu>
          <Box fontSize="2rem">
            <NextLink href="/" passHref>
              <Link>
                <FontAwesomeIcon icon={faHatWizard} />
              </Link>
            </NextLink>
          </Box>
        </Flex>
      </header>
    </Container>
  );
}
