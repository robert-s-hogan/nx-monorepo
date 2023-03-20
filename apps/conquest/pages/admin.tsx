import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';

import ConquestLayout from '../components/layout/ConquestLayout';
import SchemaImage from '../assets/admin_schema.png';

const LinkItems = [
  { name: 'Link1', icon: FiTrendingUp },
  { name: 'Link2', icon: FiCompass },
  { name: 'Link3', icon: FiStar },
  { name: 'Link4', icon: FiSettings },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ConquestLayout>
      <Box height="screen">
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        <Box height="screen" ml={{ base: 0, md: 60 }}>
          <Image
            src={SchemaImage}
            alt="admin schema"
            width={1000}
            height={1000}
          />
        </Box>
      </Box>
    </ConquestLayout>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderTop="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        justifyContent="space-between"
        mx={{ base: 4, lg: 0 }}
      >
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          mx={{ lg: 4 }}
        >
          Admin
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} mx={0}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <NextLink href="#" passHref>
      <Flex
        as="a"
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.500',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        <Text>{children}</Text>
      </Flex>
    </NextLink>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Admin
      </Text>
    </Flex>
  );
};
