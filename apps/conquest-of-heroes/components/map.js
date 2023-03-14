import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Text,
  Box,
  Grid,
  Heading,
  Flex,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faDragon } from '@fortawesome/free-solid-svg-icons';
import QuadrantOne from './map/quadrantOne';
import QuadrantTwo from './map/quadrantTwo';
import QuadrantThree from './map/quadrantThree';
import QuadrantFour from './map/quadrantFour';
import useSWR from 'swr';

import { useFetchItems5e } from '../hooks/useFetchItems5e';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Map({
  monsters,
  objects,
  oppositionStartingPotion,
  playerStartingPotion,
  amountOfItems,
  dimensions,
}) {
  const [randomArray, setRandomArray] = useState([]);

  const { data, error } = useSWR('/api/structures', fetcher);
  const {
    combinedObjects,
    loading,
    error: FetchItemsError,
  } = useFetchItems5e();

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  const mapSize = [1, 2, 3, 4];

  const randomizedObjects = () => {
    const randomArray = [];
    const availableIndexes = Array.from(
      { length: combinedObjects.length },
      (_, i) => i
    );

    for (let i = 0; i < 4; i++) {
      const randomIndex = randomNumber(0, availableIndexes.length - 1);
      const randomObject = combinedObjects[availableIndexes[randomIndex]];
      randomArray.push(randomObject);
      availableIndexes.splice(randomIndex, 1);
    }

    setRandomArray(randomArray);
  };

  useEffect(() => {
    randomizedObjects();
  }, []);

  if (!data) return <Text>Loading...</Text>;
  if (error && FetchItemsError) return <Text>Error: {error.message}</Text>;

  return (
    <Box pt={8}>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading as="h3" size="md">
                Map
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} height="500px">
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(3,1fr)' }}
              mt={24}
              mb={4}
              gap={1}
            >
              {mapSize.map((size, index) => (
                <GridItem
                  textAlign="center"
                  key={index}
                  colStart={{ lg: index === 3 ? 2 : '' }}
                  colEnd={{ lg: index === 3 ? 3 : '' }}
                >
                  <Box
                    height="200px"
                    bg="gray.200"
                    alignItems="center"
                    display="flex"
                    flex-direction="column"
                    justifyContent="center"
                    position="relative"
                    my={{ lg: index === 0 || index === 2 ? 24 : 0 }}
                    mt={{ lg: index === 1 || index === 3 ? '-6rem' : '' }}
                    mb={{ lg: index === 1 ? '-6rem' : '' }}
                  >
                    {oppositionStartingPotion === index && (
                      <Text fontSize="4xl" color="red.500">
                        <FontAwesomeIcon icon={faDragon} />
                      </Text>
                    )}

                    {index === 0 && <QuadrantOne structures={data} />}
                    {index === 1 && <QuadrantTwo structures={data} />}
                    {index === 2 && <QuadrantThree structures={data} />}
                    {index === 3 && (
                      <>
                        <QuadrantFour structures={data} />
                        <Text
                          fontSize="2xl"
                          width="100%"
                          background="green.500"
                          color="white"
                          position="absolute"
                          bottom="-2rem"
                        >
                          <FontAwesomeIcon icon={faPeopleGroup} />
                        </Text>
                      </>
                    )}
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
