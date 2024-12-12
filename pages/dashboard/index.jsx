'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';
import Skeleton from '@mui/material/Skeleton';

import UserTable from '@/components/tables/UserTable';
import ButtonBar from '@/components/buttons/ButtonBar';
import DashboardHero from '@/components/heros/DashboardHero';
import Router from 'next/router';
import { toast } from 'react-toastify';
import PicksDialog from '@/components/dialogs/PicksDialog';

import { useUser } from '@/context/UserContext';
import { useTheme } from '@/context/ThemeContext';

const Dashboard_Protected = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { users, user, loading, loadingLosers, fetchData, fetchLoserData } =
    useUser();

  const { theme } = useTheme();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      toast.error('You must be logged in to view this page', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme === 'dark' ? 'dark' : 'light',
      });
      Router.push('/login');
    }
  }, [session, status, router]);

  useEffect(() => {
    fetchData();
    fetchLoserData();
  }, []);

  if (loading || loadingLosers) {
    return (
      <div className="flex flex-col w-full gap-5 p-5">
        <div className="flex flex-col w-full gap-5 md:flex-row">
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: 'grey.900' }}
            // width={}
            className="w-full rounded-lg lg:w-1/2"
            height={200}
          />
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: 'grey.900' }}
            // width={}
            className="w-full rounded-lg lg:w-1/2"
            height={200}
          />
        </div>
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: 'grey.900' }}
          className="w-full rounded-lg"
          height={240}
        />
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: 'grey.900' }}
          className="w-full rounded-lg"
          height={350}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-5 p-5 mx-auto">
      <ButtonBar />
      <DashboardHero user={user} />
      <UserTable users={users} />
      <PicksDialog user={user} users={users} />
    </div>
  );
};

export default Dashboard_Protected;
