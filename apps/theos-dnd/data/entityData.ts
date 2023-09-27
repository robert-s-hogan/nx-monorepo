import {
  ClassIndicator,
  ClassName,
  ImageData,
  SpeciesName,
  Stats,
} from '../types';

export const BASE_STATS: Stats = {
  STR: 10,
  CON: 10,
  DEX: 10,
  INT: 10,
  WIS: 10,
  CHA: 10,
  DEF: 10,
  HP: 100,
  PHYSICAL_ATTACK: 0,
  MAGICAL_ATTACK: 0,
  RESOURCE: 100,
};

export const CLASS_INDICATORS: ClassIndicator = {
  Barbarian: {
    Gargoyle: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-gargoyle.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-gargoyle-dead.png',
    },
    Human: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-human.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-human-dead.png',
    },
    Skeleton: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-skeleton.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-skeleton-dead.png',
    },
    Zombie: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-zombie.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-zombie-dead.png',
    },
  },
  Mage: {
    Gargoyle: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-gargoyle.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-gargoyle-dead.png',
    },
    Human: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-human.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-human-dead.png',
    },
    Skeleton: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-skeleton.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-skeleton-dead.png',
    },
    Zombie: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-zombie.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-zombie-dead.png',
    },
  },
  Ranger: {
    Gargoyle: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-gargoyle.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-gargoyle-dead.png',
    },
    Human: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-human.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-human-dead.png',
    },
    Skeleton: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-skeleton.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-skeleton-dead.png',
    },
    Zombie: {
      image:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-zombie-2.png',
      deadImage:
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-zombie-2-dead.png',
    },
  },
};

export const CLASS_MODIFIERS = {
  Barbarian: {
    STR: 3,
    CON: 3,
    DEX: -1,
    INT: -1,
    WIS: 0,
    CHA: 0,
    DEF: 0,
    HP: 10,
    PHYSICAL_ATTACK: 2,
    MAGICAL_ATTACK: 0,
    RESOURCE: 0,
  },
  Ranger: {
    STR: 1,
    CON: 0,
    DEX: 3,
    INT: 1,
    WIS: 0,
    CHA: 0,
    DEF: 0,
    HP: 5,
    PHYSICAL_ATTACK: 1,
    MAGICAL_ATTACK: 1,
    RESOURCE: 0,
  },
  Mage: {
    STR: -1,
    CON: -1,
    DEX: 0,
    INT: 3,
    WIS: 2,
    CHA: 0,
    DEF: 0,
    HP: 0,
    PHYSICAL_ATTACK: 0,
    MAGICAL_ATTACK: 2,
    RESOURCE: 10,
  },
};

export const SPECIES_IMAGES: Record<SpeciesName, ImageData> = {
  Gargoyle: {
    image:
      'https://rshogan.imgix.net/projects/theos-dnd/species/theos-dnd-species-gargoyle.png',
  },
  Human: {
    image:
      'https://rshogan.imgix.net/projects/theos-dnd/species/theos-dnd-species-human.png',
  },
  Skeleton: {
    image:
      'https://rshogan.imgix.net/projects/theos-dnd/species/theos-dnd-species-skeleton.png',
  },
  Zombie: {
    image:
      'https://rshogan.imgix.net/projects/theos-dnd/species/theos-dnd-species-zombie.png',
  },
};

export const SPECIES_MODIFIERS: Record<string, Stats> = {
  Dragon: {
    STR: 5,
    CON: 5,
    DEX: 0,
    INT: 1,
    WIS: 1,
    CHA: 0,
    DEF: 5,
    HP: 50,
    PHYSICAL_ATTACK: 5,
    MAGICAL_ATTACK: 2,
    RESOURCE: 20,
  },
  Gargoyle: {
    STR: 2,
    CON: 1,
    DEX: 0,
    INT: -2,
    WIS: 0,
    CHA: -2,
    DEF: 2,
    HP: 0,
    PHYSICAL_ATTACK: 0,
    MAGICAL_ATTACK: 0,
    RESOURCE: 0,
  },
  Goblin: {
    STR: -2,
    CON: -2,
    DEX: 1,
    INT: 0,
    WIS: 0,
    CHA: 0,
    DEF: 0,
    HP: -10,
    PHYSICAL_ATTACK: 1,
    MAGICAL_ATTACK: 0,
    RESOURCE: 0,
  },
  Human: {
    STR: 0,
    CON: 0,
    DEX: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
    DEF: 2,
    HP: 0,
    PHYSICAL_ATTACK: 0,
    MAGICAL_ATTACK: 0,
    RESOURCE: 0,
  },
  Skeleton: {
    STR: 0,
    CON: 0,
    DEX: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
    DEF: 2,
    HP: 0,
    PHYSICAL_ATTACK: 0,
    MAGICAL_ATTACK: 0,
    RESOURCE: 0,
  },
  Zombie: {
    STR: 2,
    CON: 1,
    DEX: -2,
    INT: -2,
    WIS: 0,
    CHA: -2,
    DEF: 2,
    HP: 0,
    PHYSICAL_ATTACK: 0,
    MAGICAL_ATTACK: 0,
    RESOURCE: 0,
  },
};
