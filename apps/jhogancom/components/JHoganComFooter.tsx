import Image from 'next/image';
import Link from 'next/link';
import {
  FiMail,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiGithub,
} from 'react-icons/fi';

import JHSocialMediaIcons from './JHSocialMediaIcons';
import JHLogoWhite from '../public/images/jh_logo_white.webp';

const JHoganComFooter = () => {
  const copyright = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto max-w-7xl w-full flex flex-col justify-center items-center px-4 sm:flex-row py-8 space-y-6">
        <Link href="/">
          <Image
            width={82}
            height={32}
            src={JHLogoWhite}
            alt="Jessica Hogan's Logo"
            className="h-8"
          />
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 md:mt-0">
          © {copyright} Jessica Hogan
        </p>
        <JHSocialMediaIcons />
      </div>
    </footer>
  );
};

export default JHoganComFooter;
