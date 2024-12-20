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

import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid';

import HomeIcon from '@mui/icons-material/Home';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { useSession } from 'next-auth/react';
import { useRegister } from '@/context/RegisterContext';
import { motion } from 'framer-motion';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useUser } from '@/context/UserContext';
import Logo from './Logo';
// import ThemeSwitcher from './ThemeSwitcher';

function Main_Sidebar() {
  const { data: session, status } = useSession();
  const { isCollapsed, setIsCollapsed } = useRegister();

  const {
    registrationOpen,
    setRegistrationOpen,
    user,
    handleOpenSettingsDialog,
  } = useUser();
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
        href="/"
        className="flex items-center p-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-900"
      >
        <Tooltip placement="right-end" content="home">
          <HomeIcon className="text-black dark:text-white" />
        </Tooltip>

        <motion.span
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className={`ml-3 text-xs font-bold ${
            isCollapsed ? 'hidden' : 'inline'
          } text-black dark:text-white`}
        >
          Home
        </motion.span>
      </Link>
      <Link
        href="/dashboard"
        className="flex items-center p-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-900"
      >
        <Tooltip placement="right-end" content="dashboard">
          <SpaceDashboardIcon className="text-black dark:text-white" />
        </Tooltip>
        <motion.span
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className={`ml-3 text-xs font-bold ${
            isCollapsed ? 'hidden' : 'inline'
          } text-black dark:text-white`}
        >
          Dashboard
        </motion.span>
      </Link>
      <Link
        href="/rules"
        className="flex items-center p-2 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-900"
      >
        <Tooltip placement="right-end" content="rules">
          <ClipboardDocumentListIcon className="text-black dark:text-white h-[24px] w-[24px]" />
        </Tooltip>
        <motion.span
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className={`ml-3 text-xs font-bold ${
            isCollapsed ? 'hidden' : 'inline'
          } text-black dark:text-white`}
        >
          Rules
        </motion.span>
      </Link>
      <Button
        className="flex items-center p-2 bg-transparent rounded-lg shadow-none hover:bg-gray-500 dark:hover:bg-gray-900"
        onClick={handleOpen}
      >
        <Tooltip placement="right-end" content="register">
          <CreditCardIcon className="text-black dark:text-white" />
        </Tooltip>
        <motion.span
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className={`ml-3 capitalize text-xs ${
            isCollapsed ? 'hidden' : 'inline'
          } text-black dark:text-white`}
        >
          Register
        </motion.span>
      </Button>

      {/* <ThemeSwitcher /> */}

      <div className="mt-auto">
        <Menu placement="right">
          <MenuHandler>
            <Button className="p-0 m-0 rounded-full ">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full">
                {session ? (
                  <p className="text-xs uppercase">
                    {user?.firstname && user?.lastname
                      ? `${user.firstname.charAt(0)}${user.lastname.charAt(0)}`
                      : ''}
                  </p>
                ) : (
                  <Logo height={40} width={40} />
                )}
              </div>
            </Button>
          </MenuHandler>
          <MenuList className="text-white border dark:bg-gray-900 dark:border-gray-800">
            {session ? (
              <>
                <MenuItem>
                  <button onClick={handleOpenSettingsDialog}>Settings</button>
                </MenuItem>
                <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>
                  Signout
                </MenuItem>
              </>
            ) : (
              <MenuItem>
                <Link href={'/login'}>Login</Link>
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </div>
    </motion.div>
    // </div>
  );
}

export default Main_Sidebar;
