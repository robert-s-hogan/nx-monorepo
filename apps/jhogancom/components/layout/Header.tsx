import NextLink from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between py-4 items-center text-black">
        <NextLink href="/">
          <Image
            src="https://rshogan.imgix.net/personal/logos/jh_logo_white.png"
            alt="Jessica Hogan's Logo"
            height="32"
            width="82"
            className="h-8"
          />
        </NextLink>
        <nav className="flex ">
          <div className="hidden md:inline-flex md:flex-end md:space-x-4 text-sm text-black">
            <NextLink
              className="flex justify-center items-center p-2"
              href="/#projects"
            >
              Projects
            </NextLink>
            <NextLink
              className="flex justify-center items-center p-2"
              href="/#who-i-am"
            >
              Who I Am
            </NextLink>
          </div>
          <button className="text-black cursor-pointer mr-0 border-none focus:outline-none md:hidden">
            <svg width="32" height="24">
              <line id="top" x1="0" y1="2" x2="32" y2="2" />
              <line id="middle" x1="8" y1="12" x2="32" y2="12" />
              <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
            </svg>
          </button>
          <nav className="hidden text-gray-500 uppercase text-bold sm:block"></nav>
        </nav>
      </div>
    </header>
  );
};

export default Header;
