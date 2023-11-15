import { Heading, Text } from '@with-nx/react-ui';
import RSHSection from '../components/RSHSection';

interface RSHOurStorySectionProps {
  isLoading?: boolean;
}

const RSHOurStorySection = ({ isLoading }: RSHOurStorySectionProps) => {
  return (
    <RSHSection>
      <div className="container max-w-2xl mx-auto">
        <Heading level={2} isLoading={isLoading}>
          Our Story
        </Heading>
        <Text className="mt-4" isLoading={isLoading} rows={2}>
          Dive into our journey of transforming ideas into digital realities...
        </Text>
      </div>
    </RSHSection>
  );
};

export default RSHOurStorySection;
