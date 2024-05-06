import Link from 'next/link';
import { Button, Flex } from '@with-nx/react-ui';
import { CustomRSHLogo } from '@with-nx/icons';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import DevBlogSection from './DevBlogSection';

const DevBlogFooter = () => {
  return (
    <footer>
      <DevBlogSection>
        <Flex className="flex-row justify-between py-4 items-center mx-0 space-y-2 md:space-y-0 md:px-4 pb-2 md:pb-0">
          <Link href="/" className="button-link" passHref>
            <CustomRSHLogo className="h-24 w-24 text-primary nav-logo ml-[-45px]" />
          </Link>

          <Flex className="sm:mt-0 pt-4 justify-center pb-4 lg:pb-0 space-x-4  mr-2 md:mr-0 ">
            <a
              href="mailto:robert@robertshogan.com"
              target="_blank"
              aria-label="Email Robert"
            >
              <FiMail className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/robert-s-hogan/"
              target="_blank"
              aria-label="Robert Hogans LinkedIn Profile"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/robert-s-hogan"
              target="_blank"
              aria-label="Robert Hogans GitHub Profile"
            >
              <FiGithub className="w-6 h-6" />
            </a>
          </Flex>
        </Flex>
      </DevBlogSection>
    </footer>
  );
};

export default DevBlogFooter;
