import { Flex, Navbar } from '@with-nx/react-ui';
import { ButtonProps, LinkProps } from '@with-nx/types';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@with-nx/theme';
import { FeatherMoon, FeatherSun } from '@with-nx/icons';
import { useState, useEffect } from 'react';
import RSHLogo from '../public/images/rsh_logo.png';

const logo = (
  <Image
    src={RSHLogo}
    alt="Robert's Dev Logo"
    height={41}
    width={48}
    className="mr-4"
  />
);

const links: {
  href: string;
  children: React.ReactNode;
  className?: string;
}[] = [
  // {
  //   href: '/blog',
  //   children: 'Blog',
  //   className: 'link',
  // },
  {
    href: '/projects',
    children: 'Projects',
    className: 'link',
  },
];

const DevBlogHeader = () => {
  const { theme, toggleTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleButton = isMounted ? (
    <button onClick={toggleTheme}>
      {theme && theme.name === 'light' ? (
        <FeatherMoon className="h-6 w-6" />
      ) : (
        <FeatherSun className="h-6 w-6" />
      )}
    </button>
  ) : null;

  return (
    <header className="container mx-auto max-w-7xl pb-8 px-4 my-10">
      <Flex className="flex-col justify-center md:px-4 md:flex-row md:justify-between items-center my-4 border-y py-4 mx-0 md:mx-12">
        <Flex className="items-center justify-center">
          <Link href="/">{logo}</Link>
          <Link href="/">
            <span>Robert Hogan</span>
          </Link>
        </Flex>
        <Flex className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 space-x-4 items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="">
              <span>{link.children}</span>
            </Link>
          ))}
          {toggleButton}
        </Flex>
      </Flex>
      {/* <Navbar
        className="flex justify-between w-full mx-auto space-x-4 py-4 items-center"
        links={links}
        logo={logo}
        isOpen={true}
        logoText="Robert Hogan's Portfolio"
        toggleButton={toggleButton}
      /> */}
    </header>
  );
};

export default DevBlogHeader;
