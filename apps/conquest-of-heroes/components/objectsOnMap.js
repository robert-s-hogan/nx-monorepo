import { useEffect, useState } from 'react';
import { Tr, Td } from '@chakra-ui/react';

function ObjectsOnMap({ objects, mapSize }) {
  const [randomArray, setRandomArray] = useState([]);
  const [objectsOnMap, setObjectsOnMap] = useState(16);

  const randomNumber = (min, mapSize) => {
    const low = 1;
    return Math.floor(Math.random() * (mapSize - low + 1)) + low;
  };

  console.log(`randomNumber is ${randomNumber(1, mapSize)}`);

  const pickRandom = (arr, count) => {
    const _arr = [...arr];
    return [...Array(count)].map(
      () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0],
    );
  };

  const shuffle = (objects) => {
    for (let i = objects.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = objects[i];
      objects[i] = objects[j];
      objects[j] = temp;
    }
  };

  useEffect(() => {
    const randomArray = pickRandom(objects, objectsOnMap);
    shuffle(randomArray);
    setRandomArray(randomArray);
  }, [objects, objectsOnMap]);

  return (
    <>
      {randomArray.map((encounter, index) => (
        <Tr key={encounter.name}>
          {index < 16 && (
            <>
              <Td>{index + 1}</Td>
              <Td>{encounter.name}</Td>
              <Td>{randomNumber(1, mapSize)}</Td>
            </>
          )}
        </Tr>
      ))}
    </>
  );
}

export default ObjectsOnMap;
