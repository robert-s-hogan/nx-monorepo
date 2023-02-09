import React from 'react';

/* eslint-disable-next-line */
export interface PageLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
  className?: string;
  hideNavBar?: boolean;
  hideFooter?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  header,
  children,
  footer,
  className,
  hideNavBar: hideNavBarProp,
  hideFooter: hideFooterProp,
}) => {
  return (
    <div className={className}>
      {hideNavBarProp ? '' : header}
      {children}
      {hideFooterProp ? '' : footer}
    </div>
  );
};

export default PageLayout;
