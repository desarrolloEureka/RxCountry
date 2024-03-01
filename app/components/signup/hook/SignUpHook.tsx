import { registerFirebase } from '@/firebase/user';
import React from 'react';

const SignUpHook = () => {
  const registerUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await registerFirebase(email, password);
  };

  return { registerUser };
};

export default SignUpHook;
