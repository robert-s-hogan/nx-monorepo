import Image from 'next/image';
import Link from 'next/link';
import { Button, Text } from '@with-nx/react-ui';
import { CustomJHLogo } from '@with-nx/icons';

import JHSocialMediaIcons from './JHSocialMediaIcons';

const JHFooter = () => {
  const copyright = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto max-w-7xl w-full flex flex-col justify-center items-center px-4 sm:flex-row py-8 space-y-6 md:space-y-0">
        <Link href="/" passHref>
          <CustomJHLogo className="w-24 h-24" />
        </Link>
        <Text className="text-sm text-center sm:border-l-2 md:pl-2 md:ml-2">
          © {copyright} Jessica Hogan
        </Text>
        <JHSocialMediaIcons />
      </div>
    </footer>
  );
};

export default JHFooter;
