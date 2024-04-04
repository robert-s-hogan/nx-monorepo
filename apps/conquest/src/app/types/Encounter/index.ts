import { ReactNode } from 'react';
import { ModalOperation } from '../../types';
import { FirestoreDocument } from '../../../../../../libs/firebase/src/lib/types';
import { Campaign } from '../Campaign';

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

// Your existing EncounterFormProps definition might look something like this
export interface EncounterFormProps {
  encounter: Encounter | null;
  onSubmit: (values: Partial<Encounter>) => void;
  operation: 'add' | 'edit';
  // Add the 'campaigns' prop to the type definition
  campaigns?: FirestoreDocument<Campaign>[];
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
