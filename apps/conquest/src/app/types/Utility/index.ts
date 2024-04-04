import { ReactNode } from 'react';

// A field definition interface
export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'checkbox'; // Add more as needed
  options?: Array<{ label: string; value: string | number }>; // For select fields
  placeholder?: string;
  required?: boolean;
  initialValue?: any;
  // Add other props like validation rules if needed
}

// Props for the generic form component
export interface ConquestFormProps {
  fields: FieldConfig[];
  onSubmit: (values: any) => void; // Replace 'any' with a more specific type if needed
  operation: 'add' | 'edit';
  initialValues?: { [key: string]: any }; // Replace 'any' with a more specific type if needed
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
