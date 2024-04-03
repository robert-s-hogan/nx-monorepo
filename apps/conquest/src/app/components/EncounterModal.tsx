import React from 'react';
import ConquestModal from './ConquestModal';
import { EncounterModalProps } from '../types';

const EncounterModal: React.FC<EncounterModalProps> = ({
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

export default EncounterModal;
