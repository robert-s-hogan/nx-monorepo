type BaseEntity = {
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

export type CreatureType = BaseEntity & {
  slug: string;
  deadImage: string;
};

export type Class = BaseEntity & {
  className: string;
};
