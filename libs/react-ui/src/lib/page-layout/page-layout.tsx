import { PageLayoutProps } from '@with-nx/types';

export const PageLayout = ({
  header,
  children,
  footer,
  className = '',
  hideNavBar: hideNavBarProp,
  hideFooter: hideFooterProp,
}: PageLayoutProps) => {
  return (
    <div className={`min-h-screen flex flex-col justify-between ${className}`}>
      {!hideNavBarProp && header}
      <main className="flex-grow">{children}</main>
      {!hideFooterProp && footer}
    </div>
  );
};

export default PageLayout;
