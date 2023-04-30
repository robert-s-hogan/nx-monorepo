import React from 'react';
import { Group, Path, Text } from 'react-konva';

const FighterIcon = (
  <Group scale={{ x: 0.08, y: 0.08 }}>
    <Path
      data="M255.996 0C209.875 55.353 136.065 87.638 53.039 92.25v189.12C53.039 405.914 255.996 512 255.996 512s202.966-106.086 202.966-230.63V92.25C375.926 87.638 302.116 55.353 255.996 0z"
      fill="white"
      stroke="grey"
      strokeWidth={1}
      viewBox="0 0 48 48"
    />
  </Group>
);

const Player = ({ id, name, x, y, draggable, dragBoundFunc, className }) => {
  const radius = 20;
  const classShape = () => {
    switch (className) {
      case 'barbarian':
        return (
          <Path
            data="m13.742 21.83 8.272-8.272-.441-.441 1.875-1.875-2.726-2.726-1.875 1.875-.441-.441-.341.341c-1.184-2.35-.963-5.218 1.157-8.84C8.92-2.685-2.193 9.862 1.372 19.7c3.339-1.941 6.782-2.769 9.352-2.067l-.589.589.441.441-9.905 9.905v2.838h2.614l10.017-10.017.441.441zm16.836-9.023c-3.673 2.149-6.565 2.354-8.93 1.117l-7.278 7.278c.755 2.58-.072 6.068-2.041 9.455 9.838 3.564 22.385-7.548 18.249-17.85z"
            fill="white"
            stroke="grey"
            strokeWidth={1}
            viewBox="0 0 48 48"
          />
        );
      case 'wizard':
        return (
          <Path
            data="M24 40c11.046 0 20-1.79 20-4 0-1.439-3.299-2.7-9-3.405L27 12 15 8l3 6-5 18.595C7.299 33.3 4 34.56 4 36c0 2.21 8.954 4 20 4Z"
            fill="white"
            stroke="grey"
            strokeWidth={1}
            viewBox="0 0 48 48"
          />
        );
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
      <Text
        x={radius / 9}
        y={radius + 25}
        text={name}
        fontSize={16}
        fontStyle="bold"
        fill="white"
      />
    </Group>
  );
};

export default Player;
