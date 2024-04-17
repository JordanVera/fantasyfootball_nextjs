import { Button } from '@material-tailwind/react';
import SignoutButton from './buttons/SignoutButton';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import Logo from './Logo';
import LoginButton from './buttons/LoginButton';
import ThemeSwitcher from './ThemeSwitcher';

export const Topbar = () => {
  const { data: session } = useSession();

  return (
    <div className="z-50 w-full bg-white dark:bg-black border-b border-gray-300 dark:border-gray-900 px-10 flex flex-row justify-between items-center fixed">
      <Link href={'/'}>
        <Logo height={80} width={80} />
      </Link>

      <div className="flex flex-row gap-5">
        <ThemeSwitcher />

        {!session ? (
          <>
            <Link href={'/login'}>
              <LoginButton />
            </Link>
            <Link href={'/login'}>
              <Button color="white" className="rounded-full">
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
