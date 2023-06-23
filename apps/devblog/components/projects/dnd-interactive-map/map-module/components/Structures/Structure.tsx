import { Group, Path, Text } from 'react-konva';
import { HouseIcon, TowerIcon, ObeliskIcon } from '../../icons';

interface StructureProps {
  id: string;
  name: string;
  x: number;
  y: number;
  className: string;
  draggable: boolean;
  dragBoundFunc: any;
}

const Structure = ({
  id,
  name,
  x,
  y,
  className,
  draggable,
  dragBoundFunc,
  onClick,
}: StructureProps) => {
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
  return (
    <Group
      id={id}
      name={name}
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

export default Structure;
