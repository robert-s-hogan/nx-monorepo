import { useState, useCallback } from 'react';
import { ModalOperation, ModalState } from '../types';

export default function useModalManager<T>(): {
  modalState: ModalState<T>;
  openModal: (operation: ModalOperation, data: T) => void;
  closeModal: () => void;
} {
  const [modalState, setModalState] = useState<ModalState<T>>({
    isOpen: false,
    operation: null,
    data: null,
  });

  const openModal = useCallback((operation: ModalOperation, data: T) => {
    setModalState({
      isOpen: true,
      operation,
      data,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState((prevState) => ({
      ...prevState,
      isOpen: false,
    }));
  }, []);

  return { modalState, openModal, closeModal };
}
