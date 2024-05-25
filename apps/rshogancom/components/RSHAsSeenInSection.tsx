import { Box, Heading, Skeleton, Text } from '@with-nx/react-ui';
import { Flex } from '@with-nx/generic-ui';
import Image from 'next/image';

import RSHSection from '../components/RSHSection';
import { InfiniteMovingCards } from '../components/InfiniteMovingCards';
import { collaborators } from '../data/collaborators';

interface RSHAsSeenInSectionProps {
  isLoading?: boolean;
}

const RSHAsSeenInSection = ({ isLoading }: RSHAsSeenInSectionProps) => {
  return (
    <div className="w-full max-w-full text-center py-16">
      <Heading level={2} isLoading={isLoading}>
        As Seen In
      </Heading>
      <Flex className="flex-wrap justify-center items-center mt-6">
        <div className="h-[30rem] rounded-md flex flex-col antialiased bg-secondary-color items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={collaborators}
            direction="right"
            speed="slow"
          />
        </div>
      </Flex>
    </div>
  );
};

export default RSHAsSeenInSection;
