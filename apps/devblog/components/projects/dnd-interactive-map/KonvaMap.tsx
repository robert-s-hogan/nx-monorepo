import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import Player from './Player';

const KonvaMap = () => {
  function generateShapes() {
    const classes = ['fighter', 'barbarian', 'wizard'];
    const gap = 100;
    const startingX = window.innerWidth / 2 - (classes.length * gap) / 2;
    return classes.map((className, i) => ({
      id: i.toString(),
      x: startingX + i * gap,
      y: window.innerHeight / 2,
      className: className,
      isDragging: false,
    }));
  }
  const handleTouchMove = (e) => {
    e.evt.preventDefault();
  };

  const [players, setPlayers] = useState(generateShapes());
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
        {players.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            name={`${player.className}`}
            x={player.x}
            y={player.y}
            className={player.className}
            draggable
            dragBoundFunc={dragBoundFunc}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default KonvaMap;
