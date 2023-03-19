import { useState } from 'react';
import { Tr, Box, Td, Text, Flex } from '@chakra-ui/react';

function CreaturesOnMap({ monsters }) {
  const [randomArray] = useState([]);

  return (
    <Tr>
      <Td>
        <Flex ml={6}>
          {randomArray.map((encounter, index) => (
            <Box key={index}>
              {index < 4 && (
                <Text key={encounter.name} mr={2}>
                  {encounter.name}
                </Text>
              )}
            </Box>
          ))}
        </Flex>
      </Td>
    </Tr>
  );
}

export default CreaturesOnMap;
