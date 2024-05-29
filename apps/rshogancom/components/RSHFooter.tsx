import {
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi';
import { Heading, Link, Text } from '@with-nx/react-ui';
import { Flex } from '@with-nx/generic-ui';
import { CustomRSHLogo } from '@with-nx/icons';

import RSHSection from './RSHSection';

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
      <RSHSection className="py-8" innerContainer>
        <Flex className="justify-between items-center">
          <div>
            <Link href="/">
              <CustomRSHLogo className="w-24 h-24 mx-auto" />
            </Link>
          </div>
          <div>
            <span className="flex sm:mt-0 pt-4 justify-center space-x-4">
              {footerLinks.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </span>
          </div>
        </Flex>
        <Text className="text-sm text-center mt-4">
          © 2024 Robertshogan.com. All rights reserved.
        </Text>
      </RSHSection>
    </footer>
  );
};

export default RSHoganComFooter;
