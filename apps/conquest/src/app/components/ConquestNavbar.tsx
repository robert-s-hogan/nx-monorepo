'use client';
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginButton from './ConquestLoginButton';
import LogoutButton from './ConquestLogoutButton';
import { LiaDragonSolid } from 'react-icons/lia';
import Link from 'next/link';

export interface ConquestNavbarProps {
  isAdmin?: boolean;
  loading?: boolean;
  title?: string;
}

const Navbar: React.FC<ConquestNavbarProps> = ({ title }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return null;

  return (
    <header className="w-full text-center pt-8">
      <nav className="w-full flex items-center justify-between max-w-4xl 2xl:max-w-7xl container mx-auto lg:mx-auto px-4">
        <Link href="/">
          <div className="flex items-center">
            <LiaDragonSolid size={48} />
            <span className="text-lg">onquest</span>
          </div>
        </Link>

        <div className="flex space-between space-x-4 text-xl">
          {currentUser && <Link href="/campaigns">Campaigns</Link>}
          {/* <Link href="/admin">Admin</Link> */}
        </div>

        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary text-on-secondary-color text-xl">
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
