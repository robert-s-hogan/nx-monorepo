import React from 'react';

/* eslint-disable-next-line */
export interface PageLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  header,
  children,
  footer,
  className,
}) => {
  return (
    <div className={className}>
      {header}
      {children}
      {footer}
    </div>
  );
};

export default PageLayout;
