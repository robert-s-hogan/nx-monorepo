import { Flex } from '@with-nx/react-ui';
import { IconButton } from '@with-nx/generic-ui';
import Link from 'next/link';
import { useTheme, ThemeType } from '@with-nx/theme';
import { FiMoon, FiSun, FiDownload } from 'react-icons/fi';
import { CustomRSHLogo } from '@with-nx/icons';
import { useState, useEffect } from 'react';
import { scrollToProjects } from '../utils/helper';

const logo = (
  <CustomRSHLogo className="h-12 w-12 md:mb-2 text-primary nav-logo" />
);

const links = [
  { id: 'about', href: '#about', children: 'About' },
  { id: 'projects', href: '#projects', children: 'Projects' },
];

interface DevBlogHeaderProps {
  isHomePage: boolean;
}

const DevBlogHeader = ({ isHomePage }: DevBlogHeaderProps) => {
  const { theme, toggleTheme, fadeClass } = useTheme();

  // State to track if the component has mounted
  // (used for fade animations and controlling the toggle button)
  const [isMounted, setIsMounted] = useState(false);

  // State to manage header visibility (fades in/out on scroll, if home page)
  const [isVisible, setIsVisible] = useState(isHomePage ? false : true);

  // Track which link is currently active based on scroll
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    // Make sure we always consider the component "mounted" on first render,
    // regardless of page. That way the toggle button can appear everywhere.
    setIsMounted(true);

    // If not on the home page, just show the header and skip scroll logic.
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    // Only apply scroll-based visibility and active-link detection on home page
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentActiveLink = '';

      links.forEach((link) => {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          const sectionBottom = sectionTop + rect.height;

          if (sectionTop <= scrollPosition && sectionBottom > scrollPosition) {
            currentActiveLink = link.href;
          }
        }
      });

      setActiveLink(currentActiveLink);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run it once right away

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  // Only show the toggle button if the component is mounted
  // so we avoid hydration mismatch with SSR
  const toggleButton = isMounted ? (
    <IconButton
      onClick={toggleTheme}
      theme="transparent"
      className="border-0"
      label="Toggle Theme"
      icon={
        theme && (theme as ThemeType).name === 'light' ? (
          <FiMoon className={`moon h-6 w-6 ${fadeClass}`} />
        ) : (
          <FiSun className={`sun h-6 w-6 ${fadeClass}`} />
        )
      }
    />
  ) : null;

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-opacity duration-300 z-50 bg-surface ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto max-w-full bg-bg-color shadow-xl">
        <Flex className="flex-row justify-between py-4 container mx-auto items-center space-y-2 md:space-y-0">
          {/* LOGO AREA */}
          <Flex className="items-center">
            <Link
              href="/"
              className="button-link"
              aria-label="Robert Hogan's Home"
            >
              {logo}
            </Link>
            <Link href="/" className="hidden md:flex">
              <span>Robert Hogan</span>
            </Link>
          </Flex>

          {/* NAV + BUTTONS */}
          <Flex className="flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.id}
                href={isHomePage ? link.href : `/${link.href}`}
                className={`nav-link ${
                  activeLink === link.href ? 'active' : ''
                }`}
                onClick={(e) => {
                  // If on home page, smoothly scroll to the section
                  if (isHomePage) {
                    e.preventDefault();
                    scrollToProjects(link.id);
                  }
                }}
              >
                <span className="text-xs md:text-base">{link.children}</span>
              </Link>
            ))}

            {/* DOWNLOAD RESUME BUTTON with ICON */}
            <a
              href="https://rhogandev.wordpress.com/wp-content/uploads/2025/03/27.03.25-rh-resume.pdf"
              download
              className="inline-flex items-center space-x-1 leading-none"
            >
              <span className="text-xs md:text-base">Resume</span>
              <FiDownload className="h-4 w-4 align-middle" />
            </a>

            {/* THEME TOGGLE BUTTON */}
            {toggleButton}
          </Flex>
        </Flex>
      </div>
    </header>
  );
};

export default DevBlogHeader;
