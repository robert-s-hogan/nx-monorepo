import { Text } from '@with-nx/react-ui';
import { Heading } from '@with-nx/generic-ui';
import RSHSection from './RSHSection';

interface RSHOurStoryProps {
  isLoading?: boolean;
}

const RSHOurStory = ({ isLoading }: RSHOurStoryProps) => {
  return (
    <RSHSection>
      <div className="container max-w-5xl mx-auto">
        <Heading level={2} text="Our Story" />
        <Text className="mt-4" isLoading={isLoading} rows={2}>
          Dive into our journey of transforming ideas into digital realities.
          Since 2017, we've been dedicated to providing top-notch web
          development and AI solutions. Our mission is to empower businesses by
          creating innovative, efficient, and user-friendly digital experiences.
          We believe in continuous learning and adapting to the latest
          technologies to offer the best services to our clients.
        </Text>
      </div>
    </RSHSection>
  );
};

export default RSHOurStory;
