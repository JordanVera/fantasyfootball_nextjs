import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import ThemeSwitcher from '../ThemeSwitcher';
import Logo from '../Logo';
import { useUser } from '@/context/UserContext';
import { signOut } from 'next-auth/react';

export const Topbar_Large = () => {
  const { data: session } = useSession();
  const { setIsSignUp } = useUser();

  return (
    <div className="z-50 w-full bg-white dark:bg-black border-b border-gray-300 dark:border-gray-900 px-5 flex flex-row justify-between items-center">
      <Link href={'/'}>
        <Logo height={60} width={60} />
      </Link>

      <div className="flex flex-row gap-5">
        <ThemeSwitcher />

        {!session ? (
          <>
            <Link href={'/login'} onClick={() => setIsSignUp(true)}>
              <div className="relative group w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative px-7 py-3 bg-white dark:bg-black text-primary rounded-xl leading-none flex items-center divide-x divide-gray-600 w-full  justify-center text-xs font-bold">
                  Sign up
                </button>
              </div>
            </Link>
            <Link href={'/login'}>
              <Button
                onClick={() => setIsSignUp(false)}
                color="white"
                className="rounded-xl bg-gray-900 text-white capitalize text-xs"
              >
                Log in
              </Button>
            </Link>
          </>
        ) : (
          <div className="relative group w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="relative px-7 py-3 bg-black rounded-xl leading-none flex items-center divide-x divide-gray-600 w-full  justify-center text-xs font-bold"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
