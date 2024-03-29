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
    Dragon: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-dragon.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-dragon-2.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-dragon-3.png',
      ],
    },
    Gargoyle: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-gargoyle.png',
      ],
    },
    Human: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-human.png',
      ],
    },
    Skeleton: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-skeleton.png',
      ],
    },
    Zombie: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-barbarian-species-zombie.png',
      ],
    },
  },
  Mage: {
    Dragon: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-dragon.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-dragon-2.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-dragon-3.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-dragon-4.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-dragon-5.png',
      ],
    },
    Gargoyle: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-gargoyle.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-gargoyle-2.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-gargoyle-3.png',
      ],
    },
    Human: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-human.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-human-2.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-human-3.png',
      ],
    },
    Skeleton: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-skeleton.png',
      ],
    },
    Zombie: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-zombie.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-zombie-3.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-zombie-4.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-zombie-5.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-mage-species-zombie-6.png',
      ],
    },
  },
  Ranger: {
    Dragon: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-dragon.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-dragon-2.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-dragon-3.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-dragon-4.png',
      ],
    },
    Gargoyle: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-gargoyle.png',
      ],
    },
    Human: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-human.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-human-2.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-human-3.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-human-4.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-human-5.png',
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-human-6.png',
      ],
    },
    Skeleton: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-skeleton.png',
      ],
    },
    Zombie: {
      image: [
        'https://rshogan.imgix.net/projects/theos-dnd/classes/theos-dnd-class-ranger-species-zombie.png',
      ],
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
  Dragon: {
    image:
      'https://rshogan.imgix.net/projects/theos-dnd/species/theos-dnd-species-dragon.png',
  },
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
