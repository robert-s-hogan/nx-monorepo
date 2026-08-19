import { useMemo } from 'react';
import { Button, Flex, IconButton, Text } from '@with-nx/react-ui';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme, ThemeType } from '@with-nx/theme';
import { useAuth } from '@with-nx/auth';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const logo = (
  <Image
    src="/play2winff_logo_nobg.png"
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
  {
    href: '/draft',
    text: 'Draft',
    type: 'link',
  },
  {
    href: '/import',
    text: 'Import',
    type: 'link',
  },
  {
    href: '/leagues',
    text: 'Leagues',
    type: 'link',
  },
];

const PlayToWinFFHeader = () => {
  const { theme, toggleTheme, fadeClass } = useTheme();
  const { user, role, signOut } = useAuth();
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
      className="icon-button border-0"
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
          <Flex className="justify-center">
            <Link href="/">{logo}</Link>
          </Flex>

          <Text className="text-2xl">{logoText}</Text>
          <ul className="flex list-style-none space-x-4 items-center">
            {links.map(({ className, href, text, type }) => {
              return (
                <li key={href} className={className}>
                  {type === 'button' ? (
                    <Button
                      onClick={() => router.push(href)}
                      variant="primary"
                    >
                      {text}
                    </Button>
                  ) : (
                    <Link href={href}>{text}</Link>
                  )}
                </li>
              );
            })}
            <li>
              {user ? (
                <button
                  onClick={() => signOut()}
                  title="Click to sign out"
                  className="text-xs text-slate-500 transition hover:text-slate-700"
                >
                  {user.email}
                  {role ? ` (${role})` : ' (no access)'}
                </button>
              ) : (
                <Link
                  href="/login"
                  className="text-xs text-slate-500 transition hover:text-slate-700"
                >
                  Not signed in
                </Link>
              )}
            </li>
            <li>{toggleButton}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PlayToWinFFHeader;
