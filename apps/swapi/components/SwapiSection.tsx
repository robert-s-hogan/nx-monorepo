import { Heading, Section } from '@with-nx/react-ui';
import { minHeightMap } from '../utils/stylesMap';
import { useTheme } from '../context/ThemeProvider';

interface SwapiSectionProps {
  className?: string;
  children?: React.ReactNode;
  minHeight: string;
  headingLevel?: number;
  heading?: string;
  headingAlignment?: 'left' | 'center' | 'right';
  backgroundColor?: string;
  headingTextColor?: string;
  customBg?: boolean;
}

const SwapiSection = ({
  className = '',
  children,
  minHeight,
  headingLevel = 1,
  heading = '',
  headingAlignment = 'center',
  backgroundColor,
  headingTextColor,
  customBg = false,
}: SwapiSectionProps) => {
  const { colors } = useTheme();

  const defaultBackgroundColor = 'bg-default-primary';
  const defaultTextColor = 'text-default-primary';

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><g fill-rule="evenodd"><g fill="grey"><path d="M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z"></path></g></g></svg>`;
  const customBgStyles = customBg
    ? {
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
          svgString
        )}")`,
        backgroundSize: '40px 40px',
      }
    : {};

  return (
    <Section
      className={`${
        backgroundColor ? backgroundColor : defaultBackgroundColor
      } flex flex-col items-center justify-center gap-0 w-full ${
        minHeightMap[minHeight]
      } overflow-hidden space-y-6 ${className} w-full h-full rounded-none`}
      style={customBgStyles}
    >
      <div className={`w-full max-w-2xl lg:max-w-6xl px-2`}>
        <Heading
          className={`text-${headingAlignment} ${
            headingTextColor ? headingTextColor : defaultTextColor
          }`}
          level={headingLevel}
        >
          {heading}
        </Heading>
        {children}
      </div>
    </Section>
  );
};

export default SwapiSection;
