import React from 'react';
import { Group, Path, Text } from 'react-konva';
import { GoblinIcon, DragonIcon, SkeletonIcon } from '../../icons';

const Monster = ({ id, name, x, y, draggable, dragBoundFunc, className }) => {
  const radius = 20;
  const classShape = () => {
    switch (className) {
      case 'goblin':
        return GoblinIcon;
      case 'skeleton':
        return SkeletonIcon;
      case 'dragon':
        return DragonIcon;
      default:
        return null;
    }
  };

  return (
    <Group
      id={id}
      x={x}
      y={y}
      draggable={draggable}
      dragBoundFunc={dragBoundFunc}
    >
      {classShape()}
      {/* <Text
        x={radius / 9}
        y={radius + 25}
        text={name}
        fontSize={16}
        fontStyle="bold"
        fill="white"
      /> */}
    </Group>
  );
};

export default Monster;
