import React from 'react';

/* eslint-disable-next-line */
export interface PageLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  header,
  children,
  footer,
}) => {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
};

export default PageLayout;
