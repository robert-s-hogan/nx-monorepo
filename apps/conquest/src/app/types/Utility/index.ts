import { ReactNode } from 'react';

export interface FormData {
  [key: string]: any; // Use a more specific type instead of 'any' if possible
}

export type ProviderProps = {
  children: ReactNode;
};

export type ModalOperation = 'add' | 'edit' | 'delete' | null;

export interface ModalState<T> {
  isOpen: boolean;
  operation: ModalOperation;
  data: T | null;
}
