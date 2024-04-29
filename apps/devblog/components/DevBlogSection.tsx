import { Section } from '@with-nx/generic-ui';

interface DevBlogSectionProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const DevBlogSection = ({
  className,
  children,
  style,
}: DevBlogSectionProps) => {
  return (
    <Section
      className={`container max-w-7xl'
      } mx-auto space-y-6 px-4 py-16 ${className ? className : ''}`}
      style={style}
    >
      {children}
    </Section>
  );
};

export default DevBlogSection;
