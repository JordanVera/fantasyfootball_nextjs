import { Button } from '@material-tailwind/react';
import SignoutButton from './buttons/SignoutButton';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import LoginButton from './buttons/LoginButton';
import ThemeSwitcher from './ThemeSwitcher';
import Logo from './Logo';
import { useUser } from '@/context/UserContext';

export const Topbar = () => {
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
            <Link href={'/login'}>
              <LoginButton />
            </Link>
            <Link href={'/login'}>
              <Button
                onClick={() => setIsSignUp(true)}
                color="white"
                className="rounded-xl bg-gray-900 text-primary capitalize"
              >
                Signup
              </Button>
            </Link>
          </>
        ) : (
          <SignoutButton />
        )}
      </div>
    </div>
  );
};
