import React, { useState } from 'react';
import { HamburgerMenu, SearchBar, Select, List } from '@with-nx/react-ui';
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
    <nav className={`relative bg-gray-800 p-4 ${className}`}>
      <div className="navbar-left flex items-center justify-between space-x-4">
        {logo ? (
          <a href="/" className="navbar-logo">
            {logo}
          </a>
        ) : null}
        {logoText ? (
          <a
            href="/"
            className="navbar-logo-text text-sm md:text-base font-semibold flex-1 text-white"
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

      <div className="hidden lg:flex">
        <List items={links} className="flex space-x-4" />
      </div>
    </nav>
  );
};

export default Navbar;
