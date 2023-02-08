import { useEffect, useState } from 'react';
import { GridItem, VStack, Text } from '@chakra-ui/react';

function ItemsInCaravan({ caravanItems }) {
  const [randomArray, setRandomArray] = useState([]);
  const [itemsInCaravan] = useState(15);

  const pickRandom = (arr, count) => {
    const _arr = [...arr];
    return [...Array(count)].map(
      () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0],
    );
  };

  const shuffle = (caravanItems) => {
    for (let i = caravanItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = caravanItems[i];
      caravanItems[i] = caravanItems[j];
      caravanItems[j] = temp;
    }
  };

  useEffect(() => {
    const randomArray = pickRandom(caravanItems, itemsInCaravan);
    shuffle(randomArray);
    setRandomArray(randomArray);
  }, [caravanItems, itemsInCaravan]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
      {randomArray.map((item, index) => (
        <GridItem key={index} mt={2}>
          <VStack spacing={6} alignItems="left">
            {index < 20 && (
              <Text fontWeight="light" textAlign="left">
                {item.name} ({numberWithCommas(item.price)}g)
              </Text>
            )}
          </VStack>
        </GridItem>
      ))}
    </>
  );
}

export default ItemsInCaravan;
