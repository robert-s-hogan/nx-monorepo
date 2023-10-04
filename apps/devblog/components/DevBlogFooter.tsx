import Image from 'next/image';
import { Link, Flex } from '@with-nx/react-ui';
import { CustomRSHLogo } from '@with-nx/icons';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiReact } from 'react-icons/si';

import RSHLogo from '../public/images/rsh_logo.png';

const DevBlogFooter = () => {
  return (
    <footer className="container mx-auto max-w-7xl pb-0 mt-8">
      <Flex className="flex-row justify-between py-4 items-center mx-0space-y-2 md:space-y-0">
        <Link href="/" className="button-link">
          <CustomRSHLogo className="h-12 w-12 text-primary nav-logo" />
        </Link>

        <Flex className="sm:mt-0 pt-4 justify-center pb-4 lg:pb-0 space-x-4  mr-2 md:mr-0 ">
          <Link
            href="mailto:robert@robertshogan.com"
            className=" hover:text-vivid-500"
            target="_blank"
          >
            <FiMail className="w-6 h-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/robert-s-hogan/"
            className="hover:text-vivid-500"
            target="_blank"
          >
            <FiLinkedin className="w-6 h-6" />
          </Link>
          <Link
            href="https://github.com/robert-s-hogan"
            className=" hover:text-vivid-500"
            target="_blank"
          >
            <FiGithub className="w-6 h-6" />
          </Link>
        </Flex>
      </Flex>
    </footer>
  );
};

export default DevBlogFooter;
