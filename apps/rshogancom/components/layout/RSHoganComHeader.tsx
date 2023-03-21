import { Button } from '@with-nx/react-ui';
import Image from 'next/image';
import NextLink from 'next/link';
import Script from 'next/script';

import { useModal } from '@with-nx/react-hooks';
import RSHModal from '../RSHModal';

import RSH_logo from '../../assets/images/rsh_logo_Crop.jpg';

const RSHoganComHeader = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      {/* <Script
        strategy="lazyOnload"
        src="https://assets.calendly.com/assets/external/widget.js"
      /> */}
      <header className="bg-white">
        <div className="w-full mx-auto py-0 md:py-4 lg:px-0 text-lg md:text-2xl lg:max-w-4xl ">
          <div className="flex justify-between text-white p-4 lg:px-0 text-2xl max-w-4xl">
            <NextLink href="/" className="flex items-center justify-center">
              <div>
                <Image
                  src={RSH_logo}
                  width={48}
                  height={40}
                  priority
                  className=""
                  alt="Robert Hogan's Logo"
                />
              </div>
            </NextLink>
            <nav className="flex justify-center">
              <Button onClick={toggle} type="submit">
                Say Hello
              </Button>
            </nav>
          </div>
        </div>
      </header>
      {isShowing && <RSHModal isShowing={isShowing} toggle={toggle} />}
    </>
  );
};

export default RSHoganComHeader;
