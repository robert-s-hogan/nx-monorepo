import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { ListItem } from './list-item';

export default {
  title: 'Components/ListOverview',
  component: ListItem,
} as Meta;

export const ListOverview: React.FC = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleClick = (index: number) => {
    alert(`Item ${index + 1} clicked!`);
  };

  return (
    <div>
      {items.map((item, index) => (
        <ListItem
          key={index}
          text={item}
          onClick={() => handleClick(index)}
          className="p-4 border-b border-gray-200 cursor-pointer"
          style={{ color: index % 2 === 0 ? 'blue' : 'green' }}
        />
      ))}
    </div>
  );
};
