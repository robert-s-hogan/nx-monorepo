import { ButtonHTMLAttributes } from 'react';
import { ButtonProps, SelectProps } from '@with-nx/types';

export interface BreadcrumbItem {
  title: string;
  path?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

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

export interface NavbarMenuProps {
  links: (
    | (LinkProps & { type?: 'link'; className?: string })
    | (ButtonProps & { type: 'button'; className?: string })
  )[];
  toggleButton?: React.ReactNode;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface SearchBarProps {
  placeholder?: string;
  icon?: React.ReactNode;
}

export interface StepperProps {
  value: number;
  onValueChange: (newValue: number) => void;
  minusIcon: React.ReactNode;
  plusIcon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  errorMessage?: string;
}
