import React, { useState } from 'react';
import { IconButton, Avatar } from '@material-tailwind/react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { useSession } from 'next-auth/react';
import RegistrationDialog from './dialogs/RegistrationDialog';
import { useRegister } from '@/context/RegisterContext';

function Main_Sidebar() {
  const { data: session, status } = useSession();

  const { isCollapsed, setIsCollapsed } = useRegister();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`transition-all duration-200 ease-in-out flex flex-col p-5 h-full ${
        isCollapsed ? 'w-18 items-center ' : 'w-48 justify-start'
      }`}
    >
      <IconButton onClick={toggleSidebar}>
        <MenuIcon className="text-white" />
      </IconButton>
      <Link
        href="/"
        className="flex items-center hover:bg-gray-900 p-2 rounded-lg"
      >
        <HomeOutlinedIcon />
        <span className={`ml-3 ${isCollapsed ? 'hidden' : 'inline'}`}>
          Home
        </span>
      </Link>
      <Link
        href="/dashboard"
        className="flex items-center hover:bg-gray-900 p-2 rounded-lg"
      >
        <SpaceDashboardIcon />
        <span className={`ml-3 ${isCollapsed ? 'hidden' : 'inline'}`}>
          Dashboard
        </span>
      </Link>
      <RegistrationDialog />
      <div className="mt-auto">
        <Link
          href="/dashboard"
          className="flex items-center hover:bg-gray-900 p-2 rounded-lg"
        >
          <Avatar src={session?.user?.image} className="h-8 w-8" />
          <span className={`ml-3 ${isCollapsed ? 'hidden' : 'inline'}`}>
            {`${session?.user?.name}`}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Main_Sidebar;
