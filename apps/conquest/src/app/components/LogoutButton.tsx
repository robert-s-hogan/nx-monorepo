import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@data/firebaseConfig';
import { IonIcon } from '@ionic/react';
import { logOut } from 'ionicons/icons';

const LogoutButton: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Sign out error', error);
    }
  };

  return (
    <button onClick={handleLogout} className="flex items-center pr-2">
      <IonIcon icon={logOut} size="large" />
    </button>
  );
};

export default LogoutButton;
