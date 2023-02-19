import { Navbar, NavbarLinkType } from '@with-nx/react-ui';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

const logo = (
  <Image
    src="https://via.placeholder.com/300.png/09f/fff"
    height={50}
    width={50}
    alt="Logo"
  />
);

const links: {
  href: string;
  label: string;
  type?: NavbarLinkType;
  className?: string;
}[] = [
  {
    href: '/',
    label: 'Home',
    type: NavbarLinkType.Link,
    className: 'text-white',
  },
  {
    href: '/blog',
    label: 'Blog',
    type: NavbarLinkType.Link,
    className: 'text-white',
  },
  {
    href: '/about',
    label: 'About',
    type: NavbarLinkType.Link,
    className: 'text-white',
  },
  {
    href: '/contact',
    label: 'Contact',
    type: NavbarLinkType.Button,
    className: 'btn-primary text-sm',
  },
];

const PlaceholderHeader = () => {
  const { theme, setTheme } = useTheme();

  const toggleButton = (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="btn-primary text-sm"
    >
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );

  return (
    <header className="w-full bg-header">
      <Navbar
        className="flex justify-between container max-w-7xl mx-auto py-2 space-x-4 "
        links={links}
        logo={logo}
        isOpen={true}
        toggleButton={toggleButton}
      />
    </header>
  );
};

export default PlaceholderHeader;
