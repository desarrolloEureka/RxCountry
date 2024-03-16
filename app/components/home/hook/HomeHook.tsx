import AuthValidate from '@/hook/AuthValidate';
import Logout from '@/hook/Logout';

const HomeHook = () => {
  const { isLoading } = AuthValidate();

  return { isLoading };
};

export default HomeHook;
