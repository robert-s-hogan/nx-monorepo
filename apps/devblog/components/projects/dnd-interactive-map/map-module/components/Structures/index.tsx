import StructureEntity from './StructureEntity';

interface Structure {
  id: number;
  x: number;
  y: number;
  className: string;
}

interface StructureGroupProps {
  structures: Structure[];
  dragBoundFunc: (pos: { x: number; y: number }) => { x: number; y: number };
  onClick: () => void;
}

const StructureGroup = ({
  structures,
  dragBoundFunc,
  onClick,
}: StructureGroupProps) => {
  return (
    <>
      {structures.map((structure) => (
        <StructureEntity
          key={`structure-${structure.id}`}
          id={structure.id}
          name={structure.className}
          x={structure.x}
          y={structure.y}
          className={structure.className}
          draggable
          dragBoundFunc={dragBoundFunc}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export default StructureGroup;
