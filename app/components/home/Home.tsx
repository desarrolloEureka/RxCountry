'use client';
import useAuth from '@/firebase/auth';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from 'shared/firebase/firebase';
import { useRouter } from 'next/navigation';
import Spinner from '../spinner/Spinner';

const Home = () => {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/components/signup');
    }
  }, [isLoading, router, user]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <a href='#' onClick={logOut}>
        Salir
      </a>
    </div>
  );
};

export default Home;
