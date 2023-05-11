import { PageLayoutProps } from '@with-nx/types';

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
