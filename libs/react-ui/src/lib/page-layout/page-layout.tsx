import { PageLayoutProps } from '@with-nx/types';

export const PageLayout = ({
  header,
  children,
  footer,
  className,
  hideNavBar: hideNavBarProp,
  hideFooter: hideFooterProp,
}: PageLayoutProps) => {
  return (
    <div className={className}>
      {hideNavBarProp ? '' : header}
      {children}
      {hideFooterProp ? '' : footer}
    </div>
  );
};
