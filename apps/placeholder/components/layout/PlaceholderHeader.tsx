import { Navbar } from '@with-nx/react-ui';
import { ButtonProps, LinkProps } from '@with-nx/types';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import PlaceholderImage from '../../public/images/1500.png';

const logo = <Image src={PlaceholderImage} height={50} width={50} alt="Logo" />;

const searchIcon = <FiSearch />;

const links: {
  href: string;
  children: React.ReactNode;
  className?: string;
}[] = [
  {
    href: '/',
    children: 'Home',
    className: 'link',
  },
  {
    href: '/blog',
    children: 'Blog',
    className: 'link',
  },
  {
    href: '/about',
    children: 'About',
    className: 'link',
  },
  {
    href: '/contact',
    children: 'Contact',
    className: 'nav-button',
  },
];

const selects = [
  {
    options: [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' },
    ],
    value: 'option-1',
    onChange: (value) => handleDropdownChange(value, 0),
  },
  {
    options: [
      { label: 'Option A', value: 'option-a' },
      { label: 'Option B', value: 'option-b' },
      { label: 'Option C', value: 'option-c' },
    ],
    value: 'option-a',
    onChange: (value) => handleDropdownChange(value, 1),
  },
];

const handleDropdownChange = (
  value: string | number,
  dropdownIndex: number
) => {
  console.log(`Selected value for dropdown ${dropdownIndex}: ${value}`);
};

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
      <Navbar
        showSearchBar={true}
        className="flex justify-between container max-w-7xl mx-auto py-2 space-x-4 "
        links={links}
        logo={logo}
        isOpen={true}
        toggleButton={toggleButton}
        searchBarProps={{ placeholder: 'Search', icon: searchIcon }}
      />

      <Navbar
        className="flex justify-between container max-w-7xl mx-auto py-2 space-x-4 "
        links={links}
        logo={logo}
        isOpen={true}
        toggleButton={toggleButton}
        selects={selects}
      />
    </header>
  );
};

export default PlaceholderHeader;
