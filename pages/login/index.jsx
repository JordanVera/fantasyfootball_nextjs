import { useEffect } from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import { useUser } from '@/context/UserContext';
import Link from 'next/link';

import SignupForm from '../../components/forms/SignupForm';
import LoginForm from '../../components/forms/LoginForm';
import Logo from '../../components/Logo';

export default function Home() {
  const { isSignUp, setIsSignUp } = useUser();

  useEffect(() => {
    console.log({ isSignUp });
  }, [isSignUp]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} `}
    >
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
    </main>
  );
}
