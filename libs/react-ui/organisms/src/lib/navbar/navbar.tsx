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

import { NavbarMenu } from '@with-nx/react-ui/molecules';

interface NavbarProps {
  links: {
    href: string;
    label: string;
    type: 'link' | 'button';
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
    <a href="/">{logo}</a>
    {isOpen && <NavbarMenu links={links} />}
    <NavbarMenu links={links} />
  </nav>
);

export default Navbar;
