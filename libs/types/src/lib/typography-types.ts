export interface HeadingProps {
  level: number;
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  'aria-labelledby'?: string;
  tabIndex?: number;
  isLoading?: boolean;
  width?: number | string;
  height?: number | string;
  onClick?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
}

export interface ListProps {
  items: any[];
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  testId?: string;
}

export interface TextProps {
  children: React.ReactNode;
  key?: string | number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  isLoading?: boolean;
  rows?: number;
  rowWidth?: number;
  height?: number | string;
  width?: number | string;
}
