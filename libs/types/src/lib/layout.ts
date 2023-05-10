// libs/types/src/lib/layout.ts
export interface PageLayoutProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  hideNavBar?: boolean;
  hideFooter?: boolean;
}

export interface AccountantLayoutProps extends PageLayoutProps {
  title?: string;
  description?: string;
}

export interface ChilloutLayoutProps extends PageLayoutProps {
  title?: string;
  description?: string;
}

export interface CoffeeShopLayoutProps extends PageLayoutProps {
  title?: string;
  description?: string;
}

export interface ConquestLayoutProps extends PageLayoutProps {
  title?: string;
  description?: string;
}

export interface DaosimLayoutProps extends PageLayoutProps {
  title?: string;
  description?: string;
}

export interface DbsMarinLayoutProps extends PageLayoutProps {
  title?: string;
  description?: string;
}

export interface DevBlogLayoutProps extends PageLayoutProps {
  title?: string;
  description?: string;
}

export interface DndGroupLayoutProps extends PageLayoutProps {
  title?: string;
  description?: string;
}

export interface JHoganComLayoutProps extends PageLayoutProps {
  title?: string;
  description?: string;
}

export interface PlaceholderLayoutProps extends PageLayoutProps {
  title?: string;
  description?: string;
}

export interface RSHoganComLayoutProps extends PageLayoutProps {
  title?: string;
  description?: string;
}
