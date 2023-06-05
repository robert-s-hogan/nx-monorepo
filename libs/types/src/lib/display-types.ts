import { ButtonProps } from '@with-nx/types';

export interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'warning';
}

export interface AvatarProps {
  src?: string;
  alt: string;
  size: 'small' | 'medium' | 'large';
}

export interface BadgeProps {
  value: number | string;
  max?: number;
  className?: string;
}

export interface CardProps {
  title?: string;
  key?: string | number;
  description?: string;
  image?: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  button?: React.ReactElement<ButtonProps>;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}

export interface ModalProps {
  isShowing: boolean;
  toggle: () => void;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  buttonLocation?: 'left' | 'right';
}

export interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export interface ProgressProps {
  value: number;
  maxValue: number;
  type?: 'horizontal' | 'circular';
}

export interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'away';
}

export interface TableProps {
  data: Array<{ [key: string]: string | number }>;
}

export interface TooltipProps {
  icon: React.ReactNode;
  tooltipText: string;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  bgClassName?: string;
  location?: 'top' | 'right' | 'bottom' | 'left';
}
