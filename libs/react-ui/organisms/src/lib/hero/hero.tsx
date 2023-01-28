import { Heading, Button } from '@with-nx/react-ui';

/* eslint-disable-next-line */
export interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonClassName?: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  onButtonClick?: () => void;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonClassName,
  buttonText,
  buttonIcon,
  onButtonClick,
  className,
}) => (
  <section
    className={className}
    style={
      backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
    }
  >
    <Heading level={1} tabIndex={1}>
      {title}
    </Heading>
    {subtitle && (
      <Heading level={2} tabIndex={1}>
        {subtitle}
      </Heading>
    )}
    {buttonText && (
      <Button
        className={buttonClassName}
        onClick={onButtonClick}
        icon={buttonIcon}
      >
        {buttonText}
      </Button>
    )}
  </section>
);

export default Hero;
