import { Navbar } from '@with-nx/react-ui';
import { ButtonProps, LinkProps } from '@with-nx/types';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import JHLogo from '../../public/images/jh_logo_white.webp';

const logo = (
  <Image
    src={JHLogo}
    alt="Jessica Hogan's Logo"
    height="32"
    width="82"
    className="h-8"
  />
);

const links: {
  href: string;
  children: React.ReactNode;
  className?: string;
}[] = [
  {
    href: '/#projects',
    children: 'Projects',
    className: 'link',
  },
  {
    href: '/#who-i-am',
    children: 'Who I Am',
    className: 'link',
  },
];

const JHoganComHeader = () => {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleButton = isMounted ? (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="my-auto h-6"
    >
      {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  ) : null;

  return (
    <header>
      <div className="container mx-auto max-w-7xl w-full flex flex-col justify-center items-center px-4">
        {/* <Navbar
          className="flex justify-between container mx-auto space-x-4 py-4 items-center text-black dark:text-white "
          links={links}
          logo={logo}
          isOpen={true}
          toggleButton={toggleButton}
        /> */}
        <nav className="flex justify-between container mx-auto space-x-4 py-4 items-center text-black dark:text-white">
          <Image
            src={JHLogo}
            alt="Jessica Hogan's Logo"
            height="32"
            width="82"
          />
          <ul className="flex list-style-none space-x-4">
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#who-i-am">Who I Am</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default JHoganComHeader;
