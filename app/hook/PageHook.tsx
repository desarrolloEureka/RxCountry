'use client';
import React, { useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/firebase/auth';

const PageHook = () => {
  const router = useRouter();
  const getUser = false;
  // const [user, setUser] = useState(false);
  const { user, isLoading } = useAuth();

  useLayoutEffect(() => {
    user && !isLoading
      ? router.replace('/components/home')
      : router.replace('/components/signup');
  }, [isLoading, router, user]);

  return { user };
};

export default PageHook;
