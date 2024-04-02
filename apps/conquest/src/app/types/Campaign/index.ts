import { ReactNode } from 'react';
import { ModalOperation } from '@conquestTypes/Utility';

export interface Campaign {
  id?: string | undefined;
  name: string;
  slug: string;
  description: string;
  playerExperienceStart: number;
  numberOfPlayers: number;
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
  onEdit?: (campaign: Campaign) => void;
  onDelete: (campaignId: string) => void;
  hideEdit?: boolean;
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
  operation?: ModalOperation; // Made optional
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
