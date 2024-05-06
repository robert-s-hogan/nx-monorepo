import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@with-nx/firebase';

import { FiLogOut } from 'react-icons/fi';
import { IconButton } from '@with-nx/generic-ui';

const ConquestLogoutButton: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out error', error);
    }
  };

  return (
    <IconButton
      icon={<FiLogOut size="2rem" />}
      label="Icon with Logout Button"
      theme="info"
      className="border-0"
      onClick={handleLogout}
    />
  );
};

export default ConquestLogoutButton;
