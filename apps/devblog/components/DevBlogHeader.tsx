import { Button, Flex } from '@with-nx/react-ui';
import { IconButton } from '@with-nx/generic-ui';
import Link from 'next/link';
import { useTheme, ThemeType } from '@with-nx/theme';
import { FiMoon, FiSun } from 'react-icons/fi';
import { CustomRSHLogo } from '@with-nx/icons';
import { useState, useEffect } from 'react';

const logo = (
  <CustomRSHLogo className="h-12 w-12 md:mb-2 text-primary nav-logo" />
);

const links: {
  href: string;
  children: React.ReactNode;
  className?: string;
}[] = [
  {
    href: '/blog',
    children: 'Blog',
    className: 'link',
  },
  {
    href: '/projects',
    children: 'Projects',
    className: 'link',
  },
];

const DevBlogHeader = () => {
  const { theme, toggleTheme, fadeClass } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleButton = isMounted ? (
    <IconButton
      onClick={toggleTheme}
      theme="transparent"
      className="border-0"
      label="Toggle Theme"
      icon={
        theme && (theme as ThemeType).name === 'light' ? (
          <FiMoon className={`moon h-6 w-6 ${fadeClass}`} />
        ) : (
          <FiSun className={`sun h-6 w-6 ${fadeClass}`} />
        )
      }
    />
  ) : null;

  return (
    <header className="container mx-auto max-w-7xl pb-0 px-4 mt-8">
      <Flex className="flex-row justify-between md:px-4 pb-2 md:pb-0 mb-8 items-center border-y mx-0 md:mx-12 space-y-2 md:space-y-0">
        <Flex className="items-center">
          <Link
            href="/"
            className="button-link"
            aria-label="Robert Hogans Home"
          >
            {logo}
          </Link>
          <Link href="/" className="hidden md:flex">
            <span>Robert Hogan</span>
          </Link>
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
    </header>
  );
};

export default DevBlogHeader;
