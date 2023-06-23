import { generateParty } from '../../utils';

import Player from './Player';

interface MonstersProps {
  dragBoundFunc: any;
}

const Party = ({ dragBoundFunc, onClick, party }: MonstersProps) => {
  return party.map((player) => (
    <Player
      key={player.id}
      id={player.id}
      name={`${player.className}`}
      x={player.x}
      y={player.y}
      className={player.className}
      draggable
      dragBoundFunc={dragBoundFunc}
      onClick={onClick}
    />
  ));
};

export default Party;
