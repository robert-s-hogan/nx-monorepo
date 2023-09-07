import { Heading, Section } from '@with-nx/react-ui';
import { getColorMap } from '../utils/themeMap';
import { minHeightMap } from '../utils/stylesMap';

interface SwapiSectionProps {
  className?: string;
  children: React.ReactNode;
  minHeight: string;
  headingLevel?: number;
  heading?: string;
  headingAlignment?: 'left' | 'center' | 'right';
  themeColors?: {
    text: {
      [key: string]: string;
    };
    background: {
      [key: string]: string;
    };
  };
}

const SwapiSection = ({
  className = '',
  children,
  minHeight,
  headingLevel = 1,
  heading = '',
  headingAlignment = 'center',
  themeColors,
}: SwapiSectionProps) => {
  const backgroundClass = themeColors?.background.background || '';
  const textColorClass = themeColors?.text.primary || ''; // Default to primary color

  return (
    <Section
      className={`${backgroundClass} flex flex-col items-center justify-center gap-0 w-full ${minHeightMap[minHeight]} overflow-hidden space-y-6 ${className}`}
    >
      <div className="w-full max-w-2xl lg:max-w-6xl px-2">
        <Heading
          className={`text-${headingAlignment} ${textColorClass}`}
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
