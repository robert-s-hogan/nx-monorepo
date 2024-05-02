import React from 'react';
import { Button, Heading } from '@with-nx/generic-ui';

import CampaignList from './ConquestCampaignList';
import CampaignModalManager from './ConquestCampaignModalManager';
import useModalManager from '../hooks/useModalManager';
import { Campaign, CampaignListWithModalProps } from '../types';

const ConquestCampaignListWithModal = ({
  campaigns,
  hideEdit = false,
  selectedCampaignSlug,
}: CampaignListWithModalProps) => {
  const { modalState, openModal, closeModal } = useModalManager<Campaign>();
  const {
    isOpen: isModalOpen,
    operation: modalOperation,
    data: modalData,
  } = modalState;

  const handleEdit = (campaign: Campaign) => {
    openModal('edit', campaign);
  };

  return (
    <div className="w-full lg:w-1/2 p-4 flex flex-col space-y-8">
      <Heading text="Campaigns" level={2} />
      {hideEdit && (
        <div className="flex w-auto">
          <Button
            onClick={() => openModal('add', {} as Campaign)}
            theme="primary"
            text="Add Campaign"
          />
        </div>
      )}

      <CampaignList
        campaigns={campaigns}
        hideEdit={hideEdit}
        onEdit={handleEdit}
        onDelete={(campaignId) => {
          const campaignToDelete = campaigns.find((c) => c.id === campaignId);
          if (campaignToDelete) {
            openModal('delete', campaignToDelete);
          }
        }}
        selectedCampaignSlug={selectedCampaignSlug}
      />
      {isModalOpen && (
        <CampaignModalManager
          isOpen={isModalOpen}
          onClose={closeModal}
          operation={modalOperation || 'add'}
          campaign={modalData as Campaign}
        />
      )}
    </div>
  );
};

export default ConquestCampaignListWithModal;
