import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { useRegister } from '@/context/RegisterContext';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

export const Topbar_Mobile = () => {
  const { isCollapsed, setIsCollapsed } = useRegister();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      {' '}
      <Menu>
        <MenuHandler>
          <IconButton className="bg-transparent shadow-none hover:bg-gray-500 dark:hover:bg-gray-900 outline-none">
            <MenuIcon className="text-black dark:text-white" />
          </IconButton>
        </MenuHandler>
        <MenuList className="bg-gray-900 border border-gray-800">
          <Link
            href={'/'}
            className="flex flex-row items-center gap-2 text-primary hover:bg-gray-800 p-2 rounded-lg outline-none"
          >
            <HomeIcon className="text-black dark:text-white" />
            <p>Home</p>
          </Link>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
      {/* 
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
        href="/dashboard"
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
        </motion.span> */}
    </div>
  );
};
