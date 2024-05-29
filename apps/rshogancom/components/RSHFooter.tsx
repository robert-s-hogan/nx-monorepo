import {
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi';
import Link from 'next/link';

import { Heading, Text } from '@with-nx/react-ui';
import { Flex } from '@with-nx/generic-ui';
import { CustomRSHLogo } from '@with-nx/icons';

import RSHSection from './RSHSection';

const links = [
  {
    name: 'Privacy Policy',
    url: '/privacy-policy',
  },
  {
    name: 'Terms of Service',
    url: '/terms-of-service',
  },
  {
    name: 'Accessibility',
    url: '/accessibility',
  },
];

// Data object to hold the link information
export const footerLinks = [
  {
    href: 'mailto:robert@robertshogan.com',
    ariaLabel: 'Email',
    icon: FiMail,
  },
  {
    href: 'https://www.facebook.com/robertshogancom',
    ariaLabel: 'Facebook',
    icon: FiFacebook,
  },
  {
    href: 'https://twitter.com/robert_s_hogan',
    ariaLabel: 'Twitter',
    icon: FiTwitter,
  },
  {
    href: 'https://www.linkedin.com/in/robert-s-hogan/',
    ariaLabel: 'LinkedIn',
    icon: FiLinkedin,
  },
  {
    href: 'https://github.com/robert-s-hogan',
    ariaLabel: 'GitHub',
    icon: FiGithub,
  },
];

const FooterLink = ({ href, ariaLabel, icon: Icon }) => (
  <Link href={href}>
    <Icon className="w-6 h-6" aria-label={ariaLabel} />
  </Link>
);

const RSHoganComFooter = () => {
  return (
    <footer className="border-t border-surface-color">
      <RSHSection className="py-8 items-center" innerContainer>
        <Flex className="flex-col lg:flex-row space-y-4 justify-between items-center h-full">
          <Flex className="order-last mt-4 lg:mt-0 lg:order-first space-x-4 items-center">
            <Link href="/">
              <CustomRSHLogo className="w-16 md:w-24 w-16 md:h-24 mx-auto" />
            </Link>
            <Text className="text-xs text-center">
              © 2024 Robertshogan.com. All rights reserved.
            </Text>
          </Flex>

          <Flex className="items-center space-x-6">
            {links.map((link) => (
              <Link key={link.url} href={link.url} passHref>
                {link.name}
              </Link>
            ))}
          </Flex>

          <Flex className="flex justify-center space-x-4">
            {footerLinks.map((link, index) => (
              <FooterLink key={index} {...link} />
            ))}
          </Flex>
        </Flex>
      </RSHSection>
    </footer>
  );
};

export default RSHoganComFooter;
