import React from 'react';
import { Group, Path, Text } from 'react-konva';
import { FighterIcon, WizardIcon, BarbarianIcon } from '../../icons';

const Player = ({ id, name, x, y, draggable, dragBoundFunc, className }) => {
  const radius = 20;
  const classShape = () => {
    switch (className) {
      case 'barbarian':
        return BarbarianIcon;
      case 'wizard':
        return WizardIcon;
      case 'fighter':
        return FighterIcon;
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
    </Group>
  );
};

export default Player;
