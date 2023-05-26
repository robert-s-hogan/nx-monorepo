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
    <footer className={`bg-gray-800 text-white py-6 px-4 ${className}`}>
      <div className="container mx-auto grid grid-cols-2 gap-4">
        <List items={links1} className="text-gray-300 hover:text-white" />
        <List items={links2} className="text-gray-300 hover:text-white" />
      </div>
    </footer>
  );
};

export default Footer;
