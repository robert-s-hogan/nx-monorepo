import { Group, Path, Text } from 'react-konva';
import { FighterIcon, WizardIcon, BarbarianIcon } from '../../icons';

const PartyMember = ({
  id,
  name,
  x,
  y,
  draggable,
  dragBoundFunc,
  className,
  onClick,
}) => {
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
      onClick={onClick}
    >
      {classShape()}
    </Group>
  );
};

export default PartyMember;
