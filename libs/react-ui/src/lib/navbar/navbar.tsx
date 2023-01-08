/**
Navbar (Atom)
The Navbar component is an atom that represents a basic navigation bar. It consists of a nav element containing the specified logo and an unordered list of NavbarLink components.

Props
links (array): An array of objects representing the links to be rendered in the Navbar. Each object should have the following properties:
href (string): The target URL for the link.
label (string): The label for the link.
logo (React.ReactNode): A React element or node to be rendered as the logo in the Navbar.
 */

import React from 'react';
import { NavbarLink } from '@with-nx/react-ui';
import { NavbarMenu } from '@with-nx/react-ui';

interface NavbarProps {
  links: {
    href: string;
    label: string;
  }[];
  logo?: React.ReactNode;
  isOpen: boolean;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  links,
  logo,
  isOpen,
  className,
}) => (
  <nav className={className}>
    {logo ? <a href="/">{logo}</a> : null}
    {isOpen && <NavbarMenu links={links} />}
  </nav>
);

export default Navbar;
