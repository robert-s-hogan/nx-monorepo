import { Hero, Button, Modal } from '@with-nx/react-ui';
import Image from 'next/image';
// import NextLink from 'next/link';
import Script from 'next/script';
import RSHModal from './RSHModal';
import { useModal } from '@with-nx/react-hooks';
import { FiX } from 'react-icons/fi';
import { useTheme } from '@with-nx/theme';

const RSHHeroSection = () => {
  const { isShowing, toggle } = useModal();
  const { theme } = useTheme();

  return (
    <Hero
      layout="custom"
      className={`${
        theme.name === 'light' ? 'light-gradient' : 'dark-gradient'
      } max-h-full md:py-24 h-max py-32 flex flex-col justify-center items-center text-primary space-y-4`}
    >
      <div
        className="flex justify-center mx-auto relative"
        style={{ width: '256px', height: '256px' }}
      >
        <Image
          priority={true}
          src="https://rshogan.imgix.net/projects/rshogancom/images/rsh_home.jpg"
          className="rounded-full object-cover"
          height={256}
          width={256}
          alt="Robert's Professional Shot"
        />
      </div>

      <h1 className="text-xl md:text-3xl font-bold text-center md:order-1">
        Web Developer, UI/UX Engineer
      </h1>
      <p className="text-center">
        I design and code beautifully simple things, and I love what I do.
      </p>
      <div className="flex justify-center space-x-8 items-center">
        <Button className="btn-primary" onClick={toggle}>
          Schedule a Meeting
        </Button>
        {/* <NextLink href="/404" className="underline text-primary">
          View Projects
        </NextLink> */}
      </div>
      <dialog open={isShowing}>
        {/* <Button onClick={toggle} autoFocus> */}
        <div className="w-full z-10 pb-2" onClick={toggle}>
          <FiX className="h-5 w-5 ml-auto opacity-80" />
        </div>
        {/* </Button> */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/robertshogan"
          style={{ minWidth: '320px', height: '600px' }}
        ></div>
        <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></Script>
      </dialog>
    </Hero>
  );
};

export default RSHHeroSection;
