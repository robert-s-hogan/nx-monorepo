import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui/templates';

import JHoganComHeader from './JHoganComHeader';

const JHoganComFooter = dynamic(() => import('./JHoganComFooter'), {
  ssr: false,
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageLayout header={<JHoganComHeader />} footer={<JHoganComFooter />}>
      {children}
    </PageLayout>
  );
};

export default Layout;
