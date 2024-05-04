'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginButton from './ConquestLoginButton';
import LogoutButton from './ConquestLogoutButton';
import { LiaDragonSolid } from 'react-icons/lia';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme, ThemeType } from '@with-nx/theme';
import { Button } from '@with-nx/react-ui';
import Link from 'next/link';

const links: {
  href: string;
  children: React.ReactNode;
  className?: string;
}[] = [
  {
    href: '/campaigns',
    children: 'Campaigns',
    className: 'link',
  },
];

export interface ConquestNavbarProps {
  isAdmin?: boolean;
  loading?: boolean;
  title?: string;
}

const Navbar: React.FC<ConquestNavbarProps> = ({ title }) => {
  const { currentUser, loading } = useAuth();
  const { theme, toggleTheme, fadeClass } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleButton = isMounted ? (
    <Button
      onClick={toggleTheme}
      className="button-icon border-none p-0"
      aria-label="Toggle Theme"
    >
      {theme && (theme as ThemeType).name === 'light' ? (
        <FiMoon className={`moon h-6 w-6 ${fadeClass}`} />
      ) : (
        <FiSun className={`sun h-6 w-6 ${fadeClass}`} />
      )}
    </Button>
  ) : null;

  if (loading) return null;

  return (
    <header className="w-full text-center pt-8">
      <nav className="w-full flex items-center justify-between max-w-4xl 2xl:max-w-7xl container mx-auto lg:mx-auto px-4 lg:px-0">
        <Link href="/">
          <div className="flex items-center">
            <LiaDragonSolid size={48} color="--primary-fill" />
            <span className="text-lg">onquest</span>
          </div>
        </Link>

        <div className="flex items-center space-between space-x-4 text-xl">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="">
              <span>{link.children}</span>
            </Link>
          ))}
          {currentUser ? <LogoutButton /> : <LoginButton />}
          {toggleButton}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
