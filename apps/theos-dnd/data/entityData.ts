import { ClassIndicator, ImageData, SpeciesName, Stats } from '../types';

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
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-barb-species-dragon',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-barb-species-dragon-2',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-barb-species-dragon-3',
      ],
    },
    Gargoyle: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-barb-species-gargoyle',
      ],
    },
    Human: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-barb-species-human',
      ],
    },
    Skeleton: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-barb-species-skeleton',
      ],
    },
    Zombie: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-barb-species-zombie',
      ],
    },
  },
  Mage: {
    Dragon: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-dragon',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-dragon-2',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-dragon-3',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-dragon-4',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-dragon-5',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-dragon-6',
      ],
    },
    Gargoyle: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-gargoyle',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-gargoyle-2',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-gargoyle-3',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-gargoyle-4',
      ],
    },
    Human: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-human',
      ],
    },
    Skeleton: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-skeleton',
      ],
    },
    Zombie: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-zombie',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-zombie-2',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-zombie-3',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-mage-species-zombie-4',
      ],
    },
  },
  Ranger: {
    Dragon: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-dragon',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-dragon-2',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-dragon-3',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-dragon-4',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-dragon-5',
      ],
    },
    Gargoyle: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-gargoyle',
      ],
    },
    Human: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-human',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-human-2',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-human-3',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-human-4',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-human-5',
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-human-6',
      ],
    },
    Skeleton: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-skeleton',
      ],
    },
    Zombie: {
      image: [
        'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-class-ranger-species-zombie',
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
      'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-species-dragon.webp',
  },
  Gargoyle: {
    image:
      'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-species-gargoyle.webp',
  },
  Human: {
    image:
      'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-species-human.webp',
  },
  Skeleton: {
    image:
      'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-species-skeleton.webp',
  },
  Zombie: {
    image:
      'https://app-assets.vercel.app/apps/theos-dnd/theos-dnd-species-zombie.webp',
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
