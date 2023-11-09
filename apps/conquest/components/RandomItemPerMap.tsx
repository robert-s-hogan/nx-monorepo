import { useEffect, useState } from 'react';

function RandomItemPerMap({ name, amountOfItems, objects }) {
  const [randomArray, setRandomArray] = useState([]);

  const filledArray = [];
  for (let i = 0; i < amountOfItems; i + 1) {
    filledArray.push(i);
  }

  const pickRandom = (arr, count) => {
    const _arr = [...arr];
    return [...Array(count)].map(
      () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
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
    const randomArray = pickRandom(objects, amountOfItems);
    shuffle(randomArray);
    setRandomArray(randomArray);
  }, [objects, amountOfItems]);

  return <pre>{JSON.stringify(name, null, 2)}</pre>;
}

export default RandomItemPerMap;
