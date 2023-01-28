import { Navbar } from '@with-nx/react-ui';
import Image from 'next/image';

const logo = (
  <Image
    src="https://via.placeholder.com/300.png/09f/fff"
    height={50}
    width={50}
    alt="Logo"
  />
);

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

const Header = () => {
  return (
    <header className="w-full">
      <Navbar
        className="flex justify-between container max-w-4xl mx-auto py-2 space-x-4"
        links={links}
        logo={logo}
        isOpen={true}
      />
    </header>
  );
};

export default Header;
