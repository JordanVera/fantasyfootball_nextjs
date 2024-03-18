import { Button } from '@material-tailwind/react';
import SignoutButton from './buttons/SignoutButton';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import Logo from './Logo';
import LoginButton from './buttons/LoginButton';

export const Topbar = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full border-b border-gray-300 dark:border-gray-900 p-3 flex flex-row justify-between items-center">
      <Link href={'/'}>
        <Logo height={80} width={80} />
      </Link>

      <div className="flex flex-row gap-5">
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
