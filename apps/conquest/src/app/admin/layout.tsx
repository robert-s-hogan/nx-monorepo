import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <a href="/admin/maps">Maps</a>
          <a href="/admin/items">Items</a>
          <a href="/admin/entities">Entities</a>
        </nav>
      </header>

      <main>{children}</main>

      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default Layout;
