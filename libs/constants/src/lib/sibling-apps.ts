// libs/constants/src/lib/sibling-apps.ts

export interface SiblingApp {
  id:
    | 'play2winff'
    | 'dm-toolkit'
    | 'the-hogans'
    | 'shopping-list'
    | 'recipes';
  name: string;
  shortLabel: string;
  url: string;
  icon:
    | 'football-helmet'
    | 'scroll'
    | 'home'
    | 'cart'
    | 'cooking-pot';
}

export const SIBLING_APPS: SiblingApp[] = [
  {
    id: 'play2winff',
    name: 'Play 2 Win Fantasy Football',
    shortLabel: 'P2W',
    url: 'https://play2winff.the-hogans.com',
    icon: 'football-helmet',
  },
  {
    id: 'dm-toolkit',
    name: 'DM Toolkit',
    shortLabel: 'DM Kit',
    url: 'https://dm-toolkit.the-hogans.com',
    icon: 'scroll',
  },
  {
    id: 'the-hogans',
    name: 'The Hogans',
    shortLabel: 'Home',
    url: 'https://www.the-hogans.com',
    icon: 'home',
  },
  {
    id: 'shopping-list',
    name: 'Shopping List',
    shortLabel: 'Groceries',
    url: 'https://shopping-list.the-hogans.com',
    icon: 'cart',
  },
  {
    id: 'recipes',
    name: 'My Recipes',
    shortLabel: 'Recipes',
    url: 'https://recipes.the-hogans.com',
    icon: 'cooking-pot',
  },
];
