import { ImageData, SpeciesName, ClassName } from '../types';

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

type ClassIndicator = {
  [className in ClassName]: Record<SpeciesName, ImageData>;
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
