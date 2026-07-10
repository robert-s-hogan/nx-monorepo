import { PageLayout, Seo } from '@with-nx/react-ui';
import { PageLayoutProps } from '@with-nx/types';

const NeuroFitLayout = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
  return (
    <PageLayout
      hideNavBar={hideNavBarProp}
      // flow-root establishes a new block-formatting context so a child's
      // top margin (e.g. the placeholder page's `my-32`) can't collapse
      // through and push this div's own background down — bit us once
      // already, see project_neuro_fit_rebuild memory.
      className={`min-h-screen flow-root bg-bg-color text-text-color ${
        className ?? ''
      }`}
    >
      <Seo
        title={title ? title : 'NeuroFit'}
        description={
          description
            ? description
            : 'A workout and interval timer built to keep you moving.'
        }
        url="https://nx-neuro-fit.vercel.app"
        faviconPath="/favicon.svg"
        image="https://nx-neuro-fit.vercel.app/og-image.png"
        siteName="NeuroFit"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="workout timer, interval timer, fitness, exercise"
      />
      {children}
    </PageLayout>
  );
};

export default NeuroFitLayout;
