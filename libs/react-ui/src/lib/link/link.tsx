/**
  Link (Atom)
  The Link component is an atom that represents a single link in a navigation bar. It consists of an a element with the specified href and label props.

  Props
  href (string): The target URL for the link.
  label (string): The label for the link.
 */

import React from 'react';

/* eslint-disable-next-line */
export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  target,
}) => (
  <a className={className} href={href} target={target}>
    {children}
  </a>
);

export default Link;
