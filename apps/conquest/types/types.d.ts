export interface User {
  access_token: string;
  createdAt: string;
  email: string;
  id: number;
  updatedAt: string;
  username: string;
}

export interface Campaign {
  id: number;
  name: string;
  notes: string;
  playerCount: number;
  playerStartingExperience: number;
  encounter_adjusted_experience: number;
  encounter_experience: number;
  campaigns: array[];
  intro: string;
  mapTerrainType: string;
  player_experience_start: number;
  mapDimensions: string;
  hasWeather: boolean;
  encounters: array[];
  timeOfDay: string;
  objective: string;
  group_alive: boolean;
  player_count: number;
  adventuringDayXpLimit: number;
  xpThresholdsByCharacterLevelEasy: number;
  xpThresholdsByCharacterLevelMedium: number;
  xpThresholdsByCharacterLevelHard: number;
  xpThresholdsByCharacterLevelDeadly: number;
  adventuringDayXpStart: number;
  encounterDifficultyOptions: string;
  adventuringDayXpFinish: number;
  playerExperienceEarnedFromEncounter: number;
  playerExperienceFinish: number;
  levelOfPlayersCharactersFinish: number;
  percentageOfAdventuringDayXpRemaining: number;
  shortRestNeededFirstOne: boolean;
  shortRestNeededSecondOne: boolean;
  shortRestCounter: number;
  longRestNeeded: boolean;
}

export interface Encounter {
  campaignId: number;
  player_experience_start: number;
  adventuring_day_xp_limit: number;
  adventuring_day_xp_start: number;
  encounter_difficulty_options: string;
  does_caravan_appear: boolean;
  player_count: number;
  encounter_adjusted_experience: number;
  player_experience_start: number;
  adventuring_day_xp_finish: number;
  player_experience_earned_from_encounter: number;
  player_experience_finish: number;
  encounter_experience: number;
  level_of_players_characters_finish: number;
  short_rest_needed_first: string;
  short_rest_needed_second: string;
  objective: string;
  items: array[];
  map_data: array[];
  campaign_name: string;
  long_rest_needed: boolean;
  notes: string;
  objects: array[];
  time_spent_between_resting: number;
  time_between_encounters: string;
  weather_severity: string;
  map_shape: string;
  weather_change: string;
  map_terrain_type: string;
  terrain_type: string;
  starting_quadrant_of_opposition: boolean;
  objectives: array[];

  time_of_day: string;
  weather: boolean;
  gold_earned_per_player: number;
  campaign: {
    id: number;
  };
  encounter_difficulty?: string | null;
  encounter_difficulty_modifier?: string | null;
  encounter_difficulty_modifier_reason?: string | null;
  encounter_difficulty_modifier_reason_other?: string | null;
  cumulative_gold_earned_start?: number | null;
  cumulative_gold_earned_finish?: number | null;
  id: number;
}

export interface MockEncounterData {
  player_count: number;
  player_experience_start: number;
  encounter_adjusted_experience: number;
  encounter_experience: number;
  notes: string;
  campaigin_name: string;
  intro: string;
  monsters: array[];
  map_data: array[];
  objects: array[];
  map_dimensions: array[];
  player_starting_position: number;
  characters: Character[];
  potential_opposition_starting_positions: array[];
  items: array[];
  difficulty: string;
  terrain_type: string;
  weather_severity: string;
  weather_change: string;
  time_of_day: array[];
  objective: array[];
  weather_type: string;
  challenge_rating: array[];
  has_weather: boolean;
}

export interface Character {
  name: string;
  role: string;
  icon: string;
  avatar: string;
  level: number;
  currentHitpoints: number;
  totalHitpoints: number;
  stats: {
    ac: {
      base: number;
      modifier: number;
    };
    initiative: {
      base: number;
      modifier: number;
    };
    speed: {
      base: number;
      modifier: number;
    };
    str: {
      base: number;
      modifier: number;
    };
    dex: {
      base: number;
      modifier: number;
    };
    int: {
      base: number;
      modifier: number;
    };
    con: {
      base: number;
      modifier: number;
    };
    wis: {
      base: number;
      modifier: number;
    };
    prof: {
      base: number;
      modifier: number;
    };
    saves: Saves;
  };
  skills: Skills[];
}

export interface Saves {
  str: {
    base: number;
    modifier: number;
  };
  dex: {
    base: number;
    modifier: number;
  };
  int: {
    base: number;
    modifier: number;
  };
  con: {
    base: number;
    modifier: number;
  };
  wis: {
    base: number;
    modifier: number;
  };
}

export interface Skills {
  name: string;
  type: string;
  bonus: boolean;
  prof: boolean;
  modifier: number;
  advantage: boolean;
  disadvantage: boolean;
}
