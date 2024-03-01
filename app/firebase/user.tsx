import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from 'shared/firebase/firebase';

const saveUserById = async (data: any) => {
  const docRef = await setDoc(doc(db, 'users', data.uid), data);
  return docRef;
};

export const registerFirebase = async (user: string, password: string) => {
  const registerF = await createUserWithEmailAndPassword(auth, user, password);
  return registerF;
};
