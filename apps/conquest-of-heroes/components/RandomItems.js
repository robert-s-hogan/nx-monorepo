import { useState } from 'react';
import DynamicObjectComponent from '../components/DynamicObjectComponent';
import { generateRandomCategoryObject } from '../utils/generateRandomObject';

import { Grid, Button, VStack, Heading } from '@chakra-ui/react';

const generateRandomItems = (count) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    const randomItem = generateRandomCategoryObject();
    items.push(randomItem);
  }
  return items;
};

const RandomItems = () => {
  const [items, setItems] = useState(generateRandomItems(4));

  const refreshItems = () => {
    const newItems = generateRandomItems(4);
    setItems(newItems);
  };

  return (
    <VStack spacing={4} align="left" pb={24}>
      <Heading>Random Items Generated</Heading>
      <Button onClick={refreshItems} w={32}>
        Refresh Items
      </Button>

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={6}
      >
        {items.map((item, index) => (
          <DynamicObjectComponent key={index} data={item} />
        ))}
      </Grid>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </VStack>
  );
};

export default RandomItems;
