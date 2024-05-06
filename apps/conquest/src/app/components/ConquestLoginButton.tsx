'use client';

import React from 'react';
import { signInWithGoogle } from '../data/signInWithGoogle';

import { FaGoogle } from 'react-icons/fa';

import { IconButton } from '@with-nx/generic-ui';

const ConquestLoginButton: React.FC = () => {
  return (
    <div className="flex space-between pr-2">
      <IconButton
        icon={<FaGoogle size="2rem" />}
        label="Icon Only Button"
        theme="primary"
        onClick={signInWithGoogle}
      />
    </div>
  );
};

export default ConquestLoginButton;
