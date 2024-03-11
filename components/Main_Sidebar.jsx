import React, { useState } from 'react';
import {
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

import HomeIcon from '@mui/icons-material/Home';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { useSession } from 'next-auth/react';
import RegistrationDialog from './dialogs/RegistrationDialog';
import { useRegister } from '@/context/RegisterContext';
import ThemeSwitcher from './ThemeSwitcher';

function Main_Sidebar() {
  const { data: session, status } = useSession();

  const { isCollapsed, setIsCollapsed } = useRegister();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-white dark:bg-black z-50 sticky top-0 border-r border-gray-900 transition-width duration-200 ease-in-out flex flex-col p-2 h-full ${
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
        <HomeIcon className="text-black dark:text-white" />
        <span className={`ml-3 ${isCollapsed ? 'hidden' : 'inline'}`}>
          Home
        </span>
      </Link>
      <Link
        href="/login"
        className="flex items-center hover:bg-gray-900 p-2 rounded-lg"
      >
        {session ? (
          <LogoutIcon className="text-black dark:text-white" />
        ) : (
          <LoginIcon className="text-black dark:text-white" />
        )}
        <span className={`ml-3 ${isCollapsed ? 'hidden' : 'inline'}`}>
          Login/Signup
        </span>
      </Link>
      <Link
        href="/dashboard"
        className="flex items-center hover:bg-gray-900 p-2 rounded-lg"
      >
        <SpaceDashboardIcon className="text-black dark:text-white" />
        <span className={`ml-3 ${isCollapsed ? 'hidden' : 'inline'}`}>
          Dashboard
        </span>
      </Link>
      <RegistrationDialog />

      <ThemeSwitcher />

      <div className="mt-auto">
        <Menu>
          <MenuHandler>
            <Button className=" p-0 m-0">
              <Avatar src={session?.user?.image} className="h-8 w-8" />
              <span className={`ml-3 ${isCollapsed ? 'hidden' : 'inline'}`}>
                {`${session?.user?.name}`}
              </span>
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Settings</MenuItem>
            <MenuItem onClick={() => signOut()}>Signout</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default Main_Sidebar;
