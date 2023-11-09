import { random } from './random';

export function generateTools(role?: string, seed?: number) {
  const rogueTools = [
    "Thieves' Tools",
    'Disguise Kit',
    'Forgery Kit',
    "Poisoner's Kit",
    'Painting Supplies',
    'Cooking Supplies',
  ];

  const clericTools = [
    "Alchemist's Supplies",
    'Herbalism Kit',
    "Calligrapher's Supplies",
    'Healing Kits',
  ];

  const fighterTools = [
    "Smith's Tools",
    "Carpenter's Tools",
    "Mason's Tools",
    'Sculpting Tools',
    'Cooking Supplies',
  ];

  const wizardTools = [
    "Alchemist's Supplies",
    "Calligrapher's Supplies",
    'Painting Supplies',
  ];

  const bardTools = [
    'Disguise Kit',
    'Forgery Kit',
    "Painter's Supplies",
    'Musical Instruments',
    'Painting Supplies',
  ];

  const rangerTools = [
    "Cartographer's Tools",
    'Herbalism Kit',
    "Navigator's Tools",
    'Hunting/Fishing Equipment',
    'Surveying Tools',
    'Healing Kits',
  ];

  const otherTools = [
    "Brewer's Supplies",
    "Cobbler's Tools",
    "Cook's Utensils",
    "Glassblower's Tools",
    "Jeweler's Tools",
    "Leatherworker's Tools",
    "Potter's Tools",
    "Tinker's Tools",
    "Weaver's Tools",
    "Woodcarver's Tools",
    'Tantan',
  ];

  const allTools = [
    ...rogueTools,
    ...clericTools,
    ...fighterTools,
    ...wizardTools,
    ...bardTools,
    ...rangerTools,
    ...otherTools,
  ];

  if (!role || role.toLowerCase() === 'random') {
    return random(allTools, seed);
  }

  let selectedTools = [];

  switch (role.toLowerCase()) {
    case 'rogue':
      selectedTools = rogueTools;
      break;
    case 'cleric':
      selectedTools = clericTools;
      break;
    case 'fighter':
      selectedTools = fighterTools;
      break;
    case 'wizard':
      selectedTools = wizardTools;
      break;
    case 'bard':
      selectedTools = bardTools;
      break;
    case 'ranger':
      selectedTools = rangerTools;
      break;
    default:
      selectedTools = otherTools;
      break;
  }

  return random(selectedTools, seed);
}
