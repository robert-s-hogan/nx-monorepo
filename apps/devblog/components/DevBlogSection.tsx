import { Section } from '@with-nx/generic-ui';
import { cn } from '@with-nx/utils';

interface DevBlogSectionProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  fullWidth?: boolean;
}

const DevBlogSection = ({
  className,
  children,
  style,
  fullWidth,
}: DevBlogSectionProps) => {
  const widthStyles = fullWidth ? 'max-w-full' : 'max-w-7xl';
  return (
    <Section
      className={`container mx-auto space-y-6 py-6 px-4 md:py-12 ${cn(
        className,
        widthStyles
      )}`}
      style={style}
    >
      {children}
    </Section>
  );
};

export default DevBlogSection;
