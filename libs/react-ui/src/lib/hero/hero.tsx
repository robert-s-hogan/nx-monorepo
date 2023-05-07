import Heading from '../heading/heading';
import Button from '../button/button';

/* eslint-disable-next-line */
export interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonClassName?: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  onButtonClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  layout?: 'default' | 'custom';
}

export const Hero: React.FC<HeroProps> = ({
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
}) => {
  let content;

  if (layout === 'default') {
    content = (
      <>
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
      </>
    );
  } else if (layout === 'custom') {
    // Custom layout code here
    content = children;
  }

  return (
    <section
      className={className}
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
    >
      {content}
    </section>
  );
};

export default Hero;
