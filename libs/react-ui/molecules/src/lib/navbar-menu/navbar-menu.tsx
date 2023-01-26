/* 
  NavbarMenu (Organism)
  The NavbarMenu component is an organism that represents a navigation menu. It consists of an unordered list of NavbarLink components based on the links prop.

  Props
  links (array): An array of objects representing the links to be rendered in the NavbarMenu. Each object should have the following properties:
  href (string): The target URL for the link.
  label (string): The label for the link.
 */

import { NavbarLink } from '@with-nx/react-ui-atoms';

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
