import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Avatar } from '@material-tailwind/react';
import { useSession } from 'next-auth/react';

import Link from 'next/link';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function Main_Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  const { data: session } = useSession();

  return (
    <Sidebar
      collapsed={collapsed}
      theme="dark"
      className="bg-black border-none"
      // collapsedWidth="px"
    >
      <Menu className="  bg-black">
        <div className="flex flex-col  h-full ustify-between">
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            op3n
          </MenuItem>

          <MenuItem className="hover:bg-red-500" icon={<HomeOutlinedIcon />}>
            <Link href="/" className="hover:bg-red-500">
              Home
            </Link>
          </MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>
            <Link href="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>

          {/* USER ACCT */}

          <div className="mt-auto">
            <Avatar src={session?.user?.image} className="w-9 h-9" />
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
}
