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

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
}
