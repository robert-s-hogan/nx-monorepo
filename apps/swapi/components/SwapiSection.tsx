import { Heading, Section } from '@with-nx/react-ui';

import { backgroundColorMap, colorMap, minHeightMap } from '../utils/styleMaps';

interface SwapiSectionProps {
  className?: string;
  children: React.ReactNode;
  minHeight: string;
  backgroundColor: string;
  headingLevel?: number;
  heading?: string;
  headingAlignment?: 'left' | 'center' | 'right';
  headingColor?: string;
}

const SwapiSection = ({
  className,
  children,
  minHeight,
  backgroundColor,
  headingLevel = 1,
  heading = '',
  headingAlignment = 'center',
  headingColor,
}: SwapiSectionProps) => {
  return (
    <Section
      className={`${backgroundColorMap[backgroundColor]} flex flex-col items-center justify-center gap-0 w-full ${minHeightMap[minHeight]} overflow-hidden space-y-6 ${className}`}
    >
      <div className="w-full max-w-2xl lg:max-w-6xl px-2">
        <Heading
          className={`text-${headingAlignment} ${colorMap[headingColor]}`}
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
