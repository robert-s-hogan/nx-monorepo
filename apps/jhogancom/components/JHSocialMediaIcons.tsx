import Link from 'next/link';

import { Flex } from '@with-nx/react-ui';
import {
  FeatherMail,
  FeatherFacebook,
  FeatherTwitter,
  FeatherInstagram,
  FeatherLinkedin,
  FeatherGithub,
} from '@with-nx/icons';

const JHSocialMediaIcons = () => {
  return (
    <Flex className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start space-x-2 h-full">
      <a
        className=""
        href="mailto:jessicahoganma@gmail.com"
        aria-label="Jessica Hogan's Email"
      >
        <FeatherMail className="w-6 h-6" />
      </a>
      <a
        className="svg-hover"
        href="https://www.facebook.com/jessicahoganma"
        target="_blank"
        aria-label="Jessica Hogan's Facebook"
      >
        <FeatherFacebook className="w-6 h-6" />
      </a>
      <a
        className="svg-hover"
        href="https://twitter.com/jessicahoganma"
        target="_blank"
        aria-label="Jessica Hogan's Twitter"
      >
        <FeatherTwitter className="w-6 h-6" />
      </a>
      <a
        className="svg-hover"
        href="https://www.instagram.com/jessica_hogan_ma/"
        target="_blank"
        aria-label="Jessica Hogan's Instagram"
      >
        <FeatherInstagram className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/jessicahoganma/"
        target="_blank"
        className="svg-hover"
        aria-label="Jessica Hogan's LinkedIn"
      >
        <FeatherLinkedin className="w-6 h-6" />
      </a>

      <a
        className="svg-hover"
        href="https://github.com/jessicahoganma"
        target="_blank"
        aria-label="Jessica Hogan's Github"
      >
        <FeatherGithub className="w-6 h-6" />
      </a>
    </Flex>
  );
};

export default JHSocialMediaIcons;
