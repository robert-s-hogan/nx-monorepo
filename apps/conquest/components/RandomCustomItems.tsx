import { useState } from 'react';
import DynamicObjectComponent from '../components/DynamicObjectComponent';
import { CustomItems } from '../categories/CustomItems';
import generateCustomItem from '../utils/generateCustomItem';
import { WiRefresh } from 'react-icons/wi';
import { Flex } from '@with-nx/react-ui';

const generateCustomItems = (count) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * CustomItems.length);
    const { name, type, effects } = CustomItems[randomIndex];

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

  return (
    <div className="space-y-4 flex justify-start pb-24 pt-8">
      <Flex className="items-center">
        <h6 className="mr-2">Custom Item List (10)</h6>
        <button onClick={refreshItems}>
          <WiRefresh />
        </button>
      </Flex>

      <div className="grid-cols-2 gap-6">
        {items.map((item, index) => (
          <DynamicObjectComponent
            key={index}
            data={item}
            onClick={() => toggleLock(index)}
            locked={item.locked}
          />
        ))}
      </div>
    </div>
  );
};

export default RandomCustomItems;
