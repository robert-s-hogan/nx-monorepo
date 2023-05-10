import { Section, SectionProps } from '@with-nx/react-ui';

interface ResuableSectionProps extends SectionProps {
  children: React.ReactNode;
  id?: string;
  minHeight?: string;
  style?: React.CSSProperties;
}

const ResuableSection = ({
  children,
  id,
  minHeight,
  style,
  ...rest
}: ResuableSectionProps) => {
  return (
    <Section
      className="container max-w-7xl mx-auto py-16 px-4" 
      id={id}
      style={{ minHeight, ...style }}
      {...rest}
    >
      {children}
    </Section>
  );
};

export default ResuableSection;
