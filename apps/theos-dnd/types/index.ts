// BaseEntity definition stays the same.
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

// Remove redundancy by not repeating 'slug' and 'deadImage'
export type CreatureType = BaseEntity & {
  className?: string;
};

// Remove redundancy by not repeating the BaseEntity fields
export type Class = BaseEntity & {
  className: string;
};

// StatName and Stats definition can be simplified
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

// SpeciesName and ClassName defined only once
export type SpeciesName = 'Gargoyle' | 'Human' | 'Skeleton' | 'Zombie';
export type ClassName = 'Barbarian' | 'Mage' | 'Ranger';

// ImageData stays the same as it's not redundant
export type ImageData = {
  image: string;
  deadImage?: string;
};

// Character type is still extending BaseEntity
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

// ClassModifiers and SpeciesModifiers extend Stats
export type ClassModifiers = Stats;
export type SpeciesModifiers = Stats;

// ClassModifierRecord and SpeciesModifierRecord stay the same
export type ClassModifierRecord = Record<ClassName, ClassModifiers>;
export type SpeciesModifierRecord = Record<SpeciesName, SpeciesModifiers>;

// SpeciesImages is still the same
export type SpeciesImages = Record<SpeciesName, ImageData>;

// ClassIndicator stays the same
export type ClassIndicator = {
  [className in ClassName]: Record<SpeciesName, ImageData>;
};
