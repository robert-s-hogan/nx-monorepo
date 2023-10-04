import Image from 'next/image';
import Link from 'next/link';
import { Text } from '@with-nx/react-ui';

import JHSocialMediaIcons from './JHSocialMediaIcons';
import JHLogoWhite from '../public/images/jh_logo_white.webp';

const JHoganComFooter = () => {
  const copyright = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto max-w-7xl w-full flex flex-col justify-center items-center px-4 sm:flex-row py-8 space-y-6 md:space-y-0">
        <Link href="/">
          <Image
            width={82}
            height={32}
            src={JHLogoWhite}
            alt="Jessica Hogan's Logo"
          />
        </Link>
        <Text className="text-sm sm:border-l-2 md:pl-2 md:ml-2">
          © {copyright} Jessica Hogan
        </Text>
        <JHSocialMediaIcons />
      </div>
    </footer>
  );
};

export default JHoganComFooter;
