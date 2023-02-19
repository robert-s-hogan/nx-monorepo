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
/* eslint-disable-next-line */
export interface NavbarLinkProps {
  href: string;
  type?: NavbarLinkType;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  type = NavbarLinkType.Link,
  onClick,
  children,
}) => (
  <>
    {type === NavbarLinkType.Link ? (
      <a href={href}>{children}</a>
    ) : (
      <Button onClick={() => (window.location.href = href)}>{children}</Button>
    )}
  </>
);

export default NavbarLink;
