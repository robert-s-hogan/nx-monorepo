import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui/templates';

import DndGroupHeader from './DndGroupHeader';

const DndGroupFooter = dynamic(() => import('./DndGroupFooter'), {
  ssr: false,
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageLayout header={<DndGroupHeader />} footer={<DndGroupFooter />}>
      {children}
    </PageLayout>
  );
};

export default Layout;
