import React from 'react';
import { generateStructures } from '../../utils';

import Structure from './Structure';

interface StructuresProps {
  dragBoundFunc: any;
}

const Structures: React.FC<StructuresProps> = ({ dragBoundFunc }) => {
  const structures = generateStructures();

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
        />
      ))}
    </>
  );
};

export default Structures;
