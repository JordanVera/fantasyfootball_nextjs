import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Link from 'next/link';

export default function Main_Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sidebar collapsed={collapsed} className="bg-black border-none">
      <Menu className="bg-black border-none">
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          style={{ textAlign: 'center' }}
        >
          {' '}
          <h2>Admin</h2>
        </MenuItem>

        <Link href="/">
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
        </Link>
        <Link href="/dashboard">
          <MenuItem icon={<PeopleOutlinedIcon />}>Dashboard</MenuItem>
        </Link>
        <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
        <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
        <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
        <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
      </Menu>
    </Sidebar>
  );
}
