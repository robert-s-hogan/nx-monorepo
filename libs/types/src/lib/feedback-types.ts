export interface DialogProps {
  title: string;
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

export interface SkeletonProps {
  key?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  isLoading?: boolean;
  rows?: number;
  rowWidth?: string | number;
  className?: string;
}

export interface SnackbarProps {
  message: string;
  type: 'success' | 'error' | 'warning';
  isVisible: boolean;
}

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning';
  isVisible: boolean;
  duration?: number;
}
