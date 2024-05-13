import { Navbar } from '@with-nx/react-ui';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiSearch } from 'react-icons/fi';

import { IconButton } from '@with-nx/generic-ui';

const logo = (
  <Image
    src="https://app-assets.vercel.app/apps/conquest/conquest_favicon.ico"
    height={50}
    width={50}
    alt="Logo"
  />
);

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
    <IconButton
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      icon={theme === 'light' ? <FiMoon /> : <FiSun />}
      label="Toggle Theme"
      theme="transparent"
      className="button-icon border-none p-0"
    />
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
    </header>
  );
};

export default PlaceholderHeader;
