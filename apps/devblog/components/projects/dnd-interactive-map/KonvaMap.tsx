import React, { useState, useEffect, useCallback } from 'react';
import { Stage, Layer } from 'react-konva';

import {
  generateMonsters,
  generateParty,
  generateStructures,
} from './map-module/utils';
import Party from './map-module/components/Party';
import Monsters from './map-module/components/Monsters';
import Structures from './map-module/components/Structures';

import CharacterPopover from './zoom-in/character-popover';

const KonvaMap = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [stageScale, setStageScale] = useState(1);
  const [stageX, setStageX] = useState(0);
  const [stageY, setStageY] = useState(0);
  const [monsters] = useState(generateMonsters());
  const [party] = useState(generateParty());
  const [structures] = useState(generateStructures());

  const handleWheel = useCallback((e) => {
    e.evt.preventDefault();

    const scaleBy = 1.01;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();

    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setStageScale(newScale);
    setStageX(
      -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale
    );
    setStageY(
      -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    );
  }, []);

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

  return (
    <div className="border-primary m-16 border-2">
      <Stage
        width={stageSize.width}
        height={stageSize.height}
        scaleX={stageScale}
        scaleY={stageScale}
        x={stageX}
        y={stageY}
        draggable
        onDragEnd={(e) => {
          setStageX(e.target.x());
          setStageY(e.target.y());
        }}
        onTouchMove={handleTouchMove}
        onWheel={handleWheel}
      >
        <Layer>
          <Party
            party={party}
            dragBoundFunc={defaultDragBoundFunc}
            onClick={() => setSelectedCharacter('Party')}
          />
          <Monsters
            monsters={monsters}
            dragBoundFunc={defaultDragBoundFunc}
            onClick={() => setSelectedCharacter('Monster')}
          />
          <Structures
            structures={structures}
            dragBoundFunc={defaultDragBoundFunc}
            onClick={() => setSelectedCharacter('Structure')}
          />
        </Layer>
      </Stage>

      <CharacterPopover
        item={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </div>
  );
};

export default KonvaMap;
