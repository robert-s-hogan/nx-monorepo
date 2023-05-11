//libs/types/src/lib/layout-types.ts

export interface BoxProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  role?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

export interface FlexProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export interface FooterProps {
  className?: string;
}

export interface GridProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export interface HeaderProps {
  title: string;
  logo: React.ReactNode;
  nav: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonClassName?: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  onButtonClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  layout?: 'default' | 'custom';
}

export interface LayoutProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  hideNavBar?: boolean;
  hideFooter?: boolean;
}

export interface PageLayoutProps extends LayoutProps {
  title?: string;
  description?: string;
}

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}
