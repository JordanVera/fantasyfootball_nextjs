// Example of a protected page
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';
import { Skeleton } from '@mui/material';

import UserTable from '@/components/tables/UserTable';
import ButtonBar from '@/components/buttons/ButtonBar';
import DashboardHero from '@/components/heros/DashboardHero';
import Router from 'next/router';
import { toast } from 'react-toastify';
import PicksDialog from '@/components/dialogs/PicksDialog';
import RegistrationDialog from '@/components/dialogs/RegistrationDialog';
import RulesDialog from '@/components/dialogs/RulesDialog';

const Dashboard_Protected = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { users, user, loading } = useContext(UserContext);

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      toast.error('You must be logged in to view this page', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      Router.push('/login');
    }
  }, [session, status, router]);

  if (loading || status === 'loading') {
    return (
      <div>
        {' '}
        <div className="flex flex-row justify-center gap-3 w-full">
          <Skeleton variant="rectangular" width={100} height={40} />
          <Skeleton variant="rectangular" width={100} height={40} />
          <Skeleton variant="rectangular" width={100} height={40} />
          <Skeleton variant="rectangular" width={100} height={40} />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex flex-col justify-center gap-5  p-5">
      <ButtonBar />
      <DashboardHero user={user} />

      <UserTable users={users} />

      <PicksDialog user={user} users={users} />
      <RegistrationDialog />
      <RulesDialog />
    </div>
  );
};

export default Dashboard_Protected;
