import { useState, useEffect } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import Script from 'next/script';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { Flex, IconButton } from '@with-nx/generic-ui';
import { useRouter } from 'next/navigation';
import { cn } from '@with-nx/utils';

import { Button, Text } from '@with-nx/react-ui';
import { useModal } from '@with-nx/react-hooks';
import { CustomRSHLogo } from '@with-nx/icons';
import { useTheme, ThemeType } from '@with-nx/theme';

import { HoveredLink, Menu, MenuItem, ProductItem } from './RSHNavbarMenu';
import RSHModal from './RSHModal';

const RSHoganComHeader = () => {
  const { isShowing, toggle } = useModal();
  const { fadeClass, isToggleLocked, theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

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
      <nav>
        <div className="container mx-auto p-6 flex justify-between items-center">
          <NextLink href="/" className="flex items-center justify-center">
            <Flex className="items-center">
              <CustomRSHLogo className="w-16 h-auto" />
            </Flex>
          </NextLink>
          <Navbar className="top-2 border-2 border-surface-color" />

          {/* <RSHNavbarMenu className="top-2" /> */}

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

          <Flex className="hidden md:flex items-center space-x-3">
            {/* <NextLink className="button" href="/request-a-quote">
              Request a Quote
            </NextLink> */}
            {/* {toggleButton} */}
            <Button
              className="btn-outline-white mx-3"
              onClick={() => router.push('/request-a-quote')}
            >
              Contact
            </Button>
            {toggleButton}
          </Flex>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col justify-center items-center space-y-4 pb-8">
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

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        'fixed top-10 inset-x-0 max-w-2xl rounded-full mx-auto z-50',
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Super Hero Bday Invite"
              href=""
              src="https://app-assets.vercel.app/apps/rshogancom/products/super_hero.png"
              description="Make your child's birthday unforgettable with our superhero-themed digital invitation."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
