import { generateMonsters } from '../../utils';

import MonsterEntity from './MonsterEntity';

interface MonsterGroupProps {
  monsters: any;
  dragBoundFunc: any;
  onClick: () => void;
}

const MonsterGroup = ({
  monsters,
  dragBoundFunc,
  onClick,
}: MonsterGroupProps) => {
  return monsters.map((monster) => (
    <MonsterEntity
      key={`monster-${monster.id}`}
      id={monster.id}
      name={monster.className}
      x={monster.x}
      y={monster.y}
      className={monster.className}
      draggable
      dragBoundFunc={dragBoundFunc}
      onClick={onClick}
    />
  ));
};

export default MonsterGroup;
