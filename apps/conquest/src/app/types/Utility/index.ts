import { ReactNode } from 'react';

export interface ExtendedFieldConfig extends FieldConfig {
  options?: Array<{ label: string; value: string | number }>; // For select fields
}

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'checkbox';
  options?: Array<{ label: string; value: string | number }>;
  placeholder?: string;
  required?: boolean;
  initialValue?: any;
}

export interface FormData {
  [key: string]: any;
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

export interface MapProps {
  id: string;
  shape: string;
  terrain_type: string;
  starting_quadrant_of_opposition: boolean;
  generated: boolean;
  generation_algorithm?: string;
}
