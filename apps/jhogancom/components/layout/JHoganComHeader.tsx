import { Navbar } from '@with-nx/react-ui';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'react-feather';
import { NavbarLinkType } from '@with-nx/react-ui';
import { Section } from '@with-nx/react-tailwind-ui';

const logo = (
  <Image
    src="https://rshogan.imgix.net/personal/logos/jh_logo_white.png"
    alt="Jessica Hogan's Logo"
    height="32"
    width="82"
    className="h-8"
  />
);

const links: { href: string; label: string; type?: NavbarLinkType }[] = [
  {
    href: '/#projects',
    label: 'Projects',
    type: NavbarLinkType.Link,
  },
  {
    href: '/#who-i-am',
    label: 'Who I Am',
    type: NavbarLinkType.Link,
  },
];

const JHoganComHeader = () => {
  const { theme, setTheme } = useTheme();

  const toggleButton = (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="my-auto h-6"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );

  return (
    <header>
      <div className="container mx-auto max-w-7xl w-full flex flex-col justify-center items-center px-4">
        <Navbar
          className="flex justify-between container mx-auto space-x-4 py-4 items-center text-black dark:text-white "
          links={links}
          logo={logo}
          isOpen={true}
          toggleButton={toggleButton}
        />
      </div>
    </header>
  );
};

export default JHoganComHeader;
