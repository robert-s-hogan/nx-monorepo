import { CreatureType } from '../types/entity';

export const creatures: CreatureType[] = [
  {
    slug: 'zombie',
    name: 'Zombie',
    health: 60,
    hitDamage: 5,
    criticalDamage: 10,
    defense: 2,
    image: 'https://rshogan.imgix.net/projects/theos-dnd/theos-dnd-zombie.png',
    deadImage:
      'https://rshogan.imgix.net/projects/theos-dnd/theos-dnd-dead-zombie.png',
    description:
      'Zombies are known for their resilience and relentlessness. They might not deal high damage, but they have a good amount of health.',
  },
  {
    slug: 'gargoyle',
    name: 'Gargoyle',
    health: 50,
    hitDamage: 6,
    criticalDamage: 12,
    defense: 5,
    image:
      'https://rshogan.imgix.net/projects/theos-dnd/theos-dnd-gargoyle.png',
    deadImage:
      'https://rshogan.imgix.net/projects/theos-dnd/theos-dnd-dead-gargoyle.png',
    description:
      "Gargoyles are stone creatures often depicted as guardians. They should have high defense but might not be the strongest hitters since they're more about intimidation and protection.",
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    health: 40,
    hitDamage: 7,
    criticalDamage: 14,
    defense: 1,
    image:
      'https://rshogan.imgix.net/projects/theos-dnd/theos-dnd-skeleton.png',
    deadImage:
      'https://rshogan.imgix.net/projects/theos-dnd/theos-dnd-dead-skeleton.png',
    description:
      'Skeletons are fragile but can be nimble and agile. They might have lesser health but can dodge attacks or hit unexpectedly.',
  },
];
