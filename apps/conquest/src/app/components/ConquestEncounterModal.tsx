import React from 'react';
import ConquestModal from './ConquestModal';
import { EncounterModalProps } from '../types';

const ConquestEncounterModal: React.FC<EncounterModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  fullScreen,
}) => {
  return (
    <ConquestModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      fullScreen={fullScreen}
    >
      {children}
    </ConquestModal>
  );
};

export default ConquestEncounterModal;
