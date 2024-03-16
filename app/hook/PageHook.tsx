'use client';
import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/firebase/auth';

const PageHook = () => {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useLayoutEffect(() => {
    user && !isLoading
      ? router.replace('/components/home')
      : router.replace('/components/signIn');
  }, [isLoading, router, user]);

  return { user };
};

export default PageHook;
