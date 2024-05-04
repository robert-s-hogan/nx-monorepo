'use client';

import React, { useState } from 'react';
import { HamburgerMenu } from '../hamburger-menu/hamburger-menu';
import { SearchBar } from '../search-bar/search-bar';
import { Select } from '../select/select';
import { List } from '../list/list';
import { NavbarProps } from '@with-nx/types';

export const Navbar = ({
  links,
  logo,
  logoText,
  className,
  isDarkMode = false,
  showSearchBar = false,
  searchBarProps,
  selects,
}: NavbarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`relative ${className}`}>
      <div className="navbar-left items-center justify-between flex space-x-4">
        {logo ? (
          <a href="/" className="navbar-logo">
            {logo}
          </a>
        ) : null}
        {logoText ? (
          <a
            href="/"
            className="navbar-logo-text text-sm md:text-base font-semibold flex-1"
          >
            {logoText}
          </a>
        ) : null}
        {showSearchBar && (
          <SearchBar {...searchBarProps} icon={searchBarProps?.icon} />
        )}
        {selects &&
          selects.map((selectProps, index) => (
            <Select key={index} {...selectProps} />
          ))}
      </div>
      <div className="lg:hidden absolute w-full right-0 top-0">
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
      </div>

      <div className="hidden lg:block">
        <List items={links || []} className="flex" />
      </div>
    </nav>
  );
};
