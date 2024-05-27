import React, { useState } from 'react';
import {
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Tooltip,
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
import { motion } from 'framer-motion';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useUser } from '@/context/UserContext';
// import ThemeSwitcher from './ThemeSwitcher';

function Main_Sidebar() {
  const { data: session, status } = useSession();
  const { isCollapsed, setIsCollapsed } = useRegister();

  
  const { registrationOpen, setRegistrationOpen, user } = useUser();
  const handleOpen = () => setRegistrationOpen(!registrationOpen);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.div
      animate={{ width: isCollapsed ? '3.5rem' : '12rem' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className={`bg-white dark:bg-black z-50 sticky top-0 border-r border-gray-300 dark:border-gray-900 transition-width duration-200 ease-in-out flex flex-col p-2 h-full justify-start`}
    >
      <IconButton
        onClick={toggleSidebar}
        className="bg-transparent shadow-none hover:bg-gray-500 dark:hover:bg-gray-900 "
      >
        <MenuIcon className="text-black dark:text-white" />
      </IconButton>
      <Link
        href="/login"
        className="flex items-center hover:bg-gray-500 dark:hover:bg-gray-900  p-2 rounded-lg"
      >
        <Tooltip placement="right-end" content={session ? 'logout' : 'login'}>
          {session ? (
            <LogoutIcon className="text-black dark:text-white" />
          ) : (
            <LoginIcon className="text-black dark:text-white" />
          )}
        </Tooltip>
        <motion.span
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className={`ml-3 ${
            isCollapsed ? 'hidden' : 'inline'
          } text-black dark:text-white`}
        >
          Login
        </motion.span>
      </Link>
      <Link
        href="/"
        className="flex items-center hover:bg-gray-500 dark:hover:bg-gray-900  p-2 rounded-lg"
      >
        <Tooltip placement="right-end" content="home">
          <HomeIcon className="text-black dark:text-white" />
        </Tooltip>

        <motion.span
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className={`ml-3 ${
            isCollapsed ? 'hidden' : 'inline'
          } text-black dark:text-white`}
        >
          Home
        </motion.span>
      </Link>
      <Link
        href="/dashboard"
        className="flex items-center hover:bg-gray-500 dark:hover:bg-gray-900  p-2 rounded-lg"
      >
        <Tooltip placement="right-end" content="dashboard">
          <SpaceDashboardIcon className="text-black dark:text-white" />
        </Tooltip>
        <motion.span
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className={`ml-3 ${
            isCollapsed ? 'hidden' : 'inline'
          } text-black dark:text-white`}
        >
          Dashboard
        </motion.span>
      </Link>
      <Button
        className="flex items-center hover:bg-gray-500 dark:hover:bg-gray-900  p-2 rounded-lg bg-transparent shadow-none"
        onClick={handleOpen}
      >
        <Tooltip placement="right-end" content="register">
          <CreditCardIcon className="text-black dark:text-white" />
        </Tooltip>
        <motion.span
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className={`ml-3 capitalize ${
            isCollapsed ? 'hidden' : 'inline'
          } text-black dark:text-white`}
        >
          Register
        </motion.span>
      </Button>

      {/* <ThemeSwitcher /> */}

      <div className="mt-auto">
        <Menu>
          <MenuHandler>
            <Button className=" p-0 m-0 rounded-full">
              <div className="rounded-full bg-gray-700 flex items-center justify-center h-8 w-8">
                <p className="uppercase text-xs">
                  {user?.firstname?.charAt(0) + user?.lastname?.charAt(0)}
                </p>
              </div>
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Settings</MenuItem>
            <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>
              Signout
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </motion.div>
    // </div>
  );
}

export default Main_Sidebar;
