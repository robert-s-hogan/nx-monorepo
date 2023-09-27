import React, { createContext, useContext, useState } from 'react';
import { CommonProps } from '@with-nx/types';

import { BASE_STATS, CLASS_MODIFIERS, SPECIES_MODIFIERS } from '../data';
import { computeTotalStats } from '../utils';
import { ClassName, Entity, SpeciesName, Stats } from '../types';

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

  const createEntity = (
    name: string,
    selectedClass: ClassName,
    selectedSpecies: SpeciesName,
    difficulty: number = 1
  ) => {
    const classModifiers = CLASS_MODIFIERS[selectedClass];
    const speciesModifiers = SPECIES_MODIFIERS[selectedSpecies];

    const stats = computeTotalStats(
      BASE_STATS,
      classModifiers,
      speciesModifiers,
      difficulty
    );

    setEntity({
      name,
      stats,
      classType: selectedClass,
      species: selectedSpecies,
    });
  };

  return (
    <EntityContext.Provider value={{ entity, createEntity }}>
      {children}
    </EntityContext.Provider>
  );
};
