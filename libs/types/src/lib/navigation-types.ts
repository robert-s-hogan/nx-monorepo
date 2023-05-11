import { ButtonHTMLAttributes } from 'react';

export interface NavbarProps {
  links: (
    | (LinkProps & { type?: 'link'; className?: string })
    | (ButtonProps & { type: 'button'; className?: string })
  )[];
  logo?: React.ReactNode;
  logoText?: string;
  isOpen: boolean;
  className?: string;
  isDarkMode?: boolean;
  toggleButton?: React.ReactNode;
  showSearchBar?: boolean;
  searchBarProps?: SearchBarProps & { icon?: React.ReactNode };
  selects?: (SelectProps & { className?: string })[];
}

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface SearchBarProps {
  placeholder?: string;
  icon?: React.ReactNode;
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

interface SelectOption {
  value: string;
  label: string;
}
