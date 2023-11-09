import { useState, useEffect } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import Script from 'next/script';
import { FiSun, FiMoon } from 'react-icons/fi';

import { Button, Flex, Text } from '@with-nx/react-ui';
import { useModal } from '@with-nx/react-hooks';
import { CustomRSHLogo } from '@with-nx/icons';
import { useTheme } from '@with-nx/theme';

import RSHModal from './RSHModal';

const RSHoganComHeader = () => {
  const { isShowing, toggle } = useModal();
  const { fadeClass, isToggleLocked, theme, toggleTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

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
        <FiMoon className={`moon-icon h-5 w-5 ${fadeClass}`} />
      ) : (
        <FiSun className={`sun-icon h-5 w-5 ${fadeClass}`} />
      )}
    </Button>
  ) : null;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://assets.calendly.com/assets/external/widget.js"
      />
      <header className="bg-surface">
        <div className="w-full mx-auto py-0 md:py-4 lg:px-0 text-lg md:text-2xl lg:max-w-7xl ">
          <div className="flex justify-between p-4 lg:px-0 text-2xl max-w-7xl">
            <NextLink href="/" className="flex items-center justify-center">
              <Flex className="items-center space-x-2">
                <CustomRSHLogo className="w-16 h-auto" />
              </Flex>
            </NextLink>
            <nav className="flex justify-center space-x-6">
              <Button className="btn-primary" onClick={toggle} type="submit">
                Say Hello
              </Button>
              {toggleButton}
            </nav>
          </div>
        </div>
      </header>
      {isShowing && <RSHModal isShowing={isShowing} toggle={toggle} />}
    </>
  );
};

export default RSHoganComHeader;
