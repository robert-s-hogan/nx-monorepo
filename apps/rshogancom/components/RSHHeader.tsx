import { useState, useEffect } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import Script from 'next/script';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { Flex, IconButton } from '@with-nx/generic-ui';

import { Button, Text } from '@with-nx/react-ui';
import { useModal } from '@with-nx/react-hooks';
import { CustomRSHLogo } from '@with-nx/icons';
import { useTheme, ThemeType } from '@with-nx/theme';

import RSHModal from './RSHModal';

const RSHoganComHeader = () => {
  const { isShowing, toggle } = useModal();
  const { fadeClass, isToggleLocked, theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleButton = isMounted ? (
    <Button
      onClick={toggleTheme}
      className={`button-icon p-0`}
      aria-label={
        theme && (theme as ThemeType).name === 'light'
          ? 'Toggle dark mode'
          : 'Toggle light mode'
      }
    >
      {theme && (theme as ThemeType).name === 'light' ? (
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
      <nav className="border-b border-secondary-color">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <NextLink href="/" className="flex items-center justify-center">
            <Flex className="items-center">
              <CustomRSHLogo className="svg-logo w-16 h-auto" />
            </Flex>
          </NextLink>

          {/* Dark/Light Toggle and Hamburger Menu for Mobile */}
          <Flex className="items-center md:hidden">
            {toggleButton}
            <IconButton
              onClick={toggleMobileMenu}
              icon={isMobileMenuOpen ? <FiX /> : <FiMenu />}
              label="Toggle Mobile Menu"
              theme="transparent"
              className="button-icon"
            />
          </Flex>

          {/* Links and Buttons for Desktop */}
          <Flex className="hidden md:flex items-center space-x-3">
            {/* <NextLink className="nav-link" href="/products">
              Products
            </NextLink> */}
            {/* <NextLink className="nav-link" href="/about">
              About
            </NextLink> */}
            <Button className="btn-primary" onClick={toggle} type="submit">
              Contact
            </Button>
            {toggleButton}
          </Flex>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col justify-center items-center space-y-4 pb-8">
            {/* Mobile Menu Content */}
            {/* <NextLink
              className="nav-link mx-3 hover:underline block"
              href="/products"
            >
              Products
            </NextLink>
            <NextLink className="nav-link mx-3 hover:underline" href="/about">
              About
            </NextLink> */}
            <Button
              className="btn-secondary mx-3 block"
              onClick={toggle}
              type="submit"
            >
              Contact
            </Button>
          </div>
        )}
      </nav>

      {isShowing && <RSHModal isShowing={isShowing} toggle={toggle} />}
    </>
  );
};

export default RSHoganComHeader;
