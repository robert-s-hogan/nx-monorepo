'use client';

import React from 'react';
import { signInWithGoogle } from '../data/signInWithGoogle';
import { IonIcon } from '@ionic/react';
import { logoGoogle } from 'ionicons/icons';

const LoginButton: React.FC = () => {
  return (
    <div className="flex space-between pr-2">
      <button onClick={signInWithGoogle} className="flex items-center">
        <span className="hidden md:inline-flex md:mr-2">Login with</span>
        <IonIcon icon={logoGoogle} size="large" />
      </button>
    </div>
  );
};

export default LoginButton;
