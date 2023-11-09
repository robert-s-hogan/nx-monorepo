import { useState } from 'react';
import DynamicObjectComponent from '../components/DynamicObjectComponent';
import { generateRandomCategoryObject } from '../utils/generateRandomObject';

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
    <div className="space-y-4 flex justify-start pb-24">
      <h2>Random Items Generated</h2>
      <button onClick={refreshItems} className="w-32">
        Refresh Items
      </button>

      <div className="grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <DynamicObjectComponent key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default RandomItems;
