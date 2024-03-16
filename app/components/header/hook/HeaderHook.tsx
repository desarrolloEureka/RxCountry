'use client';
import Logout from '@/hook/Logout';

function HeaderHook() {
  const { logOut } = Logout();
  return { logOut };
}

export default HeaderHook;
