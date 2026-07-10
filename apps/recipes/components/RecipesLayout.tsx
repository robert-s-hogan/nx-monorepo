import { FloatingFooter, PageLayout, Seo } from '@with-nx/react-ui';
import { PageLayoutProps } from '@with-nx/types';
import type { ReactNode } from 'react';

import RecipesNavbar from './RecipesNavbar';

interface RecipesLayoutProps extends PageLayoutProps {
  navActions?: ReactNode;
}

const RecipesLayout = ({
  children,
  className,
  title,
  description,
  navActions,
  hideNavBar: hideNavBarProp,
}: RecipesLayoutProps) => {
  return (
    <PageLayout
      header={<RecipesNavbar actions={navActions} />}
      hideNavBar={hideNavBarProp}
      footer={<FloatingFooter currentApp="recipes" />}
      className={`min-h-screen bg-gray-50 pb-16 ${className ?? ''}`}
    >
      <Seo
        title={title ? title : 'My Recipes'}
        description={
          description ? description : 'A shared family recipe box — add, search, and cook from anywhere.'
        }
        url="https://recipes.the-hogans.com"
        faviconPath="/favicon.svg"
        image="https://recipes.the-hogans.com/og-image.png"
        siteName="My Recipes"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="recipes, cooking, family recipes, recipe box"
      />
      {children}
    </PageLayout>
  );
};

export default RecipesLayout;
