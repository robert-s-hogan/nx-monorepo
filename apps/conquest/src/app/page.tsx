import React from 'react';
import Layout from './components/ConquestLayout';

const RootPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto my-16">
        <h1 className="text-center">Home</h1>
      </div>
    </Layout>
  );
};

export default RootPage;
