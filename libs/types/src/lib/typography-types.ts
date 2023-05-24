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
  className?: string;
  items: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }[];
  id?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => void;
  testId?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export interface ListItemProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  testId?: string;
  selected?: number | boolean;
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
