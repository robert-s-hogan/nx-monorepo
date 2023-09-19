import { Button, Flex, Navbar } from '@with-nx/react-ui';
import { ButtonProps, LinkProps } from '@with-nx/types';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@with-nx/theme';
import { GameIconDoubleDragon, FeatherMoon, FeatherSun } from '@with-nx/icons';
import { useState, useEffect } from 'react';

const logo = <GameIconDoubleDragon className="w-12 h-12" />;

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
  //   {
  //     href: '/projects',
  //     children: 'Projects',
  //     className: 'link',
  //   },
];

const DevBlogHeader = () => {
  const { theme, toggleTheme, fadeClass } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleButton = isMounted ? (
    <Button onClick={toggleTheme} className="button-icon p-0">
      {theme && theme.name === 'light' ? (
        <FeatherMoon className={`moon h-6 w-6 ${fadeClass}`} />
      ) : (
        <FeatherSun className={`sun h-6 w-6 ${fadeClass}`} />
      )}
    </Button>
  ) : null;

  return (
    <header className="container mx-auto max-w-7xl pb-0 px-4 mt-8">
      <Flex className="flex-row justify-between md:px-4 pb-2 md:pb-0 mb-8 items-center space-y-2 md:space-y-0">
        <Flex className="items-center py-4">
          <Link href="/" className="button-link">
            {logo}
          </Link>
          {/* <Link href="/" className="hidden md:flex">
            <span>Robert Hogan</span>
          </Link> */}
        </Flex>
        <Flex className="flex items-center space-x-4">
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
