/* 
  NavbarMenu (Organism)
  
  The NavbarMenu component is an organism that combines the Navbar and NavbarLink components to create a fully functional navigation menu. It includes a button that toggles the display of the Navbar when clicked, and the Navbar component is rendered with the links prop passed
 */

import React, { useState } from 'react';
import { NavbarLink } from '@with-nx/react-ui';

interface NavbarMenuProps {
  links: {
    href: string;
    label: string;
  }[];
}

export const NavbarMenu: React.FC<NavbarMenuProps> = ({ links }) => (
  <ul className="flex space-x-4">
    {links.map((link) => (
      <li key={link.href}>
        <NavbarLink href={link.href} label={link.label} />
      </li>
    ))}
  </ul>
);

export default NavbarMenu;
