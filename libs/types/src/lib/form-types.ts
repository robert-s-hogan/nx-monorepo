export interface CheckboxProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  className?: string;
  id?: string;
  name: string;
}

export interface FormProps {
  fields: Array<{
    name: string;
    label: string;
    type: string;
    required: boolean;
    pattern?: RegExp;
  }>;
  onSubmit: (values: { [name: string]: string }) => void;
}

export type FormStep = {
  name: string;
  component: React.ComponentType<{
    data: Record<string, any>;
    onChange: (name: string, value: any) => void;
  }>;
  validation: (data: Record<string, any>) => boolean;
};

export interface InputProps {
  label?: string;
  type: string;
  name?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  ariaLabel?: string;
  required?: boolean;
  placeholder?: string;
}

export interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface MultiStepFormProps {
  steps: FormStep[];
  onSubmit: (data: Record<string, any>) => void;
  className?: string;
  okayButtonIcon?: React.ReactNode;
  showButtonStatus?: boolean[];
}

export interface RadioProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  required?: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface TextareaProps {
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
  ariaLabel?: string;
  required?: boolean;
  placeholder?: string;
  label: string;
  cols?: number;
  rows?: number;
  minLength?: number;
  maxLength?: number;
}
