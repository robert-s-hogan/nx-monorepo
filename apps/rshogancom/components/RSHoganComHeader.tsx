import { useState, useEffect } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import Script from 'next/script';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

import { Button, Flex, Text } from '@with-nx/react-ui';
import { useModal } from '@with-nx/react-hooks';
import { CustomRSHLogo } from '@with-nx/icons';
import { useTheme } from '@with-nx/theme';

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
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <NextLink href="/" className="flex items-center justify-center">
            <Flex className="items-center">
              <CustomRSHLogo className="svg-logo w-16 h-auto" />
            </Flex>
          </NextLink>

          {/* Dark/Light Toggle and Hamburger Menu for Mobile */}
          <div className="flex items-center md:hidden">
            {toggleButton}
            <button onClick={toggleMobileMenu} className="ml-3">
              {isMobileMenuOpen ? (
                <FiX size={24} className="icon-menu" />
              ) : (
                <FiMenu size={24} className="icon-menu" />
              )}
            </button>
          </div>

          {/* Links and Buttons for Desktop */}
          <Flex className="hidden md:flex items-center">
            <NextLink
              className="text-gray-800 text-sm mx-3 hover:underline"
              href="/products"
            >
              Products
            </NextLink>
            <NextLink
              className="text-gray-800 text-sm mx-3 hover:underline"
              href="/about"
            >
              About
            </NextLink>
            <Button
              className="btn-primary text-sm mx-3"
              onClick={toggle}
              type="submit"
            >
              Contact
            </Button>
          </Flex>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col justify-center items-center space-y-4 pb-8">
            {/* Mobile Menu Content */}
            <NextLink
              className="nav-link mx-3 hover:underline block"
              href="/products"
            >
              Products
            </NextLink>
            <NextLink className="nav-link mx-3 hover:underline" href="/about">
              About
            </NextLink>
            <Button
              className="btn-primary mx-3 block"
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
