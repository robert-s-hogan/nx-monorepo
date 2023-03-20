import { useEffect, useState } from 'react';
import {
  Text,
  Button,
  Box,
  Grid,
  Heading,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faDragon } from '@fortawesome/free-solid-svg-icons';
import Quadrant from './map/Quadrant';

import useSWR from 'swr';

import { useFetchItems5e } from '../hooks/useFetchItems5e';
import { generateStructures } from '../utils/generateStructures';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Map({
  monsters,
  objects,
  oppositionStartingPotion: initialOppositionStartingPotion,
  playerStartingPotion,
  amountOfItems,
  dimensions,
}) {
  const [oppositionStartingPotion, setOppositionStartingPotion] = useState(
    initialOppositionStartingPotion
  );
  const [randomArray, setRandomArray] = useState([]);
  const randomCount = Math.floor(Math.random() * 5) + 1;
  const { data, error } = useSWR('/api/structures', fetcher);
  const { combinedObjects, error: FetchItemsError } = useFetchItems5e();

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  const mapSize = [1, 2, 3, 4];

  const [generatedStructures, setGeneratedStructures] = useState(
    generateStructures(mapSize.length)
  );
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

  const refreshMap = () => {
    setGeneratedStructures((prevState) => generateStructures(mapSize.length));
    setOppositionStartingPotion(randomNumber(0, 3));
    randomizedObjects();
  };

  useEffect(() => {
    randomizedObjects();
  }, []);

  if (!data) return <Text>Loading...</Text>;
  if (error && FetchItemsError) return <Text>Error: {error.message}</Text>;

  return (
    <Box>
      <Accordion allowMultiple defaultIndex={[0]}>
        <AccordionItem borderTop="none">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading as="h3" size="md">
                Map
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} height="600px">
            {/* <Button mt={4} onClick={refreshMap}>
              Refresh Map
            </Button> */}
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
                    mt={{
                      lg: index === 1 ? '-6rem' : index === 3 ? '-3.5rem' : '',
                    }}
                    mb={{ lg: index === 1 ? '-6rem' : '' }}
                  >
                    <Quadrant
                      structures={data}
                      generatedStructures={generatedStructures[index]}
                      quadrantIndex={index}
                      oppositionStartingPotion={oppositionStartingPotion}
                    />
                    {oppositionStartingPotion === index && index !== 3 && (
                      <Text
                        fontSize="2xl"
                        width="100%"
                        background="red.500"
                        color="white"
                        position="absolute"
                        bottom="-2rem"
                      >
                        <FontAwesomeIcon icon={faDragon} />
                      </Text>
                    )}
                    {index === 3 && (
                      <>
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
