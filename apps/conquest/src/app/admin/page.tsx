'use client';

import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const AdminPage: NextPage = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(`/admin/${path}`);
  };
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example of dashboard widgets */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-medium">Maps</h2>
          <p>Manage all the maps in your campaign</p>
          <button
            onClick={() => handleNavigate('maps')}
            className="text-indigo-600 hover:text-indigo-900"
          >
            Go to Maps
          </button>
        </div>
        {/* Repeat for other sections like Items, Entities, etc. */}
      </div>
    </div>
  );
};

export default AdminPage;
