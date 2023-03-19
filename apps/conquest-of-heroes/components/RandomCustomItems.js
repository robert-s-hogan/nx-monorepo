import { useState } from 'react';
import DynamicObjectComponent from '../components/DynamicObjectComponent';
import { CustomItems } from '../categories/CustomItems';
import { Grid, Button, VStack, Heading } from '@chakra-ui/react';
import generateCustomItem from '../utils/generateCustomItem';

const generateCustomItems = (count) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * CustomItems.length);
    const { name, type, effects } = CustomItems[randomIndex];
    const randomItem = generateCustomItem(name, type, effects);
    items.push(randomItem);
  }
  return items;
};

const RandomCustomItems = () => {
  const [items, setItems] = useState(generateCustomItems(10));

  const refreshItems = () => {
    const newItems = generateCustomItems(10);
    setItems(newItems);
  };

  return (
    <VStack spacing={4} align="left" pb={24}>
      <Heading>Random Items Generated</Heading>
      <Button onClick={refreshItems} w={32}>
        Refresh Items
      </Button>

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={6}
      >
        {items.map((item, index) => (
          <DynamicObjectComponent key={index} data={item} />
        ))}
      </Grid>
    </VStack>
  );
};

export default RandomCustomItems;
