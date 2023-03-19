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
    // Make a copy of the shared effects to avoid modifying the original array
    const copiedEffects = [...effects];
    const randomItem = generateCustomItem(name, type, copiedEffects);
    items.push({ ...randomItem, locked: false });
  }
  return items;
};

const RandomCustomItems = () => {
  const [items, setItems] = useState(generateCustomItems(10));

  const toggleLock = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, locked: !item.locked } : item
      )
    );
  };
  const refreshItems = () => {
    const newItems = items.map((item, index) =>
      item.locked ? item : generateCustomItems(1)[0]
    );
    setItems(newItems);
  };

  console.log(`items`, items);

  return (
    <VStack spacing={4} align="left" pb={24}>
      <Heading>Custom Item List (10)</Heading>
      <Button onClick={refreshItems} w={32}>
        Refresh Items
      </Button>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
        }}
        gap={6}
      >
        {items.map((item, index) => (
          <DynamicObjectComponent
            key={index}
            data={item}
            onClick={() => toggleLock(index)}
            locked={item.locked}
          />
        ))}
      </Grid>
    </VStack>
  );
};

export default RandomCustomItems;
