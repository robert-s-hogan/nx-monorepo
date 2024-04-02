import { useState } from 'react';
import { ModalOperation } from '@conquestTypes/Utility';
import { Campaign } from '@conquestTypes/Campaign';

const useModalManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOperation, setModalOperation] = useState<ModalOperation>(null);
  const [modalData, setModalData] = useState<Campaign | null>(null);

  const openModal = (
    operation: ModalOperation,
    data: Campaign | null = null
  ) => {
    setIsModalOpen(true);
    setModalOperation(operation);
    setModalData(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalOperation(null);
    setModalData(null);
  };

  return { isModalOpen, modalOperation, modalData, openModal, closeModal };
};

export default useModalManager;
