import { Heading, Section } from '@with-nx/react-ui';

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
  const colorMap = {
    primary: 'text-primary',
    yellow: 'text-yellow',
    white: 'text-white',
    'light-blue': 'text-light-blue',
  };

  const backgroundColorMap = {
    primary: 'bg-primary',
    yellow: 'bg-yellow',
    white: 'bg-white',
    'light-blue': 'bg-light-blue',
  };

  const minHeightMap = {
    200: 'min-h-[200px]',
    300: 'min-h-[300px]',
    400: 'min-h-[400px]',
    500: 'min-h-[500px]',
    600: 'min-h-[600px]',
  };

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
