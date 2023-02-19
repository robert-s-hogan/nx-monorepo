import { Hero, Button, Modal } from '@with-nx/react-ui';
import Image from 'next/image';
import NextLink from 'next/link';
import { useModal } from '@with-nx/react-hooks';
import { Calendly } from '@with-nx/analytics';
import Script from 'next/script';
import RSHModal from './RSHModal';

import HeroImg from '../public/images/rsh_hero_circle.jpg';

const HeroSection = () => {
  const { isShowing, toggle } = useModal();

  return (
    <Hero
      layout="custom"
      className="max-h-full bg-gradient-to-br from-primary-900 to-primary-700 dark:bg-gradient-to-r  md:py-24 h-max py-32 flex flex-col justify-center items-center text-primary space-y-4 bg-hero"
    >
      <div className="h-48 w-48 lg:h-64 lg:w-64 object-scale-down flex justify-center mx-auto rounded-lg relative">
        <Image
          placeholder="blur"
          priority={true}
          objectFit="contain"
          objectPosition="center"
          src={HeroImg}
          className="rounded-full"
          alt="Robert's Professional Shot"
        />
      </div>
      <h1 className="text-xl md:text-3xl font-bold text-center text-white md:order-1">
        Web Developer, UI/UX Engineer
      </h1>
      <p className="text-center text-white">
        I design and code beautifully simple things, and I love what I do.
      </p>
      {/* <div className="flex justify-center space-x-8 items-center">
        <Button className="btn-primary" onClick={toggle}>
          Schedule a Visit
        </Button>
        <NextLink href="/404" className="underline text-primary">
          View Projects
        </NextLink>
      </div> */}

      {/* <RSHModal isShowing={isShowing} hide={toggle}>
        <Calendly url="https://calendly.com/robert-s-hogan/30min" />
      </RSHModal> */}
    </Hero>
  );
};

export default HeroSection;
