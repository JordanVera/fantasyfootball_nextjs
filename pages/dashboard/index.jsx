'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';
import { Skeleton } from '@mui/material';

import UserTable from '@/components/tables/UserTable';
import ButtonBar from '@/components/buttons/ButtonBar';
import DashboardHero from '@/components/heros/DashboardHero';
import Router from 'next/router';
import { toast } from 'react-toastify';
import PicksDialog from '@/components/dialogs/PicksDialog';
import RulesDialog from '@/components/dialogs/RulesDialog';
import UserService from '@/services/UserService';

const Dashboard_Protected = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  // const { loading } = useContext(UserContext);

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userPicks, setUserPicks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [losers, setLosers] = useState([]);

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

  useEffect(() => {
    fetchData();
    fetchLoserData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const Users = await UserService.getAllUsers();
      const User = await UserService.getCurrentlyLoggedInUser();

      console.log({ User });

      setUser(User?.user || {});
      setUserPicks(User?.user?.Picks || []);
      setUsers(Users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const fetchLoserData = async () => {
    try {
      const { losers } = await UserService.getLoserData();
      setLosers(losers);
      return losers;
    } catch (error) {
      console.log(error);
    }
  };

  if (loading || status === 'loading') {
    return (
      <div className="flex flex-row justify-center gap-3 w-full">
        <Skeleton variant="rectangular" width={100} height={40} />
        <Skeleton variant="rectangular" width={100} height={40} />
        <Skeleton variant="rectangular" width={100} height={40} />
        <Skeleton variant="rectangular" width={100} height={40} />
      </div>
    );
  }

  return (
    <div className="mx-auto flex flex-col justify-center gap-5 p-5">
      <ButtonBar />
      <DashboardHero user={user} />
      <UserTable users={users} />
      <PicksDialog user={user} users={users} />
      <RulesDialog />
    </div>
  );
};

export default Dashboard_Protected;
