// Example of a protected page
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';

import RegistrationDialog from '@/components/dialogs/RegistrationDialog';
import PicksDialog from '@/components/dialogs/PicksDialog';
import UserTable from '@/components/tables/UserTable';

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
    <div className="max-w-[1000px] mx-auto py-10">
      <RegistrationDialog />
      <PicksDialog users={users} user={user} />
      <UserTable users={users} />
    </div>
  );
};

export default Dashboard_Protected;
