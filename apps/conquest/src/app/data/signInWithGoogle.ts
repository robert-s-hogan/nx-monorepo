import { auth } from '@with-nx/firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  OAuthCredential,
} from 'firebase/auth';

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(
        result
      ) as OAuthCredential | null;

      if (credential) {
        const token = credential.accessToken;
      }

      const user = result.user;
    })
    .catch((error) => {
      console.error('Error during Google sign-in:', error.message);

      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.customData.email;

      console.error(errorMessage);
    });
};
