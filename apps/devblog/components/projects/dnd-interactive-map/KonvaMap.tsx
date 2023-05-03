import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';

import Party from './map-module/components/Party';
import Monsters from './map-module/components/Monsters';
import Structures from './map-module/components/Structures';

const KonvaMap = () => {
  const defaultDragBoundFunc = (pos) => pos;

  const handleTouchMove = (e) => {
    e.evt.preventDefault();
  };

  const [stageSize, setStageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setStageSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const playerRadius = 20;

  const dragBoundFunc = (pos) => {
    const x = Math.max(
      playerRadius,
      Math.min(pos.x, stageSize.width - playerRadius)
    );
    const y = Math.max(
      playerRadius,
      Math.min(pos.y, stageSize.height - playerRadius)
    );
    return { x, y };
  };

  return (
    <Stage
      width={stageSize.width}
      height={stageSize.height}
      onTouchMove={handleTouchMove}
    >
      <Layer>
        <Party dragBoundFunc={defaultDragBoundFunc} />
        <Monsters dragBoundFunc={defaultDragBoundFunc} />
        <Structures dragBoundFunc={defaultDragBoundFunc} />
      </Layer>
    </Stage>
  );
};

export default KonvaMap;
