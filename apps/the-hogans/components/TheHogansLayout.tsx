import { FloatingFooter, PageLayout, Seo } from '@with-nx/react-ui';
import { PageLayoutProps } from '@with-nx/types';

import TheHogansNavbar from './TheHogansNavbar';
import { BackgroundBeamsWithCollision } from './BackgroundBeamsWithCollision';

const TheHogansLayout = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
  return (
    <PageLayout
      footer={<FloatingFooter currentApp="the-hogans" />}
      className={`min-h-screen pb-16 ${className ?? ''}`}
    >
      <Seo
        title={title ? title : 'The Hogans'}
        description={
          description ? description : 'Here is a fun site about the Hogan family.'
        }
        url="https://www.the-hogans.com"
        faviconPath="/favicon.ico"
        image="/the-hogans-hero.webp"
        siteName="The Hogans"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Hogan, family, fun"
      />
      <BackgroundBeamsWithCollision className="fixed inset-0 -z-10" />
      <div className="max-w-4xl w-full container mx-auto flex items-center justify-center flex-col">
        {!hideNavBarProp && <TheHogansNavbar title={title ?? 'The Hogans 2.0'} />}
        <main className="relative z-10 w-full">{children}</main>
      </div>
    </PageLayout>
  );
};

export default TheHogansLayout;
