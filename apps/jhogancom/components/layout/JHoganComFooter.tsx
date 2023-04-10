import Image from 'next/image';
import {
  FiMail,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiGithub,
} from 'react-icons/fi';

import JHLogoWhite from '../../public/images/jh_logo_white.webp';

const JHoganComFooter = () => {
  const copyright = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto max-w-7xl w-full flex flex-col justify-center items-center px-4 sm:flex-row py-8">
        <Image
          width={82}
          height={32}
          src={JHLogoWhite}
          alt="Jessica Hogan's Logo"
          className="h-8"
        />
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {copyright} Jessica Hogan
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
          <a
            className="text-blue hover:text-black"
            href="mailto:jessicahoganma@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiMail size={24} />
          </a>

          <a
            className="text-blue hover:text-black ml-3"
            href="https://www.facebook.com/jessicahoganma"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook size={24} />
          </a>
          <a
            className="ml-3 text-blue hover:text-black"
            href="https://twitter.com/jessicahoganma"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter size={24} />
          </a>
          <a
            className="ml-3 text-blue hover:text-black"
            href="https://www.instagram.com/jessica_hogan_ma/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jessicahoganma/"
            target="_blank"
            rel="noreferrer"
            className="ml-3 text-blue hover:text-black"
          >
            <FiLinkedin size={24} />
          </a>

          <a
            className="text-blue hover:text-black ml-3"
            href="https://github.com/jessicahoganma"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={24} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default JHoganComFooter;
