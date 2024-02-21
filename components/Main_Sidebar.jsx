import React, { useState } from 'react';
import { IconButton } from '@material-tailwind/react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

function Main_Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`transition-all duration-200 ease-in-out flex flex-col p-5 gap-3 ${
        isCollapsed ? 'w-16 items-center ' : 'w-48 justify-start'
      }`}
    >
      <IconButton onClick={toggleSidebar}>
        <MenuIcon className="text-white" />
      </IconButton>

      <Link href="/" className="flex items-center">
        <HomeOutlinedIcon />
        <span className={`ml-3 ${isCollapsed ? 'hidden' : 'inline'}`}>
          Home
        </span>
      </Link>
      <Link href="/dashboard" className="flex items-center">
        <SpaceDashboardIcon />
        <span className={`ml-3 ${isCollapsed ? 'hidden' : 'inline'}`}>
          Dashboard
        </span>
      </Link>
    </div>
  );
}

export default Main_Sidebar;
