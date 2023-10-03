import Link from 'next/link';

import { Flex } from '@with-nx/react-ui';
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi';

const JHSocialMediaIcons = () => {
  return (
    <Flex className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start space-x-2 h-full">
      <Link
        className=""
        href="mailto:jessicahoganma@gmail.com"
        aria-label="Jessica Hogan's Email"
      >
        <FiMail className="w-6 h-6" />
      </Link>

      <Link
        className="svg-hover"
        href="https://www.facebook.com/jessicahoganma"
        target="_blank"
        aria-label="Jessica Hogan's Facebook"
      >
        <FiFacebook className="w-6 h-6" />
      </Link>
      <Link
        className="svg-hover"
        href="https://twitter.com/jessicahoganma"
        target="_blank"
        aria-label="Jessica Hogan's Twitter"
      >
        <FiTwitter className="w-6 h-6" />
      </Link>
      <Link
        className="svg-hover"
        href="https://www.instagram.com/jessica_hogan_ma/"
        target="_blank"
        aria-label="Jessica Hogan's Instagram"
      >
        <FiInstagram className="w-6 h-6" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jessicahoganma/"
        target="_blank"
        className="svg-hover"
        aria-label="Jessica Hogan's LinkedIn"
      >
        <FiLinkedin className="w-6 h-6" />
      </Link>

      <Link
        className="svg-hover"
        href="https://github.com/jessicahoganma"
        target="_blank"
        aria-label="Jessica Hogan's Github"
      >
        <FiGithub className="w-6 h-6" />
      </Link>
    </Flex>
  );
};

export default JHSocialMediaIcons;
