import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import '@styles/global.css';

import Navbar from '@components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  loading?: boolean;
}

const Layout = ({ children, title, loading }: LayoutProps) => {
  return (
    <div className="w-full">
      {loading ? (
        <header className="w-full text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-1 md:py-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:relative lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <nav className="w-full flex items-center justify-between max-w-4xl 2xl:max-w-7xl container mx-auto lg:mx-auto">
            <div className="animate-pulse flex items-center py-3 px-4 w-full justify-between">
              <div className="rounded-lg bg-gray-200 h-10 w-10"></div>
              {/* Logo placeholder */}
              <div className="">
                <div className="h-4 bg-gray-200 rounded w-32"></div>
                {/* Title placeholder */}
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-6 w-6 bg-gray-200 rounded"></div>
                {/* Button or user greeting placeholder */}
              </div>
            </div>
          </nav>
        </header>
      ) : (
        <Navbar title={title} />
      )}

      <main className="max-w-4xl 2xl:max-w-7xl container mx-auto flex items-center justify-center flex-col">
        {children}
      </main>
    </div>
  );
};

export default Layout;
