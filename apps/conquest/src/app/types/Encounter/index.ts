import { ModalOperation } from '@conquestTypes/Utility';

export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Deadly';

export type Encounter = {
  id?: string;
  campaignId: number;
  mapId: number;
  playerExperienceStart: number;
  adventuringDayXPLimit: number;
  adventuringDayXPStart: number;
  encounterDifficultyOptions: string;
  adventuringDayXPFinish: number;
  playerExperienceEarnedFromEncounter: number;
  playerExperienceFinish: number;
  levelOfPlayersCharactersFinish: number;
  shortRestNeededFirst: string;
  shortRestNeededSecond: string;
  longRestNeeded: boolean;
  timeSpentBetweenResting: number;
  timeBetweenEncounters: string;
  mapShape: string;
  mapTerrainType: string;
  startingQuadrantOfOpposition: boolean;
  objective: string;
  timeOfDay: string;
  weather: boolean;
  cumulativeGoldEarnedStart: number;
  goldEarnedPerPlayer: number;
  cumulativeGoldEarnedFinish: number;
  doesCaravanAppear: boolean;
};

export interface EncounterContextType {
  encounters: Encounter[]; // Assuming Encounter is a defined type for your encounters
}

export interface EncounterFormProps {
  encounter?: Partial<Encounter> | null; // Partial allows for incomplete encounter data, useful for edits
  onSubmit: (formData: Partial<Encounter>, encounterId?: number) => void; // Encounter ID might be optional, depending on add or edit mode
  operation: ModalOperation; // Assuming this uses the same ModalOperation type you've defined
}

export interface EncounterListProps {
  encounters?: Encounter[]; // Now encounters is optional
  onEdit?: (encounter: Encounter) => void;
  onDelete?: (encounterId: number) => void;
  hideEdit?: boolean;
}

// Using Record to define a mapping from Difficulty keys to number values
export type ThresholdLevels = Record<Difficulty, number>;

// Interface for XP thresholds by character level, using a numeric index signature
export interface XPThresholdsByCharLvl {
  [level: number]: ThresholdLevels;
}

// Defining XPLookupTable to allow numeric indexing, returning a number
export interface XPLookupTable {
  [level: number]: number;
}
