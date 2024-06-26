import { Box, Skeleton, Text } from '@with-nx/react-ui';
import { Flex, Heading } from '@with-nx/generic-ui';
import Image from 'next/image';

import RSHSection from './RSHSection';
import { RSHInfiniteMovingCards } from './RSHInfiniteMovingCards';
import { collaborators } from '../data/collaborators';

interface RSHAsSeenInProps {
  isLoading?: boolean;
}

const RSHAsSeenIn = ({ isLoading }: RSHAsSeenInProps) => {
  return (
    <RSHSection className="w-full max-w-full text-center" fullWidth={true}>
      <Heading
        level={2}
        className="uppercase"
        text="Clients Across Industries"
      />
      <Heading
        level={3}
        className="mt-4 mb-0"
        text="Personalized Full-Stack Web Development"
      />
      <Flex className="flex-wrap justify-center items-center">
        <div className="h-[30rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
          <RSHInfiniteMovingCards
            items={collaborators}
            direction="right"
            speed="slow"
          />
        </div>
      </Flex>
    </RSHSection>
  );
};

export default RSHAsSeenIn;
