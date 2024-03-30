import { auth } from './firebaseConfig';
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
        // Now that we've confirmed credential is not null, it's safe to access accessToken
        const token = credential.accessToken;
      }

      const user = result.user;
      console.log('user', user);
    })
    .catch((error) => {
      console.error('Error during Google sign-in:', error.message);

      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.customData.email;

      // It's safe to assume `credential` might also be null here, hence not using it directly
      console.error(errorMessage);
    });
};
