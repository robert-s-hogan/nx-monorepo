/* 
  NavbarMenu (Organism)
  The NavbarMenu component is an organism that represents a navigation menu. It consists of an unordered list of NavbarLink components based on the links prop.

  Props
  links (array): An array of objects representing the links to be rendered in the NavbarMenu. Each object should have the following properties:
  href (string): The target URL for the link.
  label (string): The label for the link.
 */

import NavbarLink, { NavbarLinkType } from '../navbar-link/navbar-link';

interface NavbarMenuProps {
  links: {
    href: string;
    label: string;
    className?: string;
    type?: 'link' | 'button';
  }[];
  toggleButton?: React.ReactNode;
}

export const NavbarMenu: React.FC<NavbarMenuProps> = ({
  links,
  toggleButton,
}) => (
  <ul className="flex space-x-4 items-center">
    {links.map((link) => (
      <li key={link.href}>
        <NavbarLink
          href={link.href}
          type={
            link.type === 'button' ? NavbarLinkType.Button : NavbarLinkType.Link
          }
          className={link.className}
        >
          {link.label}
        </NavbarLink>
      </li>
    ))}
    {toggleButton ? <li>{toggleButton}</li> : null}
  </ul>
);

export default NavbarMenu;
