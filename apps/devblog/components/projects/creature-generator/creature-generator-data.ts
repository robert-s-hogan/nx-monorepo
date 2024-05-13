import {
  species,
  dndSizes,
  alignments,
  environments,
  specialTraits,
  languages,
} from '@with-nx/constants';

export const toSelectOptions = (items) =>
  items.map((item) => ({ label: item, value: item }));

export const fieldConfigs = [
  { name: 'numberOfPlayers', label: 'Number of Players', type: 'text' },
  { name: 'playerLevel', label: 'Player Level', type: 'text' },
  {
    name: 'challengeRating',
    label: 'Challenge Rating',
    type: 'select',
    options: toSelectOptions(Array.from({ length: 30 }, (_, i) => i + 1)),
  },
  {
    name: 'creatureType',
    label: 'Creature Type',
    type: 'select',
    options: toSelectOptions(species),
  },
  {
    name: 'alignment',
    label: 'Alignment',
    type: 'select',
    options: toSelectOptions(alignments),
  },
  {
    name: 'environment',
    label: 'Environment',
    type: 'select',
    options: toSelectOptions(environments),
  },
  {
    name: 'size',
    label: 'Size',
    type: 'select',
    options: toSelectOptions(dndSizes),
  },
  {
    name: 'specialTrait',
    label: 'Special Trait',
    type: 'select',
    options: toSelectOptions(specialTraits),
  },
  {
    name: 'language',
    label: 'Language',
    type: 'select',
    options: toSelectOptions(languages),
  },
];
