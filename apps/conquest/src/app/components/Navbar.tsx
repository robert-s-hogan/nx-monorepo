'use client';
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import Image from 'next/image';
import Link from 'next/link';

const LOGO = '/conquest_logo.jpg';

interface NavbarProps {
  isAdmin?: boolean;
  loading?: boolean;
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return null;

  return (
    <header className="w-full text-center pt-8">
      <nav className="w-full flex items-center justify-between max-w-4xl 2xl:max-w-7xl container mx-auto lg:mx-auto px-4">
        <div>
          <Link href="/">
            <Image
              src={LOGO}
              alt="The Hogans Logo"
              width={64}
              height={64}
              priority
            />
          </Link>
        </div>

        <div className="flex space-between space-x-4 text-xl">
          <Link href="/campaigns">Campaigns</Link>
          {/* <Link href="/encounters">Encounters</Link> */}
        </div>

        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500 text-white text-xl">
                {currentUser.displayName
                  ? currentUser.displayName[0].toUpperCase()
                  : 'U'}
              </div>
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
