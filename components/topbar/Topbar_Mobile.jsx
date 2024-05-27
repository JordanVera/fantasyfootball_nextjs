import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { useRegister } from '@/context/RegisterContext';
import { useUser } from '@/context/UserContext';
import { signOut } from 'next-auth/react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

export const Topbar_Mobile = () => {
  const { data: session } = useSession();
  const { isCollapsed, setIsCollapsed } = useRegister();

  const { registrationOpen, setRegistrationOpen, user, setIsSignup } =
    useUser();
  const handleOpen = () => setRegistrationOpen(!registrationOpen);

  return (
    <div className="bg-white dark:bg-black  border-b border-gray-300 dark:border-gray-900 flex flex-row justify-between items-center p-2.5 ">
      {' '}
      <Menu>
        <MenuHandler>
          <IconButton className="bg-transparent shadow-none hover:bg-gray-500 dark:hover:bg-gray-900 outline-none">
            <MenuIcon className="text-black dark:text-white" />
          </IconButton>
        </MenuHandler>
        <MenuList className="bg-gray-900 border border-gray-800 ml-2">
          <Link
            href={'/'}
            className="flex flex-row items-center gap-2 text-primary hover:bg-gray-800 p-2 rounded-lg outline-none"
          >
            <HomeIcon className="text-black dark:text-white" />
            <p>Home</p>
          </Link>
          <Link
            href={'/dashboard'}
            className="flex flex-row items-center gap-2 text-primary hover:bg-gray-800 p-2 rounded-lg outline-none"
          >
            <SpaceDashboardIcon className="text-black dark:text-white" />
            <p>Dashboard</p>
          </Link>

          <Button
            className="flex flex-row items-center gap-2 text-primary hover:bg-gray-800 p-2 rounded-lg outline-none capitalize w-full"
            onClick={handleOpen}
          >
            <CreditCardIcon className="text-black dark:text-white" />
            Register
          </Button>
        </MenuList>
      </Menu>
      {/* <Link href={'/'}>
        <Logo height={50} width={50} />
      </Link> */}
      <div>
        {session ? (
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="relative group w-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative px-7 py-3 bg-white dark:bg-black text-primary rounded-xl leading-none flex items-center divide-x divide-gray-600 justify-center text-xs font-bold">
              Logout
            </button>
          </button>
        ) : (
          <Link href={'/login'} onClick={() => setIsSignup(false)}>
            <div className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-3 bg-white dark:bg-black text-primary rounded-xl leading-none flex items-center divide-x divide-gray-600 justify-center text-xs font-bold">
                Log in
              </button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
