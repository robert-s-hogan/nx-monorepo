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
