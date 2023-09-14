import { Section } from '@with-nx/react-ui';

interface DevBlogSectionProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  maxWidth?: boolean;
}

const DevBlogSection = ({
  className,
  children,
  style,
  maxWidth,
}: DevBlogSectionProps) => {
  return (
    <Section
      className={`${
        maxWidth ? 'max-w-full' : 'container max-w-7xl'
      } mx-auto py-8 space-y-6 px-4 my-16 ${className ? className : ''}`}
      style={style}
    >
      {children}
    </Section>
  );
};

export default DevBlogSection;
