import Image from 'next/image';
import { Link, Flex } from '@with-nx/react-ui';
import { FeatherGithub, FaLinkedinIn, FeatherMail } from '@with-nx/icons';

import RSHLogo from '../public/images/rsh_logo.png';

const DevBlogFooter = () => {
  return (
    <footer className="container mx-auto max-w-7xl pb-8 px-4">
      <Flex className="items-center justify-between mt-16">
        <Link href="/" className="button-link">
          <Image
            src={RSHLogo}
            loading="lazy"
            height={25}
            width={48}
            alt="RobertsHogan Logo"
          />
        </Link>

        <Flex className="sm:mt-0 pt-4 justify-center  space-x-4">
          <Link
            href="mailto:robert@robertshogan.com"
            className=" hover:text-vivid-500"
            target="_blank"
          >
            <FeatherMail className="w-6 h-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/robert-s-hogan/"
            className="hover:text-vivid-500"
            target="_blank"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </Link>
          <Link
            href="https://github.com/robert-s-hogan"
            className=" hover:text-vivid-500"
            target="_blank"
          >
            <FeatherGithub className="w-6 h-6" />
          </Link>
        </Flex>
      </Flex>
    </footer>
  );
};

export default DevBlogFooter;
