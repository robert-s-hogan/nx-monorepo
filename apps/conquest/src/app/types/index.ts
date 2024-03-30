import { User } from 'firebase/auth';
import { ReactNode } from 'react';

export type AuthContextType = {
  currentUser: User | null;
  loading: boolean;
  isAdmin: boolean;
};

export type AuthProviderProps = {
  children: ReactNode;
};

export interface Campaign {
  id?: string | undefined;
  name: string;
  description: string;
  playerLevel: number;
  playerExperienceStart: number;
  encounterAdjustedExperience: number;
  encounterExperience: number;
  groupDead: boolean;
  rests: number;
  accountId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CampaignAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (campaignData: Partial<Campaign>) => void;
}

export interface CampaignContextType {
  campaigns: Campaign[];
  // fetchAndSetCampaigns: () => Promise<void>;
}

export interface CampaignDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: Campaign;
  onDelete: (campaignId: string) => void;
}

export interface CampaignFormProps {
  campaign?: Partial<Campaign> | null; // Include null
  onSubmit: (formData: Partial<Campaign>, campaignId?: string) => void; // Updated to expect an optional campaignId
  operation: ModalOperation;
}

export interface CampaignListProps {
  campaigns: Campaign[];
  onEdit: (campaign: Campaign) => void;
  onDelete: (campaignId: string) => void;
}

export interface CampaignModalManagerProps {
  isOpen: boolean;
  onClose: () => void;
  operation: ModalOperation;
  campaign: Campaign | undefined | null; // Include null
}

export interface CampaignModalProps {
  children?: ReactNode;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  operation: ModalOperation; // Made optional
  campaign: Campaign | undefined | null; // Include null
  onSave?: (campaignData: Partial<Campaign>) => void; // Made optional
  onDelete?: (campaign: Campaign) => void; // Made optional
}

export interface CampaignDeleteConfirmationProps {
  campaign: Campaign | undefined;
  onConfirm: () => void;
  onCancel: () => void;
  campaignId: string | undefined;
}

export interface FormData {
  [key: string]: any; // Use a more specific type instead of 'any' if possible
}

export type ProviderProps = {
  children: ReactNode;
};

export type ModalOperation = 'add' | 'edit' | 'delete' | null;

export interface ModalState<T> {
  isOpen: boolean;
  operation: ModalOperation;
  data: T | null;
}
