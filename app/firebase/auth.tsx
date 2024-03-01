import { db, auth } from 'shared/firebase/firebase';
import { User, onAuthStateChanged } from 'firebase/auth';
import { DocumentReference, doc, getDoc } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
interface Role {
  id: string;
  name: string;
  slug: string;
  isAdmin: boolean;
}
const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>();
  const [role, setRole] = useState<Role | null>();
  const [error, setError] = useState<string>();
  //   const getRole = useCallback(async () => {
  //     if (user) {
  //       const document = await getDoc(doc(db, 'usersData', user.uid));
  //       if (document.exists()) {
  //         const roleDocument = await getDoc(
  //           document.data().roleRef as DocumentReference
  //         );
  //         if (roleDocument.exists()) {
  //           setRole({
  //             ...roleDocument.data(),
  //             id: roleDocument.id,
  //             isAdmin: roleDocument.data().slug === 'admin',
  //           } as Role);
  //         }
  //       }
  //     } else if (user === null) {
  //       setRole(null);
  //     }
  //   }, [user]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser, (error: any) => {
      setError(error.toString());
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //   useEffect(() => {
  //     getRole();
  //   }, [getRole]);
  useEffect(() => {
    if (user !== undefined) {
      setIsLoading(false);
    }
  }, [user]);

  return {
    isLoading,
    user,
    error,
  };
};
export default useAuth;
