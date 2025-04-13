import PartyMember from './PartyMember';

interface Player {
  id: string;
  className: string;
  x: number;
  y: number;
}

interface PartyGroupProps {
  party: Player[];
  dragBoundFunc: (pos: { x: number; y: number }) => { x: number; y: number };
  onClick: () => void;
}

const PartyGroup = ({ party, dragBoundFunc, onClick }: PartyGroupProps) => {
  return party.map((player) => (
    <PartyMember
      key={player.id}
      id={player.id}
      name={player.className}
      x={player.x}
      y={player.y}
      className={player.className}
      draggable
      dragBoundFunc={dragBoundFunc}
      onClick={onClick}
    />
  ));
};

export default PartyGroup;
