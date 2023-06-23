import React, { useState, useCallback } from 'react';
import { Image, Stage, Layer, Rect, Text } from 'react-konva';
import useImage from 'use-image';

import CharacterPopover from './zoom-in/character-popover';

const URLImage = ({ image, onClick }) => {
  const [img] = useImage(image.src);
  return (
    <Image image={img} x={image.x} y={image.y} draggable onClick={onClick} />
  );
};

const MapComponent = () => {
  const [stageScale, setStageScale] = useState(1);
  const [stageX, setStageX] = useState(0);
  const [stageY, setStageY] = useState(0);

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

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const [characters, setCharacters] = useState([
    {
      src: 'http://rshogan.imgix.net/projects/conquest/blood_hunter_class_avatar_cel-shaded_art_style.png',
      x: 50,
      y: 50,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/artificer_class_avatar_cel-shaded_art_style.png',
      x: 100,
      y: 100,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/barbarian_class_avatar_cel-shaded_art_style.png',
      x: 150,
      y: 150,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/bard_class_avatar_cel-shaded_art_style.png',
      x: 200,
      y: 200,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/cleric_class_avatar_cel-shaded_art_style.png',
      x: 250,
      y: 250,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/druid_class_avatar_cel-shaded_art_style.png',
      x: 300,
      y: 300,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/fighter_class_avatar_cel-shaded_art_style.png',
      x: 350,
      y: 350,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/monk_class_avatar_cel-shaded_art_style.png',
      x: 400,
      y: 400,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/paladin_class_avatar_cel-shaded_art_style.png',
      x: 450,
      y: 450,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/ranger_class_avatar_cel-shaded_art_style.png',
      x: 500,

      y: 500,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/rogue_class_avatar_cel-shaded_art_style.png',
      x: 550,
      y: 550,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/sorcerer_class_avatar_cel-shaded_art_style.png',
      x: 600,
      y: 600,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/warlock_class_avatar_cel-shaded_art_style.png',
      x: 650,
      y: 650,
    },
    {
      src: 'http://rshogan.imgix.net/projects/conquest/wizard_class_avatar_cel-shaded_art_style.png',
      x: 700,
      y: 700,
    },
  ]);

  return (
    <div className="border-2 border-primary m-16">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        scaleX={stageScale}
        scaleY={stageScale}
        x={stageX}
        y={stageY}
        onWheel={handleWheel}
      >
        <Layer>
          {characters.map((character, i) => (
            <URLImage
              key={i}
              image={character}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
        </Layer>
      </Stage>
      {selectedCharacter && (
        <CharacterPopover
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};

export default MapComponent;
