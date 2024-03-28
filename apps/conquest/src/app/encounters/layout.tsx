import React, { ReactNode } from 'react';

type EncountersLayoutProps = {
  children: ReactNode;
};

const EncountersLayout = ({ children }: EncountersLayoutProps) => {
  return (
    <div>
      {/* Add your header component here */}
      <header>{/* Header content */}</header>

      {/* Add your main content component here */}
      <main>{children}</main>

      {/* Add your footer component here */}
      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default EncountersLayout;
