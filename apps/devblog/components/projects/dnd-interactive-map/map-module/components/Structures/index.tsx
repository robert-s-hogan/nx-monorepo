import { generateStructures } from '../../utils';

import StructureEntity from './StructureEntity';

interface StructureGroupProps {
  structures: any;
  dragBoundFunc: any;
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
