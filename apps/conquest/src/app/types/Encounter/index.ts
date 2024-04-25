import { ReactNode } from 'react';
import { ModalOperation } from '../../types';
import { FirestoreDocument } from '@with-nx/firebase';
import { Campaign } from '../Campaign';

export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Deadly';

export type Encounter = {
  id?: string;
  campaignId: string;
  mapId: number;
  playerExperienceStart: number;
  adventuringDayXPLimit: number;
  adventuringDayXPStart: number;
  xpThreshold: number;
  adventuringDayXPFinish: number;
  playerExperienceEarnedFromEncounter: number;
  playerExperienceFinish: number;
  encounterDifficultyOptions: Difficulty;
  levelOfPlayersCharactersFinish: number;
  longRestNeeded: boolean;
  timeSpentBetweenResting: number;
  timeBetweenEncounters: number;
  adjustedExperience: number;
  encounterXP: number;
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

interface EncounterFormProps {
  encounter: Encounter | null;
  onSubmit: (encounter: Encounter) => void;
  operation: 'add' | 'edit' | 'delete';
  campaignId: string;
  campaigns?: FirestoreDocument<Campaign>[];
}

export interface EncounterListProps {
  encounters?: Encounter[];
  onEdit?: (encounter: Encounter) => void;
  onDelete?: (encounterId: string) => void;
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
  encounter?: Encounter | null;
  fullScreen?: boolean;
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
