// Example of a protected page
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';

import UserTable from '@/components/tables/UserTable';
import ButtonBar from '@/components/buttons/ButtonBar';
import DashboardHero from '@/components/heros/DashboardHero';

const Dashboard_Protected = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { users, user, loading } = useContext(UserContext);

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) signIn();
  }, [session, status, router]);

  if (loading || status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto py-10 flex flex-col justify-center gap-10  p-10">
      <ButtonBar />
      <DashboardHero user={user} />

      <UserTable users={users} />
    </div>
  );
};

export default Dashboard_Protected;
