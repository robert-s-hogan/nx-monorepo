/**
  NavbarLink (Atom)
  The NavbarLink component is an atom that represents a single link in a navigation bar. It consists of an a element with the specified href and label props.

  Props
  href (string): The target URL for the link.
  label (string): The label for the link.
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
