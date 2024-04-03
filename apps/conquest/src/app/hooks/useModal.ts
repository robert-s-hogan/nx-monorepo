import { useState } from 'react';
import { ModalOperation, ModalState } from '../types';

export const useModal = <T>() => {
  const [modalState, setModalState] = useState<ModalState<T>>({
    isOpen: false,
    operation: null,
    data: null,
  });

  console.log(`modalState: ${JSON.stringify(modalState, null, 2)}`);

  const openModal = (operation: ModalOperation, data: T | null = null) => {
    setModalState({ isOpen: true, operation, data });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, operation: null, data: null });
  };

  return { modalState, openModal, closeModal };
};
