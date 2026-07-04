// Ported from apps/conquest/src/app/constants/mapConstants.tsx (data) and
// hooks/useRandomMapSelection.tsx (logic — reduced from a memoized hook to a
// plain function since dm-toolkit doesn't need it wrapped in useMemo).

const ENCOUNTER_OBJECTIVES = [
  'Capture the Flag (/ Hold flag for 2 rounds)',
  'Cleanse the Area of Enemies',
  'Defend this Location',
  'Defend this Object',
  'Defend this NPC',
  'Obtain the Item (at Object, Opposition searching for it)',
  'Rescue the Target',
];

const TERRAIN_TYPES = [
  'Alpine Lake', 'Arctic', 'Artesian Spring', 'Badlands', 'Barren', 'Bay',
  'Bayou', 'Beach', 'Bog', 'Caldera', 'Canals', 'Canyon', 'Caves', 'Cliffs',
  'Crater', 'Desert', 'Dry Lake Bed', 'Dunes', 'Estuary', 'Farmland', 'Fault',
  'Fields', 'Fissured', 'Fjords', 'Forest', 'Geysers', 'Glacier', 'Grassland',
  'Harbor', 'Hills', 'Hot Spring', 'Ice Sheet', 'Island', 'Jungle',
  'Kelp Bed', 'Lake', 'Lava Field', 'Lava Tube', 'Marsh', 'Meadow', 'Mine',
  'Mountain', 'Nettles & Brambles', 'Oasis', 'Ocean', 'Orchard', 'Permafrost',
  'Plains', 'Plateau', 'Pond', 'Prairie', 'Quicksand', 'Rain Forest',
  'Rapids', 'Reef', 'River', 'River Delta', 'Rocky', 'Sand Dunes', 'Sandbar',
  'Savannah', 'Scrubland', 'Seaside', 'Sewers', 'Shallow Sea', 'Sink Hole',
  'Spring', 'Strip Mine', 'Swamp', 'Taiga (Snow Forest)', 'Tide Pool',
  'Tropical Island', 'Tundra', 'Tunnels', 'Underground', 'Underground Sea',
  'Valley', 'Vineyard', 'Volcanic', 'Volcanic Island', 'Wastelands',
  'Waterfalls', 'Wetlands', 'Wildlands', 'Wind Blasted', 'Floating Island',
  'Colosseum', 'Pirate Ships', 'Moving Train',
];

const TIME_OF_DAY = ['Night', 'Dawn', 'Day', 'Dusk'];
const WEATHER_PRESENT = ['Yes', 'No'];

function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export interface RandomEncounterSetting {
  objective: string;
  terrain: string;
  timeOfDay: string;
  weather: string;
}

export function pickRandomEncounterSetting(): RandomEncounterSetting {
  return {
    objective: pickRandom(ENCOUNTER_OBJECTIVES),
    terrain: pickRandom(TERRAIN_TYPES),
    timeOfDay: pickRandom(TIME_OF_DAY),
    weather: pickRandom(WEATHER_PRESENT),
  };
}
