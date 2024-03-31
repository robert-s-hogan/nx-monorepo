import React from 'react';

import CampaignDeleteConfirmation from '@components/CampaignDeleteConfirmation';
import CampaignForm from '@components/CampaignForm';
import CampaignModal from '@components/CampaignModal';

import { useCampaigns } from '@hooks/useCampaigns';
import { useCampaignForm } from '@hooks/useCampaignForm';
import {
  Campaign,
  CampaignAddModalProps,
  CampaignDeleteModalProps,
} from '../types';

const CampaignModalManager = ({
  isOpen,
  onClose,
  operation,
  campaign,
}: {
  isOpen: boolean;
  onClose: () => void;
  operation: 'add' | 'edit' | 'delete';
  campaign: Campaign;
}) => {
  const { handleAddCampaign, handleDeleteCampaign, handleEditCampaign } =
    useCampaignForm();

  const handleSave = async (campaignData: Partial<Campaign>) => {
    if (!campaignData.name) {
      console.error('Required campaign data is missing.');
      return;
    }

    if (operation === 'edit' && campaign?.id) {
      await handleEditCampaign(campaignData as Campaign);
    } else if (operation === 'add') {
      await handleAddCampaign(campaignData as Campaign);
    }
    onClose();
  };

  const handleDelete = async () => {
    if (campaign && campaign.id) {
      await handleDeleteCampaign(campaign.id);
    }
    onClose();
  };

  const renderAddOrEditModalContent = (): JSX.Element => {
    const modalProps: CampaignAddModalProps = {
      isOpen,
      onClose,
      onSave: handleSave,
    };
    return (
      <>
        <CampaignModal
          {...modalProps}
          operation={operation}
          title={operation === 'add' ? 'New Campaign' : 'Edit Campaign'}
          campaign={campaign}
        >
          <CampaignForm
            campaign={campaign}
            onSubmit={handleSave}
            operation={operation}
          />
        </CampaignModal>
      </>
    );
  };

  const renderDeleteModalContent = (): JSX.Element => {
    const handleDeleteAdjusted = () => {
      if (campaign && campaign.id) {
        handleDeleteCampaign(campaign.id);
      }
      onClose();
    };

    const deleteModalProps = {
      isOpen,
      onClose,
      campaign,
      onDelete: handleDeleteAdjusted,
    };
    return (
      <CampaignModal
        {...deleteModalProps}
        // title="Delete Campaign"
        operation={operation}
      >
        <CampaignDeleteConfirmation
          campaignId={campaign.id}
          campaign={campaign}
          onConfirm={handleDelete}
          onCancel={onClose}
        />
      </CampaignModal>
    );
  };

  return (
    <>
      {operation === 'delete'
        ? renderDeleteModalContent()
        : renderAddOrEditModalContent()}
    </>
  );
};

export default CampaignModalManager;
