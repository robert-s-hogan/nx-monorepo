import { Flex } from '@with-nx/react-ui';
import { IconButton } from '@with-nx/generic-ui';
import Link from 'next/link';
import { useTheme, ThemeType } from '@with-nx/theme';
import { FiMoon, FiSun } from 'react-icons/fi';
import { CustomRSHLogo } from '@with-nx/icons';
import { useState, useEffect } from 'react';
import { scrollToProjects } from '../utils/helper';

const logo = (
  <CustomRSHLogo className="h-12 w-12 md:mb-2 text-primary nav-logo" />
);

// We've left your original links alone, but you could also add "Resume" in here:
const links = [
  { id: 'about', href: '#about', children: 'About' },
  { id: 'projects', href: '#projects', children: 'Projects' },
];

interface DevBlogHeaderProps {
  isHomePage: boolean;
}

const DevBlogHeader = ({ isHomePage }: DevBlogHeaderProps) => {
  const { theme, toggleTheme, fadeClass } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(isHomePage ? false : true);
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

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
    handleScroll();
    setIsMounted(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

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

          {/* NAVIGATION LINKS */}
          <Flex className="flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.id}
                href={isHomePage ? link.href : `/${link.href}`}
                className={`nav-link ${
                  activeLink === link.href ? 'active' : ''
                }`}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    scrollToProjects(link.id);
                  }
                }}
              >
                <span className="text-xs md:text-base">{link.children}</span>
              </Link>
            ))}

            {/* ADD YOUR RESUME LINK HERE */}
            {/* Option 1: Open in a new tab */}
            <Link
              href="https://rhogandev.wordpress.com/wp-content/uploads/2025/03/27.03.25-rh-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <span className="text-xs md:text-base">Resume</span>
            </Link>

            {/* Option 2: Force a download */}
            {/* 
            <a
              href="/resume.pdf"
              download
              className="nav-link"
            >
              <span className="text-xs md:text-base">Download Resume</span>
            </a>
            */}

            {toggleButton}
          </Flex>
        </Flex>
      </div>
    </header>
  );
};

export default DevBlogHeader;
