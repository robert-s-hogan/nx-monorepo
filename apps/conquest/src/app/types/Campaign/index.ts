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
  campaign?: Partial<Campaign> | null;
  onSubmit: (formData: Partial<Campaign>, campaignId?: string) => void;
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

export interface CampaignDeleteConfirmationProps {
  campaign: Campaign | undefined;
  onConfirm: () => void;
  onCancel: () => void;
  campaignId: string | undefined;
}
