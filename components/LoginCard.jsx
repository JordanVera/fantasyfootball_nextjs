import { useRouter } from 'next/router';
import { useUser } from '@/context/UserContext';
import Link from 'next/link';

import SignupForm from './forms/SignupForm';
import LoginForm from './forms/LoginForm';
import Logo from './Logo';

const LoginCard = () => {
  const router = useRouter();
  const { isSignUp, setIsSignUp } = useUser();

  return (
    <div className="w-96 rounded-xl p-5 border-2 border-gray-300 dark:border-gray-900 ">
      <Link href={'/'} className="flex flex-col items-center w-full">
        <Logo height={150} width={150} />
      </Link>

      {isSignUp ? (
        // onSubmit={handleSignUp}
        <SignupForm setIsSignUp={setIsSignUp} />
      ) : (
        <LoginForm setIsSignUp={setIsSignUp} />
      )}
    </div>
  );
};
export default LoginCard;
