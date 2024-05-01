'use client';

import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Button, Heading, Text } from '@with-nx/generic-ui';

const AdminPage: NextPage = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(`/admin/${path}`);
  };
  return (
    <div>
      <Heading level={1} text="Admin Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <Heading level={2} text="Maps" />
          <Text text="Manage all the maps in your campaign." />
          <Button
            onClick={() => handleNavigate('maps')}
            theme="primary"
            text="Go to Maps"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
