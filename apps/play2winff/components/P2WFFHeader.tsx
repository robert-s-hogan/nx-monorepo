import { useMemo } from 'react';
import { Button, IconButton, Text } from '@with-nx/generic-ui';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme, ThemeType } from '@with-nx/theme';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const logo = (
  <Image
    src="https://app-assets.vercel.app/apps/play2winff/play2winff_logo_nobg.png"
    alt="Play2Win Fantasy Football Logo"
    height="64"
    width="64"
  />
);

const logoText = 'Play2WinFF';

const links: {
  href: string;
  text: string;
  className?: string;
  type: 'link' | 'button';
}[] = [
  // {
  //   href: '/adp',
  //   text: 'ADP',
  //   className: 'text-primary',
  //   type: 'link',
  // },
  {
    href: '/draft',
    text: 'Draft',
    className: 'btn-primary',
    type: 'button',
  },
];

const PlayToWinFFHeader = () => {
  const { theme, toggleTheme, fadeClass } = useTheme();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  const icon = useMemo(() => {
    return theme && (theme as ThemeType).name === 'light' ? (
      <FiMoon className={`moon h-6 w-6 ${fadeClass}`} />
    ) : (
      <FiSun className={`sun h-6 w-6 ${fadeClass}`} />
    );
  }, [theme]);

  const toggleButton = isMounted ? (
    <IconButton
      onClick={toggleTheme}
      className="my-auto h-6"
      label="Toggle Theme"
      icon={icon}
    />
  ) : null;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header>
      <div className="container mx-auto  w-full flex flex-col justify-center items-center px-4">
        <nav className="flex justify-between container mx-auto space-x-4 py-4 items-center text-black ">
          <div className="flex justify-center">
            <Link href="/">{logo}</Link>
          </div>

          <Text className="text-2xl" text={logoText} />
          <ul className="flex list-style-none space-x-4 items-center">
            {links.map(({ className, href, text, type }) => {
              return (
                <li key={href} className={className}>
                  {type === 'button' ? (
                    <Button
                      onClick={() => router.push(href)}
                      theme="primary"
                      text={text}
                    />
                  ) : (
                    <Link href={href}>{text}</Link>
                  )}
                </li>
              );
            })}
            <li>{toggleButton}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PlayToWinFFHeader;
