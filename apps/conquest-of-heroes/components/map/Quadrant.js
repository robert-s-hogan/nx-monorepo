import React from 'react';
import {
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  VStack,
} from '@chakra-ui/react';
import { FiAlertCircle } from 'react-icons/fi';

const Quadrant = ({
  structures,
  generatedStructures,
  quadrantIndex,
  oppositionStartingPotion,
}) => {
  return (
    <>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <VStack>
          {generatedStructures.map((generatedStructure, index) => (
            <Popover
              key={generatedStructure.name[0]}
              trigger="hover"
              p={4}
              overflowY="visible"
            >
              <PopoverTrigger>
                <Flex itemsAlign="center" justifyContent="flex-start">
                  <Text fontSize="xs" mr={1}>
                    {generatedStructure.name}
                  </Text>
                  <FiAlertCircle color="blue" size={12} />
                </Flex>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{generatedStructure.name}</PopoverHeader>
                <PopoverBody>{generatedStructure.fullDescription}</PopoverBody>
              </PopoverContent>
            </Popover>
          ))}
        </VStack>
      </Flex>
    </>
  );
};

export default Quadrant;
