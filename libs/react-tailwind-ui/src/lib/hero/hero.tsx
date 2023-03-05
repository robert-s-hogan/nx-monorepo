/*

  The Hero component is a reusable React component that can be used to create a hero section on a web page. It takes in the following props:

  backgroundImage: (optional) a string that represents the URL of the background image for the hero section.
  children: (optional) a React node that represents the custom content for the hero section.
  height: a string that represents the height of the hero section.

  Example usage:

  import { Hero } from '@with-nx/react-ui/organisms';

    Hero backgroundImage="/Gradient.png" height="620px">
      <h1 className="text-4xl font-bold text-white">Welcome to my website!</h1>
    </HeroSection>
  

*/

/* eslint-disable-next-line */
type HeroSectionProps = {
  backgroundImage: string;
  height: string;
  children: React.ReactNode;
  backgroundSize?: string;
  id?: string;
};

export const Hero = ({
  backgroundImage,
  height,
  children,
  backgroundSize = 'cover',
  id,
}) => {
  return (
    <section
      id={id ? id : ''}
      className="relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height,
        backgroundSize: backgroundSize,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section className="h-full w-full flex flex-col justify-center items-center">
        {children}
      </section>
    </section>
  );
};

export default Hero;
