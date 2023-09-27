// types/entityTypes.ts
export type ClassName = 'Barbarian' | 'Mage' | 'Ranger';

export type SpeciesName = 'Gargoyle' | 'Human' | 'Skeleton' | 'Zombie';

export type StatName =
  | 'STR'
  | 'CON'
  | 'DEX'
  | 'INT'
  | 'WIS'
  | 'CHA'
  | 'DEF'
  | 'HP'
  | 'PHYSICAL_ATTACK'
  | 'MAGICAL_ATTACK'
  | 'RESOURCE';

export type Stats = Record<StatName, number>;

export type Entity = {
  name?: string;
  stats: Stats;
  classType?: ClassName;
  species?: SpeciesName;
};

export type BaseEntity = {
  name: string;
  health: number;
  hitDamage: number;
  criticalDamage: number;
  defense: number;
  image: string;
  description: string;
  slug: string;
  deadImage: string;
};

export interface Character extends BaseEntity {
  className: ClassName;
  speciesName: SpeciesName;
  stats: Stats;
  health: number;
  hitDamage: number;
  criticalDamage: number;
  defense: number;
  image: string;
  description: string;
  slug: string;
  deadImage: string;
}

export type Class = BaseEntity & {
  className: string;
};

export type ClassIndicator = {
  [className in ClassName]: Record<SpeciesName, ImageData>;
};

export type ClassModifiers = Stats;

export type ClassModifierRecord = Record<ClassName, ClassModifiers>;

export type CreatureType = BaseEntity & {
  className?: string;
};

export type ImageData = {
  image: string;
  deadImage?: string;
};

export type SpeciesImages = Record<SpeciesName, ImageData>;

export type SpeciesModifiers = Stats;

export type SpeciesModifierRecord = Record<SpeciesName, SpeciesModifiers>;
