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

interface NavbarProps {
  links: {
    href: string;
    label: string;
    type?: 'link' | 'button';
  }[];
  logo?: React.ReactNode;
  isOpen: boolean;
  className?: string;
  isDarkMode?: boolean;
  toggleButton?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  links,
  logo,
  isOpen,
  className,
  isDarkMode = false,
  toggleButton,
}) => (
  <nav className={className}>
    {logo ? <a href="/">{logo}</a> : null}

    {isOpen && <NavbarMenu links={links} toggleButton={toggleButton} />}
  </nav>
);

export default Navbar;
