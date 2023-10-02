import { Button, Navbar, Text } from '@with-nx/react-ui';
import { ButtonProps, LinkProps } from '@with-nx/types';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const logo = (
  <Image
    src="https://rshogan.imgix.net/projects/play2winff/play2winff_logo.png"
    alt="Play2Win Fantasy Football Logo"
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

const PlayToWinFFHeader = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

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
      <div className="container mx-auto  w-full flex flex-col justify-center items-center px-4">
        {/* <Navbar
          className="flex justify-between container mx-auto space-x-4 py-4 items-center text-black  "
          links={links}
          logo={logo}
          isOpen={true}
          toggleButton={toggleButton}
        /> */}
        <nav className="flex justify-between container mx-auto space-x-4 py-4 items-center text-black ">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="https://rshogan.imgix.net/projects/play2winff/play2winff_logo_nobg.png"
                height={100}
                width={100}
                alt="Play2Win Fantasy Football Logo"
              />
            </Link>
          </div>

          <Text className="text-2xl font-bold">
            <Link href="/" className="whitespace-nowrap">
              Play2WinFF
            </Link>
          </Text>
          <ul className="flex list-style-none space-x-2">
            {/* <li>
              <Link href="/adp" className="whitespace-nowrap">
                PPR ADP
              </Link>
            </li> */}
            {/* I want to hide this button on /draft */}
            {router.pathname !== '/draft' && (
              <li>
                <Link href="/draft">
                  <Button className="btn-primary whitespace-nowrap">
                    Start Draft
                  </Button>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PlayToWinFFHeader;
