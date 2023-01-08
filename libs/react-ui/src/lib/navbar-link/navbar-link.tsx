/**
  NavbarLink (Molecule)
  
    The NavbarLink component is a molecule that represents a single link within a Navbar. It consists of an anchor element with the specified href prop as its target.

  Props

    href (string): The target URL for the link.
 */

import React from 'react';

/* eslint-disable-next-line */
export interface NavbarLinkProps {
  href: string;
  label: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label }) => (
  <a href={href}>{label}</a>
);

export default NavbarLink;
