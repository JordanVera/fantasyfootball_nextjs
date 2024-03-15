// Example of a protected page
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';
import { Button } from '@material-tailwind/react';

import UserTable from '@/components/tables/UserTable';
import { useRegister } from '@/context/RegisterContext';
import ButtonBar from '@/components/buttons/ButtonBar';
import MakeYourPicksCard from '@/components/cards/MakeYourPicksCard';

const Dashboard_Protected = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { users, updateUsersData, user, loading } = useContext(UserContext);
  const { isCollapsed } = useRegister();

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
      <MakeYourPicksCard user={user} />

      <UserTable users={users} />
    </div>
  );
};

export default Dashboard_Protected;
