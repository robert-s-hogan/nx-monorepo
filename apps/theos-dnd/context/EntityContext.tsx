import React, { createContext, useContext, useState, useEffect } from 'react';
import { CommonProps } from '@with-nx/types';

import { BASE_STATS, CLASS_MODIFIERS, SPECIES_MODIFIERS } from '../data';
import { computeTotalStats } from '../utils';
import { ClassName, Entity, SpeciesName, Stats } from '../types';

interface CustomImageData {
  image: string;
}

const EntityContext = createContext(null);

export const useEntity = () => {
  const context = useContext(EntityContext);
  if (!context) {
    throw new Error('useEntity must be used within an EntityProvider');
  }
  return context;
};

export const EntityProvider: React.FC<CommonProps> = ({ children }) => {
  const [entity, setEntity] = useState<Entity | null>(null);
  const [isBattleMode, setIsBattleMode] = useState(false);

  // Sync state with local storage
  useEffect(() => {
    const storedEntity = localStorage.getItem('entity');
    if (storedEntity) {
      const parsedEntity = JSON.parse(storedEntity);
      // You might need to adjust this if parsedEntity requires conversion for the image
      setEntity(parsedEntity);
    }
  }, []);

  useEffect(() => {
    if (entity) {
      localStorage.setItem('entity', JSON.stringify(entity));
    }
  }, [entity]);

  function createImageData(url: string): CustomImageData {
    return { image: url };
  }

  const createEntity = (
    name: string,
    selectedClass: ClassName,
    selectedSpecies: SpeciesName,
    previewImage: string,
    initialImage: string, // Allow passing an initial image URL or data
    difficulty: number = 1
  ) => {
    localStorage.clear();

    const classModifiers = CLASS_MODIFIERS[selectedClass];
    const speciesModifiers = SPECIES_MODIFIERS[selectedSpecies];

    const stats = computeTotalStats(
      BASE_STATS,
      classModifiers,
      speciesModifiers,
      difficulty
    );
    console.log('Entity being set: ', {
      name,
      stats,
      classType: selectedClass,
      species: selectedSpecies,
      previewImage,
      image: createImageData(initialImage),
    });

    setEntity({
      name,
      stats,
      classType: selectedClass,
      species: selectedSpecies,
      previewImage,
      image: createImageData(initialImage),
    });
  };

  const updateEntityImage = (newImage: string) => {
    if (entity) {
      setEntity({ ...entity, image: createImageData(newImage) }); // Ensure correct type usage
    }
  };

  const updateEntity = (newEntity: Partial<Entity>) => {
    if (entity) {
      setEntity({ ...entity, ...newEntity });
    }
  };

  return (
    <EntityContext.Provider
      value={{
        entity,
        createEntity,
        updateEntity,
        updateEntityImage,
        isBattleMode,
        setIsBattleMode,
      }}
    >
      {children}
    </EntityContext.Provider>
  );
};
