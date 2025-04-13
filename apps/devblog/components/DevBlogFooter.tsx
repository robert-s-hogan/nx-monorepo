import Link from 'next/link';
import { Flex } from '@with-nx/react-ui';
import { CustomRSHLogo } from '@with-nx/icons';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import DevBlogSection from './DevBlogSection';

const DevBlogFooter = () => {
  return (
    <footer>
      <DevBlogSection className="!pt-0 !pb-8">
        <Flex className="mx-0 flex-row items-center justify-between space-y-2 py-4 pb-2 md:space-y-0 md:px-4 md:pb-0">
          <Link href="/" className="button-link" passHref>
            <CustomRSHLogo className="text-primary nav-logo ml-[-45px] h-24 w-24" />
          </Link>

          <Flex className="mr-2 justify-center space-x-4 py-4 sm:mt-0  md:mr-0 lg:pb-0 ">
            <a
              href="mailto:robert@robertshogan.com"
              target="_blank"
              aria-label="Email Robert"
            >
              <FiMail className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/robert-s-hogan/"
              target="_blank"
              aria-label="Robert Hogans LinkedIn Profile"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/robert-s-hogan"
              target="_blank"
              aria-label="Robert Hogans GitHub Profile"
            >
              <FiGithub className="h-6 w-6" />
            </a>
          </Flex>
        </Flex>
      </DevBlogSection>
    </footer>
  );
};

export default DevBlogFooter;
