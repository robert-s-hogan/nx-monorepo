import React from 'react';
import Layout from '../components/ConquestLayout';

interface AdminLayoutPageProps {
  children: React.ReactNode;
}

const AdminLayoutPage: React.FC<AdminLayoutPageProps> = ({ children }) => {
  return (
    <Layout title="Admin | Conquest">
      <main className="w-full">{children}</main>

      <footer>{/* Footer content */}</footer>
    </Layout>
  );
};

export default AdminLayoutPage;
