import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui/templates';

import RSHoganComHeader from './RSHoganComHeader';

const RSHoganComFooter = dynamic(() => import('./RSHoganComFooter'), {
  ssr: false,
});

interface RSHoganComLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

const RSHoganComLayout = ({ children }: RSHoganComLayoutProps) => {
  return (
    <PageLayout header={<RSHoganComHeader />} footer={<RSHoganComFooter />}>
      {children}
    </PageLayout>
  );
};

export default RSHoganComLayout;
