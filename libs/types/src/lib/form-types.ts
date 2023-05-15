export interface CheckboxProps {
  label: string;
  onChange: (checked: boolean) => void;
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
  label: string;
  type: string;
  name: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  ariaLabel?: string;
  required?: boolean;
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