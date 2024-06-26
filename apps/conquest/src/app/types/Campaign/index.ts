import { ReactNode } from 'react';
import { ModalOperation } from '../../types';
import { FirestoreDocument } from '@with-nx/firebase';
import { mutate } from 'swr';

export interface LevelDetails {
  xpStart: number;
  xpEnd: number;
  xpNeeded: number;
  level: number;
}

export interface Campaign {
  id: string;
  name: string;
  slug: string;
  description: string;
  numberOfPlayers: number;
  playerExperienceStart: number;
  levelDetails: LevelDetails;
  levelOfPlayersCharactersStart: number;
  adventuringDayXPLimit: number;
  groupDead: boolean;
  shortRests?: boolean[];
  longRestNeeded?: boolean;
  accountId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CampaignSubmissionData extends Partial<Campaign> {
  xpStart?: number;
  xpEnd?: number;
  xpNeeded?: number;
  level?: number;
}

export interface CampaignAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (campaignData: Partial<Campaign>) => void;
}

export interface CampaignContextType {
  loading: boolean;
  error: string;
  addCampaign: (campaignData: Campaign) => void;
  deleteCampaign: (campaignId: string) => void;
  editCampaign: (campaignId: string, campaignData: Partial<Campaign>) => void;
  campaigns: Campaign[];
}

export interface CampaignDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: Campaign;
  onDelete: (campaignId: string) => void;
  campaignName?: string;
}

export interface CampaignFormProps {
  campaign: Campaign | null;
  onSubmit: (campaignData: Partial<Campaign>) => void;
  operation: 'add' | 'edit';
}

export interface CampaignsHookReturnType {
  campaigns: FirestoreDocument<Campaign>[] | undefined;
  isLoading: boolean;
  isError: Error | null;
  mutate: typeof mutate;
  selectedCampaign: FirestoreDocument<Campaign> | undefined;
}

export interface CampaignListProps {
  campaigns: Campaign[];
  onEdit?: (campaign: Campaign) => void;
  onDelete: (campaignId: string) => void;
  hideEdit?: boolean;
  selectedCampaignSlug?: string;
}

export interface CampaignListWithModalProps {
  campaigns: Campaign[];
  hideEdit?: boolean;
  selectedCampaignSlug?: string;
}

export interface CampaignModalManagerProps {
  isOpen: boolean;
  onClose: () => void;
  operation: ModalOperation;
  campaign: Campaign | null;
}

export interface CampaignModalProps {
  children?: ReactNode;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  operation?: ModalOperation;
  campaign: Campaign | undefined | null;
  onSave?: (campaignData: Partial<Campaign>) => void;
  onDelete?: (campaign: Campaign) => void;
}

export interface ConquestCampaignDeleteConfirmationProps {
  campaign: Campaign | undefined;
  onConfirm: () => void;
  onCancel: () => void;
  campaignId: string | undefined;
}

export interface RestCalculationDisplayProps {
  playerExperienceStart: number;
  adventuringDayXPLimit: number;
  xpStart: number;
  shortRestsAvailable: boolean[];
  longRestNeeded: boolean;
  onTakeShortRest: (restNumber: 1 | 2) => void;
  onTakeLongRest: () => void;
}
