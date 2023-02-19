/**
  NavbarLink (Atom)
  The NavbarLink component is an atom that represents a single link in a navigation bar. It consists of an a element with the specified href and label props.

  Props
  href (string): The target URL for the link.
  label (string): The label for the link.
 */

import React from 'react';
import Button from '../button/button';

export enum NavbarLinkType {
  Link = 'link',
  Button = 'button',
}

interface NavbarLinkProps {
  href: string;
  type?: NavbarLinkType;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  type = 'link',
  onClick,
  children,
  className,
}) => (
  <>
    {type === 'link' ? (
      <a href={href} className={className}>
        {children}
      </a>
    ) : (
      <Button onClick={onClick} className={className}>
        {children}
      </Button>
    )}
  </>
);

export default NavbarLink;
