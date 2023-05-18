import { FooterProps } from '@with-nx/types';

import { List } from '@with-nx/react-ui';

export const Footer = ({ className }: FooterProps): JSX.Element => {
  const links1 = [
    { children: 'Home', href: '/' },
    { children: 'About', href: '/about' },
    { children: 'Contact', href: '/contact' },
  ];

  const links2 = [
    { children: 'Privacy Policy', href: '/privacy' },
    { children: 'Terms of Use', href: '/terms' },
  ];

  return (
    <footer className={`footer ${className}`}>
      <List items={links1} />
      <List items={links2} />
    </footer>
  );
};

export default Footer;
