import {
    confirmPasswordReset,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "shared/firebase/firebase";

const user = auth.currentUser;

export const saveUserById = async (data: any) => {
    const docRef = await setDoc(doc(db, "users", data.uid), data);
    return docRef;
};

export const getProfileDataByIdFb = async (uid: any) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    let userData = {};

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        userData = docSnap.data();
    } else {
        console.log("No such document!");
    }
    return userData;
};

export const registerFirebase = async (user: string, password: string) =>
    await createUserWithEmailAndPassword(auth, user, password);

export const loginFirebase = async (user: string, password: string) =>
    await signInWithEmailAndPassword(auth, user, password);

export const resetPasswordFirebase = async (email: string) =>
    await sendPasswordResetEmail(auth, email);

export const confirmPasswordResetFirebase = async (
    oobCode: string,
    confirmPassword: string,
) => await confirmPasswordReset(auth, oobCode, confirmPassword);

export const updateProfileFirebase = async (
    displayName: string,
    photoURL?: string,
) => {
    return await user?.updateProfile({
        displayName,
        photoURL,
    });
};
