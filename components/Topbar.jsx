import { useState, useEffect } from 'react';
import { Topbar_Large } from './topbar/Topbar_Large';
import { Topbar_Mobile } from './topbar/Topbar_Mobile';

export const Topbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isSmallScreen) {
    return <Topbar_Mobile />;
  }

  return <Topbar_Large />;
};
