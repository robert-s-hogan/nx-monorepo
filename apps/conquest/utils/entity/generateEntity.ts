import { Entity, EntityType } from '../types/types';
import { generateStats } from './statsTable';
import { generateSkills } from './skillsTable';
import { getRandomLanguage } from './languagesTable';
import { generateRace } from './racesTable';
import { generateFeats } from './featsTable';
import { generateClass } from './classTable';

export const generateEntity = (type: EntityType, seed?: number): Entity => {
  const entityStats = generateStats(seed);
  // const entitySkills = generateSkills(seed);
  const entityRace = generateRace(seed);
  const entityFeats = generateFeats(2, seed); //nubmer of feats, seed
  const entityClass = generateClass(seed);
  const entityLanguage = getRandomLanguage(seed);

  console.log(`entityClass: ${entityClass}`);

  const entityLanguages = [
    ...entityRace.languages,
    // ...entityClass.languages,
    // ...entityLanguage,
  ];

  const entityTools = entityClass.tools;

  return {
    stats: entityStats,
    // skills: entitySkills,
    languages: entityLanguages,
    tools: entityTools,
    race: entityRace,
    feats: entityFeats,
    class: entityClass,
  };
};
