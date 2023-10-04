import Link from 'next/link';
import Image from 'next/image';
import { Button, Flex } from '@with-nx/react-ui';
import { ButtonProps, LinkProps } from '@with-nx/types';
import { useTheme } from '@with-nx/theme';
import { CustomJHLogo, FeatherSun, FeatherMoon } from '@with-nx/icons';
import { useState, useEffect } from 'react';

const logo = (
  <Link href="/">
    <CustomJHLogo className="h-16 w-16" />
  </Link>
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
  const { fadeClass, isToggleLocked, theme, toggleTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  // const iconClass = isToggleLocked
  //   ? 'fade-in-out hidden-icon hidden'
  //   : 'fade-in-out visible-icon';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleButton = isMounted ? (
    <Button
      onClick={toggleTheme}
      className={`button-icon p-0`}
      aria-label={
        theme && theme.name === 'light'
          ? 'Toggle dark mode'
          : 'Toggle light mode'
      }
    >
      {theme && theme.name === 'light' ? (
        <FeatherMoon className={`moon h-5 w-5 ${fadeClass}`} />
      ) : (
        <FeatherSun className={`sun h-5 w-5 ${fadeClass}`} />
      )}
    </Button>
  ) : null;

  return (
    <header>
      <div className="container mx-auto max-w-7xl w-full flex flex-col justify-center items-center px-4">
        <nav className="flex justify-between container mx-auto space-x-4 py-4 items-center text-black ">
          {logo}
          <Flex className="items-center space-x-4">
            <ul className="flex list-style-none space-x-4">
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#who-i-am">Who I Am</Link>
              </li>
            </ul>
            {toggleButton}
          </Flex>
        </nav>
      </div>
    </header>
  );
};

export default JHoganComHeader;
