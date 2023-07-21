import { generateParty } from '../../utils';

import PartyMember from './PartyMember';

interface PartyGroupProps {
  party: any;
  dragBoundFunc: any;
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
