import { generateStructures } from '../../utils';

import Structure from './Structure';

interface StructuresProps {
  dragBoundFunc: any;
}

const Structures = ({
  dragBoundFunc,
  onClick,
  structures,
}: StructuresProps) => {
  return (
    <>
      {structures.map((structure) => (
        <Structure
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

export default Structures;
