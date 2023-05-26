import { HeroProps } from '@with-nx/types';
import Heading from '../heading/heading';
import Button from '../button/button';

export const Hero = ({
  title,
  subtitle,
  backgroundImage,
  buttonClassName,
  children,
  buttonText,
  buttonIcon,
  onButtonClick,
  className,
  layout = 'default',
}: HeroProps): JSX.Element => {
  let content;

  const baseClasses = `relative flex items-center justify-center h-screen text-white bg-center bg-no-repeat bg-cover ${className}`;
  const style = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  if (layout === 'default') {
    content = (
      <>
        <Heading level={1} tabIndex={1} className="text-4xl">
          {title}
        </Heading>
        {subtitle && (
          <Heading level={2} tabIndex={1} className="text-3xl">
            {subtitle}
          </Heading>
        )}
        {buttonText && (
          <Button
            className={`mt-4 ${buttonClassName}`}
            onClick={onButtonClick}
            icon={buttonIcon}
          >
            {buttonText}
          </Button>
        )}
      </>
    );
  } else if (layout === 'custom') {
    // Custom layout code here
    content = children;
  }

  return (
    <section className={baseClasses} style={style}>
      {content}
    </section>
  );
};

export default Hero;
