import { Button, Flex, Navbar } from '@with-nx/react-ui';
import { ButtonProps, LinkProps } from '@with-nx/types';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme, ThemeType } from '@with-nx/theme';
import { FiMoon, FiSun } from 'react-icons/fi';
import {
  GiDoubleDragon,
  GiHolyHandGrenade,
  GiMusicalNotes,
  GiSkeletonKey,
} from 'react-icons/gi';
import { useState, useEffect } from 'react';

const logo = <GiDoubleDragon className="w-12 h-12" />;

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
  const { theme, toggleTheme, fadeClass, isToggleLocked } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  const iconClass = isToggleLocked
    ? 'fade-in-out hidden-icon hidden'
    : 'fade-in-out visible-icon';
  const musicNoteClass =
    theme && (theme as ThemeType).name === 'light'
      ? 'light-bounce'
      : 'dark-bounce';

  const musicNote = isToggleLocked ? (
    <GiMusicalNotes className={`w-6 h-6 ${musicNoteClass}`} />
  ) : null;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleButton = isMounted ? (
    <Button onClick={toggleTheme} className={`${iconClass} button-icon p-0`}>
      {theme && (theme as ThemeType).name === 'light' ? (
        <GiHolyHandGrenade className={`moon h-6 w-6 ${fadeClass}`} />
      ) : (
        <GiSkeletonKey className={`sun h-6 w-6 ${fadeClass}`} />
      )}
    </Button>
  ) : null;

  return (
    <header className="container mx-auto max-w-7xl pb-0 px-4">
      <Flex className="flex-row justify-between md:px-4 pb-2 md:pb-0 mb-8 items-center space-y-2 md:space-y-0">
        <Flex className="items-center py-4">
          <Link href="/" className="button-link">
            <span className="flex items-center">
              {logo} <span className="ml-4">Theo's DnD</span>
            </span>
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
          {musicNote}
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
