//libs/types/src/lib/conquest/core-data-types.ts

export type Alignment = {
  name: string;
  description: string;
  rarity: Rarity;
};

export type Language = {
  name: string;
  description: string;
  rarity: Rarity;
};

export interface Race {
  name: string;
  description: string;
  rarity: Rarity;
  subraces: Subrace[];
}

export interface Subrace {
  name: string;
  description: string;
  rarity: Rarity;
}
