import { Group } from 'react-konva';
import { FighterIcon, WizardIcon, BarbarianIcon } from '../../icons';

interface PartyMemberProps {
  id: string;
  x: number;
  y: number;
  draggable: boolean;
  dragBoundFunc: (pos: { x: number; y: number }) => { x: number; y: number };
  className: string;
  onClick: () => void;
  name: string; // add this
}

const PartyMember = ({
  id,
  x,
  y,
  draggable,
  dragBoundFunc,
  className,
  onClick,
  name, // receive this
}: PartyMemberProps) => {
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
