import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui/templates';

import DbsMarinHeader from './DbsMarinHeader';

const DbsMarinFooter = dynamic(() => import('./DbsMarinFooter'), {
  ssr: false,
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageLayout header={<DbsMarinHeader />} footer={<DbsMarinFooter />}>
      {children}
    </PageLayout>
  );
};

export default Layout;
