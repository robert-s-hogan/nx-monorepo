import { Box, Heading, Skeleton, Text } from '@with-nx/react-ui';
import { Flex } from '@with-nx/generic-ui';
import Image from 'next/image';

import RSHSection from '../components/RSHSection';
import CustomImage from '../components/RSHCustomImage';
import { collaborators } from '../data/collaborators';

interface RSHAsSeenInSectionProps {
  isLoading?: boolean;
}

const RSHAsSeenInSection = ({ isLoading }: RSHAsSeenInSectionProps) => {
  return (
    <RSHSection>
      <Heading level={2} isLoading={isLoading}>
        As Seen In
      </Heading>
      <Flex className="flex-wrap justify-center items-center mt-6">
        {collaborators.map((collaborator) => (
          <Box
            className="p-4"
            key={collaborator.alt}
            style={{ height: '100px', flexBasis: 'calc(20% - 8px)' }} // Adjust flexBasis as per layout needs
          >
            {isLoading ? (
              <Skeleton isLoading={true} height="100%" width="100%" />
            ) : (
              <a href={collaborator.href} target="_blank" rel="noreferrer">
                <span className="sr-only">{collaborator.alt}</span>
                <div
                  style={{
                    backgroundImage: `url(${collaborator.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    width: '100%',
                  }}
                />
              </a>
            )}
          </Box>
        ))}
      </Flex>
    </RSHSection>
  );
};

export default RSHAsSeenInSection;
