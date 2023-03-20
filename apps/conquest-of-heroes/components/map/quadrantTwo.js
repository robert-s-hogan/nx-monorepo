import { useState, useEffect } from 'react';
import {
  Text,
  Box,
  VStack,
  Button,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';
import { FiRotateCcw, FiAlertCircle } from 'react-icons/fi';

const QuadrantTwo = ({ structures, generatedStructure }) => {
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;
  const [randomArray, setRandomArray] = useState([]);

  const randomStructureOne = randomNumber(1, structures.length);
  const randomStructureTwo = randomNumber(1, structures.length);
  const randomStructureThree = randomNumber(1, structures.length);
  const randomStructureFour = randomNumber(1, structures.length);

  const randomizeQuandrant = () => {
    setRandomArray([
      randomStructureOne,
      randomStructureTwo,
      randomStructureThree,
      randomStructureFour,
    ]);
  };

  useEffect(() => {
    randomizeQuandrant();
  }, []);

  return (
    <>
      <Button
        onClick={randomizeQuandrant}
        zIndex="10"
        position="absolute"
        bottom="-2"
        left="-3"
        variant="transparent"
      >
        <FiRotateCcw color="green" size={16} />
      </Button>
      {/* <pre>{JSON.stringify(structures[randomStructureOne].icon, null, 2)}</pre> */}
      <Box position="absolute" top="5">
        {randomStructureOne && (
          <Popover trigger="hover" p={4} overflowY="visible">
            <PopoverTrigger>
              <Flex itemsAlign="center">
                <Text fontSize="xs" mr={1}>
                  {structures[randomStructureOne].name}
                </Text>
                <FiAlertCircle color="blue" size={12} />
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                {structures[randomStructureOne].name}
              </PopoverHeader>
              <PopoverBody>
                <VStack align="flex-start" spacing={0}>
                  {Object.entries(structures[randomStructureOne]).map(
                    ([key, value]) => (
                      <div key={key}>
                        <strong>{key}: </strong>
                        {value}
                      </div>
                    )
                  )}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Box>
      <Box position="absolute" left="5" right="5" bottom="5">
        {randomStructureTwo && (
          <Popover trigger="hover" p={4} overflowY="visible">
            <PopoverTrigger>
              <Flex itemsAlign="center" justifyContent="center">
                <Text fontSize="xs" mr={1}>
                  {structures[randomStructureTwo].name}{' '}
                </Text>
                <FiAlertCircle color="blue" size={12} />
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                {structures[randomStructureTwo].name}
              </PopoverHeader>
              <PopoverBody>
                <VStack align="flex-start" spacing={0}>
                  {Object.entries(structures[randomStructureTwo]).map(
                    ([key, value]) => (
                      <div key={key}>
                        <strong>{key}: </strong>
                        {value}
                      </div>
                    )
                  )}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Box>
      <Box position="absolute" right="5">
        {randomStructureThree && (
          <Popover trigger="hover" p={4} overflowY="visible">
            <PopoverTrigger>
              <Flex itemsAlign="center" justifyContent="flex-end">
                <Text fontSize="xs" mr={1}>
                  {structures[randomStructureThree].name}
                </Text>
                <FiAlertCircle color="blue" size={12} />
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                {structures[randomStructureThree].name}
              </PopoverHeader>
              <PopoverBody>
                <VStack align="flex-start" spacing={0}>
                  {Object.entries(structures[randomStructureThree]).map(
                    ([key, value]) => (
                      <div key={key}>
                        <strong>{key}: </strong>
                        {value}
                      </div>
                    )
                  )}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Box>
      <Box position="absolute" left="5">
        {randomStructureFour && (
          <Popover trigger="hover" p={4} overflowY="visible">
            <PopoverTrigger>
              <Flex itemsAlign="center" justifyContent="flex-start">
                <Text fontSize="xs" mr={1}>
                  {structures[randomStructureOne].name}
                </Text>
                <FiAlertCircle color="blue" size={12} />
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                {structures[randomStructureOne].name}
              </PopoverHeader>
              <PopoverBody>
                <VStack align="flex-start" spacing={0}>
                  {Object.entries(structures[randomStructureOne]).map(
                    ([key, value]) => (
                      <div key={key}>
                        <strong>{key}: </strong>
                        {value}
                      </div>
                    )
                  )}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Box>
    </>
  );
};
export default QuadrantTwo;
