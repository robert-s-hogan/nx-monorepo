import { Navbar } from '@with-nx/react-ui/organisms';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const Header = () => {
  return (
    <>
      <Navbar
        className="flex justify-end container max-w-4xl mx-auto py-2 space-x-4"
        links={links}
        // logo={logo}
        isOpen={true}
      />
    </>
  );
};

export default Header;
