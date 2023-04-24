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
  rel?: string;
  aria-label?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  target,
  rel,
  'aria-label': aria-label,
}) => (
  <a className={className} href={href} target={target} rel={rel} aria-label={aria-label}>
    {children}
  </a>
);

export default Link;
