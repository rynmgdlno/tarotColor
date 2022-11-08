import firebase, { auth, firestore } from './config';
import {
  signInWithEmail,
  signInWithGoogle,
  sendPasswordResetEmail,
  useFirebaseAuth
} from './auth';

export {
  auth,
  firebase,
  firestore,
  signInWithEmail,
  signInWithGoogle,
  sendPasswordResetEmail,
  useFirebaseAuth
};
