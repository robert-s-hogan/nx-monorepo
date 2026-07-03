// libs/constants/src/lib/sibling-apps.ts

export interface SiblingApp {
  id:
    | 'play2winff'
    | 'theos-dnd'
    | 'conquest'
    | 'dm-toolkit'
    | 'the-hogans'
    | 'shopping-list'
    | 'recipes';
  name: string;
  shortLabel: string;
  url: string;
  icon:
    | 'football-helmet'
    | 'dice'
    | 'dragon'
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
    url: 'https://play2winff-nx.vercel.app',
    icon: 'football-helmet',
  },
  {
    id: 'theos-dnd',
    name: "Theo's D&D",
    shortLabel: 'D&D',
    url: 'https://theos-dnd-nx.vercel.app',
    icon: 'dice',
  },
  {
    id: 'conquest',
    name: 'Conquest',
    shortLabel: 'Conquest',
    url: 'https://conquest-2c351.web.app',
    icon: 'dragon',
  },
  {
    id: 'dm-toolkit',
    name: 'DM Toolkit',
    shortLabel: 'DM Kit',
    url: 'https://dm-toolkit-nx.vercel.app',
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
    url: 'https://shopping-list-nx.vercel.app',
    icon: 'cart',
  },
  {
    id: 'recipes',
    name: 'My Recipes',
    shortLabel: 'Recipes',
    url: 'https://recipes-nx.vercel.app',
    icon: 'cooking-pot',
  },
];
