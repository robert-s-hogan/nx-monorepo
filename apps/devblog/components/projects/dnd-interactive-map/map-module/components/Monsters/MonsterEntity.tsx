import { Group } from 'react-konva';
import { GoblinIcon, DragonIcon, SkeletonIcon } from '../../icons';

const MonsterEntity = ({
  id,
  name,
  x,
  y,
  draggable,
  dragBoundFunc,
  className,
  onClick,
}) => {
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
      onClick={onClick}
    >
      {classShape()}
    </Group>
  );
};

export default MonsterEntity;
