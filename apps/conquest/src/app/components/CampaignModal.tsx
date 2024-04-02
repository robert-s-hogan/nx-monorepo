import { useEffect, useState } from 'react';

import CampaignForm from '@components/CampaignForm';
import ConquestModal from '@components/ConquestModal';
import CampaignDeleteConfirmation from '@components/CampaignDeleteConfirmation';
import { Campaign, CampaignModalProps } from '../types';

const CampaignModal: React.FC<CampaignModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <ConquestModal isOpen={isOpen} onClose={onClose} title={title}>
      {children}
    </ConquestModal>
  );
};

export default CampaignModal;
