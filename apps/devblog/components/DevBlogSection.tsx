import { Section } from '@with-nx/react-ui';

interface DevBlogSectionProps {
  className?: string;
  children: React.ReactNode;
}

const DevBlogSection = ({ className, children }) => {
  return (
    <Section className={`space-y-6 px-4 ${className ? className : ''}`}>
      {children}
    </Section>
  );
};

export default DevBlogSection;
