import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from 'shared/firebase/firebase';

const user = auth.currentUser;

const saveUserById = async (data: any) => {
  const docRef = await setDoc(doc(db, 'users', data.uid), data);
  return docRef;
};

export const registerFirebase = async (user: string, password: string) =>
  await createUserWithEmailAndPassword(auth, user, password);

export const loginFirebase = async (user: string, password: string) =>
  await signInWithEmailAndPassword(auth, user, password);

export const resetPasswordFirebase = async (email: string) =>
  await sendPasswordResetEmail(auth, email);

export const confirmPasswordResetFirebase = async (
  oobCode: string,
  confirmPassword: string
) => await confirmPasswordReset(auth, oobCode, confirmPassword);

export const updateProfileFirebase = async (
  displayName: string,
  photoURL?: string
) => {
  return await user?.updateProfile({
    displayName,
    photoURL,
  });
};
