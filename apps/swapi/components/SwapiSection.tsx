import { Heading, Section } from '@with-nx/react-ui';
import { getColorMap, ThemeColors } from '../utils/themeMap';
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
}: SwapiSectionProps) => {
  const { colors } = useTheme();

  const defaultBackgroundColor = 'bg-primary';
  const defaultTextColor = 'text-primary';

  return (
    <Section
      className={`${
        backgroundColor ? backgroundColor : defaultBackgroundColor
      } flex flex-col items-center justify-center gap-0 w-full ${
        minHeightMap[minHeight]
      } overflow-hidden space-y-6 ${className}`}
    >
      <div className="w-full max-w-2xl lg:max-w-6xl px-2">
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
