import Image from 'next/image';
import Link from 'next/link';
import { Button, Flex } from '@with-nx/react-ui';
import { CustomRSHLogo } from '@with-nx/icons';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const DevBlogFooter = () => {
  return (
    <footer className="container mx-auto max-w-7xl pb-0 mt-8">
      <Flex className="flex-row justify-between py-4 items-center mx-0space-y-2 md:space-y-0">
        <Link href="/" className="button-link" passHref>
          <Button aria-label="Robert Hogans Home">
            <CustomRSHLogo className="h-12 w-12 text-primary nav-logo" />
          </Button>
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
    </footer>
  );
};

export default DevBlogFooter;
