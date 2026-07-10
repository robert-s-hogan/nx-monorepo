import { FloatingFooter, PageLayout, Seo } from '@with-nx/react-ui';
import { PageLayoutProps } from '@with-nx/types';

const ShoppingListLayout = ({ children, className, title, description }: PageLayoutProps) => {
  return (
    <PageLayout
      footer={<FloatingFooter currentApp="shopping-list" />}
      className={`min-h-screen pb-16 ${className ?? ''}`}
    >
      <Seo
        title={title ? title : 'My Groceries'}
        description={
          description
            ? description
            : 'A shared family shopping list with per-store lists, price comparisons, and a catalog of every item.'
        }
        url="https://shopping-list.the-hogans.com"
        faviconPath="/favicon.svg"
        image="https://shopping-list.the-hogans.com/og-image.png"
        siteName="My Groceries"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="shopping list, groceries, family shopping, price comparison"
      />
      {children}
    </PageLayout>
  );
};

export default ShoppingListLayout;
