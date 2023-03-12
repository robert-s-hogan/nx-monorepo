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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FiRotateCcw, FiAlertCircle } from 'react-icons/fi';
import { pickStructureArray } from '../../lib/pickStructureArray';

const QuadrantThree = ({ objects, structures }) => {
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;
  const [randomArray, setRandomArray] = useState([]);

  const randomItemOne = randomNumber(0, objects.length);
  const randomItemTwo = randomNumber(0, objects.length);
  const randomItemThree = randomNumber(0, objects.length);
  const randomItemFour = randomNumber(0, objects.length);

  const randomStructureOne = randomNumber(1, structures.length);
  const randomStructureTwo = randomNumber(1, structures.length);
  const randomStructureThree = randomNumber(1, structures.length);
  const randomStructureFour = randomNumber(1, structures.length);

  const randomizeQuandrant = () => {
    setRandomArray([
      randomItemOne,
      randomItemTwo,
      randomItemThree,
      randomItemFour,
      randomStructureOne,
      randomStructureTwo,
      randomStructureThree,
      randomStructureFour,
    ]);

    console.log(randomArray);
  };

  useEffect(() => {
    randomizeQuandrant();
  }, []);

  const restrictedObjects = objects.map(
    ({
      name,
      ac_string,
      category,
      cost,
      stealth_disadvantage,
      weight,
      type,
      desc,
      requires_attunement,
      rarity,
    }) => ({
      name,
      ac_string,
      category,
      cost,
      stealth_disadvantage,
      weight,
      type,
      desc,
      requires_attunement,
      rarity,
    })
  );

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
        {randomItemOne && (
          <Popover trigger="hover" p={4} overflowY="visible">
            <PopoverTrigger>
              <Flex itemsAlign="center" justifyContent="center">
                <Text fontSize="xs" mr={1}>
                  {restrictedObjects[randomItemOne].name.slice(0, 15)}
                  {restrictedObjects[randomItemOne].name.length > 15
                    ? '...'
                    : ''}
                </Text>
                <FiAlertCircle color="blue" size={12} />
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                {restrictedObjects[randomItemOne].name}
              </PopoverHeader>
              <PopoverBody>
                <VStack align="flex-start" spacing={0}>
                  {Object.entries(restrictedObjects[randomItemOne]).map(
                    ([key, value]) => {
                      if (!value) {
                        return null;
                      }
                      return (
                        <div key={key}>
                          <strong>{key}: </strong>
                          {value}
                        </div>
                      );
                    }
                  )}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
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

        {/* {randomStructureOne && (
          <FontAwesomeIcon
            icon={pickStructureArray(structures[randomStructureOne].icon)}
            size="2xl"
          />
        )} */}
      </Box>
      <Box position="absolute" left="5" right="5" bottom="5">
        {randomItemTwo && (
          <Popover trigger="hover" p={4} overflowY="visible">
            <PopoverTrigger>
              <Flex itemsAlign="center" justifyContent="center">
                <Text fontSize="xs" mr={1}>
                  {restrictedObjects[randomItemTwo].name.slice(0, 15)}
                  {restrictedObjects[randomItemTwo].name.length > 15
                    ? '...'
                    : ''}
                </Text>
                <FiAlertCircle color="blue" size={12} />
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                {restrictedObjects[randomItemTwo].name}
              </PopoverHeader>
              <PopoverBody>
                <VStack align="flex-start" spacing={0}>
                  {Object.entries(restrictedObjects[randomItemTwo]).map(
                    ([key, value]) => {
                      if (!value) {
                        return null;
                      }
                      return (
                        <div key={key}>
                          <strong>{key}: </strong>
                          {value}
                        </div>
                      );
                    }
                  )}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
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

        {/* {randomStructureTwo && (
          <FontAwesomeIcon
            icon={pickStructureArray(structures[randomStructureTwo].icon)}
            size="2xl"
          />
        )} */}
      </Box>
      <Box position="absolute" right="5">
        {randomItemThree && (
          <Popover trigger="hover" p={4} overflowY="visible">
            <PopoverTrigger>
              <Flex itemsAlign="center" justifyContent="flex-end">
                <Text fontSize="xs" mr={1}>
                  {restrictedObjects[randomItemThree].name.slice(0, 15)}
                  {restrictedObjects[randomItemThree].name.length > 15
                    ? '...'
                    : ''}
                </Text>
                <FiAlertCircle color="blue" size={12} />
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                {restrictedObjects[randomItemThree].name}
              </PopoverHeader>
              <PopoverBody>
                <VStack align="flex-start" spacing={0}>
                  {Object.entries(restrictedObjects[randomItemThree]).map(
                    ([key, value]) => {
                      if (!value) {
                        return null;
                      }
                      return (
                        <div key={key}>
                          <strong>{key}: </strong>
                          {value}
                        </div>
                      );
                    }
                  )}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
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
        {/* {randomStructureThree && (
          <FontAwesomeIcon
            icon={pickStructureArray(structures[randomStructureThree].icon)}
            size="2xl"
          />
        )} */}
      </Box>
      <Box position="absolute" left="5">
        {randomItemFour && (
          <Popover trigger="hover" p={4} overflowY="visible">
            <PopoverTrigger>
              <Flex itemsAlign="center" justifyContent="flex-end">
                <Text fontSize="xs" mr={1}>
                  {restrictedObjects[randomItemFour].name.slice(0, 15)}
                  {restrictedObjects[randomItemFour].name.length > 15
                    ? '...'
                    : ''}
                </Text>
                <FiAlertCircle color="blue" size={12} />
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                {restrictedObjects[randomItemFour].name}
              </PopoverHeader>
              <PopoverBody>
                <VStack align="flex-start" spacing={0}>
                  {Object.entries(restrictedObjects[randomItemFour]).map(
                    ([key, value]) => {
                      if (!value) {
                        return null;
                      }
                      return (
                        <div key={key}>
                          <strong>{key}: </strong>
                          {value}
                        </div>
                      );
                    }
                  )}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
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
        {/* {randomStructureFour && (
          <FontAwesomeIcon
            icon={pickStructureArray(structures[randomStructureFour].icon)}
            size="2xl"
          />
        )} */}
      </Box>
    </>
  );
};
export default QuadrantThree;
