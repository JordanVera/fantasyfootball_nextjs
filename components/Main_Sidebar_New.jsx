import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@material-tailwind/react';
import Link from 'next/link';
function Main_Sidebar_New() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`transition-all duration-200 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-48'
      }`}
    >
      <IconButton onClick={toggleSidebar}>
        <MenuIcon className="text-white" />
      </IconButton>

      <Link href="/" className="flex items-center">
        <HomeOutlinedIcon />
        <span className={`ml-3 ${isCollapsed ? 'hidden' : 'inline'}`}>
          Text
        </span>
      </Link>
      {/* Repeat the above div for each item */}
    </div>
  );
}

export default Main_Sidebar_New;

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
