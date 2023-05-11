//libs/types/src/lib/layout-types.ts
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

export interface GridProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export interface FlexProps {
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
