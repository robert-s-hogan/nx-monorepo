import { ReactNode } from 'react';
import { ModalOperation } from '../../types';

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
  encounters: Encounter[];
}

export interface EncounterDeleteConfirmationProps {
  encounter?: Encounter | null;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface EncounterFormProps {
  encounter?: Partial<Encounter> | null;
  onSubmit: (formData: Partial<Encounter>, encounterId?: number) => void;
  operation: ModalOperation;
}

export interface EncounterListProps {
  encounters?: Encounter[];
  onEdit?: (encounter: Encounter) => void;
  onDelete?: (encounterId: string) => void; // Change from number to string
  hideEdit?: boolean;
}

export interface EncounterListWithModalProps {
  encounters: Encounter[];
  hideEdit?: boolean;
}

export interface EncounterModalProps {
  children?: ReactNode;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  operation?: ModalOperation;
  encounter?: Encounter | null; // Optional encounter for context, might not be needed depending on your modal's use cases
}

export interface EncounterModalManagerProps {
  isOpen: boolean;
  onClose: () => void;
  operation: ModalOperation;
  encounter?: Encounter | null;
}

export interface EncounterOperations {
  handleSave: (formData: Partial<Encounter>, operation: ModalOperation) => void;
  handleDelete: (encounterId: string) => void;
}

export type ThresholdLevels = Record<Difficulty, number>;

export interface XPThresholdsByCharLvl {
  [level: number]: ThresholdLevels;
}

export interface XPLookupTable {
  [level: number]: number;
}
