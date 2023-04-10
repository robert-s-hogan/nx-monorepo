import { random } from './random';

const baseRange = [6, 7, 8, 9, 10, 11, 12, 13];
const modifierRange = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

export const generateStats = (seed?: number) => {
  return {
    ac: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    initiative: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    speed: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    str: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    dex: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    int: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    con: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    wis: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    cha: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    prof: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    dark_vision: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    passive_perception: {
      base: random(baseRange, seed),
      modifier: random(modifierRange, seed),
    },
    saves: {
      str: {
        base: random(baseRange, seed),
        modifier: random(modifierRange, seed),
        advantage: false,
        disadvantage: false,
      },
      dex: {
        base: random(baseRange, seed),
        modifier: random(modifierRange, seed),
        advantage: false,
        disadvantage: false,
      },
      con: {
        base: random(baseRange, seed),
        modifier: random(modifierRange, seed),
        advantage: false,
        disadvantage: false,
      },
      wis: {
        base: random(baseRange, seed),
        modifier: random(modifierRange, seed),
        advantage: false,
        disadvantage: false,
      },
      cha: {
        base: random(baseRange, seed),
        modifier: random(modifierRange, seed),
        advantage: false,
        disadvantage: false,
      },
      int: {
        base: random(baseRange, seed),
        modifier: random(modifierRange, seed),
        advantage: false,
        disadvantage: false,
      },
    },
  };
};
