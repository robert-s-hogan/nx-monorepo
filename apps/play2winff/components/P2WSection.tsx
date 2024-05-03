import { Section } from '@with-nx/generic-ui';

interface P2WSectionProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const P2WSection = ({ className, children, style }: P2WSectionProps) => {
  return (
    <Section
      className={`container max-w-7xl mx-auto space-y-6 px-4 py-16 ${
        className ? className : ''
      }`}
      style={style}
    >
      {children}
    </Section>
  );
};

export default P2WSection;
