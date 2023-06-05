// entity-data.ts
export type Entity = {
  name: string;
  description: string;
  rarity: Rarity;
  race: Race;
  subrace: Subrace;
  alignment: Alignment;
  class: Class;
  subclass: Subclass;
  abilities: Ability[];
  skills: Skill[];
  proficiencies: Proficiency[];
  equipment: Equipment[];
  // Other entity attributes...
};

export type Class = {
  name: string;
  description: string;
  rarity: Rarity;
  subclasses: Subclass[];
  abilities: Ability[];
  skills: Skill[];
  proficiencies: Proficiency[];
  baseHitPoints: number;
};

export type Subclass = {
  name: string;
  description: string;
  rarity: Rarity;
};

export type Skill = {
  name: string;
  description: string;
  rarity: Rarity;
};

export type Ability = {
  name: string;
  description: string;
  rarity: Rarity;
};

export type Proficiency = {
  name: string;
  description: string;
  rarity: Rarity;
};

export type Equipment = {
  name: string;
  description: string;
  rarity: Rarity;
};
