import MonsterEntity from './MonsterEntity';

interface Monster {
  id: number;
  x: number;
  y: number;
  className: string;
}

interface MonsterGroupProps {
  monsters: Monster[];
  dragBoundFunc: (pos: { x: number; y: number }) => { x: number; y: number };
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
