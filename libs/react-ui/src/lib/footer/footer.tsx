import { FooterProps } from '@with-nx/types';

import { List } from '@with-nx/react-ui';

export const Footer = ({ className }: FooterProps): JSX.Element => {
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
    <footer className={`footer ${className}`}>
      <List items={links1} />
      <List items={links2} />
    </footer>
  );
};

export default Footer;
