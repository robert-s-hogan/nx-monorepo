/**
  Navbar (Atom)
  The Navbar component is an atom that represents a basic navigation bar. It consists of a nav element containing the specified logo and a NavbarMenu component, which renders a list of NavbarLink components based on the links prop.

  Props
  links (array): An array of objects representing the links to be rendered in the Navbar. Each object should have the following properties:
  href (string): The target URL for the link.
  label (string): The label for the link.
  logo (React.ReactNode): A React element or node to be rendered as the logo in the Navbar.
  isOpen (boolean): A boolean value indicating whether the NavbarMenu should be displayed.
 */

import React from 'react';
import NavbarMenu from '../navbar-menu/navbar-menu';
import SearchBar, { SearchBarProps } from '../search-bar/search-bar';
import Dropdown, { DropdownProps } from '../dropdown/dropdown';

interface NavbarProps {
  links: {
    href: string;
    label: string;
    type?: 'link' | 'button';
  }[];
  logo?: React.ReactNode;
  logoText?: string;
  isOpen: boolean;
  className?: string;
  isDarkMode?: boolean;
  toggleButton?: React.ReactNode;
  showSearchBar?: boolean;
  searchBarProps?: SearchBarProps & { icon?: React.ReactNode };
  dropdowns?: DropdownProps[];
}

export const Navbar: React.FC<NavbarProps> = ({
  links,
  logo,
  logoText,
  isOpen,
  className,
  isDarkMode = false,
  toggleButton,
  showSearchBar = false,
  searchBarProps,
  dropdowns,
}) => (
  <nav className={className}>
    <div className="navbar-left items-center flex space-x-4">
      {logo ? (
        <a href="/" className="navbar-logo">
          {logo}
        </a>
      ) : null}
      {logoText ? (
        <a
          href="/"
          className="navbar-logo-text text-sm md:text-base font-semibold"
        >
          {logoText}
        </a>
      ) : null}
      {showSearchBar && (
        <SearchBar {...searchBarProps} icon={searchBarProps?.icon} />
      )}
      {dropdowns &&
        dropdowns.map((dropdownProps, index) => (
          <Dropdown key={index} {...dropdownProps} />
        ))}
    </div>

    {isOpen && <NavbarMenu links={links} toggleButton={toggleButton} />}
  </nav>
);

export default Navbar;
