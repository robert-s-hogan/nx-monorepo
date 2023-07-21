import { useState } from 'react';
import { Group } from 'react-konva';
import ContextMenu from '../context-menu';
import { ObeliskIcon, TowerIcon, HouseIcon } from '../../icons';

interface StructureProps {
  id: string;
  name: string;
  x: number;
  y: number;
  className: string;
  draggable: boolean;
  dragBoundFunc: any;
  onClick: () => void;
}

const StructureEntity = ({
  id,
  name,
  x,
  y,
  className,
  draggable,
  dragBoundFunc,
  onClick,
}: StructureProps) => {
  const [isLocked, setIsLocked] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState(null);

  const classShape = () => {
    switch (className) {
      case 'obelisk':
        return ObeliskIcon;
      case 'tower':
        return TowerIcon;
      case 'house':
        return HouseIcon;
      default:
        return null;
    }
  };

  // Add a new event handler for the right-click event
  const handleRightClick = (event) => {
    // Prevent the default context menu from showing up
    event.evt.preventDefault();

    // Show the custom context menu at the position of the right-click
    setContextMenuPosition({
      x: event.evt.clientX,
      y: event.evt.clientY,
    });
  };

  const handleClick = () => {
    if (!isLocked && onClick) {
      onClick();
    }
  };

  const handleLockToggle = () => {
    setIsLocked(!isLocked);
    setContextMenuPosition(null); // Close the context menu after clicking
  };

  return (
    <Group
      id={id}
      name={name}
      x={x}
      y={y}
      draggable={!isLocked && draggable}
      dragBoundFunc={dragBoundFunc}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      {classShape()}

      {/* Render the context menu if its position is defined */}
      {contextMenuPosition && (
        <ContextMenu
          position={contextMenuPosition}
          onClose={() => setContextMenuPosition(null)}
          options={[
            {
              label: isLocked ? 'Unlock' : 'Lock',
              onClick: handleLockToggle,
            },
          ]}
        >
          {/* Add a menu item to toggle the "lock" state */}
          <div onClick={handleLockToggle}>{isLocked ? 'Unlock' : 'Lock'}</div>
        </ContextMenu>
      )}
    </Group>
  );
};

export default StructureEntity;
