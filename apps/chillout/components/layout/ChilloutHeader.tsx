import { Navbar, ButtonProps, LinkProps } from '@with-nx/react-ui';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useState, useEffect } from 'react';

import ChilloutSVG from '../../public/images/chill-out-logo.svg';

const logo = (
  <Image
    src={ChilloutSVG}
    alt="Chillout Product Shop Logo"
    height={50}
    width={150}
  />
);

const links: (
  | (LinkProps & { type?: 'link'; className?: string })
  | (ButtonProps & { type: 'button'; className?: string })
)[] = [
  {
    href: '/products',
    children: 'View Products',
    className: 'link',
  },
  {
    href: '/contact',
    children: 'Contact',
    className: 'link',
  },
  {
    href: '/checkout',
    children: 'Checkout',
    className: 'nav-button',
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
        <FiMoon size={20} color="black" className="icon" />
      ) : (
        <FiSun size={20} color="white" className="icon" />
      )}
    </button>
  ) : null;

  return (
    <header>
      <div className="w-full bg-primary bg-opacity-60">
        <div className="mx-auto max-w-7xl w-full flex flex-col justify-center items-center">
          <Navbar
            className="flex justify-between container mx-auto space-x-4 py-4 items-center z-30"
            links={links}
            logo={logo}
            isOpen={true}
            toggleButton={toggleButton}
          />
        </div>
      </div>
    </header>
  );
};

export default DevBlogHeader;
