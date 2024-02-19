// Example of a protected page
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';
import { Button } from '@material-tailwind/react';

import RegistrationDialog from '@/components/dialogs/RegistrationDialog';
import PicksDialog from '@/components/dialogs/PicksDialog';
import UserTable from '@/components/tables/UserTable';
import RulesDialog from '@/components/dialogs/RulesDialog';
import DashboardHero from '@/components/DashboardHero';

const Dashboard_Protected = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { users, updateUsersData, user, loading } = useContext(UserContext);

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) signIn();
  }, [session, status, router]);

  if (loading || status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[1000px] mx-auto py-10 flex flex-col gap-10">
      <div className="flex flex-row justify-center gap-3 w-full">
        <PicksDialog users={users} user={user} />
        <RegistrationDialog />
        <RulesDialog />
        <Button
          variant="text"
          className="capitalize text-blue-500 text-sm font-normal"
        >
          <a href="https://www.nfl.com/schedules/" target="_blank">
            Schedule
          </a>
        </Button>
      </div>

      <DashboardHero user={user} />

      <UserTable users={users} />
    </div>
  );
};

export default Dashboard_Protected;
