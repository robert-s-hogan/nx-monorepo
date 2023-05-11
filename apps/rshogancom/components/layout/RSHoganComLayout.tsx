import dynamic from 'next/dynamic';
import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayout } from '@with-nx/react-ui';
import { PageLayoutProps } from '@with-nx/types';

import RSHoganComHeader from './RSHoganComHeader';

const RSHoganComFooter = dynamic(() => import('./RSHoganComFooter'), {
  ssr: false,
});

const RSHoganComLayout = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
  return (
    <PageLayout
      header={hideNavBarProp ? '' : <RSHoganComHeader />}
      footer={<RSHoganComFooter />}
    >
      <Seo
        title={title ? title : 'UI/UX Engineer | Robert Hogan'}
        description={
          description
            ? description
            : 'Meet Robert, a talented Web Developer and UI/UX Engineer with a passion for designing and coding beautifully simple digital products. Explore his impressive portfolio of projects and discover how he can help enhance your digital presence.'
        }
        url="https://www.robertshogan.com"
        faviconPath="/favicon.ico"
        image="/images/portrait.jpg"
        twitterHandle="@robert_s_hogan"
        siteName="Robert Hogans Blog"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Robert, Web Developer, UI/UX Engineer, freelance designer, remote work, responsive, optimize digital marketing, design projects, Front end"
      />

      {children}
    </PageLayout>
  );
};

export default RSHoganComLayout;
