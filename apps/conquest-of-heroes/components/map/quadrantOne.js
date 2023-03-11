import { useState } from 'react';
import { Text, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { pickStructureArray } from '../../lib/pickStructureArray';

const QuadrantOne = ({ objects, structures }) => {
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

  return (
    <>
      {/* <pre>{JSON.stringify(structures[randomStructureOne].icon, null, 2)}</pre> */}
      <Box position="absolute" top="5" left="5" right="5" bottom="5">
        {randomItemOne && (
          <Text fontSize="xs">{objects[randomItemOne].name}</Text>
        )}
        {randomStructureOne && (
          <Text fontSize="xs">{structures[randomStructureOne].name}</Text>
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
          <Text fontSize="xs">{objects[randomItemTwo].name}</Text>
        )}
        {randomStructureTwo && (
          <Text fontSize="xs">{structures[randomStructureTwo].name}</Text>
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
          <Text fontSize="xs">{objects[randomItemThree].name}</Text>
        )}
        {randomStructureThree && (
          <Text fontSize="xs">{structures[randomStructureThree].name}</Text>
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
          <Text fontSize="xs">{objects[randomItemFour].name}</Text>
        )}
        {randomStructureFour && (
          <Text fontSize="xs">{structures[randomStructureFour].name}</Text>
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
export default QuadrantOne;
