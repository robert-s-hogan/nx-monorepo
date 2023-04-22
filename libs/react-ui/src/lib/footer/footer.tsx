import React from 'react';
import { List } from '@with-nx/react-ui';

interface FooterProps {
  className: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const links1 = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  const links2 = [
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Terms of Use', href: '/terms' },
  ];

  return (
    <footer className={className}>
      <List items={links1} />
      <List items={links2} />
    </footer>
  );
};

export default Footer;
