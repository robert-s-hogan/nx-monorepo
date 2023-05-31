import { Navbar } from '@with-nx/react-ui';
import { ButtonProps, LinkProps } from '@with-nx/types';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import RSHLogo from '../../public/images/rsh_logo.png';

const logo = (
  <Image src={RSHLogo} alt="Robert's Dev Logo" height={41} width={48} />
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
    <header className="container mx-auto max-w-7xl pb-8 px-4">
      <Navbar
        className="flex justify-between w-full mx-auto space-x-4 py-4 items-center"
        links={links}
        logo={logo}
        isOpen={true}
        logoText="Robert Hogan's Portfolio"
        toggleButton={toggleButton}
      />
    </header>
  );
};

export default DevBlogHeader;
