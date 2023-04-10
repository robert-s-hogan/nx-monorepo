import { useDrop } from 'react-dnd';
import { useState } from 'react';

function DroppableGridBox({ children, onDrop, onAddItem }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'icon',
    drop: (item) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleClick = () => {
    if (selectedItem) {
      onAddItem(selectedItem);
      setSelectedItem(null);
    }
  };

  return (
    <div
      ref={drop}
      onClick={handleClick}
      className={`relative w-full h-24 ${
        isOver ? 'border-blue-500' : 'border-gray-300'
      }`}
    >
      {children}
    </div>
  );
}

export default DroppableGridBox;
