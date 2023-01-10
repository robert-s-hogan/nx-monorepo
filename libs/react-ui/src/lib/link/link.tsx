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
  label: string;
  className: string;
}

export const Link: React.FC<LinkProps> = ({ href, label, className }) => (
  <a className={className} href={href}>
    {label}
  </a>
);

export default Link;
