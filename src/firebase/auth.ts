import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@redux';
import { auth, firebase, firestore } from '@firebase';
import { setCurrentUser, setSavedPalettes, setThirdParty } from '@actions';
import { CurrentUser } from '@types';

// Google Sign In
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// Add User Document to DB on Authentication
export const createUserProfileDocument = async (
  userAuth: { uid: string; displayName: string; email: string } | undefined,
  additionalData?: firebase.firestore.DocumentData
): Promise<CurrentUser | Error | null> => {
  if (!userAuth) return null;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      if (err instanceof Error) {
        return err;
      }
    }
  }
  return userAuth;
};

// Re-Authenticate User
export const userReAuth = async (currentPassword: string): Promise<boolean> => {
  const user = auth.currentUser;
  const email = user && user.email;
  const credential =
    email && firebase.auth.EmailAuthProvider.credential(email, currentPassword);
  if (credential) {
    try {
      await user.reauthenticateWithCredential(credential);
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
  return true;
};

// Send Password Reset Email
export const sendPasswordResetEmail = async (email: string): Promise<void> => {
  await auth.sendPasswordResetEmail(email);
};

const refreshPalettes = (id: string) => console.log(id);

export const useFirebaseAuth = async (
  auth: firebase.auth.Auth
): Promise<CurrentUser> => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.data.user.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        if (!uid || !displayName || !email) return;
        const userRef = await createUserProfileDocument({
          uid,
          displayName,
          email
        });
        if (!userRef) return;
        dispatch(setCurrentUser(userRef));
        const palettes = refreshPalettes(uid);
        dispatch(setSavedPalettes(palettes));
        if (user.providerData[0]) {
          if (user.providerData[0]?.providerId === 'password') {
            dispatch(setThirdParty(false));
          } else {
            dispatch(setThirdParty(user.providerData[0].providerId));
          }
        } else {
          dispatch(setCurrentUser(null));
        }
      }
    });
    return () => unsubscribe();
  }, [auth, dispatch]);

  return currentUser;
};
