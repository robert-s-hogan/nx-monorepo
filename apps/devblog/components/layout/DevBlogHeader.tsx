import { Navbar, NavbarLinkType } from '@with-nx/react-ui';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import RSHLogo from '../../public/images/rsh_logo.png';

const logo = (
  <Image
    src={RSHLogo}
    alt="Robert's Dev Logo"
    height="41"
    width="48"
    className="h-8"
  />
);

const links: { href: string; label: string; type?: NavbarLinkType }[] = [
  {
    href: '/blog',
    label: 'Blog',
    type: NavbarLinkType.Link,
  },
  {
    href: '/projects',
    label: 'Projects',
    type: NavbarLinkType.Link,
  },
];

const DevBlogHeader = () => {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleButton = isMounted ? (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="my-auto h-6 text-black"
    >
      {theme === 'light' ? (
        <FiMoon size={20} color="black" />
      ) : (
        <FiSun size={20} color="white" />
      )}
    </button>
  ) : null;

  return (
    <header>
      <div className="mx-auto max-w-7xl w-full flex flex-col justify-center items-center">
        <Navbar
          className="flex justify-between container mx-auto space-x-4 py-4 items-center"
          links={links}
          logo={logo}
          isOpen={true}
          toggleButton={toggleButton}
        />
      </div>
    </header>
  );
};

export default DevBlogHeader;
