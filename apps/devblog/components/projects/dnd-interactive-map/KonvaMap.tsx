import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';

import Player from './Player';
import Monster from './Monster';
import Structure from './Structure';

const KonvaMap = () => {
  function generateParty() {
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

  function generateMonsters() {
    const monsters = ['goblin', 'skeleton', 'dragon'];
    const mapWidth = window.innerWidth;
    const mapHeight = window.innerHeight;
    const centerX = mapWidth / 2;
    const centerY = mapHeight / 2;
    const exclusionRadius = 200;

    function isOutsideExclusionZone(x, y) {
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );
      return distance > exclusionRadius;
    }

    return monsters.map((monsterName, i) => {
      let monsterX, monsterY;

      do {
        monsterX =
          Math.floor(Math.random() * (mapWidth * 0.8 - mapWidth * 0.2)) +
          mapWidth * 0.2;
        monsterY =
          Math.floor(Math.random() * (mapHeight * 0.8 - mapHeight * 0.2)) +
          mapHeight * 0.2;
      } while (!isOutsideExclusionZone(monsterX, monsterY));

      return {
        id: i.toString(),
        x: monsterX,
        y: monsterY,
        className: monsterName,
        isDragging: false,
      };
    });
  }

  function generateStructures() {
    const structures = ['castle', 'tower', 'house'];
    const mapWidth = window.innerWidth;
    const mapHeight = window.innerHeight;
    const centerX = mapWidth / 2;
    const centerY = mapHeight / 2;
    const exclusionRadius = 200;

    function isOutsideExclusionZone(x, y) {
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );
      return distance > exclusionRadius;
    }

    return structures.map((structureName, i) => {
      let structureX, structureY;

      do {
        structureX =
          Math.floor(Math.random() * (mapWidth * 0.8 - mapWidth * 0.2)) +
          mapWidth * 0.2;
        structureY =
          Math.floor(Math.random() * (mapHeight * 0.8 - mapHeight * 0.2)) +
          mapHeight * 0.2;
      } while (!isOutsideExclusionZone(structureX, structureY));

      return {
        id: i.toString(),
        x: structureX,
        y: structureY,
        className: structureName,
        isDragging: false,
      };
    });
  }

  const [players, setPlayers] = useState(generateParty());
  const [monsters, setMonsters] = useState(generateMonsters());
  const [structures, setStructures] = useState(generateStructures());

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
        {monsters.map((monster) => (
          <Monster
            key={`monster-${monster.id}`}
            id={monster.id}
            name={monster.className}
            x={monster.x}
            y={monster.y}
            className={monster.className}
            draggable
            dragBoundFunc={dragBoundFunc}
          />
        ))}
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
      </Layer>
    </Stage>
  );
};

export default KonvaMap;
