import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui/templates';

import DaoismHeader from './DaoismHeader';

const DaoismFooter = dynamic(() => import('./DaoismFooter'), { ssr: false });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageLayout header={<DaoismHeader />} footer={<DaoismFooter />}>
      {children}
    </PageLayout>
  );
};

export default Layout;
