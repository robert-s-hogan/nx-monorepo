import { Alignment } from '@with-nx/types';
import { rarities } from '@with-nx/utils';

export const alignments: Alignment[] = [
  {
    name: 'Lawful Good',
    description:
      'Creatures can be counted on to do the right thing as expected by society.',
    rarity: rarities[2],
  },
  {
    name: 'Neutral Good',
    description:
      'Folk do the best they can to help others according to their needs.',
    rarity: rarities[1],
  },
  {
    name: 'Chaotic Good',
    description:
      'Creatures act as their conscience directs, with little regard for what others expect.',
    rarity: rarities[3],
  },
  {
    name: 'Lawful Neutral',
    description:
      'Individuals act in accordance with law, tradition, or personal codes.',
    rarity: rarities[2],
  },
  {
    name: 'Neutral',
    description:
      'The alignment of those who prefer to steer clear of moral questions and don’t take sides.',
    rarity: rarities[1],
  },
  {
    name: 'Chaotic Neutral',
    description:
      'Creatures follow their whims, holding their personal freedom above all else.',
    rarity: rarities[3],
  },
  {
    name: 'Lawful Evil',
    description:
      'Creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order.',
    rarity: rarities[4],
  },
  {
    name: 'Neutral Evil',
    description:
      'Individuals do whatever they can get away with, without compassion or qualms.',
    rarity: rarities[3],
  },
  {
    name: 'Chaotic Evil',
    description:
      'Creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust.',
    rarity: rarities[5],
  },
];
