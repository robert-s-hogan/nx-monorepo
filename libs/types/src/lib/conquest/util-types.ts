export type Rarity = {
  level: number; // A number between 1 and 10.
  name: string; // Common, Uncommon, Rare, Very Rare, Legendary.
  frequency: number; // The chance (in %) of this rarity level occurring.
};
